import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import styles from './LineChart.module.scss'
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
const LineChart = ({labels, data}: any) => {
    const chartData = {
        labels: labels,
        datasets: [
            {
                label: 'Activity over time',
                data: data,
                fill: false,
                backgroundColor: 'greeen',
                borderColor: 'black'
            }
        ]
    }
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const
            },
            title: {
                display: true,
                text: 'Activity Line Chart'
            },
        },
    }
  return (
    <div className={styles.lineChart_container}>
      <Line className={styles.lineChart} data={chartData} options={options} />
    </div>
  )
}

export default LineChart
