import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useService from '../../../CustomHooks/useService';
import Loading from '../../Shared/Loading';
// import Loading from '../../Shared/Loading/Loading';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {

    // const [services, setServices] = useState([]);

    // useEffect(() => {
    //     fetch('services.json')
    //         .then(res => res.json())
    //         .then(data => setServices(data));
    // }, []);

    const navigate = useNavigate();

    const routeToManage = () => {
        navigate('/manageinventory')
    };
    const [services, setServices] = useService();

    if (services.length == 0) {
        return <Loading></Loading>
    }
    // console.log(services);
    return (
        <div id='services' className='container pb-3'>
            <h1 className='text-center  my-8 text-4xl font-bold'>Our Top Products</h1>
            <div className='services-container'>

                {

                    services.filter((_, i) => i < 6).map((service) => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
            <div className='py-4 manage-inventory-button '>
                <button onClick={routeToManage} className='manage-inventory-button btn btn-primary my-3'>Manage Inventories</button>
            </div>
        </div>
    );
};

export default Services;