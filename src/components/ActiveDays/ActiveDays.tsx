import React, { useEffect } from "react";
import styles from './ActiveDays.module.scss'

const ActiveDays = ({activeDays, burnout}: any) => {
    const isBurnOutFn = () =>{
        if(burnout===false){
            return 'No'
        }else if(burnout === true){
            return 'Yes'
        }
    }
  return (
    <div className={styles.activedays_container}>
      <div className={styles.activedays}>
        <div className={styles.activedays_text}>Active Days</div>
        <div className={styles.activedays_value}>{activeDays ?? '-'}</div>
      </div>
      <div className={styles.burnout}>
        <div className={styles.burnout_text}>Burnout</div>
        <div className={styles.burnout_value}>{isBurnOutFn() ?? '-'}</div>
      </div>
    </div>
  );
};

export default ActiveDays;
