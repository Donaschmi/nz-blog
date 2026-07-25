// Language toggle — flips body class between lang-en / lang-fr.
// Remembers the choice for the session so it sticks across pages.
(function () {
  var KEY = "kiaora-lang";
  var body = document.body;

  function setLang(lang) {
    body.classList.remove("lang-en", "lang-fr");
    body.classList.add("lang-" + lang);
    document.documentElement.setAttribute("lang", lang);
    try { sessionStorage.setItem(KEY, lang); } catch (e) {}
  }

  // Restore a previously chosen language, else use the default from markup.
  var saved;
  try { saved = sessionStorage.getItem(KEY); } catch (e) {}
  if (saved === "en" || saved === "fr") setLang(saved);

  document.addEventListener("click", function (e) {
    var btn = e.target.closest(".lang-toggle");
    if (!btn) return;
    var next = body.classList.contains("lang-fr") ? "en" : "fr";
    setLang(next);
  });
})();

// Lightbox — click a gallery photo to view it full-size.
(function () {
  var box = document.createElement("div");
  box.className = "lightbox";
  box.innerHTML = '<img alt="">';
  document.body.appendChild(box);
  var big = box.querySelector("img");

  document.addEventListener("click", function (e) {
    var img = e.target.closest(".gallery img");
    if (img) {
      big.src = img.getAttribute("src");
      big.alt = img.getAttribute("alt") || "";
      box.classList.add("open");
      return;
    }
    if (e.target === box || e.target === big) box.classList.remove("open");
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") box.classList.remove("open");
  });
})();
