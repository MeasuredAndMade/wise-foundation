import React from 'react';
import { useParams } from 'react-router-dom';

const PortfolioCategory = () => {
    const { category } = useParams();
    return (
        <div className='has-text-centered'>
            <h2 className='has-text-black is-size-3 mt-6'>Category: {category}</h2>
        </div>
    );
};

export default PortfolioCategory;