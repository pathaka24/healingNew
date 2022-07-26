import React from 'react'
import Link from 'next/link'
import styles from './topnav.module.css'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import TimerIcon from '@material-ui/icons/Timer';
const TopNav = () => {
    const add = 'Noida Sec-93'
    const time ='10:00 AM to 8:00 PM'
  return (
    <div className={styles.topNav} >
        <div className={styles.topNavLeft} >
            <p className={styles.topNavText}>Welcome to the professional physiotherapy clinic</p>
        </div>
        <div className={styles.topNavRight}>
            <div className={styles.topNavIcons}> 
                 <Link href='/location/location'> 
                     <LocationOnIcon  className={styles.topNavIcon} />
                 </Link>
                 
                 <p className={styles.topNavText}>{add}</p>
            </div>
            <div className={styles.topNavIcons}>
            <Link href='/location/location'> 
                <TimerIcon className={styles.topNavIcon}  />
                </Link>
                <p className={styles.topNavText}>{time}</p>
            </div>
        </div>
    </div>
  )
}

export default TopNav