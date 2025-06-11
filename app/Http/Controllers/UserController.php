<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class UserController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            return to_route($user->is_admin ? 'admin.products.show' : 'home');
        }

        return back()->withErrors(['email' => 'Email yoki parol noto‘g‘ri.'])->withInput();
    }
    // Barcha foydalanuvchilar ro'yxati
    public function index()
    {
        $users = User::all();
        return inertia('Login', [
            'users' => $users,
        ]);
    }
    public function adminUsers()
    {
        $users = User::all();
        return inertia('admin/users', [
            'users' => $users,
        ]);
    }
    // Yangi foydalanuvchi yaratish
    public function register(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users',
            'password' => 'required|string|min:8|confirmed',
            'is_admin' => 'boolean',
        ]);

        $data['password'] = bcrypt($data['password']);

        $user = User::create($data);

        // Agar avtomatik login qilmoqchi bo'lsang, auth()->login($user);

        // Inertia uchun JSON javob
        return Inertia::location('/login');
    }

    // Foydalanuvchini ko‘rsatish
    public function show(User $user)
    {
        return response()->json($user);
    }
    public function showRegisterForm()
    {
        return Inertia::render('Register');
    }

    // Foydalanuvchini yangilash
    public function update(Request $request, User $user)
    {
        $data = $request->validate([
            'is_admin' => 'required|boolean',
        ]);

        $user->update($data);

        return redirect()->back();
    }

    // Foydalanuvchini o‘chirish
    public function destroy(User $user)
    {
        $user->delete();
        return response()->json(['message' => 'User deleted']);
    }
}
