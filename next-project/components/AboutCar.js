import React from 'react'
import Heading from "../components/Heading/heading";
import { IoLogoWhatsapp } from "react-icons/io";
import Img from '../public/assets/Images/instant-car.jpg';
import { FaPhoneAlt } from "react-icons/fa";
import RubberBand from 'react-reveal/RubberBand';
import Bounce from 'react-reveal/Bounce';
import styles from '../styles/AboutCar.module.css';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
function AboutCar() {

    return (
        <div className={styles.AboutCar}>
            <div className={'container'}>
            <RubberBand>
                <div>
                    <Heading title={'About Us'} />
                </div>
                </RubberBand>
                <div className={'row'}>
                    <div className={'col-md-6 col-sm-12'}>
                    <Bounce right>
                        <div className={styles.imageSection}>
                        <Image className={styles.imgLookingCars} src={Img} alt={'/'} />
                        </div>
                    </Bounce>
                    </div>
                    <div className={'col-md-6 col-sm-12'}>
                        <div className={styles.marStyles}>
                    <Bounce left>
                    <div className={styles.paraGraphLooking}>
                        We are the largest car-buying business in the GCC, with over 10,000 satisfied clients.
                        Our simple three-step procedure makes selling an automobile quick,
                        straightforward, safe, and convenient for our consumers. Free from the hassles of a
                        private transaction and the inevitable part-exchange haggling. But, believe it or not,
                        we are not simply vehicle buyers. We set ourselves apart from the competition with
                        our <b>free car valuation</b> and door-to-door physical automobile inspection service.
                        We are a very large group, and there a lot going on behind the scenes.
                    </div>
                    </Bounce>
                    <Bounce left>
                    <div className={styles.paraGraphLooking}>
                        Get a free online automobile evaluation. Our <b>online car valuation</b> tool is simple to
                        use, free and gives a quick quotation. If the automobile is in the condition you say it
                        is in, our price guarantee assures you get the price we offer online, and your value
                        is guaranteed for three days.
                    </div>
                    </Bounce>
                    <Bounce left>
                    <div className={styles.paraGraphLooking}>
                        Make a reservation. Its quite easy to schedule an appointment online. If you are
                        searching for <b>car buyers near me</b>, Crazy Car Corner is the simplest way to go. We
                        have over 200 locations around the country, so there certain to be one near you.
                        Most are open seven days a week and provide 15-minute appointments, allowing
                        you to sell your automobile whenever and wherever you choose.
                    </div>
                    </Bounce>
                    
                </div>
                
                </div>
                <Bounce left>
                    <div className={styles.paraGraphLooking}>
                        You should <b>sell your car</b>. Our service is simple, uncomplicated, and hassle-free. In as
                        little as 20 minutes, we can acquire your automobile and deposit the funds directly
                        into your bank account. Free from the hassle and haggle of private sale or part
                        exchange
                    </div>
                    </Bounce>
                 </div>
                <div className={styles.BtnAbout}>
                    <div className={styles.approach}>
                        You can approach us via
                    </div>
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
    )
}
export default AboutCar;
