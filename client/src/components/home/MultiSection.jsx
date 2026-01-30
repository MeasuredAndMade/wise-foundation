import React from 'react';
import Services from './multi/Services';
import AboutUs from './multi/About'
import BlogPreview from './multi/BlogPreview';
import GetInTouch from './multi/GetInTouch';

const MultiSection = () => {
    return (
        <div className='is-fullwidth'>
            <div className='columns  is-multiline m-6'>
                 <div className='column is-8-desktop is-offset-1-tablet is-10-tablet is-offset-0-desktop  has-text-centered'>
                    <Services />
                    <hr className='services-hr' />
                    <AboutUs />
                </div>
                
                <div className='column is-offset-1-tablet is-10-tablet is-offset-0-desktop is-7-tablet is-4-desktop is-12-mobile services-section pl-5'>
                    <hr className='has-background-grey-lighter is-hidden-desktop' />
                    <BlogPreview />
                    <hr className='services-hr' />
                    <GetInTouch />
                </div>
            </div>
        </div>
    );
};

export default MultiSection;