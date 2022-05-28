import React from 'react';
import treatment from '../../assets/images/factory.jpg'
import Primarybutton from '../Shared/Primarybutton';
const DentalCare = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" />
                <div className='lg:px-28'>
                    <h1 className="text-5xl font-bold">Own manufacturing Factory</h1>
                    <p className="py-6">We have 10+ Mega factories all over the Bangladesh. With 2 years warranty in all the products. we product the best quality hard disk of any size for personal computer or laptops.</p>
                    <Primarybutton>Explore</Primarybutton>
                </div>
            </div>
        </div>
    );
};

export default DentalCare;