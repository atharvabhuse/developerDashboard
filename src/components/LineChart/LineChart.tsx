import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import styles from "./LineChart.module.scss";
import { useTheme } from "../../services/queries/hooks/useTheme";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface LineChartInterface {
  labels: string[];
  data: number[];
}
const LineChart = ({ labels, data }: LineChartInterface) => {
  const theme = useTheme();

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Activity over time",
        data: data,
        fill: false,
        backgroundColor: theme.mode === "light" ? "gray" : "white",
        borderColor: theme.mode === "light" ? "gray" : "white",
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: theme.mode === "light" ? "gray" : "white",
        },
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Activity Line Chart",
        color: theme.mode === "light" ? "gray" : "white",
      },
    },
    scales: {
      x: {
        ticks: {
          color: theme.mode === "light" ? "gray" : "white",
        },
        grid: {
          color:
            theme.mode === "light" ? "rgb(0,0,0,0.2)" : "rgb(255,255,255,0.2)",
        },
      },
      y: {
        ticks: {
          color: theme.mode === "light" ? "gray" : "white",
        },
        grid: {
          color:
            theme.mode === "light" ? "rgb(0,0,0,0.2)" : "rgb(255,255,255,0.2)",
        },
      },
    },
  };

  return (
    <div className={styles.lineChart_container} style={theme.style}>
      <Line className={styles.lineChart} data={chartData} options={options} />
    </div>
  );
};

export default LineChart;
