import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import React from "react";
import { Pie } from "react-chartjs-2";
import styles from "./Piechart.module.scss";
import { useTheme } from "../../services/queries/hooks/useTheme";
ChartJS.register(ArcElement, Tooltip, Legend);
interface PieChartInterface {
  data: string[];
  labels: string[];
}
const Piechart = ({ data, labels }: PieChartInterface) => {
  const theme = useTheme();
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Activity distribution",
        data: data,
        backgroundColor: [
          `rgba(255, 99, 132, ${theme?.mode === "light" ? 0.2 : 1})`,
          `rgba(54, 162, 235, ${theme?.mode === "light" ? 0.2 : 1})`,
          `rgba(255, 206, 86, ${theme?.mode === "light" ? 0.2 : 1})`,
          `rgba(75, 192, 192, ${theme?.mode === "light" ? 0.2 : 1})`,
          `rgba(153, 102, 255, ${theme?.mode === "light" ? 0.2 : 1})`,
          `rgba(255, 159, 64, ${theme?.mode === "light" ? 0.2 : 1})`,
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: theme.mode === "light" ? "black" : "white",
        },
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Activity distribution piechart",
        color: theme.mode === "light" ? "gray" : "white",
      },
    },
  };

  return (
    <div className={styles.piechart_container} style={theme.style}>
      <Pie className={styles.piechart} data={chartData} options={options} />
    </div>
  );
};

export default Piechart;
