import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resources from "./resources";

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  ns: ["header", "footer", "home", "about_us", "contact_us", "service"],
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
