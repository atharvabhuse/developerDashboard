import React, { useReducer, useState } from "react";
import { EmployeesReducerActionTypes, employeesReducer } from "../../reducers/employeesReducer";
import styles from './Employees.module.scss'

const Employees: React.FC<{list: any[], employeeClicked: (arg: any)=>void}> = React.memo(({list, employeeClicked}: any) => {
    const [selected, setSelected] = useState<null | number>(null)
    const employeeClickHandler = (data: any,index: number) => {
        setSelected(index)
        employeeClicked(data);
    }
  return (
    <div className={styles.employees_container}>
      <div className={styles.employees_heading}>Developers List</div>
      {list?.map((data: any, index: number) => (
        <div className={index===selected ? styles.employees_selected : styles.employees} onClick={()=>employeeClickHandler(data,index)}>{data}</div>
      ))}
    </div>
  );
});

export default Employees;
