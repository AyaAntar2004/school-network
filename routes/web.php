<?php

use App\Http\Controllers\Admin\AuthController;
use App\Http\Controllers\Admin\EventController;
use App\Models\Event;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', fn () => Inertia::render('home', [
    'events' => Event::forPage()->orderByDesc('year')->orderByDesc('id')->limit(5)->get(),
]))->name('home');

Route::get('/events', fn () => Inertia::render('events', [
    'events' => Event::forPage()->orderBy('year')->orderBy('id')->get(),
]))->name('events');

Route::post('/contact-message', function (Request $request) {
    $data = $request->validate([
        'email' => ['required', 'email', 'max:255'],
        'school' => ['required', 'string', 'max:255'],
        'message' => ['required', 'string', 'max:5000'],
    ]);

    Log::info('Contact message', $data);

    return back();
})->name('contact.message');

/** Pages of the members' guide; the key selects which content block list the React page renders. */
$guidePages = [
    '/about' => 'about',
    '/about/history' => 'history',
    '/about/vision' => 'vision',
    '/about/governance' => 'governance',
    '/professional-development' => 'development',
    '/join' => 'join',
    '/resources' => 'resources',
];

foreach ($guidePages as $uri => $page) {
    Route::get($uri, fn () => Inertia::render('guide', ['page' => $page]))->name("guide.$page");
}

Route::prefix('admin')->name('admin.')->group(function () {
    Route::get('login', [AuthController::class, 'create'])->name('login');
    Route::post('login', [AuthController::class, 'store'])->middleware('throttle:6,1');

    Route::middleware('auth')->group(function () {
        Route::post('logout', [AuthController::class, 'destroy'])->name('logout');
        Route::redirect('/', '/admin/events');
        Route::resource('events', EventController::class)->except('show');
    });
});
