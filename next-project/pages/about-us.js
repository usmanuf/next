import React from 'react'
import Cities from '../components/Cities'
import AboutCar from "../components/AboutCar";
import styles from '../styles/AboutUs.module.css';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
const AboutUs = () => {
  return (
    <>
     <Head>
        <title>
            About Us – Crazy Car Corner 
        </title>
        <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="og:description" content="Are you trying to sell your car that has been damaged? Crazy Car Corner was founded with the goal of making the automobile selling process feasible for you." />
        <meta name="og:keywords" content="Sell my car, sell any car, who can buy my car, best car scrapping service, cash for my scrap car, used cars buyer, used Cars for Sell, Car Buyers, Used Damaged Cars, online car valuation" />
        <meta content="#000000" data-react-helmet="true" />
      </Head>
    <div className={styles.AboutUs}>
      <div className={styles.HerosectionABoutus}></div>
      <AboutCar />
      <Cities />
    </div>
    </>
  )
}
export default AboutUs
