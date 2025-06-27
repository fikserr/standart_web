<?php
// app/Http/Controllers/AddressController.php
namespace App\Http\Controllers;

use App\Models\Address;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AddressController extends Controller
{
    public function show()
    {
        $address = auth()->user()->address;

        return Inertia::render('User/AddressForm', [
            'address' => $address,
        ]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'first_name' => 'required',
            'last_name' => 'required',
            'street' => 'required',
            'city' => 'required',
            'house_number' => 'required',
            'region' => 'required',
            'phone' => 'required',
        ]);

        $user = auth()->user();

        $user->address()->updateOrCreate(
            ['user_id' => $user->id],
            $data
        );

        return redirect()->back()->with('success', 'Manzil saqlandi!');
    }
}
