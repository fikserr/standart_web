<?php

namespace App\Http\Controllers;

use App\Mail\VerifyCodeMail;
use App\Models\PendingUser;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class UserController extends Controller
{
    // 1. Kod yuborish
    public function requestRegister(Request $request)
    {
        \Log::info('Request keldi: ', $request->all()); //
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email|unique:pending_users,email',
        ]);

        $code = rand(100000, 999999);

        PendingUser::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'verification_code' => $code,
        ]);

        Mail::to($data['email'])->send(new VerifyCodeMail($code));

        return response()->json(['message' => 'Tasdiqlash kodi yuborildi']);
    }

    // 2. Kodni tekshirish va ro'yxatdan o'tkazish
    public function verifyAndRegister(Request $request)
    {
        $data = $request->validate([
            'email' => 'required|email',
            'code' => 'required',
            'password' => 'required|string|min:8|confirmed',
        ]);

        $pending = PendingUser::where('email', $data['email'])
            ->where('verification_code', $data['code'])
            ->first();

        if (!$pending) {
            return response()->json(['message' => 'Kod noto‘g‘ri'], 422);
        }

        $user = User::create([
            'name' => $pending->name,
            'email' => $pending->email,
            'password' => Hash::make($data['password']),
        ]);

        $pending->delete();

        return Inertia::location('/login');
    }
    public function showRegisterForm()
    {
        return Inertia::render('Register'); // yoki boshqa view nomi
    }

    // Qolgan metodlaring o'zgarishsiz qoladi
}
