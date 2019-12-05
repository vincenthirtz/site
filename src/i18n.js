import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en: {
        translation: {
            "siteName": "{{siteName}}",
            "welcome": "Home",
            "blog": "Blog",
        }
    },
    fr: {
        translation: {
            "siteName": "{{siteName}}",
            "welcome": "Accueil",
            "blog": "Blog",
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: process.env.REACT_APP_SECONDARY_LANG,
        fallbackLng: process.env.REACT_APP_PRIMARY_LANG,
        debug: true,
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        }
    });


export default i18n;