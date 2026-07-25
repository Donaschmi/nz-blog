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
