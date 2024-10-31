<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DishController;
// ユーザーの登録とログインルート
Route::post('/register', 'App\Http\Controllers\AuthController@register');
Route::post('/login', 'App\Http\Controllers\AuthController@login');

// 認証が必要なルートのグループ
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    // ログアウトルート
    Route::post('/logout', 'App\Http\Controllers\AuthController@logout');

    // 料理情報を管理するAPIエンドポイント
    Route::apiResource('/dishes', 'App\Http\Controllers\DishController');
});
