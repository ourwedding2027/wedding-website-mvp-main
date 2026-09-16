export function createI18n(translations, defaultLanguage = "en") {
  let currentLanguage = defaultLanguage;

  function t(key, lang = currentLanguage) {
    return translations[lang]?.[key] ?? translations.en?.[key] ?? key;
  }

  function setLanguage(lang) {
    currentLanguage = lang;
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      const text = t(key, lang);
      if (el.tagName === "INPUT" && el.type === "submit") {
        el.value = text;
      } else {
        el.textContent = text;
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.dataset.i18nPlaceholder;
      el.setAttribute("placeholder", t(key, lang));
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      el.setAttribute("alt", t(el.dataset.i18nAlt, lang));
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
      el.setAttribute("aria-label", t(el.dataset.i18nAriaLabel, lang));
    });

    document.querySelectorAll("[data-i18n-title]").forEach((el) => {
      el.setAttribute("title", t(el.dataset.i18nTitle, lang));
    });

    document.querySelectorAll("[data-i18n-open], [data-i18n-closed]").forEach((el) => {
      const key = el.getAttribute("aria-expanded") === "true"
        ? el.dataset.i18nOpen
        : el.dataset.i18nClosed;
      el.textContent = t(key, lang);
    });

    document.querySelectorAll("[data-language]").forEach((button) => {
      const isActive = button.dataset.language === lang;
      if (button.classList.contains("language-btn")) {
        button.classList.toggle("active", isActive);
        button.classList.toggle("language-btn--active", isActive);
        button.classList.toggle("language-btn--outline", !isActive);
      }
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  }

  function getCurrentLanguage() {
    return currentLanguage;
  }

  return {
    t,
    setLanguage,
    getCurrentLanguage
  };
}
