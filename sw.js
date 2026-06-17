const CACHE="tatrai-2026-v7";
const CORE=["index.html","manifest.json","icon-192.png","icon-512.png"];
const EXTRA=["wysoka-homole-biala-woda.gpx","teryho-chata.gpx","velicka-sliezsky-dom-roundtrip.gpx"];
self.addEventListener("install",function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){
    return c.addAll(CORE).then(function(){
      return Promise.all(EXTRA.map(function(u){return c.add(u).catch(function(){});}));
    });
  }).then(function(){return self.skipWaiting();}));
});
self.addEventListener("activate",function(e){
  e.waitUntil(caches.keys().then(function(keys){
    return Promise.all(keys.map(function(k){if(k!==CACHE)return caches.delete(k);}));
  }).then(function(){return self.clients.claim();}));
});
self.addEventListener("fetch",function(e){
  if(e.request.method!=="GET")return;
  e.respondWith(
    caches.match(e.request).then(function(hit){
      if(hit)return hit;
      return fetch(e.request).then(function(res){
        var copy=res.clone();
        caches.open(CACHE).then(function(c){c.put(e.request,copy).catch(function(){});});
        return res;
      }).catch(function(){
        if(e.request.mode==="navigate")return caches.match("index.html");
      });
    })
  );
});