import React from "react";
import Method from "../components/MethodSection";
import SellAnyCar from "../components/MainPage/SellAnyCar";
import NotWorkingFaq from '../components/FaqNotWorkingCar';
import Heading from "../components/Heading/heading";
import ContentNotWorking from "../components/ContentNotWorkingCar";
import styles from '../styles/NotWorkingCar.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
const NotWorkingCar = () => {
    return (
        <>
         <Head>
            <title>
            Not Working Cars Buyers | Scrap Car Buyers – Crazy Car Corner  
            </title>
            <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
            <meta name="og:description" content="Crazy Car Corner makes it simple, fair, and quick to sell not working car. As we are one of the Best Not Working Cars Buyers, we can buy your car at the best price." />
            <meta name="og:keywords" content="Scrap Car Buyers in Dubai, Scrap Car Buyers in UAE, Scrap Car Buyers in Abu Dhabi, Scrap Car Buyers in Sharjah, Scrap Car Buyers in Ajman, UAE Scrap Car Buyer, Dubai Scrap Car Buyer, Scrap Car Buyers, Scrap Vehicle Buyers, Local Scrap Car Buyers, Scrap Tuck Buyers, Scrap Auto Buyers, Who Buy Scrap Cars, Scrap Yards Who Buy Cars" />
            <meta content="#000000" data-react-helmet="true" />
        </Head>
        <div className={styles.notWorkingCar}>
            <div className={styles.HerosectionNoNWorkingCar}></div>
                <div className={'text-center mt-5'}>
                    <Heading title={'Sell your used or not working car at instant cash offer '} text={''} />
                </div>
                <div className={styles.paraWhy}>
                    You have come to the correct place if you
                    re searching to sell your used car or
                    <b> mechanically failed car in Dubai </b>, UAE. Crazy Car Corner will help you to sell any
                    make, any brand, and of any condition car. We have a demonstrated track record of
                    prompt buying car from customer and a pleasant and polite purchasing experience.
                    To sale<b> Car with many faults is difficult</b>, because everyone is interested to buy a
                    new and well maintained car, but now Crazy Car Corner provides you a facility to
                    sell not working car online in feasible process and also the best thing is that we will
                    examine and collect your car from your house or place of business - with a FREE
                    cash payment or bank account transfer.
                </div>
                <div>
                    <ContentNotWorking />
                </div>
                <div className={styles.Method}>
                    <Method />
                </div>
                <div>
                    <SellAnyCar />
                </div>
                <div className={'WorkingFaqs mt-4 mb-2'}>
                    <NotWorkingFaq />
                </div>
            </div>
            </>
    )
}
export default NotWorkingCar;
