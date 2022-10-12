'use strict';

var requested = new Set()

self.addEventListener('install', function() {
    self.skipWaiting();
});

self.addEventListener('fetch', function(e) {
  let url = new URL(e.request.url);
  let urlParams = new URLSearchParams(url.search);
  let size = urlParams.get('size');
  let id = urlParams.get('id');
  let tag = urlParams.get('tag');
  let body = ';'.repeat(Number(size));
  if (!requested.has(id)) {
    requested.add(id);
    console.log('intercepted', 'id', id, 'tag', tag, 'size', size);
  	e.respondWith(
      new Response(body,
        {
          status: 206, headers: {
          'Content-Range': `bytes 0-${size - 1}/100000`,
        }}
      )
    );
  }
});
