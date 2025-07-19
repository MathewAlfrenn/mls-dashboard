import React, { useState } from 'react';
import LineChartComponent from './LineChartComponent';
import BarChartComponent from './BarChartComponent';
import PlayerSelector from './PlayerSelector';
import StatSelector from './StatSelector';
import { useTranslation } from 'react-i18next';

const Dashboard = () => {
  const { t } = useTranslation();
  const [selectedPlayer, setSelectedPlayer] = useState('Messi');
  const [selectedStat, setSelectedStat] = useState('goals');

  const playerLineData = {
    Messi: [
      { match: 1, goals: 1 },
      { match: 2, goals: 2 },
      { match: 3, goals: 0 },
      { match: 4, goals: 3 },
      { match: 5, goals: 1 }
    ],
    Insigne: [
      { match: 1, goals: 0 },
      { match: 2, goals: 1 },
      { match: 3, goals: 1 },
      { match: 4, goals: 2 },
      { match: 5, goals: 1 }
    ],
    Bernardeschi: [
      { match: 1, goals: 1 },
      { match: 2, goals: 0 },
      { match: 3, goals: 2 },
      { match: 4, goals: 1 },
      { match: 5, goals: 0 }
    ],
    Benteke: [
      { match: 1, goals: 2 },
      { match: 2, goals: 1 },
      { match: 3, goals: 2 },
      { match: 4, goals: 3 },
      { match: 5, goals: 2 }
    ]
  };

  const barData = [
    { player: 'Messi', goals: 12, assists: 8, passes: 50 },
    { player: 'Insigne', goals: 9, assists: 10, passes: 65 },
    { player: 'Bernardeschi', goals: 6, assists: 7, passes: 45 }
  ];

  return (
    <div style={{ width: '100%' }}>
      <div style={{ marginBottom: '2rem' }}>
        <PlayerSelector selectedPlayer={selectedPlayer} setSelectedPlayer={setSelectedPlayer} />
        <LineChartComponent
          data={playerLineData[selectedPlayer]}
          title={`${t('goals_over_time')} - ${selectedPlayer}`}
        />
      </div>

      <div>
        <StatSelector selectedStat={selectedStat} setSelectedStat={setSelectedStat} />
        <BarChartComponent data={barData} stat={selectedStat} />
      </div>
    </div>
  );
};

export default Dashboard;
