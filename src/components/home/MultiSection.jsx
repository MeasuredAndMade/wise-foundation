import React from 'react';
import '../../css/multi.css';
const MultiSection = () => {
    return (
        <div className='is-fullwidth'>
            <div className='columns mx-6 mt-3 mb-5 has-text-centered'>
                <div className='column is-8  px-6'>
                    <div className='columns'>
                        <h2 className='title is-size-3 service-title'>Our Services</h2>
                        <br />
                    </div>
                    <div className='columns'>
                        <div className='column is-3 mx-auto service-box'>
                            <h3 className='subtitle service-title mb-2'>Build</h3>
                            <p className='service-descrip'>Custom websites designed and developed from the ground up to fit your business, goals, and workflow—fast, responsive, and built to scale.</p>
                        </div>
                        <div className='column is-3 mx-auto service-box'>
                            <h3 className='subtitle service-title mb-4'>Launch</h3>
                            <p className='service-descrip'>Professionally designed website templates that help you get online quickly without sacrificing quality, performance, or flexibility.</p>
                        </div>
                        <div className='column is-3 mx-auto service-box'>
                            <h3 className='subtitle service-title mb-2'>Optimize</h3>
                            <p className='service-descrip'>Guidance and hands-on help to improve, migrate, or fine-tune existing websites for better performance, reliability, and long-term growth.</p>
                        </div>
                    </div> 
                </div>
                <div className='column is-4 services-section'></div>
            </div>
        </div>
    );
};

export default MultiSection;