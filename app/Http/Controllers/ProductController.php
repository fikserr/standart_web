<?php
namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Storage;

class ProductController extends Controller
{
    public function showProduct()
    {
        $products = Product::with(['category', 'variants'])->latest()->paginate(5);
        return Inertia::render('admin/productStock', [
            'products' => $products,
        ]);
    }

    public function ClothesProducts()
    {
        $products = Product::with('category', 'variants')->latest()->paginate(5);
        return Inertia::render('Clothes', [
            'products' => $products,
        ]);
    }
    public function ShoesProducts()
    {
        $products = Product::with('category', 'variants')->latest()->paginate(5);
        return Inertia::render('Shoes', [
            'products' => $products,
        ]);
    }
    public function AccesProducts()
    {
        $products = Product::with('category', 'variants')->latest()->paginate(5);
        return Inertia::render('Accessory', [
            'products' => $products,
        ]);
    }
    public function userProduct()
    {

        $banners   = \App\Models\Banner::latest()->get();
        $products  = Product::with('category', 'variants')->get(); // kerak bo‘lsa filter, search keyin qo‘shamiz
        $favorites = Auth::user()->favorites;
        return Inertia::render('Home', [
            'products'  => $products,
            'banners'   => $banners,
            'favorites' => $favorites,

        ]);
    }
    public function show($id)
    {
        $product = Product::with(['category', 'variants'])->findOrFail($id);
        return Inertia::render('detail', [
            'detail' => $product,
        ]);
    }
    public function create()
    {
        $categories = Category::select('id', 'name')->get();

        return Inertia::render('admin/addProducts', [
            'categories' => $categories,
        ]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'product_name'     => 'required|string',
            'category_id'      => 'required|exists:categories,id',
            'variants'         => 'required|array|min:1',
            'variants.*.size'  => 'required|string',
            'variants.*.color' => 'required|string',
            'variants.*.price' => 'required|numeric',
            'brend'            => 'nullable|string',
            'photo1'           => 'nullable|image',
            'photo2'           => 'nullable|image',
            'photo3'           => 'nullable|image',
        ]);

        foreach ([1, 2, 3] as $i) {
            $field = 'photo' . $i;
            if ($request->hasFile($field)) {
                $data[$field] = $request->file($field)->store('products', 'public');
            }
        }

        // Productni yaratamiz
        $product = Product::create([
            'product_name' => $data['product_name'],
            'category_id'  => $data['category_id'],
            'brend'        => $data['brend'] ?? null,
            'photo1'       => $data['photo1'] ?? null,
            'photo2'       => $data['photo2'] ?? null,
            'photo3'       => $data['photo3'] ?? null,
        ]);

        // Variantlarini saqlaymiz
        foreach ($data['variants'] as $variant) {
            $product->variants()->create($variant);
        }

        return redirect()->back()->with('success', 'Mahsulot muvaffaqiyatli qo‘shildi!');
    }

    public function update(Request $request, Product $product)
    {
        $data = $request->validate([
            'product_name'     => 'required|string',
            'category_id'      => 'required|exists:categories,id',
            'brend'            => 'nullable|string',
            'colors'           => 'nullable|string',
            'variants'         => 'required|array',
            'variants.*.size'  => 'required|string',
            'variants.*.color' => 'required|string',
            'variants.*.price' => 'required|numeric',
            'photo1'           => 'nullable|image',
            'photo2'           => 'nullable|image',
            'photo3'           => 'nullable|image',
        ]);

        // Rasm fayllari uchun
        foreach (['photo1', 'photo2', 'photo3'] as $key) {
            if ($request->hasFile($key)) {
                if ($product->$key) {
                    Storage::disk('public')->delete($product->$key);
                }
                $data[$key] = $request->file($key)->store('products', 'public');
            }
        }

        // Mahsulotni yangilash
        $product->update([
            'product_name' => $data['product_name'],
            'category_id'  => $data['category_id'],
            'brend'        => $data['brend'],
            'photo1'       => $data['photo1'] ?? $product->photo1,
            'photo2'       => $data['photo2'] ?? $product->photo2,
            'photo3'       => $data['photo3'] ?? $product->photo3,
        ]);

        // Eski variantlarni o‘chirish va yangilarini saqlash
        $product->variants()->delete();

        foreach ($data['variants'] as $variant) {
            $product->variants()->create([
                'size'  => $variant['size'],
                'color' => $variant['color'],
                'price' => $variant['price'],
            ]);
        }

        return back()->with('success', 'Mahsulot muvaffaqiyatli yangilandi!');
    }

    public function index(Request $request)
    {
        $search = $request->input('search');

        $products = Product::with('category', 'variants') // 👈 category obyekti yuklanadi
            ->when($search, function ($query, $search) {
                $query->where('product_name', 'like', "%{$search}%")
                    ->orWhereHas('category', function ($q) use ($search) {
                        $q->where('name', 'like', "%{$search}%"); // 👈 category.name bo‘yicha qidiruv
                    });
            })
            ->latest()
            ->paginate(5);

        return Inertia::render('admin/productStock', [
            'products' => $products,
            'filters'  => [
                'search' => $search,
            ],
        ]);
    }

    public function edit($id)
    {
        $product = Product::with(['category', 'variants'])->findOrFail($id);
        $categories = Category::all();
        return Inertia::render('admin/editProducts', [
            'product' => $product,
            'categories' => $categories,
        ]);
    }

    public function deleteProduct(Product $product)
    {
        foreach (['photo1', 'photo2', 'photo3'] as $photoKey) {
            if (! empty($product->$photoKey) && \Storage::disk('public')->exists($product->$photoKey)) {
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
