'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "65dcfce6c7638b8165bf69a8ff91c7b9",
"assets/assets/ca/lets-encrypt-r3.pem": "9b8740c5387a2fd70006d3cbf2229a0c",
"assets/assets/images/ic_launcher.png": "2c8c9f05ee4183acd2ffcf1a768d92de",
"assets/assets/images/logo_basic.png": "b5d1f9cd8321115816e763c7ff41e831",
"assets/assets/images/logo_full.png": "d46b0941ddaf3ef56bd736fcc1472412",
"assets/assets/images/notification_map.png": "88d413735aa9c4044ca96c3f970bfbc9",
"assets/assets/images/onboard/img1.png": "f032e5587c5e8ff9fb90a20bae80485d",
"assets/assets/images/onboard/img2.png": "8d5a480acbccc56565cc3a8f35f2f955",
"assets/assets/images/onboard/img3.png": "181b29736c7096fcb285d94a6a58ff4b",
"assets/assets/images/onboard/img4.png": "6738fce4f41f085c4440d77a57614af3",
"assets/assets/images/placeholder.png": "be257c7ebf00098b0c20fb18fe45ea43",
"assets/assets/images/splash.png": "cecbe6e3ed52555353a56131588249e8",
"assets/assets/images/verified.png": "5f94ee9d4d3d9bab19ef05c2cdaf672c",
"assets/assets/images/welcome_bg.jpg": "ed42badd27229ee3eddad3eace05abd1",
"assets/assets/images/welcome_bg1.jpg": "a782a3ae761ea54ad581bd64a2f67aa0",
"assets/assets/json/au_postcodes.json": "b2e9e97d2f9efe0a4f1e77fda0266347",
"assets/FontManifest.json": "760cc3770462a4d4092771fcdf1361d4",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/google_fonts/poppins/OFL.txt": "69045d03afdf61aeb37246af6001af9c",
"assets/google_fonts/poppins/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/google_fonts/poppins/Poppins-BlackItalic.ttf": "e9c5c588e39d0765d30bcd6594734102",
"assets/google_fonts/poppins/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/google_fonts/poppins/Poppins-BoldItalic.ttf": "19406f767addf00d2ea82cdc9ab104ce",
"assets/google_fonts/poppins/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/google_fonts/poppins/Poppins-ExtraBoldItalic.ttf": "8afe4dc13b83b66fec0ea671419954cc",
"assets/google_fonts/poppins/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/google_fonts/poppins/Poppins-ExtraLightItalic.ttf": "a9bed017984a258097841902b696a7a6",
"assets/google_fonts/poppins/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"assets/google_fonts/poppins/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/google_fonts/poppins/Poppins-LightItalic.ttf": "0613c488cf7911af70db821bdd05dfc4",
"assets/google_fonts/poppins/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/google_fonts/poppins/Poppins-MediumItalic.ttf": "cf5ba39d9ac24652e25df8c291121506",
"assets/google_fonts/poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/google_fonts/poppins/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/google_fonts/poppins/Poppins-SemiBoldItalic.ttf": "9841f3d906521f7479a5ba70612aa8c8",
"assets/google_fonts/poppins/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/google_fonts/poppins/Poppins-ThinItalic.ttf": "01555d25092b213d2ea3a982123722c9",
"assets/NOTICES": "1ac94e7052313cac51d0433629a02bb3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/dash_chat_2/assets/placeholder.png": "ce1fece6c831b69b75c6c25a60b5b0f3",
"assets/packages/dash_chat_2/assets/profile_placeholder.png": "77f5794e2eb49f7989b8f85e92cfa4e0",
"assets/packages/eva_icons_flutter/lib/fonts/Eva-Icons.ttf": "a71dbd49ad4a52020638190e30ac52e0",
"assets/packages/timezone/data/latest_all.tzf": "016df80452fa51f0f61403cd259f2366",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "431d31aedafe750c92ecc6f473d46aaa",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "9b538a0f7288083d7de1e11ef98a8e17",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ef6df9b5af866feb6c206cc072bbc729",
"icons/Icon-512.png": "c489838611006ad0ef9afbd50f351b87",
"icons/Icon-maskable-192.png": "ef6df9b5af866feb6c206cc072bbc729",
"icons/Icon-maskable-512.png": "c489838611006ad0ef9afbd50f351b87",
"index.html": "fe05ab5fb61f07f65f4b621a50c721a8",
"/": "fe05ab5fb61f07f65f4b621a50c721a8",
"main.dart.js": "ae2d6ecd6fb81e8843796769c5ae96c6",
"manifest.json": "513ca2b87c28c7716f9ec80bef3ab55b",
"splash/img/dark-1x.png": "c94355de5c99c01da15ff440f96a8f4e",
"splash/img/dark-2x.png": "4b5d549d7eff2bd953e69c86fa3e7077",
"splash/img/dark-3x.png": "ac90b12947f2ced66167aa3577672c88",
"splash/img/dark-4x.png": "3eafd80d3b692e1f0a862c628aadafda",
"splash/img/light-1x.png": "c94355de5c99c01da15ff440f96a8f4e",
"splash/img/light-2x.png": "4b5d549d7eff2bd953e69c86fa3e7077",
"splash/img/light-3x.png": "ac90b12947f2ced66167aa3577672c88",
"splash/img/light-4x.png": "3eafd80d3b692e1f0a862c628aadafda",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "68fd7799a29a2b804afa30fa5f76eb22",
"version.json": "7bcbe3a26a653df9cd6c96e1544d207a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
