import React from "react";
import styles from "./TotalActivity.module.scss";
import { useTheme } from "../../services/queries/hooks/useTheme";

const TotalActivity = ({ totalActivity }: any) => {
    const theme = useTheme();

  return (
    <div className={styles.totalActivity_container} style={theme.style}>
      <div className={styles.totalActivity_heading}>Total Activity</div>
      <div className={styles.activity_row}>
        {totalActivity?.map((data: any) => (
          <div className={styles.activity}>
            <div className={styles.activity_name}>{data.name}</div>
            <div className={styles.activity_value}>{data.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TotalActivity;
