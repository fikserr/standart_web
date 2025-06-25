<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Storage;

class ProductController extends Controller
{
    public function showProduct()
    {
        $products = Product::All(); // kerak bo‘lsa filter, search keyin qo‘shamiz
        return Inertia::render('admin/productStock', [
            'products' => $products,
        ]);
    }
    public function create()
    {
        return Inertia::render('admin/addProducts');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'product_name' => 'required|string',
            'category' => 'required|string',
            'sizes' => 'nullable|array',
            'price' => 'required|numeric',
            'colors' => 'nullable|string',
            'brend' => 'nullable|string',
            'photo1' => 'nullable|image',
            'photo2' => 'nullable|image',
            'photo3' => 'nullable|image',
        ]);

        foreach ([1, 2, 3] as $i) {
            $field = 'photo' . $i;
            if ($request->hasFile($field)) {
                $data[$field] = $request->file($field)->store('products', 'public');
            }
        }

        Product::create($data);

        return redirect()->back()->with('success', 'Mahsulot muvaffaqiyatli qo‘shildi!');
    }

    public function index(Request $request)
    {
        $search = $request->input('search');

        $products = Product::when($search, function ($query, $search) {
            $query->where('product_name', 'like', "%{$search}%")
                ->orWhere('category', 'like', "%{$search}%");
        })->latest()->paginate(5);

        return Inertia::render('admin/productStock', [
            'products' => $products,
            'filters' => [
                'search' => $search,
            ],
        ]);
    }

    public function edit(Product $product)
    {
        return Inertia::render('admin/editProducts', [
            'product' => $product,
        ]);
    }

    public function update(Request $request, Product $product)
    {
        $data = $request->validate([
            'product_name' => 'required|string',
            'category' => 'required|string',
            'sizes' => 'nullable|array',
            'price' => 'required|numeric',
            'colors' => 'nullable|string',
            'brend' => 'nullable|string',
            'photo1' => 'nullable|image',
            'photo2' => 'nullable|image',
            'photo3' => 'nullable|image',
        ]);

        foreach (['photo1', 'photo2', 'photo3'] as $key) {
            if ($request->hasFile($key)) {
                if ($product->$key) {
                    \Storage::disk('public')->delete($product->$key);
                }
                $data[$key] = $request->file($key)->store('products', 'public');
            }
        }

        \Log::info('Product update data:', ['data' => $data, 'product_id' => $product->id]);

        $product->update($data);

        return back()->with('success', 'Mahsulot yangilandi');
    }

    public function deleteProduct(Product $product)
    {
        foreach (['photo1', 'photo2', 'photo3'] as $photoKey) {
            if (!empty($product->$photoKey) && \Storage::disk('public')->exists($product->$photoKey)) {
                \Storage::disk('public')->delete($product->$photoKey);
            }
        }

        $product->delete();

        return response()->json(['message' => 'Mahsulot va rasmlar o‘chirildi']);
    }

    public function deletePhoto($id, $key)
    {
        $product = Product::findOrFail($id);

        // Masalan, $key = 'photo1', 'photo2', yoki 'photo3'
        $photoPath = $product->$key;

        if ($photoPath && Storage::exists($photoPath)) {
            Storage::delete($photoPath);
        }

        // Bazadagi photo fieldni null qilamiz
        $product->$key = null;
        $product->save();

        return response()->json(['message' => 'Photo deleted']);
    }
}
