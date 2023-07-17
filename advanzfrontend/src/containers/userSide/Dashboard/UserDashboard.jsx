import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, LineController, PointElement, LineElement } from 'chart.js';
import UserSidebar from '../../../components/user/UserSidebar';

// Register the required scales and elements with Chart.js
Chart.register(CategoryScale, LinearScale, LineController, PointElement, LineElement);

const UserDashboard = () => {
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        fill: false,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        type: 'linear', // Use 'linear' scale type
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="flex">
      <UserSidebar />
      <div className="b h-[40rem] flex-1">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default UserDashboard;
