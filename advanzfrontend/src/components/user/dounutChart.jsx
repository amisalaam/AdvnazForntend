import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const DonutChart = () => {
  const data = [
    { name: 'Category 1', value: 200 },
    { name: 'Category 2', value: 300 },

  ];

  const COLORS = ['#c40025', '#00C49F'];

  return (
    <div className="flex ">
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          cx={100}
          cy={150}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default DonutChart;
