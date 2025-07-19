import React from 'react';
import Dashboard from './components/Dashboard';
import LanguageSelector from './components/LanguageSelector';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();

  return (
    <div style={{
      padding: '2rem',
      fontFamily: 'Arial, sans-serif',
      maxWidth: '1200px',
      margin: '0 auto',
      width: '100%'
    }}>
      {/* Barre du haut avec sélecteur à droite */}
      <div style={{
        display: 'flex',
        justifyContent: 'flex-end',
        marginBottom: '1rem'
      }}>
        <LanguageSelector />
      </div>

      {/* Description du site */}
      <h1 style={{ marginBottom: '0.5rem' }}>{t("stat_comparison")}</h1>
      <p style={{ marginBottom: '1rem' }}>{t("dashboardIntro")}</p>
      <p style={{
        whiteSpace: 'pre-line',
        marginBottom: '1rem',
        maxWidth: '1000px',
        lineHeight: '1.6'
      }}>
        {t("dashboardIntroDetails")}
      </p>
      <p><strong>{t("noteLabel")}:</strong> {t("dataNote")}</p>

      <Dashboard />
    </div>
  );
}

export default App;
