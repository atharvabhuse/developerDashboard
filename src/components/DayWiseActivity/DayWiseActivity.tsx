import React from "react";
import styles from './DayWiseActivity.module.scss'

const DayWiseActivity = ({ dayWiseActivity  }: any) => {
  return (
    <div className={styles.day_wise_activity_container}>
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
