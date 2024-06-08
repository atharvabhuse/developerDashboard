import React from 'react'
import styles from './Header.module.scss'
const Header = () => {
  return (
    <div className={styles.header_container}>
      <div className={styles.header_text}>Developers Dashboard</div>
    </div>
  )
}

export default Header
