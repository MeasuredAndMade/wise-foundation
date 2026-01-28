// LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ login }) => {
    const [userId, setUserId] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if (userId === 'user' && pass === 'pass') {
            login(userId, pass);
            navigate('/dashboard');
        }
    };

    return (
        <>
            <hr className='has-background-grey-lighter' />
            
            <div className='container has-text-centered'>
                <div className='column is-6 is-offset-3 p-4 my-6'>
                    <h3 className='title has-text-black'>Login</h3>
                    <hr className='login-hr' />
                    <p className='subtitle has-text-black-light'>Please login to proceed.</p>
                    <div className='box has-background-grey-light'>
                            <div className='field'>
                                <div className='control'>
                                    <input className='input my-2 has-background-grey-lighter has-text-black is-large' type='text' placeholder='Username' autoFocus='' value={userId} onChange={e => setUserId(e.target.value)} />
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control'>
                                    <input className='input has-text-black my-2 has-background-grey-lighter is-large' type='password' placeholder='Password' value={pass} onChange={e => setPass(e.target.value)} />
                                </div>
                            </div>
                            <button className='button cta-button is-large is-fullwidth' onClick={handleLogin}>Login</button>
                        <p className='subtitle input-text has-text-black is-size-6'>Don't have an account? <a className='input-link' href='/register'>Sign Up</a></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginPage;