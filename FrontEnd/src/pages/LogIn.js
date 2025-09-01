import React from 'react';
import { Link } from 'react-router-dom';
import Button1 from '../components/Button1';

const LogIn = () => {
    return (
        <>
            <link rel="stylesheet" type="text/css" href="/assets/css/LogIn.css" />

            <div className="mesh-wrap" aria-hidden="true">
                <div className="mesh-layer layer-1"></div>
                <div className="mesh-layer layer-2"></div>
            </div>

            <div className='BackBTN'>
                <Link to="/">
                    <Button1 text={"Home"} style={"button4"} />
                </Link>
            </div>

            <div className="login-container">

                <h1 className="login-title">Welcome Back</h1>
                <p className="login-subtitle">Sign in to your account</p>

                <form className="login-form">
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" placeholder="Enter your email" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="Enter your password" required />
                    </div>

                    <button type="submit" className="login-button">Sign In</button>
                </form>

                <div className="signup-prompt">
                    Don't have an account?
                    <Link to="/signup" className="signup-link">
                        Sign up
                    </Link>
                </div>
            </div>
        </>
    );
};

export default LogIn;
