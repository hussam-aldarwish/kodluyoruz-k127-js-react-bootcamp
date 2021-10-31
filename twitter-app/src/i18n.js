import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "home": "Home",
      "search": "Search",
      "Profile": "Profile",
      "More": "More",
      "what": "What's happening?",
      "Trends": "Trends for you",
      "Who": "Who to follow",
      "twitte": "twitte",
      "Theme": "Theme",
    }
},
tr: {
    translation: {
        "home": "Ana sayfa",
        "search": "Ara",
        "Profile": "Profil",
        "More": "Daha",
        "what": "Ne oluyor?",
        "Trends": "İlgini çekebilecek gündemler",
        "Who": "Kimi takip etmeli",
        "twitte": "tweetle",
        "Theme": "Teme",
    }
  }
};
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });
  export default i18n;