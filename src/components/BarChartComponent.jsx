import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';
import { useTranslation } from 'react-i18next';

const BarChartComponent = ({ data, stat = 'goals' }) => {
  const { t } = useTranslation();

  return (
    <div style={{ flex: 1, minWidth: '500px', height: '400px' }}>
      <h3>{t('bar_chart_title')}</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="player" />
          <YAxis
            label={{
              value: t("y_label_stat"),
              angle: -90,
              position: 'insideLeft'
            }}
          />
          <Tooltip
            formatter={(value) => [`${value}`, t(stat)]}
            labelFormatter={(label) => `${t("x_label_player")}: ${label}`}
          />
          <Legend formatter={() => t(stat)} />
          <Bar dataKey={stat} fill="#82ca9d" name={t(stat)} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartComponent;
