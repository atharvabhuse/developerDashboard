import React from "react";
import styles from "./TotalActivity.module.scss";

const TotalActivity = ({ totalActivity }: any) => {
  return (
    <div className={styles.totalActivity_container}>
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
