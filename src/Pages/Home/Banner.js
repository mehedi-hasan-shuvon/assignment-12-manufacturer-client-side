import { faBorderNone } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';
import chair from '../../assets/images/background2.jpg';
import bannerBG from '../../assets/images/output-onlinepngtools2.png';
import Primarybutton from '../Shared/Primarybutton';
const Banner = () => {
    return (
        
        <div style={{
            background: `url(${bannerBG})`,
            backgroundRepeat  : 'no-repeat',
            backgroundPosition: 'center',
        }} className="hero min-h-screen" >
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl " />
                <div>
                    <h1 className="text-5xl font-bold">Hard Disk BD</h1>
                    <h2 className="text-3xl font-bold">the Biggest Hard disk manufacturer in country</h2>
                    <p className="py-6">Our custom manufacturer can produce any size type of hard disk according to customer need with mass production cost becomes bare minimum for customer with Industry level quality assurance</p>
                    <Primarybutton>Explore</Primarybutton>
                </div>
            </div>
        </div>
    );
};

export default Banner;