import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import React from 'react'
import { Pie } from 'react-chartjs-2'
import styles from './Piechart.module.scss'

ChartJS.register(ArcElement, Tooltip, Legend)
const Piechart = ({data, labels}: any) => {

    const chartData = {
        labels: labels,
        datasets: [
            {
                label: 'Activity distribution',
                data: data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                  ],
                  borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                  ],
                  borderWidth: 1,
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
                text: 'Activity distribution piechart'
            }
        }
    }
  return (
    <div className={styles.piechart_container}>
      <Pie className={styles.piechart} data={chartData} options={options}/>
    </div>
  )
}

export default Piechart