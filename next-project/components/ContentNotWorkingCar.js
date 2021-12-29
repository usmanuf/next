import React from 'react'
import NotWorkImgs from '../public/assets/Images/overheating-car.jpeg';
import { AiFillCheckCircle } from 'react-icons/ai';
import { IoLogoWhatsapp } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import styles from '../styles/ContentNotWorkingCar.module.css';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
function ContentNotWorking(props) {

    return (
        <div className={styles.LookingCar}>
        <div className='container'>
            <div className={'row p-3'}>
                <div className={'col-sm-12 col-md-6'}>
                    <Image className={styles.imgLookingCars} src={NotWorkImgs} alt={'/'} />
                </div>
                <div className={'col-sm-12 col-md-6'}>
                    <div className={styles.ParagraphName}>
                        <div className={styles.ParagraphNotWorking}>
                            WE BUY FOLLOWING TYPE OF VEHICLES IN ANY CONDITION
                        </div>
                        <div className={styles.paraGrahpNotWorking}><AiFillCheckCircle className={styles.IconPara} /> Used Working Cars</div>
                        <div className={styles.paraGrahpNotWorking}><AiFillCheckCircle className={styles.IconPara} />Used Damaged Cars</div>
                        <div className={styles.paraGrahpNotWorking}><AiFillCheckCircle className={styles.IconPara} />Accidental Damaged Cars</div>
                        <div className={styles.paraGrahpNotWorking}><AiFillCheckCircle className={styles.IconPara} />Abandoned Cars</div>
                        <div className={styles.paraGrahpNotWorking}><AiFillCheckCircle className={styles.IconPara} />RTA / Adnoc / Tasjeel failed and rejected cars</div>
                        <div className={styles.paraGrahpNotWorking}><AiFillCheckCircle className={styles.IconPara} />Cars with Bank Mortgage / Loan</div>
                        <div className={styles.paraGrahpNotWorking}><AiFillCheckCircle className={styles.IconPara} />Cars With Over Heating Problem</div>
                        <div className={styles.paraGrahpNotWorking}><AiFillCheckCircle className={styles.IconPara} />Scrap Cars</div>
                        <div className={styles.paraGrahpNotWorking}><AiFillCheckCircle className={styles.IconPara} />Junk Cars</div>
                        <div className={styles.paraGrahpNotWorking}><AiFillCheckCircle className={styles.IconPara} />Non-Working Cars</div>
                        <div className={styles.paraGrahpNotWorking}><AiFillCheckCircle className={styles.IconPara} />Cars with Expired Registration</div>
                        <div className={styles.paraGrahpNotWorking}><AiFillCheckCircle className={styles.IconPara} />Mechanically unfit Cars</div>
                        <div className={styles.paraGrahpNotWorking}><AiFillCheckCircle className={styles.IconPara} />Cars with Dead Engines</div>
                        <div className={styles.paraGrahpNotWorking}><AiFillCheckCircle className={styles.IconPara} />Cars with TRANSMISSION ISSUES</div>
                        <div className={styles.paraGrahpNotWorking}><AiFillCheckCircle className={styles.IconPara} />Cars with Expired registration and Insurance</div>
                    </div>
                    <div className={styles.BtnAbout}>
                        <div className={styles.approach}>
                            You can approach us via
                        </div>
                        <div className={'col-md-6 col-sm-12'}>
                            <div className={styles.AboutBtn}>
                            <a href={'https://api.whatsapp.com/send?phone=+971558829990&text=I%27m%20interested%20to%20sell%20my%20Car'}
                                 className={styles.btnWhatsappAbout}>
                                <div className={'d-flex align-item-center'}><IoLogoWhatsapp className={styles.iconHome} />Whatsapp</div>
                            </a>
                            <a href="tel:+971558829990"
                                 className={styles.btnCallusAbout}>
                                <div className={'d-flex align-item-center'}><FaPhoneAlt className={styles.iconHome} />Call Us</div>
                            </a>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
            </div>
        </div>
    )
}
export default ContentNotWorking;
