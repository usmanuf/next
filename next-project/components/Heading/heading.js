import React from 'react';
import styles from '../../styles/HeadingStyles.module.css';
function Heading({ title, text }) {

    return (

        <div className={styles.headingMain}>
            <div className={styles.titleHeading}>{title}</div>
            <span className={styles.lineStyles}></span>
            <p className={styles.ParaHeading}>{text}</p>
        </div>
    )
}
export default Heading;
