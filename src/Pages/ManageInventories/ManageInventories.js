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
            <h1 className='py-3 text-center section-header'>Manage Inventories</h1>
            <h2 className='text-center'>Total: {services.length}</h2>
            <div className='text-center py-2'>
                <button onClick={routeTocreate} className='btn btn-primary '>add new item</button>
            </div>
            {
                services.map(product => <div key={product._id}>
                    {/* <h4>{product.name}
                        <button onClick={() => handelDelete(product._id)}>X</button>
                    </h4> */}
                    <div className='inventory my-3'>
                        <div className='row'>
                            <div className='col-md-4 text-center d-flex  align-items-center left-side-in'>
                                <img className='inventory-img' src={product.img} alt="" />
                                <h4>{product.name}</h4>
                            </div>
                            <div className='col-md-3 d-flex justify-content-center align-items-center middle-in'>
                                <div>

                                    <p>supplier name: {product.supplierName}</p>
                                    <p>description: {product.description}</p>
                                </div>
                            </div>
                            <div className='col-md-3 d-flex flex-column justify-content-center align-items-center right-middle'>
                                <p className='text-white'>Quantity: {product.quantity} pieces only</p>

                                <p className='text-white'>Price: {product.price}BDT (per piece)</p>
                            </div>
                            <div className='col-md-2 d-flex justify-content-center align-items-center right-in'>
                                <div className='row '>
                                    <div className='col-12 d-flex justify-content-center align-items-center'>
                                        <button onClick={() => stokeUpdate(product._id)} className='btn btn-primary checkout-btn-special'><FontAwesomeIcon icon={faList} /> Manage</button>
                                    </div>
                                    <div className='col-12 d-flex justify-content-center align-items-center'>
                                        <button onClick={() => handelDelete(product._id)} className='btn btn-primary item-remove-button' ><FontAwesomeIcon icon={faDeleteLeft} /> Remove </button>
                                    </div>

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