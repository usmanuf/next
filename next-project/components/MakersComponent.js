import React from 'react';
import styles from '../styles/MakersComponent.module.css';
import Image from 'next/image';
const MakersComponent = ({ img,title }) => {
    return (<>
        <div className={styles.mainBox}>
            <div className={styles.imgMianDiv}>
                <Image className={styles.imgMianbox} src={img} alt="Picture of the model"
                    width={100}
                    height={100} />
            </div>
            <div className={styles.titleMainBox}>{title}</div>
        </div>
    </>)
};
export default MakersComponent;