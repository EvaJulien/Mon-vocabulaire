/* Service worker : garde l'appli disponible hors connexion.
   VERSION doit être le même numéro que APP_VERSION (app.js), version.json et les ?v= de index.html. */
var VERSION = '2.16.1';
var CACHE = 'cuisine-eva-' + VERSION;
var SHELL = ['./', './index.html', './style.css', './app.js', './seed.js', './manifest.webmanifest',
  './icons/icon-192.png', './icons/icon-512.png', './icons/apple-touch-icon.png'];

self.addEventListener('install', function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){
    return Promise.all(SHELL.map(function(u){
      return fetch(new Request(u, {cache:'reload'})).then(function(res){ if(res.ok) return c.put(u, res); }).catch(function(){});
    }));
  }).then(function(){ return self.skipWaiting(); }));
});

self.addEventListener('activate', function(e){
  e.waitUntil(caches.keys().then(function(keys){
    return Promise.all(keys.filter(function(k){ return k!==CACHE; }).map(function(k){ return caches.delete(k); }));
  }).then(function(){ return self.clients.claim(); }));
});

self.addEventListener('fetch', function(e){
  var req=e.request; if(req.method!=='GET') return;
  var url=new URL(req.url);
  // Fichiers de l'appli : réseau d'abord (sans cache HTTP), le cache ne sert que hors connexion
  if(url.origin===location.origin){
    var net = req.mode==='navigate'
      ? fetch(req.url, {cache:'no-cache', credentials:'same-origin'})
      : fetch(req, {cache:'no-cache'});
    e.respondWith(net.then(function(res){
      if(res && res.ok && res.type==='basic' && url.pathname.slice(-12)!=='version.json'){
        var copy=res.clone(); caches.open(CACHE).then(function(c){ c.put(req, copy); });
      }
      return res;
    }).catch(function(){
      return caches.match(req, {ignoreSearch:true}).then(function(r){ return r || caches.match('./index.html'); });
    }));
    return;
  }
  // Polices Google : cache d'abord
  if(/fonts\.(googleapis|gstatic)\.com$/.test(url.hostname)){
    e.respondWith(caches.match(req).then(function(r){
      return r || fetch(req).then(function(res){ var copy=res.clone(); caches.open(CACHE).then(function(c){ c.put(req, copy); }); return res; });
    }));
  }
});
