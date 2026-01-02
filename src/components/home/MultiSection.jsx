import React from 'react';
import '../../css/multi.css';
import Services from './Services';
import AboutUs from './AboutUs';

const MultiSection = () => {
    return (
        <div className='is-fullwidth'>
            <div className='columns m-6'>
                 <div className='column is-8 has-text-centered'>
                    <Services />
                    <hr className='services-hr' />
                    <AboutUs />
                </div>
                <div className='column is-4 services-section'></div>
            </div>
        </div>
    );
};

export default MultiSection;