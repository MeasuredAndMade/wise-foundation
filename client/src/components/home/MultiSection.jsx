import React from 'react';
import Services from './multi/Services';
import AboutUs from './multi/About'
import BlogPreview from './multi/BlogPreview';
import GetInTouch from './multi/GetInTouch';

const MultiSection = () => {
    return (
        <div className='is-fullwidth'>
            <div className='columns m-6'>
                 <div className='column is-8 has-text-centered'>
                    <Services />
                    <hr className='services-hr' />
                    <AboutUs />
                </div>
                <hr className='services-hr is-hidden-tablet' />
                <div className='column is-4-desktop is-12-mobile services-section'>
                    
                    <BlogPreview />
                    <hr className='services-hr' />
                    <GetInTouch />
                </div>
            </div>
        </div>
    );
};

export default MultiSection;