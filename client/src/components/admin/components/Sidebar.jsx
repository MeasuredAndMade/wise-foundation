import React from 'react';
import logo from '../../../assets/logo.png';
import '../../../css/admin.css'
import { FaUser, FaChartPie, FaBriefcase,  FaRegWindowMaximize, FaGlobe, FaArchive } from 'react-icons/fa';


const Sidebar = ({user}) => {
    
    return (
        <aside className='menu '>
            <div className='logo mt-3'>
                <figure className='image'>
                    <img src={logo} alt='Measured & Made' />
                </figure>
                <hr className='has-background-grey-lighter' />
                <h2 className='title has-text-black is-size-5'>Welcome, {user.name.split(' ')[0]}!</h2>
                <hr className='has-background-grey-lighter' />
            </div>
            <ul className='menu-list sidebar'>
                <li><a className='has-text-black is-size-5'><FaArchive /> Dashboard</a></li>
                <li><a className='has-text-black is-size-5'><FaChartPie /> Projects</a></li>
                <li><a className='has-text-black is-size-5'><FaChartPie /> Media Library</a></li>
                <li><a className='has-text-black is-size-5'><FaChartPie /> General Settings</a></li>
            </ul>
        </aside>
    );
};

export default Sidebar;