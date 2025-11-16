self.addEventListener("install", event => {
    event.waitUntil(
        caches.open("pwa-cache").then(cache => {
            return cache.addAll([
                "./",
                "./index.html",
                "./manifest.json",
                "./logos/logo.png",
                "./logos/icon.png"
            ]);
        })
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(resp => resp || fetch(event.request))
    );
});
