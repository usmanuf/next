import React from 'react'
import Heading from "../../components/Heading/heading";
import CarImga from '../../public/assets/Images/car-inspection.jpg';
import Fade from 'react-reveal/Fade';
import Image from 'next/image';
import { FaArrowAltCircleRight } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../styles/LookingCar.module.css';
export const LookingCar = () => {
    return (
        <div className={styles.LookingCar}>
            <div className={'container'}>
            <div className={'row'}>
                <Fade left>
                    <div className={'col-sm-12 col-md-6 mt-4'}>
                        <Image className={styles.imgsLookingCar} src={CarImga} alt={'/'} />
                    </div>
                </Fade>
                <Fade up>
                    <div className={'col-sm-12 col-md-6 mt-4'}>
                        <div className={styles.headingStyles}>
                            <div className={styles.headingtext}>  Save your credit! <b>Car valuation estimator</b> will come at your place for car inspection.</div>
                        </div>
                        <Heading title={''} />

                        <div className={styles.paraGraphLooking}>
                            Do you want to save your fuel expense? Crazy car corner will provide you a great
                            deal by coming at your location for your<b> vehicle valuation.</b> Our car valuation officer
                            will come to your location and inspect your vehicle and its current condition.
                            Whether it is a car with dead engine or a mechanically failed car, we will inspect
                            and will buy it at its applicable <b>car resale value price.</b>
                        </div>
                        <div className={styles.ParagraphName}>
                            <div className={styles.ParagraphTexts}>
                                Crazy Car Corner will provide the following services:
                            </div>
                            <div className={styles.paraGrahpList}><FaArrowAltCircleRight  className={styles.FaArrowAltCircleRight}/>  Free and fast online car valuation and inspection.</div>
                            <div className={styles.paraGrahpList}><FaArrowAltCircleRight  className={styles.FaArrowAltCircleRight} /> Inspection of your vehicle is free.</div>
                            <div className={styles.paraGrahpList}><FaArrowAltCircleRight  className={styles.FaArrowAltCircleRight}/>  We will take care of all paperwork.</div>
                            <div className={styles.paraGrahpList}><FaArrowAltCircleRight  className={styles.FaArrowAltCircleRight} /> Instant payment.</div>
                            <div className={styles.paraGrahpList}><FaArrowAltCircleRight  className={styles.FaArrowAltCircleRight} /> We guarantee that we will buy any automobile within 30 minutes after inspection.</div>
                        </div>
                    </div>
                </Fade>
            </div>
            </div>
            </div>
    )
}
