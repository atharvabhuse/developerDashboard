import React, { useState } from "react";
import styles from "./Employees.module.scss";
import { useTheme } from "../../services/queries/hooks/useTheme";

interface EmployeesInterface {
  list: string[];
  employeeClicked: (arg: string) => void;
}

const Employees: React.FC<{
  list: string[];
  employeeClicked: (arg: string) => void;
}> = React.memo(({ list, employeeClicked }: EmployeesInterface) => {
  const [selected, setSelected] = useState<null | number>(null);
  const employeeClickHandler = (data: string, index: number) => {
    setSelected(index);
    employeeClicked(data);
  };
  const theme = useTheme();

  return (
    <div className={styles.employees_container} style={theme.drawerStyle}>
      <div className={styles.employees_heading}>Developers List</div>
      {list?.map((data: string, index: number) => (
        <div
          key={index}
          className={
            index === selected ? styles.employees_selected : styles.employees
          }
          onClick={() => employeeClickHandler(data, index)}
        >
          {data}
        </div>
      ))}
    </div>
  );
});

export default Employees;
