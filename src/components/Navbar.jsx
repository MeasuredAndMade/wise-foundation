import React, { useState } from 'react';
import '../css/navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        
    }
    return (
        <nav className='navbar' role='navigation' aria-label='main navigation'>
            <div className='navbar-brand'>
                <a className='' href='/'>
                    <img height='250' width='250' src={logo} alt='Measured & Made' />
                </a>
                <a className='navbar-burger' role='button' aria-label='menu' aria-expanded='false' data-target='mainNavigation'>
                    <span aria-hidden='true'></span>
                    <span aria-hidden='true'></span>
                    <span aria-hidden='true'></span>
                    <span aria-hidden='true'></span>
                </a>
            </div>
            <div id='mainNavigation' className='navbar-menu'>
                <div className='navbar-end  is-align-items-flex-end '>
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