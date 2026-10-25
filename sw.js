// Network-first while online to pick up GitHub Pages updates; cache fallback offline.
const CACHE='pocket-ledger-app-v3';
const PREFIX='pocket-ledger-app-';
const ASSETS=['./','./index.html','./app.js','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith(PREFIX)&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET'||new URL(event.request.url).origin!==self.location.origin)return;
  event.respondWith(fetch(event.request).then(response=>{
    if(response.ok&&new URL(event.request.url).pathname.startsWith(new URL(self.registration.scope).pathname)){
      const clone=response.clone();event.waitUntil(caches.open(CACHE).then(cache=>cache.put(event.request,clone)).catch(()=>{}));
    }
    return response;
  }).catch(()=>caches.match(event.request).then(cached=>cached||Response.error())));
});
