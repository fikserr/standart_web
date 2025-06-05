<?php

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
Route::get('/admin-dashboard', fn() => inertia('admin-dashboard'));
Route::get('/admin-favorites', fn() => inertia('admin-favorites'));
Route::get('/admin-order-lists', fn() => inertia('admin-orderLists'));
Route::get('/admin-products', fn() => inertia('admin-products'));
// Route::get('/admin-users', fn() => inertia('admin-users'));
Route::get('/admin-add-product', fn() => inertia('admin-addProducts'));
Route::get('/admin-productStock', fn() => inertia('admin-productStock'));
Route::get('/admin-users', [UserController::class, 'adminUsers'])->name('admin-users');
// Register sahifani ko‘rsatish (frontend form)
Route::get('/register', [UserController::class, 'showRegisterForm'])->name('register');
Route::get('/login', [UserController::class, 'index'])->name('login');

// 1-qadam: Emailga kod yuborish
Route::post('/request-register', [UserController::class, 'register']);

// 2-qadam: Kodni tekshirib, ro‘yxatdan o‘tkazish
Route::post('/verify-register', [UserController::class, 'verifyAndRegister']);


