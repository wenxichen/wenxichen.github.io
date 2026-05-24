(function () {
  document.querySelectorAll(".post--bilingual").forEach(function (article) {
    var toggle = article.querySelector(".lang-toggle");
    if (!toggle) return;

    var title = article.querySelector(".post-title");
    var languageState = article.querySelector(".lang-state");
    var originalContent = article.querySelector(".post-content--original");
    var translationContent = article.querySelector(".post-content--translation");
    var originalLang = article.dataset.originalLang || "en";
    var translationLang = article.dataset.translationLang || "zh";
    var showingTranslation = false;

    toggle.addEventListener("click", function () {
      showingTranslation = !showingTranslation;

      originalContent.hidden = showingTranslation;
      translationContent.hidden = !showingTranslation;
      if (languageState) {
        languageState.textContent = showingTranslation
          ? languageState.dataset.statusTranslation
          : languageState.dataset.statusOriginal;
      }

      if (title) {
        title.textContent = showingTranslation
          ? title.dataset.titleTranslation
          : title.dataset.titleOriginal;
      }

      document.documentElement.lang = showingTranslation ? translationLang : originalLang;
      if (showingTranslation && translationLang === "zh") {
        article.setAttribute("lang", "zh-Hans");
      } else if (!showingTranslation && originalLang === "zh") {
        article.setAttribute("lang", "zh-Hans");
      } else {
        article.removeAttribute("lang");
      }

      toggle.textContent = showingTranslation
        ? toggle.dataset.labelToOriginal
        : toggle.dataset.labelToTranslation;
      toggle.setAttribute("aria-pressed", showingTranslation ? "true" : "false");
    });
  });
})();
