import React, { useEffect, useState } from 'react';

const useService = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://murmuring-tor-12008.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return [services, setServices];
};

export default useService;