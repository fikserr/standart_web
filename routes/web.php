<?php

use App\Http\Controllers\AddressController;
use App\Http\Controllers\FavoriteController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VerifyCodeController;
use Illuminate\Support\Facades\Route;
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
    Route::get('/', [ProductController::class, 'userProduct'])->name('home');
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
    Route::get('/favorites', fn() => inertia('favorites'));
    Route::get('/basket', fn() => inertia('basket'));
});

// Admin sahifalari (faqat adminlar uchun)
Route::middleware(['auth', \App\Http\Middleware\IsAdmin::class])->group(function () {
    Route::get('/admin-dashboard', fn() => inertia('admin/dashboard'))->name('admin.dashboard');
    Route::get('/admin-favorites', fn() => inertia('admin/favorites'));
    Route::get('/admin-order-lists', fn() => inertia('admin/orderLists'));
    Route::get('/admin-products', fn() => inertia('admin/products'));
    Route::get('/admin-productStock', action: [ProductController::class, 'index'])->name('admin.products.index');
    Route::get('/admin-users', [UserController::class, 'adminUsers'])->name('admin.users');
    Route::get('/admin-banner', fn() => inertia('admin/admin-banner'));
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
Route::post('/request-register', [UserController::class, 'requestRegister']);
Route::post('/verify-register', [UserController::class, 'verifyRegister']);
Route::middleware('auth')->post('/verify-code', [VerifyCodeController::class, 'verify'])->name('verify.code');
Route::get('/test-email', function () {
    Mail::raw('Salom! Laraveldan test email.', function ($message) {
        $message->to('fixprogram7897894@gmail.com')->subject('Laravel Test Email');
    });

    return '✅ Email yuborildi!';
});
Route::middleware(['auth'])->group(function () {
    Route::get('/address-add', fn() => inertia('AddAddress'))->name('address.add');
    Route::get('/address-show', [AddressController::class, 'show'])->name('address.show');
    Route::post('/address', [AddressController::class, 'store'])->name('address.store');
    Route::get('/favorites', [FavoriteController::class, 'index'])->name('favorites.index');
    Route::post('/favorites', [FavoriteController::class, 'store'])->name('favorites.store');
    Route::delete('/favorites/{product}', [FavoriteController::class, 'destroy'])->name('favorites.destroy');
});
