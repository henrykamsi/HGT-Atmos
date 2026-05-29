importScripts('https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js');

self.addEventListener('install', (e) => {
    self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
    if (e.request.url.includes('api.openweathermap.org') || e.request.url.includes('onesignal')) return;
    e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});

