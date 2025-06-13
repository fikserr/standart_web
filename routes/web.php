<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;
use Inertia\Inertia;

// Foydalanuvchini tekshirish va asosiy sahifaga yo‘naltirish
Route::get('/', function () {
    if (auth()->check() && auth()->user()->is_admin) {
        return redirect('/admin-dashboard');
    }
    return inertia('Home');
});

// User sahifalari
Route::middleware('auth')->group(function () {
    Route::get('/', fn() => Inertia::render('Home'))->name('home');
    Route::get('/shoes', fn() => inertia('Shoes'));
    Route::get('/profile', fn() => inertia('Profile'));
    Route::get('/history-order', fn() => inertia('HistoryOrders'));
    Route::get('/profile-edit', fn() => inertia('EditProfile'));
    Route::get('/edit-password', fn() => inertia('EditPass'));
    Route::get('/edit-address', fn() => inertia('EditAddress'));
    Route::get('/clothes', fn() => inertia('Clothes'));
    Route::get('/address', fn() => inertia('Address'));
    Route::get('/accessory', fn() => inertia('Accessory'));
    Route::get('/detail', fn() => inertia('detail'));
});

// Admin sahifalari (faqat adminlar uchun)
Route::middleware(['auth', \App\Http\Middleware\IsAdmin::class])->group(function () {
    Route::get('/admin-dashboard', fn() => inertia('admin/dashboard'));
    Route::get('/admin-favorites', fn() => inertia('admin/favorites'));
    Route::get('/admin-order-lists', fn() => inertia('admin/orderLists'));
    Route::get('/admin-products', fn() => inertia('admin/products'));
    Route::get('/admin-productStock', [ProductController::class, 'showProduct'])->name('admin.products.show');
    Route::get('/admin-users', [UserController::class, 'adminUsers'])->name('users');
    Route::put('/admin/users/{user}', [UserController::class, 'update'])->name('admin.users.update');
    Route::get('/admin-add-product', [ProductController::class, 'create'])->name('admin.products.create');
    Route::post('/admin-add-store', [ProductController::class, 'store'])->name('admin.products.store');
    Route::get('/admin-products/{product}/edit', [ProductController::class, 'edit'])->name('admin.products.edit');
    Route::put('/admin-products/{product}', [ProductController::class, 'update'])->name('admin.products.update');
    Route::delete('/admin-delete-product/{product}', [ProductController::class, 'deleteProduct']);
    Route::delete('/admin-delete-photo/{product}/{key}', [ProductController::class, 'deletePhoto']);
});

// Auth sahifalar

Route::post('/logout', [UserController::class, 'logout'])->name('logout');
Route::post('/login', [UserController::class, 'login'])->name('login.attempt');
Route::get('/login', [UserController::class, 'index'])->name('login');
Route::get('/register', [UserController::class, 'showRegisterForm'])->name('register');
Route::post('/request-register', [UserController::class, 'register']);
Route::post('/verify-register', [UserController::class, 'verifyAndRegister']);
