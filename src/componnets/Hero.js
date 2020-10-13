import React from 'react';
// import Button from './Button';
import './Hero.css';
import '../App.css';

function Hero() {
    return (
        <div className='hero-container'>
            <video src="" autoPlay loop muted></video>
            <h1>INTOXICATED SPORTS REPORT</h1>
            <p>Sports & Adult Beverages - but mostly sports.</p>
            {/* <div
                className='hero-btns'
            >
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    GET STARTED
                </Button>
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                >
                    WATCH TRAILER
                    <i
                        className='far fa-play-circle'
                    />
                </Button>
            </div> */}
        </div>
    )
}

export default Hero


