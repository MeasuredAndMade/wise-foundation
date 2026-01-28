import React from 'react';
import '../css/loginlogout.css';

const Register = () => {
    return (
        <>
            <hr className='has-background-grey-lighter' />
            <div className='container has-text-centered'>
                <div className='column is-6 is-offset-3 p-5 my-6'>
                    <h3 className='title has-text-black'>Register</h3>
                    <hr className='login-hr' />
                    <p className='subtitle has-text-black-light'>Please login to proceed.</p>
                    <div className='box has-background-grey-light'>
                        <form className='my-5'>
                            <div className='field'>
                                <div className='control'>
                                    <input className='input my-2 has-background-grey-lighter is-large' type='text' placeholder='Username' autoFocus='' />
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control'>
                                    <input className='input my-2 has-background-grey-lighter is-large' type='email' placeholder='Email' />
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control'>
                                    <input className='input my-2 has-background-grey-lighter is-large' type='password' placeholder='Password' />
                                </div>
                            </div>
                            <button className='button cta-button is-large is-fullwidth'>Login</button>
                        </form>
                        <p className='subtitle input-text has-text-black is-size-6'>Already have an account? <a className='input-link' href='/login'>Login</a></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;