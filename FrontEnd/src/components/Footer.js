import React, { useState } from 'react';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Newsletter subscription:', email);
        setEmail('');
    };

    return (
        <footer className="footer">
            <link rel="stylesheet" type="text/css" href="/assets/css/Footer.css" />

            <div className="footer-container">
                <div className="footer-left">
                    <div className="footer-logo">
                        <img src="/assets/images/codex2.png" alt="CodeX" />
                    </div>
                </div>

                <div className="footer-links">
                    <div className="footer-column">
                        <h3>Product</h3>
                        <ul>
                            <li><a href="#features">Features</a></li>
                            <li><a href="#pricing">Pricing</a></li>
                            <li><a href="#security">Security</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>Community</h3>
                        <ul>
                            <li><a href="#explore">Explore</a></li>
                            <li><a href="#blog">Blog</a></li>
                            <li><a href="#events">Events</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>Support</h3>
                        <ul>
                            <li><a href="#help">Help Center</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-newsletter">
                    <h3>Subscribe To Our Newsletter</h3>
                    <form onSubmit={handleSubmit} className="newsletter-form">
                        <input
                            type="email"
                            placeholder="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="newsletter-input"
                            required
                        />
                        <button type="submit" className="newsletter-submit">
                            SUBMIT
                        </button>
                    </form>
                </div>
            </div>
        </footer>
    );
};

export default Footer;