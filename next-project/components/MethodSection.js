import React from 'react';
import { BiMessageSquareDetail } from "react-icons/bi";
import { MdLocalOffer } from "react-icons/md";
import { AiOutlineFundView } from "react-icons/ai";
import { GiPayMoney } from "react-icons/gi";
import Heading from "../components/Heading/heading";
import styles from '../styles/MethodSection.module.css';
const MethodSection = () => {
    return (<>
        <div className={'container'}>
            <div className={'m-auto text-center'}>
                <Heading title={'Simple method to get started'} />
            </div>
            <div className={'row p-4'}>
                <div className={'col-sm-6 col-md-3 mb-4'}>
                    <div className={styles.methodbox}>
                        <div className={styles.methodIcon}>
                            <BiMessageSquareDetail />
                        </div>
                        <div className={styles.methodText}>
                            Send us some details
                        </div>
                    </div>
                </div>
                <div className={'col-sm-6 col-md-3 mb-4'}>
                    <div className={styles.methodbox}>
                        <div className={styles.methodIcon}>
                            <MdLocalOffer />
                        </div>
                        <div className={styles.methodText}>
                            We make you an offer
                        </div>
                    </div>
                </div>
                <div className={'col-sm-6 col-md-3 mb-4'}>
                    <div className={styles.methodbox}>
                        <div className={styles.methodIcon}>
                            <AiOutlineFundView />
                        </div>
                        <div className={styles.methodText}>
                            We come to view your car at your doorstep
                        </div>
                    </div>
                </div>
                <div className={'col-sm-6 col-md-3 mb-4'}>
                    <div className={styles.methodbox}>
                        <div className={styles.methodIcon}>
                            <GiPayMoney />
                        </div>
                        <div className={styles.methodText}>
                            We pay you
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>)
}
export default MethodSection;
