import React from "react";
import styles from './DayWiseActivity.module.scss'
import { useTheme } from "../../services/queries/hooks/useTheme";


const DayWiseActivity = ({ dayWiseActivity  }: any) => {
    const theme = useTheme();

  return (
    <div className={styles.day_wise_activity_container} style={theme.style}>
      <div className={styles.day_wise_activity_date}>{dayWiseActivity.date}</div>
      {dayWiseActivity?.items?.children?.map((data: any) => (
        <div className={styles.day_wise_activity_count_label}>
          <div className={styles.day_wise_activity_count}>{data.count}</div>
          <div className={styles.day_wise_activity_label}>{data.label}</div>
        </div>
      ))}
    </div>
  );
};

export default DayWiseActivity;
