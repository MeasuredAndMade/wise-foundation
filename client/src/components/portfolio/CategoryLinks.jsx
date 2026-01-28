import React from 'react';
import { Link, Links } from 'react-router-dom';

const CategoryLinks = ({category}) => {
    let newCat;
    const typeOfCat = typeof category;
    if(typeOfCat === 'undefined'){
        newCat = '';
    }else {
        newCat = category;
    }
    const links = [
        { name: 'All Projects', path: '' },
        { name: 'Websites', path: 'websites' },
        { name: 'Designs', path: 'designs' },
        { name: 'Branding', path: 'branding' },
        { name: 'In Progress', path: 'inProgress' },
    ];
    const linksLength = links.length
    return (
        <div className='container'>
            <div className='columns'>
                <div className='column is-8 is-offset-2 has-text-centered'>
                    <nav className='subtitle category-text'>
                        {links.map((link, i) => (
                            <React.Fragment key={i}>
                                <Link to={`/portfolio/${link.path}`} className={`category-link ${newCat === link.path ? 'is-active' : ''}`}>{link.name}</Link>
                                {i < linksLength - 1 && ' | '}
                            </React.Fragment>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default CategoryLinks;