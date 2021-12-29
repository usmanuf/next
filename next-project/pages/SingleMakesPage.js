import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from '../styles/SingleMakesPage.module.css';
import { useRouter } from "next/router";
import { IoLogoWhatsapp } from "react-icons/io";
import { URL_API ,ImageURL} from "../variables";
import axios from "axios";
import HeroForm from '../components/FormSection/HeroForm';
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
function SingleMakesPage(props) {
    const id = props.match?.params?.slug
    const [data,setData] = useState([]);
    const [maker, setMaker] = useState('');
    useEffect(() => {
        setTimeout(()=>{
           getServiesData(); 
        },300);
    });
    const getServiesData = () => {
        axios.post(URL_API + "posts/maker/" + id).then(response => {
            console.log('model', response.data)
            setData(response.data.models.vehicle_modles);
            setMaker(response.data.models);
        }).catch(error => {
            console.log("error", error)
        })

    }
    const location = useRouter();
    var name = props.location?.detail;
    return (<>
    <div className={'container'}>
        <div className={'row'}>
        <div>
             <Image className={styles.HerosectionAllMakeSingle} 
             src={ImageURL+maker.image} 
             width={600} 
             height={600} 
             priority
             alt="sell-make"/>
        </div>
        <div className="container">
            <div className="row mt-5 p-5">
                <div className={'m-auto text-center'}>
                    <div className={styles.modelHeading}>
                    <h1>Sell My {maker.vehicle_name}</h1>
                    </div>
                </div>
                <div className={styles.paraWhy}>
                {maker.description}
                </div>
                <div className="col-md-12 col-sm-12">
                    <div className={styles.carModels}>
                        <p>For your instant and FREE valuation,the quick and easy way!</p>
                        <div className={'col-md-4 col-sm-12'}>
                        <div className={styles.btnDiv}>
                            <a  href="https://api.whatsapp.com/send?phone=+971558829990&text=I%27m%20interested%20to%20sell%20my%20Car"
                                className={styles.btnHomesSellCar}>
                                <IoLogoWhatsapp className={styles.iconHome} />
                                WhatsApp
                            </a>
                            <Link
                                href="/free-online-valuation"
                                className={styles.btnHomesSellCar}>
                                Get Free Inspection
                            </Link>
                        </div>
                        </div>
                        
                    </div>
                </div>
                <br />
                <br />
                <div className="col-md-12">
                    <div className={styles.h2Div}>
                    <h2 className={styles.h2}>{name} MODELS WE ARE LOOKING TO BUY</h2>
                    </div>
                </div>
            </div>
            <br />

            <div className="row">
                {data?.map((data, index) => {
                    return (
                        <>
                        {data.image ?
                        <div key={index} className="col-sm-3">
                            <div className={styles.picDiv}>
                                <div className={styles.boxStylesModelSingle}>
                                    <Image className={styles.imageSinglePage} src={ImageURL + data.image} alt=""/>
                                </div>
                                <div className={styles.boxStylesModelSingleText}>
                                    <p className={styles.pTag}>{data.modle_name}</p>
                                </div>
                            </div>
                           
                        </div>
                        :
                        null
                }
                        </>
                    );
                })}

            </div>
            
            
            <br /><br />
        </div>
        <div className="col-md-3 col-sm-12"></div>
        <div className="col-md-8 col-sm-12">
            <HeroForm />
            </div>
        </div>
    </div>
    </>)
}
export default SingleMakesPage;