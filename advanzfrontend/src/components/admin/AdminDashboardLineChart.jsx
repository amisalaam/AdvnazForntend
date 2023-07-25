import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, LineController, PointElement, LineElement } from 'chart.js';
Chart.register(CategoryScale, LinearScale, LineController, PointElement, LineElement);

const AdminDashboardLineChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',],
    datasets: [
      {
        label: 'Orthopedic',
        data: [12, 19, 3, 5, 2, 3, 8, 10],
        backgroundColor: 'transparent',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 4,
        pointBackgroundColor: 'rgba(255, 99, 132, 1)',
        pointBorderColor: 'rgba(255, 255, 255, 1)',
        pointBorderWidth: 1,
        pointRadius: 0,
        fill: false,
      },
      {
        label: 'Dental',
        data: [8, 12, 6, 10, 4, 7, 9, 2],
        backgroundColor: 'transparent',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 4,
        pointBackgroundColor: 'rgba(54, 162, 235, 1)',
        pointBorderColor: 'rgba(255, 255, 255, 1)',
        pointBorderWidth: 1,
        pointRadius: 0,
        fill: false,
      },
      {
        label: 'Pediatric',
        data: [5, 8, 2, 7, 6, 4, 12, 15],
        backgroundColor: 'transparent',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 4,
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
        pointBorderColor: 'rgba(255, 255, 255, 1)',
        pointBorderWidth: 1,
        pointRadius: 0,
        fill: false,
      },
      {
        label: 'General Medicine',
        data: [10, 15, 6, 8, 4, 9, 5, 13],
        backgroundColor: 'transparent',
        borderColor: 'rgba(255, 205, 86, 1)',
        borderWidth: 4,
        pointBackgroundColor: 'rgba(255, 205, 86, 1)',
        pointBorderColor: 'rgba(255, 255, 255, 1)',
        pointBorderWidth: 1,
        pointRadius: 0,
        fill: false,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        type: 'linear',
        beginAtZero: false,
        grid: {
          display: false,
        },
        ticks: {
          font: {
            weight: 'bold',
          },
          stepSize: 5,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
      barPercentage: 0.1,
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          usePointStyle: true,
        },
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
    categoryPercentage: 0.1,
  };


 
  return (
    <div className=''>
      <div className='card border border-gray-200 rounded-lg shadow mx-5'>
        <div className='card-header'>
          <h3 className='card-heading text-2xl m-6 text-advanzRed '>Department</h3>
          <div className='label-box'></div>
        </div>
        <div className='card-body'>
          {/* Apply responsive styles to the parent container */}
          <div className='overflow-x-auto'>
            <div className='w-full h-60'>
              <Line data={data} options={options} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminDashboardLineChart;
