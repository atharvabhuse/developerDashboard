import React from "react";
import styles from "./TotalActivity.module.scss";
import { useTheme } from "../../services/queries/hooks/useTheme";

interface TotalActivityInterface {
  totalActivity: {
    name: string;
    value: string;
  }[];
}
const TotalActivity = ({ totalActivity }: TotalActivityInterface) => {
  const theme = useTheme();
  console.log(totalActivity);
  return (
    <div className={styles.totalActivity_container} style={theme.style}>
      <div className={styles.totalActivity_heading}>Total Activity</div>
      <div className={styles.activity_row}>
        {totalActivity?.map(
          (data: { name: string; value: string }, index: number) => (
            <div className={styles.activity} key={index}>
              <div className={styles.activity_name}>{data.name}</div>
              <div className={styles.activity_value}>{data.value}</div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default TotalActivity;
