import Head from 'next/head';
import { MainPageComponents } from '../components/MainPage/MainPageComponents';
export default function Home() {
  return (
    <div>
      <Head>
        <title>
              Crazy Car Corner | Best Car Buyers in UAE | Sell Your Car Fast
        </title>
        <link rel="icon" type="image/png" sizes="16x16" href="../favicon.ico" />
        <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="og:description" content="If you are Searching for the best car buyers in UAE, Crazy Car Corner will buy your car in any condition within 30 minutes with no hassle and 100% reliability." />
        <meta name="og:keywords" content="used cars buyer, Used Cars for Sell, Car Buyers, Used Damaged Cars Buyers, Sell my Car, Car Valuation, online car valuation, Used Car Valuation, Sell Your Car, 
        Sell Car Online, Sell my Car Online, Free Car Valuation, Car Value Estimator, Sell my Car for Cash, Best Way to Sell a Car, Old Car Valuation, Car Resale Value, Vehicle Valuation, Sell my Car 
        for Cash Today, Sell Car for Cash, Cash for Scrap Cars, Scrap Car Buyers, Sell my Car Near me, Car Buyers Near me, Sell my Used Car, Sell Car for Scrap, Car with Heated Engine, Car with Mechanical Faults, 
        Mechanically Failed Car, No Working Car" />
        <meta content="#000000" data-react-helmet="true" />
      </Head>
      <MainPageComponents />
    </div>
  );
}