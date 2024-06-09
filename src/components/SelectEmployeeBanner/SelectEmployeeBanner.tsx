import React from "react";
import styles from "./SelectEmployeeBanner.module.scss";
import employee from "../../images/employee.png";
import { useTheme } from "../../services/queries/hooks/useTheme";
const SelectEmployeeBanner = () => {
  const theme = useTheme();
  return (
    <div className={styles.selectEmployeeBanner_container} style={theme.style}>
      <img
        className={styles.selectEmployeeBanner_image}
        src={employee}
        alt="employee"
      />
      <div className={styles.selectEmployeeBanner_text}>
        Please select Developer
      </div>
    </div>
  );
};

export default SelectEmployeeBanner;
