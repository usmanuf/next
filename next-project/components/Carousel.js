import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Ras from '../public/assets/Cities/ras-al-khaimah.jpg';
import Dubai from '../public/assets/Cities/dubai-img.jpg';
import sharjah from '../public/assets/Cities/sharjah-img.jpg';
import abu from '../public/assets/Cities/abu-dhabi-img.jpg';
import alian from '../public/assets/Cities/alain-uae.jpg';
import Fujairah from '../public/assets/Cities/fujairah.jpg';
import Ajman from '../public/assets/Cities/ajman.jpg';
import Ruwais from '../public/assets/Cities/ruwais.jpg';;
import Liwa from '../public/assets/Cities/liwa.jpg';
import axios from "axios";
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Carousel.module.css';
const AboutCities = [
    {
        id: '1',
        name: 'Ras Al Khaimah',
        imgSec: Ras,
        description: 'Everyone knows it is difficult to sell a car in the market but at Crazy Car Corner you \n' +
            'can easily sell your car in Ras Al Khaima without any hassles.'

    }, {
        id: '2',
        name: 'Dubai',
        imgSec: Dubai,
        description: 'Are you looking for a dependable platform to sell your junk car in Dubai? Crazy Car \n' +
            'Corner makes it simple to sell your junk car.'

    }, {
        id: '4',
        name: 'Sharjah',
        imgSec: sharjah,
        description: 'Do you want to sell your working or not working car in Sharjah? Crazy Car Corner is \n' +
            'undoubtedly beneficial to you. Our staff will arrive at the address you specify and \n' +
            'check your vehicle. Don’t wait great deal offer is waiting for you!'

    }, {
        id: '5',
        name: 'Abu \n' +
            'Dhabi',
        imgSec: abu,
        description: 'Crazy Car Corner provides you with a fair price for your car with dead engine in Abu \n' +
            'Dhabi. We\'ll usually give you substantially more money according to your car \n' +
            'condition.'

    }, {
        id: '8',
        name: 'Alain',
        imgSec: alian,
        description: 'Are you seeking a reliable platform to sell your junk car in Alain?  Crazy Car Corner \n' +
            'is the best way to go. We are offering you a facility that our team member will come\n' +
            'to your place and inspect your car but it’s totally up to you whether you sell your \n' +
            'car or not.'

    }, {
        id: '8',
        name: 'Fujairah',
        imgSec: Fujairah,
        description: 'Crazy Car Corner was established with the purpose of offering a secure and useful \n' +
            'platform for our clients to effortlessly sell their used car without having to spend \n' +
            'any money or exert any effort to sell your junk car in Fujairah. Go share your car \n' +
            'details with us.'

    }, {
        id: '8',
        name: 'Ajman',
        imgSec: Ajman,
        description: 'Crazy Car Corner is offering you online scrap car selling in Ajman. Just share your \n' +
            'used car details with us and our team member will be there at your location.  So, \n' +
            'share your car details and see how much cost of your car and get instant cash!'

    }, {
        id: '8',
        name: 'Ruwais',
        imgSec: Ruwais,
        description: 'If you are searching to sell your car on cash in Ruwais, Crazy car corner is the best \n' +
            'option. Crazy car corner will instantly deposit your car resale value payment into \n' +
            'your bank account or receive cash at your doorstep since both are safer payment \n' +
            'alternatives.'

    }, {
        id: '8',
        name: 'Liwa',
        imgSec: Liwa,
        description: 'Are you looking to sell your mechanically failed car in Liwa? If you are looking for \n' +
            'the best way to sell a car, Crazy Car Corner is the right place to go.'

    },
]

const Carousel = () => {
    const [service, setSetvices] = useState([]);

    const Services = () => {
        axios.get("https://unclefixer.co.uk/api/services").then((response) => {
            console.log("response", response.data)
            setSetvices(response.data)
        })
    }
    useEffect(() => {
        Services()
    }, [])
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 1000,
        responsive: [
            {
                breakpoint: 1924,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 1224,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 3
                }
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };
    return (
        <div className={styles.CarouselCityAboutUs}>
            <Slider {...settings}>
                {AboutCities.slice(0, 7).map((data, index) => {
                    return (<> <div key={index} className={styles.citiesAbout}>
                        <div className={styles.AboutImageCarousel}>
                            <Image className={styles.imgcity} src={Ras} width={100} height={100} alt={'/'} />
                            <div className={styles.TExtCarouselAbout}>
                                <h1>{data.name}</h1> 
                                <p> {data.description}</p> 
                            </div>
                        </div>

                    </div>

                    </>
                    )
                })}
            </Slider>
        </div>
    );
}
export default Carousel;
