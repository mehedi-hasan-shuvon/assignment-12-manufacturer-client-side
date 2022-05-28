import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faDeleteLeft, faList } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { toast } from 'react-toastify';
import useService from '../../CustomHooks/useService';
import './ManageInventories.css';
import { useNavigate } from 'react-router-dom';
// import PageTitle from '../Shared/PageTitle/PageTitle';
import Loading from '../Shared/Loading';
// import Loading from '../Shared/Loading/Loading';


const ManageInventories = () => {
    const [services, setServices] = useService();



    const navigate = useNavigate();
    const stokeUpdate = (_id) => {
        navigate(`/inventory/${_id}`);
    };


    const routeTocreate = () => {
        navigate('/addproduct')
    };
    const handelDelete = id => {
        const procced = window.confirm("are you sure?");
        if (procced) {
            const url = `http://localhost:5000/product/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                    toast("Item has been removed")
                });

        }
    }

    if (services.length == 0) {
        return <Loading></Loading>;
    }
    return (
        <div className='w-75 mx-auto'>
            {/* <PageTitle title={"Manage"}></PageTitle> */}
            <h1 className='py-3 text-center section-header text-2xl'>Explore all products</h1>
            <h2 className='text-center'>Total: {services.length}</h2>
            {
                services.map(product => <div key={product._id} className="py-5 ">
                    {/* <h4>{product.name}
                        <button onClick={() => handelDelete(product._id)}>X</button>
                    </h4> */}
                    <div className='service services-container '>
                        <img className='img-fluid w-100 img-border item-img-single' src={product?.img} alt="" />
                        {
                            product?.price > 50000 ? <div class="badge">Hot</div> : <></>
                        }
                        <div className='item-description-single'>
                            <h2 className='product-name-single'>{product?.name} </h2>
                            <p className='product-details-single'>{product?.description}</p>
                            <hr />
                            <div className='row'>
                                <div className='col-6 d-flex flex-column justify-content-center '>
                                    <p className='product-price-single'>Minimum Order Quantity: {product?.minimum_quantity}</p>
                                    <p className='product-price-single'>Available Order Quantity: {product?.available_quantity}</p>
                                    <p className='product-price-single'>Price: {product?.price} BDT (per pies)</p>
                                </div>
                                <div className='col-6 d-flex flex-column justify-content-center align-items-center'>
                                    <button onClick={() => stokeUpdate(product?._id)} className='btn btn-primary checkout-btn'><FontAwesomeIcon icon={faList} /> Order Now </button>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>)
            }
        </div>
    );
};

export default ManageInventories;