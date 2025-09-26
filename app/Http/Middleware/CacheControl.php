<?php

namespace App\Http\Middleware;

use Closure;

class CacheControl
{
    public function handle($request, Closure $next)
    {
        $response = $next($request);

        if ($response->headers->has('Content-Type') &&
            str_contains($response->headers->get('Content-Type'), ['image', 'font', 'css', 'javascript'])) {
            $response->headers->set('Cache-Control', 'public, max-age=31536000, immutable');
        }

        return $response;
    }
}
