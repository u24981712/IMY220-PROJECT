import React from 'react';
import { Link } from 'react-router-dom';
import Button1 from '../components/Button1';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import TestimonialCards from '../components/TestimonialCards';

const SplashPage = () => {
    const reasons =
        [
            {
                image: "/assets/images/chatBubble.png",
                title: "Lightning Fast",
                description: "Share code snippets instantly with real-time collaboration and live editing."
            },
            {
                image: "/assets/images/lock.png",
                title: "Secure and Private",
                description: "Enterprise-grade security with private repositories and encrypted sharing."
            },
            {
                image: "/assets/images/flash.png",
                title: "Global Community",
                description: "Connect with developers worldwide and discover amazing open-source projects."
            }
        ];

    const stats = [
        {
            label: "Active Developers",
            value: "50K+"
        },
        {
            label: "Code Snippets Shared",
            value: "2M+"
        },
        {
            label: "Countries",
            value: "180+"
        },
        {
            label: "Uptime",
            value: "99.9%"
        },
    ];

    const testimonials = [
        {
            name: "Njabulo Nhlengethwa",
            tile: "Senior Full-Stack Developer",
            description: "CodeX transformed how our team collaborates. Real-time editing and instant feedback make development so much smoother.",
            image: ""
        },
        {
            name: "Thabo Seripe",
            tile: "Frontend Engineer",
            description: "The syntax highlighting is gorgeous, and the community is incredibly helpful. Found solutions to problems I've been stuck on for days.",
            image: ""
        },
        {
            name: "Karabo Matsile",
            tile: "Senior Full-Stack Developer",
            description: "CodeX transformed how our team collaborates. Real-time editing and instant feedback make development so much smoother.",
            image: ""
        },
        {
            name: "Senamile Shabangu",
            tile: "Backend Developer",
            description: "The debugging tools in CodeX are exceptional. I can trace issues faster than ever before, and the integrated terminal saves me tons of time.",
            image: ""
        },
        {
            name: "Owen Julies",
            tile: "DevOps Engineer",
            description: "CodeX's deployment integration is seamless. One-click deployments and environment management have revolutionized our workflow.",
            image: ""
        },
        {
            name: "Senamile Shabangu",
            tile: "Mobile Developer",
            description: "Cross-platform development became effortless with CodeX. The code completion and error detection are incredibly accurate.",
            image: ""
        }
    ]

    return (
        <div className="splash-page">
            <link rel="stylesheet" type="text/css" href="/assets/css/SplashPage.css" />

            <div className="mesh-wrap" aria-hidden="true">
                <div className="mesh-layer layer-1"></div>
                <div className="mesh-layer layer-2"></div>
                <div className="mesh-layer layer-3"></div>
                {/* <div className="mesh-layer layer-4"></div>
                <div className="mesh-layer layer-5"></div>
                <div className="mesh-layer layer-6"></div> */}
            </div>

            <nav className='NAV'>
                <div className="logo">
                    <img src="/assets/images/logo.png" alt="Logo" />
                </div>

                <Link to="/login">
                    <Button1 text="Sign In" style={"button1"}/>
                </Link>

                <Link to="/signup">
                    <Button1 text="Get Started" style={"button2"} />
                </Link>

            </nav>

            <div className="heroSection">
                <h1>Share Code.</h1>
                <h1>Build Together.</h1>
                <h1>Create Magic.</h1>
                <p>Where developers connect, collaborate, and create.Join thousands already building together.</p>
            </div>

            <div className="callToActionBtns">
                <Button1 text="Start Exploring" style={"button2"} />
                <Button1 text="Explore Features" style={"button1"} />
            </div>

            <div className='SECTION1'>
                <h1 className='whyDevelopers'>Why Developers Choose <span className='webname'>CodeX</span> </h1>
                <Cards reasons={reasons} />
            </div>

            <div className='SECTION2'>
                <div className="stats-container">
                    {stats.map((stat, index) => (
                        <div className="stat" key={index}>
                            <h1>{stat.value}</h1>
                            <p>{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className='SECTION3'>
                <h1 className='LovedDevelopers'>Loved By Developers Everywhere </h1>
                <TestimonialCards testimonials={testimonials} />
            </div>

            <div className='CallToActionSection'>

                <h1 className='ReadyToStart'>Ready to Start Building?</h1>
                <p>Join thousands of developers already
                    creating amazing things together.</p>

                <div className='CTAbtns'>
                    <Link to="/signup">
                        <Button1 text="Create Account" style={"button3"} />
                    </Link>
                    <Button1 text="See Examples" style={"button4"} />
                </div>

            </div>

            <div className='Footer'>
                <Footer />
            </div>
        </div>
    );
};

export default SplashPage;