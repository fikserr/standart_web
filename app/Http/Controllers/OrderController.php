<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class OrderController extends Controller
{
    public function placeOrder(Request $request)
    {
        $user = Auth::user();

        // 1. Savatdagi barcha mahsulotlarni olish
        $cartItems = Cart::where('user_id', $user->id)->get();

        if ($cartItems->isEmpty()) {
            return back()->with('error', 'Savat bo‘sh!');
        }

        // 2. Umumiy narxni hisoblash
        $totalPrice = 0;

        foreach ($cartItems as $item) {
            $product = Product::find($item->product_id);
            if ($product) {
                $totalPrice += $product->price * $item->quantity;
            }
        }

        // 3. Order yaratish
        $order = Order::create([
            'user_id' => $user->id,
            'status' => 'pending',
            'total_price' => $totalPrice,
        ]);

        // 4. Order itemlar yaratish
        foreach ($cartItems as $item) {
            $product = Product::find($item->product_id);
            if ($product) {
                OrderItem::create([
                    'order_id' => $order->id,
                    'product_id' => $item->product_id,
                    'quantity' => $item->quantity,
                    'size' => $item->size,
                    'price' => $product->price,
                ]);
            }
        }

        // 5. Savatni tozalash
        Cart::where('user_id', $user->id)->delete();

        // 6. Yuborish
        return redirect()->route('order.success')->with('success', 'Buyurtma muvaffaqiyatli yuborildi!');
    }

    // Buyurtma muvaffaqiyatli tugadi sahifasi
    public function success()
    {
        return inertia('OrderSuccess'); // yoki redirect to some page
    }
}
