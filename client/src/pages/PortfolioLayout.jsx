import React, { useEffect } from 'react';
import PortHero from '../components/portfolio/PortHero.jsx'
import {Routes, Route, useParams, Outlet} from 'react-router-dom';
import CategoryLinks from '../components/portfolio/CategoryLinks.jsx';
import Featured from '../components/portfolio/Featured.jsx';

const Portfolio = () => {
    const { category } = useParams();
    
    useEffect(() => {
        category ? document.title = `Measured & Made | ${category}` : document.title = 'Measured & Made | Portfolio';   
    })
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