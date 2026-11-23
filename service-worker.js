importScripts("./offline-manifest.js");

const CACHE_NAME = `nticx-offline-${self.NTICX_OFFLINE_VERSION}-actividades-6`;
const APP_SHELL = [
  "index.html",
  "actividades.html",
  "actividades.css",
  "actividades.js",
  "misiones.js",
  "documento.html",
  "styles.css",
  "app.js",
  "data.js",
  "theme.js",
  "documento.js",
  "offline.js",
  "offline-manifest.js",
  "favicon.svg",
  "06_Sitio_Web_Consulta/index.html",
  "06_Sitio_Web_Consulta/materiales.html",
  "06_Sitio_Web_Consulta/calendario.html",
  "06_Sitio_Web_Consulta/documento.html",
  "06_Sitio_Web_Consulta/styles.css",
  "06_Sitio_Web_Consulta/app.js",
  "06_Sitio_Web_Consulta/data.js",
  "06_Sitio_Web_Consulta/theme.js",
  "06_Sitio_Web_Consulta/materiales.js",
  "06_Sitio_Web_Consulta/calendario.js",
  "06_Sitio_Web_Consulta/documento.js",
  "06_Sitio_Web_Consulta/favicon.svg"
];

self.addEventListener("install", event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    const base = self.registration.scope;
    await cache.addAll([...APP_SHELL, ...self.NTICX_OFFLINE_ASSETS].map(path => new URL(path, base)));
    await self.skipWaiting();
  })());
});

self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    const cacheNames = await caches.keys();
    await Promise.all(cacheNames
      .filter(name => name.startsWith("nticx-offline-") && name !== CACHE_NAME)
      .map(name => caches.delete(name)));
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", event => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== "GET" || url.origin !== self.location.origin) return;

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(request, { ignoreSearch: request.mode === "navigate" });

    if (request.mode === "navigate") {
      try {
        const response = await fetch(request);
        if (response.ok) await cache.put(request, response.clone());
        return response;
      } catch {
        const fallback = cached || await cache.match(new URL("index.html", self.registration.scope));
        if (fallback) return fallback;
        throw new Error("No hay una página guardada para esta navegación.");
      }
    }

    if (cached) return cached;

    const response = await fetch(request);
    if (response.ok) await cache.put(request, response.clone());
    return response;
  })());
});
