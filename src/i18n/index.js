import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './en.json';
import ua from './ua.json';
import fr from './fr.json';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    },
    resources: {
      en,
      ua,
      fr
    },
    lng: 'en',
    fallbackLng: 'en',
    defaultNS: 'common',
    ns: ['common']
    
  });

export default i18n;
