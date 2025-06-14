<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Wotz\VerificationCode\Models\VerificationCode;

class VerifyCodeController extends Controller
{
    public function verify(Request $req)
    {
        $user = $req->user();
        if (VerificationCode::verify($req->code, $user->email)) {
            $user->markEmailAsVerified();
            return redirect()->route('dashboard');
        }
        return back()->withErrors(['code' => 'Kod noto‘g‘ri yoki muddati o‘tgan']);
    }
}
