import React, { useEffect } from 'react';
import PortHero from '../components/portfolio/PortHero.jsx'
import {Routes, Route, useParams, Outlet} from 'react-router-dom';
import CategoryLinks from '../components/portfolio/CategoryLinks.jsx';
import Featured from '../components/portfolio/Featured.jsx';

const Portfolio = () => {
    return (
        <div>
            <PortHero />
            <CategoryLinks />
            <hr className='has-background-grey-lighter' />
            <Outlet />
            <Featured />
        </div>
    );
};

export default Portfolio;