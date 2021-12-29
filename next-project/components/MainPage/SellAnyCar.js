import React from 'react';
import HeroFrom from '../FormSection/HeroForm';
import styles from '../../styles/SellAnyCar.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function SellAnyCar(props) {

    return (
        <div className={styles.SellAnyCar}>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-md-3 col-sm-12'}></div>
                    <div className={'col-md-7 col-sm-12'}>
                    <HeroFrom />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SellAnyCar;
