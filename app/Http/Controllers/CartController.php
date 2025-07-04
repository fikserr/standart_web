<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class CartController extends Controller
{
    public function addToCart(Request $request)
    {
        $request->validate([
            'product_id' => 'required|exists:products,id',
            'quantity' => 'required|integer|min:1',
            'size' => 'nullable|string',
        ]);

        $cart = Cart::create([
            'user_id' => auth()->id(),
            'product_id' => $request->product_id,
            'quantity' => $request->quantity,
            'size' => $request->size,
        ]);

        // ✅ Tekshirish uchun log yozamiz
        \Log::info('Cart item added:', $cart->toArray());

        return back()->with('success', 'Mahsulot savatga qo‘shildi!');
    }

    public function showCart()
    {
        $cartItems = Cart::with('product')->where('user_id', Auth::id())->get();

        return Inertia::render('basket', [
            'cartItems' => $cartItems,
        ]);
    }

    public function removeFromCart($id)
    {
        Cart::where('user_id', Auth::id())
            ->where('id', $id)
            ->delete();

        return back()->with('success', 'Mahsulot savatdan olib tashlandi');
    }
}
