import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, LineController, PointElement, LineElement } from 'chart.js';
Chart.register(CategoryScale, LinearScale, LineController, PointElement, LineElement);

const DashboardChart = () => {
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'dsgrht', 'ddd'],
    datasets: [
      {
        label: 'Line 1',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'transparent',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(255, 99, 132, 1)',
        pointBorderColor: 'rgba(255, 255, 255, 1)',
        pointBorderWidth: 1,
        pointRadius: 0,
        fill: false,
      },
      {
        label: 'Line 2',
        data: [8, 12, 6, 10, 4, 7, 9, 2],
        backgroundColor: 'transparent',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(54, 162, 235, 1)',
        pointBorderColor: 'rgba(255, 255, 255, 1)',
        pointBorderWidth: 1,
        pointRadius: 0,
        fill: false,
      },
      {
        label: 'Line 3',
        data: [5, 8, 2, 7, 6, 4],
        backgroundColor: 'transparent',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
        pointBorderColor: 'rgba(255, 255, 255, 1)',
        pointBorderWidth: 1,
        pointRadius: 0,
        fill: false,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        type: 'linear',
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          font: {
            weight: 'bold',
          },
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      point: {
        radius: 0,
      },
      line: {
        tension: 0.2,
      },
    },
    interaction: {
      intersect: false,
    },
  };

  const legend = {
    display: true,
    position: 'top',
    labels: {
      usePointStyle: true,
    },
  };

  return (
    <div className='w-[40rem] ml-[40px]' style={{ height: '300px' }}>
      <div className='card border border-gray-200 rounded-lg shadow'>
        <div className='card-header'>
          <h3 className='card-heading'>Health Status</h3>
          <div className='label-box'></div>
        </div>
        <div className='card-body'>
          <Line data={data} options={options} legend={legend} />
        </div>
      </div>
    </div>
  );
};

export default DashboardChart;
