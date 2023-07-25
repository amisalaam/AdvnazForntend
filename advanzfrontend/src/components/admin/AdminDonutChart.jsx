import React from 'react';
import { PieChart, Pie, Cell, Label } from 'recharts';

const AdminDonutChart = () => {
  const data = [
    { name: 'General', value: 200 },
    { name: 'Ortho', value: 300 },
    { name: 'others', value: 300 },
  ];

  const COLORS = ['#0284c7', '#fbbf24', '#4ade80'];

  const renderLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.3;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    const { name, value } = data[index]; 

    return (
      <text
        x={x}
        y={y}
        fill="#000" 
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
        fontSize={16}
        fontWeight="bold"
      >
        {`${name}`}
      </text>
    );
  };

  return (
    <div className="w-full h-auto flex justify-center">
      <div className="w-full">
        <PieChart width={300} height={280}>
          <Pie
            data={data}
            cx={170}
            cy={140}
            innerRadius={50}
            outerRadius={110}
            fill="#8884d8"
            dataKey="value"
            labelLine={false}
            label={renderLabel} // Use the custom renderLabel function to display text values
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        <h1 className="text-3xl text-center mt-3 text-bold">Health status</h1>
      </div>
    </div>
  );
};

export default AdminDonutChart;
