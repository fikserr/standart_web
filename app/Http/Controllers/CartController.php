<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\ProductVariant;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class CartController extends Controller
{
    public function addToCart(Request $request)
    {
        $data = $request->validate([
            'product_id'  => 'required|exists:products,id',
            'variant_id'  => 'nullable|exists:product_variants,id',
            'quantity'    => 'required|integer|min:1'
        ]);

        $variant = null;
        if (!empty($data['variant_id'])) {
            $variant = ProductVariant::findOrFail($data['variant_id']);
        }

        $cart = Cart::create([
            'user_id'    => auth()->id(),
            'product_id' => $data['product_id'],
            'variant_id' => $data['variant_id'] ?? null,
            'quantity'   => $data['quantity'],
            'size'       => $variant?->size,
            'color'      => $variant?->color,
            'price'      => $variant?->price
        ]);

        \Log::info('Cart item added:', $cart->toArray());

        return back()->with('success', 'Mahsulot savatga qo‘shildi!');
    }

    public function showCart()
    {
        $cartItems = Cart::with(['product', 'variant'])
            ->where('user_id', Auth::id())
            ->get();

        $address = Auth::user()?->address()->get();

        return Inertia::render('basket', [
            'cartItems' => $cartItems,
            'address' => $address,
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
