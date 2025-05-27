<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    // Barcha foydalanuvchilar ro'yxati
    public function index()
    {
        $users = User::all();
        return response()->json($users);
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
            'name' => 'sometimes|string|max:255',
            'email' => 'sometimes|email|unique:users,email,' . $user->id,
            'password' => 'sometimes|string|min:6',
            'is_admin' => 'sometimes|boolean',
        ]);

        if (isset($data['password'])) {
            $data['password'] = bcrypt($data['password']);
        }

        $user->update($data);

        return response()->json($user);
    }

    // Foydalanuvchini o‘chirish
    public function destroy(User $user)
    {
        $user->delete();
        return response()->json(['message' => 'User deleted']);
    }
}
