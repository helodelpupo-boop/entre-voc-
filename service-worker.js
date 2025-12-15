self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("entre-nos-cache").then(cache =>
      cache.addAll([
        "./",
        "./index.html",
        "./style.css",
        "./app.js",
        "./cartas.json"
      ])
    )
  );
});
