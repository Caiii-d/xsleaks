'use strict';

self.addEventListener("install", function() {
    self.skipWaiting();
});

self.addEventListener("fetch", function(e) {
  let url = new URL(e.request.url);
  let urlParams = new URLSearchParams(url.search);
  let size = urlParams.get("size");
  let body = "A".repeat(Number(size));
  if (e.request.headers.get("range") === "bytes=0-") {
    console.log('intercepted:', url);
  	e.respondWith(new Response(body, {status: 206, headers: {"Content-Range": `bytes 0-${size - 1}/100000` }}));
  }
});
