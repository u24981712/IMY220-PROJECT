import React from 'react';

import Button1 from '../components/Button1';
import { Link } from 'react-router-dom';

const NavBar = () => {

    const profileImage = localStorage.getItem("profileImage") || "";
    
    return (
        <nav className="navbar">
            <link rel="stylesheet" type="text/css" href="/assets/css/NavBar.css" />

            <div className="Navlogo">
                <Link to="/home">
                    <img src="/assets/images/logo.png" alt="Logo" />
                </Link>
            </div>

            <div className="nav-buttons">
                <Link to="/home">
                    <Button1 text="Dashboard" style={"button1"} />
                </Link>

                <Link to="/explore">
                    <Button1 text="Explore" style={"button1"} />
                </Link>
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