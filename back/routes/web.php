<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

// // Groupe de Routes API
// Route::prefix("/api")->middleware('api')->group(function () {
//     Route::post('/login',[AuthController::class, 'login']);
//     Route::post('/register',[AuthController::class, 'register']);
// });
