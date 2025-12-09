<?php

namespace App\Providers;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // code pour exclure la vérification csrf aux routes
        $this->app->resolving(VerifyCsrfToken::class, function (VerifyCsrfToken $middleware){
            $middleware->except([
                '/api/login',
                '/api/register'
            ]);
        });
    }
}
