import React, { useState } from 'react';
import '../css/navbar.css';
import logo from '../assets/logo4.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    
    return (
        <nav className='navbar mb-3' role='navigation' aria-label='main navigation'>
            <div className='navbar-brand'>
                <a className='mt-5 ml-6' href='/'>
                    <img height='250' width='250' src={logo} alt='Measured & Made' />
                </a>
                <a className={`navbar-burger ${isOpen ? 'is-active' : ''}`} onClick={() => {setIsOpen(!isOpen)}} role='button' aria-label='menu' aria-expanded='false' data-target='mainNavigation'>
                    <span aria-hidden='true'></span>
                    <span aria-hidden='true'></span>
                    <span aria-hidden='true'></span>
                    <span aria-hidden='true'></span>
                </a>
            </div>
            <div id='mainNavigation' className={`navbar-menu ${isOpen ? 'is-active' : ''} `}>
                <div className='navbar-end mr-6 is-align-items-flex-end '>
                    <a className='navbar-item px-5'>Home</a>
                    <a className='navbar-item px-5'>About</a>
                    <a className='navbar-item px-5'>Portfolio</a>
                    <a className='navbar-item px-5'>Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;