<?php
namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class OrderController extends Controller
{
    public function userOrders()
    {
        $user = Auth::user();

        $orders = Order::with(['items.product', 'address'])
            ->where('user_id', $user->id)
            ->latest()
            ->get();

        return Inertia::render('HistoryOrders', [
            'orders' => $orders,
        ]);
    }

    // OrderController.php
    public function adminOrders()
    {
        $orders = Order::with(['user', 'items.product', 'address'])
            ->latest()
            ->get();

        return Inertia::render('admin/orderLists', [
            'orders' => $orders,
        ]);
    }
    public function placeOrder(Request $request)
    {
        $user = Auth::user();

        $request->validate([
            'address_id' => 'required|exists:addresses,id',
        ]);

        $cartItems = Cart::where('user_id', $user->id)->get();
        if ($cartItems->isEmpty()) {
            return back()->with('error', 'Savat bo‘sh!');
        }

        $totalPrice = 0;
        foreach ($cartItems as $item) {
            $product = Product::find($item->product_id);
            if ($product) {
                $totalPrice += $product->price * $item->quantity;
            }
        }

        $order = Order::create([
            'user_id'     => $user->id,
            'address_id'  => $request->address_id,
            'status'      => 'pending',
            'total_price' => $totalPrice,
        ]);

        foreach ($cartItems as $item) {
            $product = Product::find($item->product_id);
            if ($product) {
                OrderItem::create([
                    'order_id'   => $order->id,
                    'product_id' => $item->product_id,
                    'quantity'   => $item->quantity,
                    'size'       => $item->size,
                    'price'      => $product->price,
                ]);
            }
        }

        Cart::where('user_id', $user->id)->delete();

        return redirect()->route('order.success')->with('success', 'Buyurtma yuborildi!');
    }
    public function updateStatus(Request $request, Order $order)
    {
        $request->validate([
            'status' => 'required|in:pending,confirmed,success,cancelled',
        ]);

        $order->update(['status' => $request->status]);

        return response()->json(['message' => 'Holat yangilandi'], 200);
    }

    // Buyurtma muvaffaqiyatli tugadi sahifasi
    public function success()
    {
        return inertia('order-success'); // yoki redirect to some page
    }
}
