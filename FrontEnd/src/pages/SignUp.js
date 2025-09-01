import React from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom'; 
import Button1 from "../components/Button1"

const SignUp = () => {
    return (
        <>
            <link rel="stylesheet" type="text/css" href="/assets/css/SignUp.css" />

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
                <h2 className="login-title">Create Account</h2>
                {/* <p className="login-subtitle">Join us today and get started</p> */}

                <div className="login-form">
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                placeholder="Enter your first name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                placeholder="Enter your last name"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="Confirm your password"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="login-button"
                    >
                        Create Account
                    </button>
                </div>

                <div className="signup-prompt">
                    Already have an account? <Link to="/login" className="signup-link">Sign in</Link>
                </div>
            </div>
        </>
    );
};

export default SignUp;
