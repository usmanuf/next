import React,{useState, useEffect} from 'react';
import Heading from "../components/Heading/heading";
import MakersComponent from "../components/MakersComponent";
import { ImageURL, URL_API } from "../variables";
import styles from '../styles/MakerSection.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function MakerSection(props) {
    const [Makers, setMaker] = useState([]);

    useEffect(() => {
        setTimeout(()=>{
            getServiesData()
        },300)
    }, []);
    const {link} = props
  
    const getServiesData = () => {
        fetch(URL_API + "posts/vehicles")
            .then((responce) => responce.json())
            .then((data) => {
                // console.log("servicesfcgcgcfgfcgfc data", data.vehicles);
                setMaker(data.vehicles);
            });
    };
    const OpenNextPage = () => {
        window.open ('/sell-any-make');
    }
    // const Makers = props.Makers;
    return (
        <div className={styles.maker}>
            <Heading title={'Popular Maker'} text={''} />
            <div className={styles.paraGraphAllMake}>
                <div className={styles.paraWhys}>
                    Are you looking for the best way to
                </div>
            </div>
            <div className={styles.paraGraphAllMake}>
                <div className={'my-3 container'}>
                    <div className={'row my-2'}>
                        {Makers?.slice(0, 18).map((data,index) => (<a key={index} href={"/sell-my-" + data.slug} className={'my-2 col-md-3 col-lg-2 col-sm-4 col-xs-6'}>
                            <MakersComponent title={data.vehicle_name} img={ImageURL + data.image}/>
                        </a>
                        ))}
                    </div>
                </div>
                <div className={styles.btnMaker}>
                <a className={styles.LinksBtn} href={link}>
                    <div
                    type='submit'
                    className={styles.buttonStyles}
                    onClick={() => OpenNextPage()}>
                        Load More
                    </div>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default MakerSection;
