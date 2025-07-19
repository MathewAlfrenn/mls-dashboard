import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

const LanguageSelector = () => {
  const { i18n: i18nInstance } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18nInstance.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button onClick={toggleLanguage}>
      {i18nInstance.language === 'en' ? 'Français' : 'English'}
    </button>
  );
};

export default LanguageSelector;
