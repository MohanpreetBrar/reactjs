<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FormController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
/// Student Class Routes 
Route::get("/class",FormController::class, 'index');
Route::get('/class',[FormController::class, 'store']);
Route::post('/class/store',[FormController::class, 'show']); 

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
