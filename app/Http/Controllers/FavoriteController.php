<?php

// app/Http/Controllers/FavoriteController.php
namespace App\Http\Controllers;

use App\Models\Product;
use Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FavoriteController extends Controller
{
    public function index()
    {
        $favorites = Auth::user()->favorites;

        return Inertia::render('favorites', [
            'favorites' => $favorites,
        ]);
    }
    public function store(Request $request)
    {
        $user = $request->user();
        $productId = $request->input('product_id');

        $user->favorites()->syncWithoutDetaching([$productId]);

        return response()->json(['message' => 'Sevimlilarga qo‘shildi']);
    }

    public function destroy(Request $request, Product $product)
    {
        $user = $request->user();
        $user->favorites()->detach($product->id);

        return response()->json(['message' => 'Sevimlilardan o‘chirildi']);
    }
}
