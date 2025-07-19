import React from 'react';
import { useTranslation } from 'react-i18next';

const PlayerSelector = ({ selectedPlayer, setSelectedPlayer }) => {
  const { t } = useTranslation();

  const players = ['Messi', 'Insigne', 'Bernardeschi', 'Benteke'];

  return (
    <div style={{ marginBottom: '2rem' }}>
      <label htmlFor="player-select" style={{ marginRight: '1rem', fontWeight: 'bold' }}>
        {t('select_player')}:
      </label>
      <select
        id="player-select"
        value={selectedPlayer}
        onChange={(e) => setSelectedPlayer(e.target.value)}
      >
        {players.map((player) => (
          <option key={player} value={player}>
            {player}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PlayerSelector;
