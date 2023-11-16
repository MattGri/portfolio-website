import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          Home: 'Home',
          Projects: 'Projects',
          Contact: 'Contact',
          PhotographyWebsite: 'Photography Website',
          CountriesApp: 'Countries App',
          SpeechRecognition: 'Speech Recognition',
          BlogWebsite: 'Blog Website',
          HomeInfo: "Hi, I'm Mateusz",
          ContactInfo: 'If you want to chat about a project - email me on',
        },
      },
      pl: {
        translation: {
          Home: 'Strona główna',
          Projects: 'Projekty',
          Contact: 'Kontakt',
          PhotographyWebsite: 'Strona fotograficzna',
          CountriesApp: 'Aplikacja państw',
          SpeechRecognition: 'Rozpoznawanie mowy',
          BlogWebsite: 'Blog',
          HomeInfo: 'Cześć, jestem Mateusz',
          ContactInfo:
            'Jeśli chcesz porozmawiać o projekcie - wyślij mi e-mail na',
        },
      },
    },
  });

export default i18next;
