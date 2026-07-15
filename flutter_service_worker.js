'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "705403fb5d6decc3fd4713d65d703af9",
"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "5806be8ca97d9853be2e6db73790720a",
"/": "5806be8ca97d9853be2e6db73790720a",
"main.dart.js": "1f5233a4184353519a60162652ac670f",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "0ac8736e9396541e93ff0052239358a1",
"icons/Icon-192.png": "0ac8736e9396541e93ff0052239358a1",
"icons/Icon-maskable-192.png": "0ac8736e9396541e93ff0052239358a1",
"icons/Icon-maskable-512.png": "0ac8736e9396541e93ff0052239358a1",
"icons/Icon-512.png": "0ac8736e9396541e93ff0052239358a1",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
"assets/AssetManifest.json": "2a7d7eff476c01d7447afef784c89bac",
"assets/NOTICES": "5a5221f53a6028a4908551110a488da0",
"assets/FontManifest.json": "c75f7af11fb9919e042ad2ee704db319",
"assets/AssetManifest.bin.json": "0a56eaecb95e21b8d6e196e95f19e5e4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Regular-400.otf": "b2703f18eee8303425a5342dba6958db",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Brands-Regular-400.otf": "301b219899610cd2a9d621934a3840a2",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Solid-900.otf": "5b8d20acec3e57711717f61417c1be44",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "a48be31930c4ee15de89baa8639b0b91",
"assets/fonts/MaterialIcons-Regular.otf": "64254c5befc934a7b063a60ffd461264",
"assets/assets/images/fares.webp": "1cbd18e4c9362992e20c7240a2adc321",
"assets/assets/images/dasar.webp": "874c8e26557e0dac34ccb45b9858867f",
"assets/assets/images/mazra3ty.webp": "cd14d3d4a629ab973ec28d897b031eec",
"assets/assets/images/c4shop.png": "29ce2c8815086507d1abbb2f4fee95f7",
"assets/assets/images/aircairo/air1.jpeg": "557ac22766b3338313c22b95f54bf9ed",
"assets/assets/images/aircairo/aircairo.png": "f7bb665724ad361aec0f9999ef2283a9",
"assets/assets/images/aircairo/air7.jpeg": "80b9b5206368bf85e5c7bd5417b75834",
"assets/assets/images/aircairo/air6.jpeg": "463e0886baf1164a9f1fe9541be8ffc8",
"assets/assets/images/aircairo/air5.jpeg": "2e61aaa55e9ed8d24ab670e8dcf48e78",
"assets/assets/images/aircairo/air4.jpeg": "9f1eb6d5ab2164c476cd9a8b5daf0886",
"assets/assets/images/aircairo/air8.jpeg": "42860379d0c52bd36e51496e38a05316",
"assets/assets/images/aircairo/air3.jpeg": "62c09c7303e13c4ab30c5468f99fdb88",
"assets/assets/images/aircairo/air2.jpeg": "51c3dfc5b85a9285ffea28a118ae4265",
"assets/assets/images/coldwell.webp": "a30e35230bcfbbe1bac772a0aec88d98",
"assets/assets/images/khamato.webp": "45355a7c8447498511565407b3ba19a5",
"assets/assets/images/airo_cairo.jpeg": "857f95b3a4934843c6b74e927cdb1a94",
"assets/assets/images/jeras.webp": "2c5d0a5782063d41ed1c32938633556b",
"assets/assets/images/red/red1.jpeg": "80a131c0a85d4afc4ddda0405a34ab48",
"assets/assets/images/red/red7.jpeg": "e05906237c36f533869cdad328443ec6",
"assets/assets/images/red/red6.jpeg": "98c6fe9a64c1142cf963ca9b7aad2c24",
"assets/assets/images/red/red5.jpeg": "9dc2bdaf98fc3b4ca337e3ba53ba8055",
"assets/assets/images/red/red4.jpeg": "4806a03028f22516f16a6f3d2811877d",
"assets/assets/images/red/red3.jpeg": "274ab301083b258b94a6fa91f1c61c39",
"assets/assets/images/red/red.png": "2a923cd64117b197275a91e1821f2f08",
"assets/assets/images/red/red2.jpeg": "e27506a090827ea7fe220d4083cf3555",
"assets/assets/images/myimage.png": "0ac8736e9396541e93ff0052239358a1",
"assets/assets/images/cb_events.webp": "43c31842a15b6ed004a2afa776d08d37",
"assets/assets/images/coldwell/co5.jpeg": "be2f2bb4ad384c622ff1bc2597e6db1b",
"assets/assets/images/coldwell/co8.jpeg": "14886ca0869c71c5a3fea7481e1976d3",
"assets/assets/images/coldwell/co4.jpeg": "1e1d28766335b037604ed7ba65b862b1",
"assets/assets/images/coldwell/co3.jpeg": "10b62671b07596c7f79553f2572bd20a",
"assets/assets/images/coldwell/co2.jpeg": "4a288b9a238bede3beaa1e9f64ddc924",
"assets/assets/images/coldwell/coldwell.png": "a54ec5077fbac060e518098e40b5749d",
"assets/assets/images/coldwell/co1.jpeg": "d3edb55ac7bb7e51a3fc44c6fac428b0",
"assets/assets/images/coldwell/co7.jpeg": "8122f9c37fb9163982a7920b02046796",
"assets/assets/images/coldwell/co6.jpeg": "89e6202fed0621102346853e0958afde",
"assets/assets/images/cb_link.webp": "30adcc260818d74a9b466bbaf3022586",
"assets/assets/images/khamato/kh9.jpeg": "78a0fad086e5244f872d96a45724a32c",
"assets/assets/images/khamato/kh5.jpeg": "c68c0396854326d16575df7e243071f7",
"assets/assets/images/khamato/kh4.jpeg": "07e1983881145933ca63f661606abc75",
"assets/assets/images/khamato/kh8.jpeg": "0a0acef02477dca9750561327514866f",
"assets/assets/images/khamato/kh3.jpeg": "f3270f7bb56e46d295e236334a474859",
"assets/assets/images/khamato/kh2.jpeg": "d959ba19b668a144b6635c213d4e9413",
"assets/assets/images/khamato/kh1.jpeg": "a90c05795f5c2b42cd254c3f3d2f157c",
"assets/assets/images/khamato/kh10.jpeg": "cb4f26cc7cb1ce3f2e2f00d56a4e1d01",
"assets/assets/images/khamato/kh11.jpeg": "3e42d430046b16e5afb7599852170294",
"assets/assets/images/khamato/kh7.jpeg": "c25a6d1168c3c282d1ec76881a718c3b",
"assets/assets/images/khamato/kh6.jpeg": "0f78c1620ab848f88be6d3efdd850470",
"assets/assets/images/khamato/khamato.png": "729f0d607f19b07db6a3e1e6728aaf02",
"assets/assets/images/dream.webp": "fd3e45dce426f2a1e8baebc14107a917",
"assets/assets/images/manetho.png": "8c40838b144e88a186adcb3ca04b4abd",
"assets/assets/images/sanita.jpeg": "8c824732ee15cff6edea3ebc54139a41",
"assets/assets/files/Mohamed%2520Nasser%2520-%2520Flutter%2520Projects%2520.pdf": "4edf67f9f0b4bf98758ad7223cefb40d",
"assets/assets/files/Mohamed%2520Nasser%2520Abdelemeged%2520-%2520Flutter%2520Developer%2520-%2520CV.pdf": "11657d06007d0d0336088bc416134d83",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
