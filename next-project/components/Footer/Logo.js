import React from 'react'
import Img from '../../public/assets/Logo/logo.png';
import Image  from 'next/image';
import Link from "next/link"
import styles from '../../styles/Logo.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function Logo() {
  return (
    <div className={'conatiner'}>
    <div className={styles.logo}>
      <Link href="/" passHref>
    <Image src={Img} alt="" />
      </Link>
      </div>

    </div>
  
    
  )
}
export default Logo
