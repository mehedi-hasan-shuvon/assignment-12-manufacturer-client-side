import React from 'react';
import notfound from '../../Images/404.png'
const NotFound = () => {
    return (
        <div>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={notfound} class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold text-red-500">Page not found</h1>
                        <p class="py-6">Please check your url again! thank you</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;