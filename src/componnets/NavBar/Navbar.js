import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
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
