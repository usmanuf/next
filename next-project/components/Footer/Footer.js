import React, { useEffect, useState } from 'react';
import Logo from "../Footer/Logo";
import Link from "next/link"
import { footerLinks, link } from "../../AppContant";
// import Link from 'next/link';
import { URL_API } from "../../variables";
import MapLocation from '../../public/assets/icons/map-location.png';
import PhoneIcon from '../../public/assets/icons/phone-icon.png';
import WhatsAppIcon from '../../public/assets/icons/whatsapp.png';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../styles/Footer.module.css';
import { FaChevronRight } from "react-icons/fa";
const Footer = () => {
    const [Article, setArticle] = useState([]);
    useEffect(() => {
        const config = {
            header: {
                Authorization: 'Bearer' + localStorage.getItem('item')
            }
        }
        const getServiesData = async () => {
            await fetch(URL_API + "auth/customer/articles", config)
                .then((responce) => responce.json())
                .then((data) => {
                    
                    setArticle(data.articles);
                });
        };
        getServiesData();
    }, []);
    
    return (<>
        <div className={styles.FooterTop}>
            <div className={'container'}>
                <div className={'row'}>
                <div className={'row m-6'}>
                    <div className={'col-md-4 col-sm-6 col-xs-12'}>
                        <div className={styles.logoFooter}>
                            <Logo />
                        </div>
                        <div className={'row'}>
                           <div className={'col-md-12 col-sm-12 mb-4'}>
                               <a href={'https://goo.gl/maps/qzsxSGHXFr7mQSXr8'} className={styles.linksSocial}>
                                    <Image className={styles.imgSection} width={25} 
                                        height={25} 
                                        unoptimized={true}
                                        loading="eager"
                                        layout="fixed" src={MapLocation} alt="" />
                                    <span style={{ cursor: "pointer" }} className={styles.linksSocialIcons}>P.O.Box 28328 Office# 203 Barsha 1 Maktab  <br /> 
                                    <span className={styles.footerStylesMap}>building behind Mall of the Emirates</span> </span>
                                </a>
                            </div>
                            <div className={'col-md-12 col-sm-12 mb-4'}>
                                <a href='tel:+971558829990' className={styles.linksSocial}>
                                    <Image className={styles.imgSection} width={25} 
                                        height={25} 
                                        unoptimized={true}
                                        loading="eager"
                                        layout="fixed" src={PhoneIcon} alt="" />
                                    <span className={styles.linksSocialIcons}>+971 55 882 9990 </span>

                                </a>
                            </div>
                            <div className={'col-md-12 col-sm-12 mb-4'}>
                                <a className={styles.linksSocial} href='https://api.whatsapp.com/send?phone=+971558829990&text=I%27m%20interested%20to%20sell%20my%20Car'>
                                      <Image className={styles.imgSection} width={25} 
                                        height={25} 
                                        unoptimized={true}
                                        loading="eager"
                                        layout="fixed" src={WhatsAppIcon} alt="" />
                                    <span className={styles.linksSocialIcons}>Send WhatsApp </span>
                                </a>
                            </div>
                        </div> 
                    </div>
                     <div className={'col-md-4 col-sm-6 col-xs-12'}>
                        <div className={styles.headingFooter}>Popular links</div>
                        {link.map((link, index) => (<div key={index} className={styles.pageLinks}>
                           <Link href={link.link}>
                               <a  href={link.link} className={styles.PageLinksAnchor}>
                                <FaChevronRight  className={'FaChevronRight mt-1 mr-2'}/>
                                <span>{link.text}</span>
                            </a>
                           </Link>   {/* <i className={link.icon}></i> */}

                        </div>))}
                    </div>
                    <div className={'col-md-4 col-sm-6 col-xs-12'}>
                        <div className={styles.headingFooter}>UseFull links</div>
                        {footerLinks.map((link, index) => (<div  key={index} className={styles.pageLinks}>
                           <Link href={link.url} >
                               <a  href={link.url} className={styles.PageLinksAnchor}>
                            <FaChevronRight  className={'FaChevronRight mt-1 mr-2'}/>
                                <span>{link.text}</span>
                            </a>
                           </Link>
                        </div>))}
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className={'row'}>
            <div className={styles.footerBottom}><p>Copyright © 2021 All Rights Reserved CrazyCarCornner</p></div>
        </div>
    </>)
}
export default Footer;
