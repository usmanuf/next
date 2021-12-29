import React from "react";
import CallIcon from '@material-ui/icons/Call';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Heading from "../components/Heading/heading";
import RubberBand from 'react-reveal/RubberBand';
import Bounce from 'react-reveal/Bounce';
import styles from '../styles/ContactDetail.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const MapShow = () => {
    window.open ("https://goo.gl/maps/qzsxSGHXFr7mQSXr8");
}
function ContactDetail() {
    return (
        <div className={styles.contacts}>
            <div className={'row container'}>
            <RubberBand>
                <div className={'col-lg-4 col-sm-4 mb-3'}>
                    <a href={'mailto:talktous@crazycarcorner.com'} className={styles.cardContactUs}>
                        <div className={styles.cordContactLogo}>
                            <MailOutlineIcon className={styles.ContactLogo} />
                        </div>
                        <div className={styles.contactHeading}>
                            Email Address
                        </div>
                        <div className={styles.contactText}>
                            talktous@crazycarcorner.com
                        </div>
                    </a>
                </div>
                </RubberBand>
                <RubberBand>
                <div className={'col-lg-4 col-sm-4 mb-3'}>
                    <a href={'tel:+971558829990'} className={styles.cardContactUs}>
                        <div className={styles.cordContactLogo}>
                            <CallIcon className={styles.ContactLogo} />
                        </div>
                        <div className={styles.contactHeading}>
                            Contact Number
                        </div>
                        <div className={styles.contactText}>
                            +971 55 882 9990
                        </div>
                    </a>
                </div>
                </RubberBand>
                <RubberBand>
                <div className={'col-lg-4 col-sm-4 mb-3'}>
                    <a className={styles.cardContactUs}>
                        <div className={styles.cordContactLogo} >
                            <LocationOnIcon className={styles.ContactLogo} />
                        </div>
                        <div className={styles.contactHeading}>
                            Address
                        </div>
                      <a href="https://www.google.com/maps/place/Mall+of+the+Emirates/@25.118107,55.200608,17z/data=!4m5!3m4!1s0x0:0x47afe5626875154c!8m2!3d25.118107!4d55.200608?hl=en&shorturl=1">  <div className={styles.contactText} onClick={() => MapShow()} style={{ cursor: "pointer" }}>
                            P.O.Box 28328 Office #203 Barsha 1 Maktab building behind Mall of the Emirates
                        </div></a>
                    </a>
                </div>
                </RubberBand>
                <Bounce left>
                <div className={'col-sm-12 text-center my-4'}>
                    <Heading title={'Contact Us'} text={''} />
                </div>
                </Bounce>
                <Bounce right>
                    <div className={styles.paraWhys}>
                        Get in touch and our knowledgeable support staff will gladly answer any
                        queries you may have. We have teams dedicated to advising on various aspects
                        of automobile sales and other requirements.
                    </div>
                </Bounce>
            </div>
        </div>
    );
}
export default ContactDetail;
