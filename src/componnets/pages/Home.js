import React, { useEffect, useState } from 'react';
import '../../App.css';
import HeroSection from '../LandingPage/LandingPage';
import Cards from '../cards/Cards';

// Home Page is the Landing Page aka route to "/"
function LandingPage () {

    return (
        <>
        <HeroSection />
        <Cards />
        </>
    )
}

export default LandingPage;
