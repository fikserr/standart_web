<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Notifications\SendVerificationCode;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Wotz\VerificationCode\Models\VerificationCode;

class UserController extends Controller
{
    // 🟢 LOGIN
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            return to_route($user->is_admin ? 'admin.dashboard' : 'home');
        }

        return back()->withErrors(['email' => 'Email yoki parol noto‘g‘ri.'])->withInput();
    }

    // 🔐 LOGOUT
    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return Inertia::location('/login');
    }

    // 🧾 RO‘YXATDAN O‘TISH – 1-qadam: kod yuborish
    public function requestRegister(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users',
            'password' => 'required|string|min:8|confirmed',
        ]);

        $data['password'] = bcrypt($data['password']);

        $user = User::create($data);

        // Kod yaratish
        $verification = VerificationCode::create([
            'email' => $user->email,
        ]);

        // Emailga yuborish
        $user->notify(new SendVerificationCode($verification->code));
        // Email tekshiruv modalini ko‘rsatish uchun
        session(['pending_user_id' => $user->id]);

        return response()->json(['message' => 'Tasdiqlash kodi yuborildi']);
    }

    // ✅ RO‘YXATDAN O‘TISH – 2-qadam: kodni tasdiqlash
    public function verifyRegister(Request $request)
    {
        $request->validate([
            'code' => 'required|string',
        ]);

        $user = User::findOrFail(session('pending_user_id'));

        if (VerificationCode::verify($request->code, $user->email)) {
            $user->markEmailAsVerified();
            session()->forget('pending_user_id');
            return response()->json(['message' => 'Email tasdiqlandi']);
        }

        return response()->json(['errors' => ['code' => 'Kod noto‘g‘ri yoki eskirgan']], 422);
    }

    // 👥 Admin panel uchun barcha userlar
    public function adminUsers()
    {
        $users = User::all();
        return Inertia::render('admin/users', ['users' => $users]);
    }

    // 🧾 Ro‘yxat sahifasi
    public function showRegisterForm()
    {
        return Inertia::render('Register');
    }

    // 🧍Userni ko‘rsatish
    public function show(User $user)
    {
        return response()->json($user);
    }

    // ✏️ Userni yangilash (masalan: is_admin)
    public function update(Request $request, User $user)
    {
        $data = $request->validate([
            'is_admin' => 'required|boolean',
        ]);

        $user->update($data);
        return redirect()->back();
    }

    // ❌ Userni o‘chirish
    public function destroy(User $user)
    {
        $user->delete();
        return response()->json(['message' => 'User o‘chirildi']);
    }

    // 🔐 Login sahifasi orqali kirish
    public function index()
    {
        $users = User::all();
        return inertia('Login', ['users' => $users]);
    }
}
