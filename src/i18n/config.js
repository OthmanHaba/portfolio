import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { translations } from './translations.js';

const resources = {
  en: { translation: translations.en },
  ar: { translation: translations.ar }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('locale') || 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 