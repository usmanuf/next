import { VscDebugBreakpointData } from 'react-icons/vsc';
import HeroFrom from "../FormSection/HeroForm";
import { IoLogoWhatsapp } from 'react-icons/io';
import { FaPhoneAlt } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';
import styles from '../../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
export const Home = () => {
  return (
    <>
      <div className={styles.Herosection}>
          <div className={'container'}>
          <div className={styles.heroTextSection}>
            <div className={'row'}>
                <Fade left>
                    <div className={'col-lg-6 col-sm-12'}>
                            <div className={styles.contentHome}>
                            <div className={styles.paraGraphHome}>
                                <p>Is it time to <strong className={styles.fontStyles}> sell your car?</strong><br />
                                <span className={styles.spanHome}> Crazy Car Corner</span> are here!</p><br />
                            </div>
                            <div className={styles.listHero}>
                                <div className={styles.TextHero}>Sell your car in 30 minutes Car Valuation!</div>
                                <div className={styles.ListShowcase}><VscDebugBreakpointData className={styles.spanDott} />Guaranteed Purchase</div>
                                <div className={styles.ListShowcase}><VscDebugBreakpointData className={styles.spanDott} />Quick and Easy</div>
                                <div className={styles.ListShowcase}><VscDebugBreakpointData className={styles.spanDott} />No Costs, No Obligation</div>
                                <div className={styles.ListShowcase}><VscDebugBreakpointData className={styles.spanDott} />Fast and Secure</div>
                                <div className={styles.textHome}>Look no further than visit <a className={styles.colorStyles} href="https://crazycarcorner.com/" > www.crazycarcorner.com!</a> </div>
                            </div>
                            <div className={'col-lg-6 col-sm-12'}>
                            <div className={styles.heroBtn}>  
                                <a className={styles.btnWhatsapp} href={'https://api.whatsapp.com/send?phone=+971558829990&text=I%27m%20interested%20to%20sell%20my%20Car'}>
                                    <div className={styles.btnHomes}><IoLogoWhatsapp className={styles.iconHome} />WhatsApp</div>
                                </a>   
                                <a href="tel:+971558829990" className={styles.btnCallus}>
                                    <div className={styles.btnHomesCall}><FaPhoneAlt className={styles.iconHome} />Call Us</div>
                                </a>
                            </div>
                            </div>
                        </div>
                       
                    </div>
                </Fade>
                <Fade right>
                    <div className={'col-lg-6 col-sm-12'}>
                        <HeroFrom/>
                    </div>
                </Fade>
            </div>
        </div>
        </div>
        </div>
    </>
  );
};