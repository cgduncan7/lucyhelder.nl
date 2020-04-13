import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en';
import nl from './locales/nl';

i18n
  .use(initReactI18next)
  .init({
    lng: 'nl',
    fallbackLng: 'en',
    ns: ['common'],
    defaultNS: 'common',
    fallbackNS: 'common',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    react: {
      wait: true,
      useSuspense: false,
    },
    resources: {
      en,
      nl,
    }
  });

export default i18n;