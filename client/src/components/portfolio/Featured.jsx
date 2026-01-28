import React from 'react';

const Featured = () => {
    return (
        <div className='container'>
            <div className='columns mb-4'>
                <div className='column is-5 p-6'>
                    <figure className='image is-16x9'>
                        <img src='https://placehold.net/1-800x600.png' />
                    </figure>
                </div>
                <div className='column pt-6'>
                    <h2 className='title is-uppercase is-underlined featured-title is-2 mb-4'>Featured Project</h2>
                    <h3 className='subtitle has-text-weight-semibold is-3 featured-title'>Measured & Made</h3>
                    <p className='mb-2 featured-title is-size-5'>The Measured & Made website was intentionally designed and built to emphasize clarity, usability, and thoughtful structure. By prioritizing planning, clean layouts, and scalable development, the site delivers a calm, focused experience that reflects the studio’s values and approach.</p>
                </div>
            </div>
            <hr className='has-background-grey-lighter' />
            <p className='has-text-centered featured-title my-3'><em>Every project</em> at Measured & Made is built with intention, respect, and collaboration.<br /> We believe thoughtful planning leads to meaningful results.</p>
            <hr className='has-background-grey-lighter' />
            <div className='columns has-text-centered mb-4'>
                <div className='column'>
                    <h3 className='title featured-title mb-3'>Have a project in mind?</h3>
                    <h4 className='subtitle featured-title'>Let's build something intentional together.</h4>
                    <a className='button cta-button' href='/contact'>Start a Converstation</a>
                </div>
            </div>
        </div>
    );
};

export default Featured;