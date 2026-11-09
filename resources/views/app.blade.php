<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="preload" href="/fonts/ibm-plex-sans-arabic-400.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="/fonts/ibm-plex-sans-arabic-600.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="/fonts/ibm-plex-sans-arabic-700.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="/fonts/inter-400-700.woff2" as="font" type="font/woff2" crossorigin>

    <script>
        try {
            var saved = localStorage.getItem('ssn-locale');
            if (saved === 'en' || saved === 'ar') {
                document.documentElement.lang = saved;
                document.documentElement.dir = saved === 'ar' ? 'rtl' : 'ltr';
            }
        } catch (e) {}
    </script>

    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.tsx'])
    @inertiaHead
</head>
<body class="bg-mist-50 text-stone-800 antialiased">
    @inertia
</body>
</html>
