import React from 'react'
import styles from './SelectEmployeeBanner.module.scss'
import employee from '../../images/employee.png'
const SelectEmployeeBanner = () => {
  return (
    <div className={styles.selectEmployeeBanner_container}>
      <img className={styles.selectEmployeeBanner_image} src={employee} alt='employee'/>
      <div className={styles.selectEmployeeBanner_text}>Please select Developer</div>
    </div>
  )
}

export default SelectEmployeeBanner
