import React from 'react';
import { BiCheckboxSquare } from "react-icons/bi";
import Heading from "../components/Heading/heading";
import styles from '../styles/DoorStep.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DoorStepCar from '../public/assets/Images/doorstep-img.jpeg';
import Image from 'next/image';
const Doorstep = () => {
    return (<>
        <div className={'container'}>
            <div className={'m-auto text-center'}>
                <Heading title={'We Come to Your Doorstep to Inspect the Car for Free.'} />
            </div>
            <div className={'row'}>
            <div className={'col-md-5 col-sm-12 p-4'}>
                <div className={styles.maxWidthWorking}>
                <div className={styles.HeadingWorkingCar}>
                    Our Services Include:
                </div>
                <div className={styles.ParagraphWorkings}>
                    <div>
                        <BiCheckboxSquare className={styles.IconWorking} />
                    </div>
                    <div>
                        Free and instant online car valuation
                    </div>
                </div> <div className={styles.ParagraphWorkings}>
                    <div>
                        <BiCheckboxSquare className={styles.IconWorking} />
                    </div>
                    <div>
                        Free car Inspection
                    </div>
                </div> <div className={styles.ParagraphWorkings}>
                    <div>
                        <BiCheckboxSquare className={styles.IconWorking} />
                    </div>
                    <div>
                        Guarantee to purchase any car within 30 minutes
                    </div>
                </div> <div className={styles.ParagraphWorkings}>
                    <div>
                        <BiCheckboxSquare className={styles.IconWorking} />
                    </div>
                    <div>
                        Instant payment
                    </div>
                </div> <div className={styles.ParagraphWorkings}>
                    <div>
                        <BiCheckboxSquare className={styles.IconWorking} />
                    </div>
                    <div>
                        We take care of all paperwork
                    </div>
                </div>
            </div>
        </div>
        <div className={'col-md-7 col-sm-12 p-4'}>
            <Image src={DoorStepCar} width={630} height={250} alt=""/>
        </div>
        </div>
        </div>
    </>)
}
export default Doorstep;
