import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/style.css';

const Register = () => {
    const [name, setName] = useState('');
    const [userId, setUserId] = useState('');
    const [pass, setPass] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    // console.log('username: ' + userId + " email: " + email + " pass: " + pass );
    // const body = { username: userId, email: email, password: pass };
    //     console.log(body);

    const handleRegister = async () => {
        const body = { name: name, username: userId, email: email, password: pass };
        console.log(body);
        try {
            const response = await axios.post('http://localhost:5000/api/auth/signup', body);
            console.log(response.status);
            if(response.status === 200){
                navigate('/');
            } else {
                navigate('/register');
            }
            
        } catch (error) {
            console.error('Login error: ', error.response ? error.response.data : error.message);
        }
    }
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
                                    <input className='input my-2 has-background-grey-lighter has-text-black is-large' type='text' placeholder='Full Name' autoFocus='' value={name} name='name' onChange={(e) => setName(e.target.value)} />
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control'>
                                    <input className='input my-2 has-background-grey-lighter has-text-black is-large' type='text' placeholder='Username' autoFocus='' value={userId} name='userId' onChange={(e) => setUserId(e.target.value)} />
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control'>
                                    <input className='input has-text-black my-2 has-background-grey-lighter is-large' type='email' placeholder='Email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                            </div>
                            <div className='field'>
                                <div className='control'>
                                    <input className='input has-text-black my-2 has-background-grey-lighter is-large' type='password' placeholder='Password' name='pass' value={pass} onChange={(e) => setPass(e.target.value)} />
                                </div>
                            </div>
                            <button type='button' className='button cta-button is-large is-fullwidth' onClick={handleRegister}>Register</button>
                        </form>
                        <p className='subtitle input-text has-text-black is-size-6'>Already have an account? <a className='input-link' href='/login' >Login</a></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;