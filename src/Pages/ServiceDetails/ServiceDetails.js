import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useService from '../../CustomHooks/useService';
import Loading from '../Shared/Loading';
// import Loading from '../Shared/Loading/Loading';
// import PageTitle from '../Shared/PageTitle/PageTitle';
import './ServiceDetails.css'

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [product, setProduct] = useState({});
    const [services, setServices] = useService();


    const navigate = useNavigate();


    const routeToManage = () => {
        navigate('/manageinventory')
    };


    useEffect(() => {
        const url = `http://localhost:5000/product/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [product])

    const handelQuantity = event => {
        event.preventDefault();
        product.quantity = parseInt(product.quantity) - 1;

        if (product.quantity > 0) {
            setProduct(product);
            // console.log(product);
            const url = `http://localhost:5000/product/${serviceId}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(product)
            })
                .then(res => res.json)
                .then(data => {
                    // console.log('quantity updated');
                    toast('quantity reduced by 1');
                    // event.target.reset();
                })
        } else {
            const url = `http://localhost:5000/product/${serviceId}`

            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    const remaining = services.filter(service => service._id !== serviceId);
                    setServices(remaining);
                    toast(`all items of ${product.name} have been develered. Directed to inventory`);
                    navigate('/home')

                });

        }
    };


    const handelRestock = (event) => {
        event.preventDefault();
        const updatedRestock = parseInt(event.target.stock.value);
        if (updatedRestock < 0) {
            toast("Cannot purchase negative quantity");
        } else if (updatedRestock < product.minimum_quantity) {
            toast("You at least have to order minimum quantity");
        } else {

            product.available_quantity = parseInt(product.available_quantity) - parseInt(updatedRestock);
            console.log(product.available_quantity, updatedRestock);
            if (product.available_quantity > 0) {
                setProduct(product);

                console.log(product);
                const url = `http://localhost:5000/product/${serviceId}`;
                fetch(url, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(product)
                })
                    .then(res => res.json)
                    .then(data => {
                        // console.log('quantity updated');

                        toast(`quantity reduced by ${updatedRestock}`);
                        // event.target.reset();
                    })
            } else if (product.available_quantity == 0) {
                const url = `http://localhost:5000/product/${serviceId}`

                fetch(url, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        const remaining = services.filter(service => service._id !== serviceId);
                        setServices(remaining);
                        toast(`all items of ${product.name} have been Purchased. Buy another product`);
                        navigate('/')

                    });

            } else {
                toast("Not enough product in stock");
            }
        }





    }
    return (
        <div className=''>
            {/* <PageTitle title={"Item Details"}></PageTitle> */}
            <h1 className='section-header pt-3 text-center'>Item Details</h1>
            <div className='item-details-container w-50 mx-auto my-4'>
                {/* <div className='text-center details-img'>
                    <img src={product?.img} alt="" />
                </div> */}
                {
                    product.img ?
                        <div className='text-center details-img'>
                            <img src={product?.img} alt="" />
                        </div>
                        : <Loading></Loading>


                }
                <div className='details-context'>
                    <h2 className='product-name-single'>{product?.name}</h2>

                    <h3 className='product-details-single'>{product?.description}</h3>
                    <p className='product-price-single'>Minimum Order Quantity: {product?.minimum_quantity}</p>
                    <p className='product-price-single'>Available Order Quantity: {product?.available_quantity}</p>
                    <p className='product-price-single'>Price: {product?.price} BDT (per pies)</p>

                    {/* <div className='py-3'>
                        <button onClick={handelQuantity} className='btn btn-primary '>Delivered</button>
                    </div> */}


                </div>
                <div className='py-3 restock-div'>
                    <h2>Place your desire quantity</h2>
                    <form onSubmit={handelRestock}>
                        <input type="number" name='stock' placeholder='restock quantity' required />

                        <input className='special-special-btn' type="submit" value="Restock" />
                    </form>
                </div>

            </div>

            <div className='py-4 text-center'>
                <button onClick={routeToManage} className='manage-inventory-button btn btn-primary'>Manage Inventories</button>
            </div>
        </div>
    );
};

export default ServiceDetails;