<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Password;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;


class AuthController extends Controller
{
    //

    public function login(Request $request){
        $validated= $request->validate([
            'email' =>['required', 'email', 'max:50'],
            'password' =>['required', Password::min(8)]
        ]);
        try{
            if(! $token= JWTAuth::attempt($validated)) {
            return response()->json(['error' => 'invalid credential'], 422);
            }
        }catch(JWTException $e) {
            return response()->json(['error' => 'could not create token']);
        }
        return response()->json(['token' =>$token], 200);
    }

    public function register(Request $request){
        $validated= $request->validate([
            'name' =>['required, max:50'],
            'firstname' =>['required, max:50'],
            'email' =>['required, email, unique:users, max:50'],
            'password' =>['required', 'confirmed', Password::min(8)]
        ]);
        $user= User::create($validated);
        $token = Auth::guard('api')->login($user);
        
        return response()->json(['token' =>$token], 201);
    }
}
