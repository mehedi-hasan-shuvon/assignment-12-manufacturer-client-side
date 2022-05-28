import { faDeleteLeft, faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({ service }) => {
    // const { _id, name, img, description, price, supplierName, supplierEmail, quantity } = service;

    const navigate = useNavigate();
    const stokeUpdate = (_id) => {
        navigate(`/inventory/${_id}`);
    };

    return (
        <div className='service'>
            <img className='img-fluid w-100 img-border item-img-single' src={service?.img} alt="" />
            {
                service?.price > 50000 ? <div class="badge">Hot</div> : <></>
            }
            <div className='item-description-single'>
                <h2 className='product-name-single'>{service?.name} </h2>
                <p className='product-details-single'>{service?.description}</p>
                <hr />
                <div className='row'>
                    <div className='col-6 d-flex flex-column justify-content-center '>
                        <p className='product-price-single'>Minimum Order Quantity: {service?.minimum_quantity}</p>
                        <p className='product-price-single'>Available Order Quantity: {service?.available_quantity}</p>
                        <p className='product-price-single'>Price: {service?.price} BDT (per pies)</p>
                    </div>
                    <div className='col-6 d-flex flex-column justify-content-center align-items-center'>
                        <button onClick={() => stokeUpdate(service?._id)} className='btn btn-primary checkout-btn'><FontAwesomeIcon icon={faList} /> Order Now </button>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Service;