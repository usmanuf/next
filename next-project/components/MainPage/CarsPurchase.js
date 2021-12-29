import React from 'react';
import Heading from "../../components/Heading/heading";
import { HomeKindCars } from "../../AppContant";
import RubberBand from 'react-reveal/RubberBand';
import Bounce from 'react-reveal/Bounce';
import Rotate from 'react-reveal/Rotate';
import Image from 'next/image';
import Link from 'next/link';
import Router from "next/router"
import styles from '../../styles/CarsPurchase.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function CarsPurchase() {
    const  handleClick=function (){
        Router.push("/free-online-valuation")
    }
    return (
        <div className={styles.CarsPurchase}>
            <div className={'container'}>
                <RubberBand>
                    <div className={'mb-2 text-center'}>
                        <Heading title={'What kind of cars do we purchase?'} text={''} />
                    </div>
                </RubberBand>
                <Bounce left>
                    <div className={styles.paraGraphVehicle}>
                        <div className={styles.paraWhys}>
                            Are you looking for the best way to <b> sell a car? </b> Crazy Car Corner will purchase any
                            vehicle in any condition, immediately and receive the best money possible.
                            For scrap, we take the following vehicles.
                        </div>
                    </div>
                </Bounce>
                <div className={styles.paraGraphVehicle}>
                    <div className={'row'}>
                        {HomeKindCars?.map((item,index) => (<div key={index} className={'col-sm-12 col-md-3'}>
                            <Rotate top left>
                            <div className={styles.CardContentVehicle}>
                                <div className={styles.buttonVehicle}>
                                    {item.name}
                                </div>
                            </div>
                                <div  className={styles.CardVehicleImage}>
                                <Link  href={`/free-online-valuation`} replace>
                                <a onClick={handleClick} href={"/free-online-valuation"}> <Image src={item.ImageSection} alt={item.ImageSection} /></a>
                                </Link>

                                </div>
                            </Rotate>
                        </div>))}
                    </div>
                </div>

            </div>
        </div>
    )
}
export default CarsPurchase;
