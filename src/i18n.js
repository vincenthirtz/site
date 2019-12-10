import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-xhr-backend';

i18n
    .use(LanguageDetector)
    .use(Backend)
    .use(initReactI18next)
    .init({
        debug: false,
        lng: process.env.REACT_APP_SECONDARY_LANG,
        fallbackLng: process.env.REACT_APP_PRIMARY_LANG,
        defaultNS: 'translation',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        react: {
            useSuspense: false
        },
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json'
        },
    });

export default i18n;