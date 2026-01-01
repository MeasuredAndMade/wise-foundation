import React, { useEffect } from 'react';

const Contact = () => {
    useEffect(() => {
        document.title = 'Contact Us - Measured & Made';
    }, []);
    return (
        <div className='mt-6'>
            <h1 className='title is-size-1 has-text-black has-text-centered'>Contact Us</h1>
        </div>
    );
};

export default Contact;