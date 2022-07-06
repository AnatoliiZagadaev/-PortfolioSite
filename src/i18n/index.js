import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import ua from './ua.json';
import fr from './fr.json';

i18n
  .use(initReactI18next)
  .init({
    detection: {
      order: ['localStorage', 'cookie'],
      caches: ['localStorage', 'cookie'],
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
