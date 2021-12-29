import React from 'react';
import HeroFrom from "../components/FormSection/HeroForm";
// import styles '../styles/FreeOnlineValuation.module.css';
import styles from "../styles/FreeOnlineValuation.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
const valuation = () => {
    return (
        <>
            <div className={styles.freeInspection}  >
                <div className="container">
                    <div className="row">
                        <div className={'col-lg-3 col-sm-12'}></div>
                        <div className={'col-lg-7 col-sm-12 mb-10'}>
                            <HeroFrom />

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default valuation;