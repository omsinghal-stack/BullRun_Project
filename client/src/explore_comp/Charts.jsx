import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';

const data = [
  { name: 'Page A', uv: 400, pv: 2400 },
  { name: 'Page B', uv: 300, pv: 1398 },
  { name: 'Page C', uv: 200, pv: 9800 },
];

const Charts = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h2>Line Chart</h2>
      <LineChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default Charts;
