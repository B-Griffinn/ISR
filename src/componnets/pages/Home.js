import React from 'react';
import '../../App.css';
import LandingPage from '../LandingPage/LandingPage';
import Cards from '../cards/Cards';

// Home Page is the Landing Page aka route to "/"
function Home () {

    return (
        <>
        <LandingPage />
        <Cards />
        </>
    )
}

export default Home;
