<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    {{-- Preload Google Fonts --}}
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link 
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" 
        rel="stylesheet"
    >

    {{-- Preload Vite build CSS/JS for faster FCP --}}
    @viteReactRefresh
    @vite('resources/js/app.jsx')

    {{-- Inertia Head --}}
    @inertiaHead
</head>
<body class="antialiased bg-white">
    @inertia
</body>
</html>
