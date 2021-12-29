import React from 'react';
import Heading from "../../components/Heading/heading";
import { StepCar } from "../../AppContant";
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import Rotate from 'react-reveal/Rotate';
import Image from 'next/image';
import styles from '../../styles/StepSellYourCar.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function StepSellYourCar(props) {
    return (
        <div className={styles.Steps}>
            <div className={'container'}>
                <div className={'mb-2 text-center'}>
                <Fade right>
                    <Heading title={'3 Easy steps to sell your car '} text={''} />
                    </Fade>
                </div>
                <Bounce left>
                <div className={styles.paraGraphStep}>
                    <div className={styles.paraWhys}>
                        Evaluate your Car online, book an appointment and complete the sale.
                        We buy any car whatever its condition within 30 minutes after inspection
                    </div>
                </div>
                </Bounce>
                
                <div className={styles.paraGraphStep}>
                    <div className={'row'}>
                        {
                            StepCar.map((item, index) => {
                                return (<div key={index} className={'col-sm-12 col-md-4'}>
                                    <div className={styles.StepsContain}>
                                    <Bounce right>
                                    <div className={styles.StepsHeading}>{item.heading}</div>
                                    </Bounce>
                                    <Rotate top left>
                                    <div className={styles.BlankDivStep}>
                                        <Image src={item.imgsStep} alt={item.imgsStep} />
                                    </div>
                                    </Rotate>
                                </div>
                                </div>)
                            })
                        }
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default StepSellYourCar;
