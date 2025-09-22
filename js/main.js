// 🌐 Language content
const translations = {
  en: {
    heroHeadline: "Hi, I’m [Your Name] — Full Stack Developer.",
    heroParagraph: "I build modern, scalable web applications that solve real problems.",
    aboutTitle: "Who I Am & What I Do",
    aboutText: "I'm a self-taught Full Stack Developer focused on clean code and practical solutions.",
    // Add more keys as needed
  },
  it: {
    heroHeadline: "Ciao, sono [Il Tuo Nome] — Sviluppatore Full Stack.",
    heroParagraph: "Creo applicazioni web moderne e scalabili che risolvono problemi reali.",
    aboutTitle: "Chi Sono e Cosa Faccio",
    aboutText: "Sono uno sviluppatore Full Stack autodidatta, specializzato in codice pulito e soluzioni pratiche.",
    // Add more keys as needed
  }
};

let currentLang = "en";

// 🔁 Switch language and update all translatable elements
function setLanguage(lang) {
  currentLang = lang;

  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update toggle button label
  const toggleBtn = document.getElementById("lang-toggle");
  if (toggleBtn) {
    toggleBtn.textContent = lang === "en" ? "IT 🇮🇹" : "EN 🇬🇧";
  }

  // Optional: persist language selection in localStorage
  localStorage.setItem("preferredLang", lang);
}

// 🖱️ Handle manual toggle click
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("lang-toggle");

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const newLang = currentLang === "en" ? "it" : "en";
      setLanguage(newLang);
    });
  }

  // 🌍 Auto-detect language on first visit
  const savedLang = localStorage.getItem("preferredLang");

  if (savedLang) {
    setLanguage(savedLang); // Load saved preference
  } else {
    const browserLang = navigator.language || navigator.userLanguage;
    const defaultLang = browserLang.startsWith("it") ? "it" : "en";
    setLanguage(defaultLang);
  }
});
