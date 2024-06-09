import React from "react";
import styles from "./DayWiseActivity.module.scss";
import { useTheme } from "../../services/queries/hooks/useTheme";

interface ChildrenInterface {
  count: string;
  fillColor: string;
  label: string;
}
interface DayWiseActivityInterface {
  dayWiseActivity: {
    date: string;
    items: {
      children: ChildrenInterface[];
    };
  };
}

const DayWiseActivity = ({ dayWiseActivity }: DayWiseActivityInterface) => {
  const theme = useTheme();
  return (
    <div className={styles.day_wise_activity_container} style={theme.style}>
      <div className={styles.day_wise_activity_date}>
        {dayWiseActivity.date}
      </div>
      {dayWiseActivity?.items?.children?.map(
        (data: ChildrenInterface, index: number) => (
          <div className={styles.day_wise_activity_count_label} key={index}>
            <div className={styles.day_wise_activity_count}>{data.count}</div>
            <div className={styles.day_wise_activity_label}>{data.label}</div>
          </div>
        )
      )}
    </div>
  );
};

export default DayWiseActivity;
