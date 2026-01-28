import React, { useEffect } from 'react';

const Contact = () => {
    useEffect(() => {
        document.title = 'Contact Us - Measured & Made';
    }, []);
    return (
        <>
            <hr className='has-background-grey-lighter' />
            <div className='container my-6 has-text-centered pt-4'>
                <div className='title is-1 contact-text'>Start a Conversation</div>
                <div className='subtitle is-4 contact-text-softer mt-5'>Tell us about your project or ask a question. <br />We are here to listen and collaborate.</div>
            </div>
            <hr className='has-background-grey-lighter' />
            <div className='container my-6'>
                <div className='columns '>
                    <div className='column is-two-thirds ' style={{ "border-right": "1px solid black"}}>
                        <div className='field mx-6 pr-6 '>
                            <label className='label'>Name</label>
                            <div className='control'>
                                <input placeholder='Name' className='input has-background-grey-lighter is-medium' style={{ 'border': 'none'}} type='text' />
                            </div>
                        </div>
                        <div className='field pr-6 mx-6'>
                            <label className='label'>Email</label>
                            <div className='control'>
                                <input placeholder='Email' className='input has-background-grey-lighter is-medium' style={{ 'border': 'none'}} type='email' />
                            </div>
                        </div>
                        <div className='field pr-6 mx-6'>
                            <label className='label'>Tell Us More</label>
                            <div className='control'>
                                <textarea placeholder='Message' className='text-area has-background-grey-lighter textarea-width p-2'style={{ 'border': 'none', 'border-radius': '5px', 'font-size': '1rem'}}></textarea>
                            </div>
                        </div>
                        <div className='control py-3 pr-6 mx-6'>
                            <a className='button is-size-6 cta-button contact-button ' href='/contact'>Contact Us</a>
                        </div>
                    </div>
                    <div className='column ml-6'>
                        <div className='subtitle contact-text is-4'>Prefer Email?</div>
                        <div className='contact-text is-size-5'><a href='#'>contact@measured-and-made.com</a></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;