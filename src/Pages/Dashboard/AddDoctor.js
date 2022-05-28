import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import './AddDoctor.css'

const AddDoctor = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const { data: services, isLoading } = useQuery('services', () => fetch(`http://localhost:5000/service`).then(res => res.json()))

    const imageStorageKey = '1850bb661d20d500056843eaa0be7710';
    const [user] = useAuthState(auth);

    /**
     * 3 ways to store images
     * 1. third party storage //free open public storage is ok for practice project
     * 2. own storage in own server(file system)
     * 3.Database:MongoDb
     * 
     * YUP: to validate file need to study(yup file validation for react form)
    */
    const onSubmit = data => {
        // console.log(data.price);
        if (data.price <= 0) {
            toast("price can not be negative or zero. Please Try again");
        } else if (data.quantity <= 0) {
            toast("Quantity can not be negative or zero. Please Try again");
        } else {
            data.supplierEmail = user.email;
            const url = "http://localhost:5000/product";
            fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(result => {
                    // console.log(result);
                    toast("product have been added");
                })
        }
    };


    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <div>
                <div className='w-3/4 mx-auto fff'>
                    {/* <PageTitle title={"Add Product"}></PageTitle> */}
                    <h1 className='text-center py-3 section-header text-2xl'>Add products</h1>
                    <form className='add-doctor-form add-product-form my-3 p-2' onSubmit={handleSubmit(onSubmit)}>
                        <input className='my-2' placeholder='Product Name' {...register("name", { required: true, maxLength: 20 })} />
                        <input className='mb-2' placeholder='Supplier Name' value={user?.displayName} type="text" {...register("supplierName")} />
                        <input className='mb-2' placeholder='Supplier Email' value={user?.email} required readOnly disabled type="email" {...register("supplierEmail")} />
                        <textarea className='mb-2' placeholder='Description' {...register("description")} />
                        <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                        <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
                        <input className='mb-2' placeholder='Available Quantity' type="number" {...register("available_quantity")} />
                        <input className='mb-2' placeholder='Minimum Quantity' type="number" {...register("minimum_quantity")} />
                        <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                        <input className='my-2 add-btn btn btn-primary' type="submit" value="Add Product" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddDoctor;