import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, Label } from 'recharts';

const data = [
  { name: 'Coffee', value: 12 },
  { name: 'Chai', value: 19 },
  { name: 'Other Beverages', value: 3 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const CustomPieChart = () => {
  const total = data.reduce((acc, entry) => acc + entry.value, 0);

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={180}
        cy={150}
        innerRadius={80}
        outerRadius={120}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
        <Label
          value={`Total: ${total}`}
          position="center"
          fill="#fff"
          style={{ fontSize: '24px', fontWeight: 'bold' }}
        />
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default CustomPieChart;
