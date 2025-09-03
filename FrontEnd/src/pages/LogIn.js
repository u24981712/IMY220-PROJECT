import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button1 from '../components/Button1';

const LogIn = () => {

    const [showError, setShowError] = useState(false);
    const [users, setUsers] = useState([]);

    const navigate = useNavigate();

    const clearError = () => {
        setShowError(false);
    }

    const handleLogin = (e) => {
        e.preventDefault();

        const emailInput = document.getElementById('email').value;
        const passwordInput = document.getElementById('password').value;

        const user = users.find(user =>
            emailInput === user.email && passwordInput === user.password
        );

        if (user) {
            setShowError(false);

            localStorage.setItem("username", user.email);

            localStorage.setItem("homeLink", "Home");

            localStorage.setItem("profileImage", user.profileImage || "");

            navigate('/home');

        } else {
            setShowError(true);
        }
    };

    useEffect(() => {
        fetch('http://localhost:8000/getUsers')
            .then(res => {
                return res.json();
            }).then(data => {
                setUsers(data);
            })
    }, []);


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
                        <input onChange={(e) => clearError()} type="email" id="email" placeholder="Enter your email" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input onChange={(e) => clearError()} type="password" id="password" placeholder="Enter your password" required />
                    </div>

                    {showError && <span className="errorSpan">Password or Email is incorrect.</span>}
                    <button type="submit" onClick={handleLogin} className="login-button">Sign In</button>
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
