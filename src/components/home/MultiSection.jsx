import React from 'react';
import '../../css/multi.css';
import Services from './Services';
import img from '../../assets/ComingBG.png';

const MultiSection = () => {
    return (
        <div className='is-fullwidth'>
            <div className='columns m-6'>
                 <div className='column is-8 has-text-centered'>
                    <Services />
                    <hr className='services-hr' />
                    <div className='columns'>
                        <div className='column is-6'>
                            <h2 className='title service-title has-text-left'>About Us</h2>
                            <p className='service-descrip has-text-left'>I build purposeful websites designed to be reliable, scalable, and easy to maintain. My work focuses on custom development, streamlined launches, and thoughtful optimization—helping businesses get online, grow confidently, and make the most of their digital presence.
                            <br /><br />
                            Every project starts with understanding your goals and ends with a solution that’s built with intention, not excess.</p>
                            <div className='has-text-left mt-3'>
                                <a href='/' className='about-link'>Learn more about our approach →</a>
                            </div>
                        </div>
                        <div className='column is-6 m-auto'>
                            <img src={img} />
                        </div>
                    </div>
                </div>
                <div className='column is-4 services-section'></div>
            </div>
        </div>
    );
};

export default MultiSection;