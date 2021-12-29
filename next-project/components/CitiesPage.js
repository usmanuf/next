import React from 'react';
import Rotate from 'react-reveal/Rotate';
import Image from 'next/image';
import styles from '../styles/CitiesPage.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Ras from '../public/assets/Cities/ras-al-khaimah.jpg';
import Dubai from '../public/assets/Cities/dubai-img.jpg';
import sharjah from '../public/assets/Cities/sharjah-img.jpg';
import abu from '../public/assets/Cities/abu-dhabi-img.jpg';
import alian from '../public/assets/Cities/alain-uae.jpg';
import Fujairah from '../public/assets/Cities/fujairah.jpg';
import Ajman from '../public/assets/Cities/ajman.jpg';
import Ruwais from '../public/assets/Cities/ruwais.jpg';;
import Liwa from '../public/assets/Cities/liwa.jpg';
function CitiesPage() {
    return (
        <div className={styles.CitiesPage}>
            <div className={'container'}>
                <div className={styles.paraGraphVehicle}>
                    <div className={'row'}>
                       <div className={'col-md-4 col-sm-12 my-3'}>
                            <div className={styles.boxStyles}>
                            <Rotate top left>
                                <div className={styles.CitiesPageImage}> 
                              <Image width={600} height={600} src={Ras} alt={'Ras'} />
                                </div>
                                <div className={styles.paddStyles}>
                                    <h3 className={styles.CitiesPageTextH3}>Ras Al Khaimah</h3>
                                    <p className={styles.CitiesPageTextP}> Everyone knows it is difficult to sell a car in the market but at Crazy Car Corner you
                                        can easily sell your car in Ras Al Khaima without any hassles.</p>
                                </div>
                            </Rotate>
                            </div>
                            </div>
                            <div className={'col-md-4 col-sm-12 my-3'}>
                            <div className={styles.boxStyles}>
                            <Rotate top left>
                                <div className={styles.CitiesPageImage}> 
                              <Image width={600} height={600} src={Dubai} alt={'Dubai'} />
                                </div>
                                <div className={styles.paddStyles}>
                                    <h3 className={styles.CitiesPageTextH3}>Dubai</h3>
                                    <p className={styles.CitiesPageTextP}> Are you looking for a dependable platform to sell your junk car in Dubai? Crazy Car
                                        Corner makes it simple to sell your junk car.</p>
                                </div>
                            </Rotate>
                            </div>
                            </div>
                            <div className={'col-md-4 col-sm-12 my-3'}>
                            <div className={styles.boxStyles}>
                            <Rotate top left>
                                <div className={styles.CitiesPageImage}> 
                              <Image width={600} height={600} src={sharjah} alt={'sharjah'} />
                                </div>
                                <div className={styles.paddStyles}>
                                    <h3 className={styles.CitiesPageTextH3}>Sharjah</h3>
                                    <p className={styles.CitiesPageTextP}> Do you want to sell your working or not working car in Sharjah? Crazy Car Corner is 
                                        undoubtedly beneficial to you. Our staff will arrive at the address you specify and 
                                        check your vehicle. Don’t wait great deal offer is waiting for you!</p>
                                </div>
                            </Rotate>
                            </div>
                            </div>
                            <div className={'col-md-4 col-sm-12 my-3'}>
                            <div className={styles.boxStyles}>
                            <Rotate top left>
                                <div className={styles.CitiesPageImage}> 
                              <Image width={600} height={600} src={abu} alt={'abu'} />
                                </div>
                                <div className={styles.paddStyles}>
                                    <h3 className={styles.CitiesPageTextH3}>Abu Dhabi</h3>
                                    <p className={styles.CitiesPageTextP}> Crazy Car Corner provides you with a fair price for your car with dead engine in Abu Dhabi.
                                        We will usually give you substantially more money according to your car condition.</p>
                                </div>
                            </Rotate>
                        </div>
                        </div>
                        <div className={'col-md-4 col-sm-12 my-3'}>
                        <div className={styles.boxStyles}>
                            <Rotate top left>
                                <div className={styles.CitiesPageImage}> 
                              <Image width={600} height={600} src={alian} alt={'alian'} />
                                </div>
                                <div className={styles.paddStyles}>
                                    <h3 className={styles.CitiesPageTextH3}>Alain</h3>
                                    <p className={styles.CitiesPageTextP}> Are you seeking a reliable platform to sell your junk car in Alain?  Crazy Car Corner is the best way to go. We are offering you a facility that our team member will come
                                        to your place and inspect your car but it’s totally up to you whether you sell your car or not.</p>
                                </div>
                            </Rotate>
                        </div>
                        </div>
                        <div className={'col-md-4 col-sm-12 my-3'}>
                        <div className={styles.boxStyles}>
                            <Rotate top left>
                                <div className={styles.CitiesPageImage}> 
                              <Image width={600} height={600} src={Fujairah} alt={'Fujairah'} />
                                </div>
                                <div className={styles.paddStyles}>
                                    <h3 className={styles.CitiesPageTextH3}>Fujairah</h3>
                                    <p className={styles.CitiesPageTextP}> Crazy Car Corner was established with the purpose of offering a secure and useful 
                                        platform for our clients to effortlessly sell their used car without having to spend 
                                        any money or exert any effort to sell your junk car in Fujairah. Go share your car details with us.</p>
                                </div>
                            </Rotate>
                        </div>
                        </div>
                        <div className={'col-md-4 col-sm-12 my-3'}>
                        <div className={styles.boxStyles}>
                            <Rotate top left>
                                <div className={styles.CitiesPageImage}> 
                              <Image width={600} height={600} src={Ajman} alt={'Ajman'} />
                                </div>
                                <div className={styles.paddStyles}>
                                    <h3 className={styles.CitiesPageTextH3}>Ajman</h3>
                                    <p className={styles.CitiesPageTextP}> Crazy Car Corner is offering you online scrap car selling in Ajman. Just share your 
                                        used car details with us and our team member will be there at your location.  
                                        So,share your car details and see how much cost of your car and get instant cash!</p>
                                </div>
                            </Rotate>
                        </div>
                        </div>
                        <div className={'col-md-4 col-sm-12 my-3'}>
                        <div className={styles.boxStyles}>
                            <Rotate top left>
                                <div className={styles.CitiesPageImage}> 
                              <Image width={600} height={600} src={Ruwais} alt={'Ruwais'} />
                                </div>
                                <div className={styles.paddStyles}>
                                    <h3 className={styles.CitiesPageTextH3}>Ruwais</h3>
                                    <p className={styles.CitiesPageTextP}> If you are searching to sell your car on cash in Ruwais, Crazy car corner is the best 
                                        option. Crazy car corner will instantly deposit your car resale value payment into
                                       your bank account or receive cash at your doorstep since both are safer payment alternatives.</p>
                                </div>
                            </Rotate>
                        </div>
                        </div>
                        <div className={'col-md-4 col-sm-12 my-3'}>
                            <div className={styles.boxStyles}>
                            <Rotate top left>
                                <div className={styles.CitiesPageImage}> 
                              <Image width={600} height={600} src={Liwa} alt={'Liwa'} />
                                </div>
                                <div className={styles.paddStyles}>
                                    <h3 className={styles.CitiesPageTextH3}>Liwa</h3>
                                    <p className={styles.CitiesPageTextP}> Are you looking to sell your mechanically failed car in Liwa? If you are looking for 
                                        the best way to sell a car, Crazy Car Corner is the right place to go.</p>
                                </div>
                            </Rotate>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default CitiesPage;
