<?php

use App\Models\Job;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Frontend routing is owned by React Router, not by Laravel. Rather than
| declaring a route per page, we boot the same React shell ("shell") for any
| GET request that no other route claims, and let React Router decide what
| to render from the URL.
|
| Add server routes (redirects, file downloads, OAuth callbacks, webhooks)
| above the fallback as usual — the fallback is always matched last, so it
| can never shadow them.
|
*/



Route::inertia('/', 'shell')->name('home');

Route::get('/api/jobs', function ()  {
    return response()->json([
        'jobs' => Job::getAll(),
    ]);
})->name('jobs');

Route::get('/api/jobs/{jobId}', function ($jobId)  {
 
    return response()->json([
        'job' => Job::getJobById($jobId),
    ]);
})->name('jobDetails');

Route::fallback(fn () => Inertia::render('shell'));
