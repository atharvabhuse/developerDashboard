import React from 'react'
import styles from './SelectEmployeeBanner.module.scss'
import employee from '../../images/employee.png'
const SelectEmployeeBanner = () => {
  return (
    <div className={styles.SelectEmployeeBanner_container}>
      <img src={employee} alt='employee'/>
      <div className={styles.SelectEmployeeBanner_text}>Please select Developer</div>
    </div>
  )
}

export default SelectEmployeeBanner
