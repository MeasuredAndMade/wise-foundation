import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import MultiSection from '../components/home/MultiSection';

const Home = () => {
    useEffect(() => {
        document.title = 'Measured & Made';
    })
    return (
        <div>
            <Hero />
            <MultiSection />
        </div>
    );
};

export default Home;