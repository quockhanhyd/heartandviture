import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "Welcome to React": "Welcome to React",
      },
    },
    vi: {
      translation: {
        "Welcome to React": "Chào mừng đến với React",
      },
    },
  },
  lng: "vi",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});
