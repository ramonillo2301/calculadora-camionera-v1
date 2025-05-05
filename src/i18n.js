import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en/translation.json';
import es from './locales/es/translation.json';

i18n
  .use(initReactI18next) // pasa i18n al react-i18next
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
    },
    lng: 'es', // Idioma por defecto
    fallbackLng: 'en', // Idioma de respaldo si no está disponible
    interpolation: {
      escapeValue: false, // React ya hace el escape de valores
    },
  });

export default i18n;
