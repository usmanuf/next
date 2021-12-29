import React from 'react';
import Heading from "../components/Heading/heading";
import styles from '../styles/Cities.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CitiesPage from './CitiesPage';
import Bounce from 'react-reveal/Bounce';
const Cities = () => {
    return (

        <>
        <div className={'container'}> 
        <div className={styles.cityCarousel}>
            <div className={" my-4 text-center"}>
                <Heading title={' Cities We Covered '} text={''} />
            </div>
            <Bounce left>
            <div className={styles.paraWhy}>
                We go above and beyond to make it easy for you to sell your used car in a variety of
                UAE cities. So, do not spend your time and effort trying to sell your used automobile
                in the market. We are providing a simple and secure way to sell your vehicle. Come
                to Crazy Car Corner and have a good time with us!
                Everyone knows it is difficult to sell a car in the market but at Crazy Car Corner you can easily <b> sell your car in Ras Al Khaima </b>without any hassles.
                Are you looking for a dependable platform to <b> sell your junk car in Dubai?</b> Crazy Car Corner makes it simple to sell your junk car.
            </div>
            </Bounce>
            <div className={"my-3 p-3"}>
                <CitiesPage />
            </div>
            <div className={styles.paraWhy}>
                Do you want to <b> sell your working or not working car in Sharjah? </b>
                Crazy Car Corner is undoubtedly beneficial to you. Our staff will arrive at the address
                you specify and check your vehicle. Don’t wait great deal offer is waiting for you!
                Crazy Car Corner provides you with a fair price for your<b> car with dead engine in Abu Dhabi. </b>
                We will usually give you substantially more money according to your car condition.
                Are you seeking a reliable platform to<b> sell your junk car in Alain? </b> Crazy Car Corner is the
                best way to go. We are offering you a facility that our team member will come to your place and
                inspect your car but its totally up to you whether you sell your car or not.<br /><br />
                Crazy Car Corner was established with the purpose of offering a secure and useful platform for our
                clients to effortlessly sell their used car without having to spend any money or exert any effort
                to<b> sell your junk car in Fujairah. </b> Go share your car details with us.
                Crazy Car Corner is offering you online <b> scrap car selling in Ajman. </b> Just share your used car details
                with us and our team member will be there at your location.  So, share your car details and see how
                much cost of your car and get instant cash!<br /><br />
                If you are searching to<b> sell your car on cash in Ruwais,</b> Crazy car corner is the best option.
                Crazy car corner will instantly deposit your car resale value payment into your bank account or
                receive cash at your doorstep since both are safer payment alternatives.
                Are you looking to <b> sell your mechanically failed car in Liwa? </b> If you are looking for the best way
                to sell a car, Crazy Car Corner is the right place to go.
                Crazy Car Corner provides a convenient way to sell working or not working car in a feasible and
                timely manner in<b> western region. </b> In a matter of seconds, our FREE online valuation calculator can
                provide a valuation for any automobile registered in the UAE, regardless of make, model, or condition.

            </div>
        </div>
        </div> 
        </>
    )
}
export default Cities;
