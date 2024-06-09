import React from "react";
import styles from "./ActiveDays.module.scss";
import { useTheme } from "../../services/queries/hooks/useTheme";
interface ActiveDaysInterface {
    activeDays: number;
    burnout: boolean;
}

const ActiveDays = ({ activeDays, burnout }: ActiveDaysInterface) => {
  const isBurnOutFn = () => {
    if (burnout === false) {
      return "No";
    } else if (burnout === true) {
      return "Yes";
    }
  };
  const theme = useTheme();

  return (
    <div className={styles.activedays_container}>
      <div className={styles.activedays} style={theme.style}>
        <div className={styles.activedays_text}>Active Days</div>
        <div className={styles.activedays_value}>{activeDays ?? "-"}</div>
      </div>
      <div className={styles.burnout} style={theme.style}>
        <div className={styles.burnout_text}>Burnout</div>
        <div className={styles.burnout_value}>{isBurnOutFn() ?? "-"}</div>
      </div>
    </div>
  );
};

export default ActiveDays;
