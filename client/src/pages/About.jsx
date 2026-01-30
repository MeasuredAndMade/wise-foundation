import React, { useEffect } from 'react';
import AboutHero from '../components/about/Hero';
import StoryMission from '../components/about/StoryMission';
import Team from '../components/about/Team';
import Values from '../components/about/Values';
import Contact from '../components/about/Contact';

const About = () => {
    // useEffect(() => {
    //     document.title = 'About Us - Measured & Made';
    // })
    return (
        <div>
           <AboutHero />
           <StoryMission />
           <Team />
           <Values />
           <Contact />
           
        </div>
    );
};

export default About;