import React from "react";
import GoogleMapReact from 'google-map-react';
import MapIcon from '../public/assets/icons/map-icon.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
const AnyReactComponent = ({ text }) => 
<Image src={MapIcon} alt={'Map Location'} width={'34'} className={'textMap'} />
export default function SimpleMap() {
    const defaultProps = {
        center: {
            lat: 31.5789164,
            lng: 74.3792919
        },
        zoom: 16
    };
    return (
        <div style={{ height: '400px', width: '100%', marginBottom: '5%', border: '2px solid var(--border)' }}>
            <a target={'-blank'} href={'https://goo.gl/maps/oAYjTNwXDhT56ewSA'}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyBWJbK0jw6DsmdF0jTWz1FDMWESHJXW5wk" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >
                    <AnyReactComponent
                        lat={31.5789164}
                        lng={74.3792919}
                    // text={Img}
                    />
                </GoogleMapReact>
            </a>
        </div>
    );
}
