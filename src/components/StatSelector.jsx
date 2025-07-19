import React from 'react';
import { useTranslation } from 'react-i18next';

const StatSelector = ({ selectedStat, setSelectedStat }) => {
  const { t } = useTranslation();

  const stats = ['goals', 'assists', 'passes'];

  return (
    <div style={{ margin: '2rem 0' }}>
      <label htmlFor="stat-select" style={{ marginRight: '1rem', fontWeight: 'bold' }}>
        {t('select_stat')}:
      </label>
      <select
        id="stat-select"
        value={selectedStat}
        onChange={(e) => setSelectedStat(e.target.value)}
      >
        {stats.map((stat) => (
          <option key={stat} value={stat}>
            {t(stat)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default StatSelector;
