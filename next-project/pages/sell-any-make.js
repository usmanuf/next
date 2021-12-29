    import React, { useEffect, useState } from "react";
import Link from "next/link";
import Heading from "../components/Heading/heading";
import { ImageURL, URL_API } from "../variables";
import MakersComponent from "../components/MakersComponent";
import { IoLogoWhatsapp } from "react-icons/io";
import RubberBand from 'react-reveal/RubberBand';
import Bounce from 'react-reveal/Bounce';
import Rotate from 'react-reveal/Rotate';
import styles from '../styles/SellAnyMake.module.css';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
function SellAnyMake(props) {

    const [Makers, setMaker] = useState([]);
    const [loader, setLoader] = useState(false);
   
    useEffect(() => {
        setTimeout(()=>{
            getServiesData()
        },5000)
        },);
    const getServiesData = () => {
            if (!loader) {
                setLoader(true)
                console.log('loader')
                setTimeout(() => {
                    setLoader(false);
                }, 2000);
            }

            fetch(URL_API + "posts/vehicles")
                .then((responce) => responce.json())
                .then((data) => {
                    setMaker(data.vehicles);
                });
        };
    
        const AtoH = Makers.slice(0, 31);
        const ItoM = Makers.slice(32, 56);
        const NtoR = Makers.slice(57, 70);
        const StoT = Makers.slice(71, 79);
        const UtoZ = Makers.slice(80, 90);

    return (<>
    <Head>
        <title>Sell any Make Car | Sell my car – Crazy Car Corner </title>
        <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="og:description" content="Do you want to sell your used car or mechanically failed car within 30 minutes? You can sell any make of your vehicle at Crazy Car Corner at a great price." />
        <meta name="og:keywords" content="Sell my Car Online, sell any make car, Free Car Valuation, Best Way to Sell a Car, Free Car Valuation, Sell Car for Cash, sell my Car Near me, sell my Used Car, Sell Car for Scrap, online car valuation, Car Valuation, Used Damaged Cars" />
        <meta content="#000000" data-react-helmet="true" />
    </Head>
        <div className={styles.HerosectionAllMake} >
        </div>
        <div className={'container'}>
            <div className={styles.head}>
                <RubberBand>
                <div className={'text-center mt-3'}>
                    <Heading title={'Sell any make car at Crazy car corner'}
                        text={''} />
                </div>
                </RubberBand>
                <Bounce left>
                    <div className={styles.paraWhy}>
                        Are you planning to <b> sell your car? </b> Your automobile may require repair and
                        maintenance after a lot of use, and you may be tired of it. With the developments of the modern period, a plethora of brands and new models are being found on a daily basis.
                        Everyone wishes to replace their automobile with a new model. In order to sell your old car, let Crazy Car Corner free you of that load and pay you generously.
                        If you are searching to sell my car for cash today, Crazy Car Corner is the best way to go
                        Crazy Car Corner can buy your car and put money in your pocket in only 30 minutes. Crazy Car Corner provides a convenient way to sell any brand of car in a feasible and timely manner.
                        In a matter of seconds, our FREE online valuation calculator can provide a valuation for any automobile registered in the UAE, regardless of make, model, or condition.
                        The enormous variety of automobiles we buy from clients on a daily basis ranges from high-end executive models to everyday family cars, and they truly do come in all shapes and sizes!
                        Click the appropriate link below for additional information about selling a certain make of car however, the procedure is always as easy as inputting your registration number and obtaining your valuation!
                    </div>  
                </Bounce>
                <Bounce up>
                <p className={styles.btnDiv}>
                    <Link href="https://api.whatsapp.com/send?phone=+971558829990&text=I%27m%20interested%20to%20sell%20my%20Car" passHref> 
                    <a className={styles.btnHomesSellCar}>
                        <IoLogoWhatsapp className={styles.iconHome} />
                        WhatsApp
                    </a>
                    </Link>
                    <Link href="/free-online-valuation" passHref>
                    <a className={styles.btnHomesSellCar}>
                        Get Free Inspection
                    </a>
                    </Link>
                </p>
                </Bounce>
            </div>
           
            <>
             
            <Rotate up left>
             <div className={'container'}>
            <div className={styles.AllMaker}>
                <div className={styles.AllMakerList}>
                    <div className={styles.bottomStyles}>
                        <p className={styles.letters}>A - H</p>
                        <hr className={styles.bookends} />
                    </div>
                   
                    <div className={'row'}>
                        {AtoH.map((data) => {
                            return (
                                <div key={data} className="my-2 col-md-3 col-lg-2 col-sm-4 col-xs-6">
                                    <Link
                                        href={{
                                            pathname: "/[slug]",
                                            query: {
                                                slug: data.slug,
                                            }
                                        }}
                                        as={`/sell-my-${data.slug}`}
                                        passHref> 
                                       <a><MakersComponent title={data.vehicle_name} img={ImageURL + data.image} /></a> 
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className={styles.AllMakerList}>
                    <div className={styles.bottomStyles}>
                        <p className={styles.letters}>I - M</p>
                        <hr className={styles.bookends} />
                    </div>
                    <div className={'row'}>
                        {ItoM.map((data) => {
                            return (
                                <div key={data} className="my-2 col-md-3 col-lg-2 col-sm-4 col-xs-6">
                                     <Link
                                        href={{
                                            pathname: "/[slug]",
                                            query: {
                                                slug: data.slug,
                                            
                                            }
                                        }}
                                        as={`/sell-my-${data.slug}`}
                                        passHref
                                    >
                                       <a><MakersComponent title={data.vehicle_name} img={ImageURL + data.image} /></a> 
                                    </Link>
                                </div>
                            );
                        })}
                    </div>

                </div>
                <div className={styles.AllMakerList}>
                    <div className={styles.bottomStyles}>
                        <p className={styles.letters}>N - R</p>
                        <hr className={styles.bookends} />
                    </div>

                    <div className={'row'}>
                        {NtoR.map((data) => {
                            return (
                                <div key={data} className="my-2 col-md-3 col-lg-2 col-sm-4 col-xs-6">
                                     <Link
                                        href={{
                                            pathname: "/[slug]",
                                            query: {
                                                slug: data.slug,
                                            
                                            }
                                        }}
                                        as={`/sell-my-${data.slug}`}
                                        passHref
                                    >
                                        <a><MakersComponent title={data.vehicle_name} img={ImageURL + data.image} /></a>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>

                </div>
                <div className={styles.AllMakerList}>
                    <div className={styles.bottomStyles}>
                        <p className={styles.letters}>S - T</p>
                        <hr className={styles.bookends} />
                    </div>
                    <div className={'row'}>
                        {StoT.map((data) => {
                            return (
                                <div key={data} className="my-2 col-md-3 col-lg-2 col-sm-4 col-xs-6">
                                    <Link
                                        href={{
                                            pathname: "/[slug]",
                                            query: {
                                                slug: data.slug,
                                            
                                            }
                                        }}
                                        as={`/sell-my-${data.slug}`}
                                        passHref
                                    >
                                       <a><MakersComponent title={data.vehicle_name} img={ImageURL + data.image} /></a> 
                                    </Link>
                                </div>
                            );
                        })}
                    </div>

                </div>
                <div className={styles.AllMakerList}>
                    <div className={styles.bottomStyles}>
                        <p className={styles.letters}>U - Z</p>
                        <hr className={styles.bookends} />
                    </div>
                    <div className={'row'}>
                        {UtoZ.map((data) => {
                            return (
                                <div key={data} className="my-2 col-md-3 col-lg-2 col-sm-4 col-xs-6">
                                    <Link
                                        href={{
                                            pathname: "/[slug]",
                                            query: {
                                                slug: data.slug,
                                            
                                            }
                                        }}
                                        as={`/sell-my-${data.slug}`}
                                        passHref
                                    >
                                       <a><MakersComponent title={data.vehicle_name} img={ImageURL + data.image} /></a> 
                                    </Link>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
            </div>   
            </Rotate>
            </>
            


        </div>
    </>);
}

export default SellAnyMake;
