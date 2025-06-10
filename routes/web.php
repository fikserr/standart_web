<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;


Route::get('/', fn() => inertia('Home'));

Route::get('/shoes', fn() => inertia('Shoes'));
Route::get('/profile', fn() => inertia('Profile'));
Route::get('/history-order', fn() => inertia('HistoryOrders'));
Route::get('/profile-edit', fn() => inertia('EditProfile'));
Route::get('/edit-password', fn() => inertia('EditPass'));
Route::get('/edit-address', fn() => inertia('EditAddress'));
Route::get('/clothes', fn() => inertia('Clothes'));
Route::get('/address', fn() => inertia('Address'));
Route::get('/accessory', fn() => inertia('Accessory'));

// Admin panel
Route::get('/admin-dashboard', fn() => inertia('admin/dashboard'));
Route::get('/admin-favorites', fn() => inertia('admin/favorites'));
Route::get('/admin-order-lists', fn() => inertia('admin/orderLists'));
Route::get('/admin-products', fn() => inertia('admin/products'));
// Route::get('/admin-users', fn() => inertia('admin-users'));
// Route::get('/admin-add-product', fn() => inertia('admin-addProducts'));
Route::get('/admin-productStock', [ProductController::class, 'showProduct'])->name(name: 'admin.products.show');
Route::get('/admin-users', [UserController::class, 'adminUsers'])->name('users');
// Register sahifani ko‘rsatish (frontend form)
Route::get('/register', [UserController::class, 'showRegisterForm'])->name('register');
Route::get('/login', [UserController::class, 'index'])->name('login');

// 1-qadam: Emailga kod yuborish
Route::post('/request-register', [UserController::class, 'register']);

// 2-qadam: Kodni tekshirib, ro‘yxatdan o‘tkazish
Route::post('/verify-register', [UserController::class, 'verifyAndRegister']);



Route::get('/admin-add-product', [ProductController::class, 'create'])->name('admin.products.create');
Route::post('/admin-add-store', [ProductController::class, 'store'])->name('admin.products.store');
// routes/web.php

Route::get('/admin-products/{product}/edit', [ProductController::class, 'edit'])->name('admin.products.edit');
Route::put('/admin-products/{product}', [ProductController::class, 'update'])->name('admin.products.update');
Route::delete('/admin-delete-product/{product}', [ProductController::class, 'deleteProduct']);
Route::delete('/admin-delete-photo/{product}/{key}', [ProductController::class, 'deletePhoto']);
