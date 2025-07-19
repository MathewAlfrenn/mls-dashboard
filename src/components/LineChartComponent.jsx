import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer
} from 'recharts';
import { useTranslation } from 'react-i18next';

const LineChartComponent = ({ data }) => {
  const { t } = useTranslation();

  return (
    <div style={{ flex: 1, minWidth: '300px' }}>
      <h3>{t("goals_over_time")}</h3>
      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data}>
          <CartesianGrid stroke="#ccc" />
          <XAxis
            dataKey="match"
            label={{
              value: t("x_label_match"),
              position: 'insideBottom',
              offset: -5
            }}
          />
          <YAxis
            label={{
              value: t("y_label_goals"),
              angle: -90,
              position: 'insideLeft'
            }}
          />
          <Tooltip
            formatter={(value) => [`${value}`, t("goals")]}
            labelFormatter={(label) => `${t("x_label_match")}: ${label}`}
          />
          <Line type="monotone" dataKey="goals" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartComponent;
