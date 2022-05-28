import React from 'react';
import qoute from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';

const Testimonials = () => {

    const reviews = [
        {
            _id: 1,
            name: 'Kamal',
            review: '',
            describe:'I have visited their factory in Dhaka. their R&D sector is best of country.Dont waste time!!! place your order now',
            location: 'Dhaka',
            img: people1
        },
        {
            _id: 2,
            name: 'Morium',
            review: '',
            describe:'I Love to business with you. with cheap hard disk i was able tow start my laptop business successfully.Give them a 5 star for that',
            location: 'Chittagong',
            img: people2
        },
        {
            _id: 3,
            name: 'Sumaiya',
            review: '',
            describe:'I can trust hard disk bd blindly. Having business over 5 years and never find any problem at all. I will suggest all my friends about this',
            location: 'Shylet',
            img: people3
        },
    ];

    return (
        <section className='mb-9'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl text-primary font-bold">Testimonials</h4>
                    <h2 className='text-3xl'>What our Customer say</h2>
                </div>
                <div>
                    <img src={qoute} className="w-24 lg:w-48" alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review key={review._id}
                        review={review}></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;