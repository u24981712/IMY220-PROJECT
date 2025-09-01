import React from 'react';

import Button1 from '../components/Button1';
import { Link } from 'react-router-dom';
import { profileImage } from "../pages/Home"

const NavBar = () => {
    return (
        <nav className="navbar">
            <link rel="stylesheet" type="text/css" href="/assets/css/NavBar.css" />

            <div className="Navlogo">
                <img src="/assets/images/logo.png" alt="Logo" />
            </div>

            <div className="nav-buttons">
                <Button1 text="Dashboard" style={"button1"} />
                <Button1 text="Explore" style={"button1"} />
            </div>
            <div className="NavProfileImage">
                <Link to="/profile" >
                    <img className="profileImage" src={profileImage} alt="Profile" />
                </Link>
            </div>
        </nav>
    );
}

export default NavBar;