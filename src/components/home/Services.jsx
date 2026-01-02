import React from 'react';

const Services = () => {
    return (
        <>
            <div className='columns'>
                <h2 className='title is-size-3 ml-5 service-title'>Our Services</h2>
                <br />
            </div>
            <div className='columns'>
                <div className='column is-3 mx-auto service-box'>
                    <h3 className='subtitle is-uppercase is-underlined service-title mb-2'>Build</h3>
                    <p className='service-descrip is-size-6'>Custom websites designed and developed from the ground up to fit your business, goals, and workflow—fast, responsive, and built to scale.</p>
                </div>
                <div className='column is-3 mx-auto service-box'>
                    <h3 className='subtitle is-uppercase is-underlined service-title mb-4'>Launch</h3>
                    <p className='service-descrip is-size-6'>Professionally designed website templates that help you get online quickly without sacrificing quality, performance, or flexibility.</p>
                </div>
                <div className='column is-3 mx-auto service-box'>
                    <h3 className='subtitle is-uppercase is-underlined service-title mb-2'>Optimize</h3>
                    <p className='service-descrip is-size-6'>Guidance and hands-on help to improve, migrate, or fine-tune existing websites for better performance, reliability, and long-term growth.</p>
                </div>
            </div> 
        </>
    );
};

export default Services;