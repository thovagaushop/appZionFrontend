import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';

ChartJS.register(
CategoryScale,
LinearScale,
PointElement,
LineElement,
Title,
Tooltip,
Legend
);

const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };

const Analysis = () => {
  return (
    <>
        <Line
  datasetIdKey='id'
  data={{
    labels: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    datasets: [
      {
        id: 1,
        label: '',
        data: [5, 8, 7, 10, 1],
      },
      {
        id: 2,
        label: '',
        data: [3, 2, 1, 6, 9],
      },
    ],
  }}
/>
    </>
  )
}

export default Analysis