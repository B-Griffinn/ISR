import React, { useState } from 'react';
import { Link, Router } from 'react-router-dom';

function Navbar() {
    const [ state, setState ] = useState()
    // setState("Hello from state")
    // console.log("State", state)

    return (
        <>
        <nav className="navbar">
            <div className="navbar-contatiner">
                <Link
                    to="/"
                    className="navbar-logo"
                >
                    IRS <i className="fas fa-microphone-alt"></i>
                </Link>
            </div>
        </nav>
        </>
    )
}

export default Navbar;
