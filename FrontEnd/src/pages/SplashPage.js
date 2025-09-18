import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button1 from '../components/Button1';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import TestimonialCards from '../components/TestimonialCards';
import ExampleProjectCard from '../components/ExampleProjectCard';

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

    const exampleProject = {
        "email": "xxxxx@example.com",
        "projectName": "Project Name",
        "Label": "Private",
        "description": "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        "dateCreated": "2024-09-03",
        "commits": "31",
        "collabs": "8",
        "downloads": 456,
        "shares": 312,
        "files": [
            "src/",
            "components/",
            "store/",
            "assets/",
            "ProductList.vue",
            "ShoppingCart.vue",
            "Checkout.vue",
            "main.js",
            "package.json"
        ],
        "messages": [
            {
                "editor": "jane.smith@example.com",
                "message": "Optimized shopping cart performance with Vuex",
                "dateEditted": "2024-09-06"
            }
        ]
    }

    const [testimonials, setTestimonials] = useState([]);
    const [ShowExample, setShowExample] = useState(false);

    useEffect(() => {

        fetch('/testimonials')
            .then(res => {
                return res.json();
            }).then(data => {
                setTestimonials(data.testimonials);
                // console.log(data.testimonials);
            })

    }, []);

    const toggleShowExample = () => {
        setShowExample(!ShowExample);
    }


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
                <div data-aos="fade-down" data-aos-duration="1000" className="logo">
                    <img src="/assets/images/codex.png" alt="Logo" />
                </div>

                <Link data-aos="fade-down" data-aos-duration="2000" to="/login">
                    <Button1 data-aos="fade-down" data-aos-duration="2000" text="Sign In" style={"button1"} />
                </Link>

                <Link data-aos="fade-down" data-aos-duration="3000" to="/signup">
                    <Button1 text="Get Started" style={"button2"} />
                </Link>

            </nav>

            <div className="heroSection">
                <h1 data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="300"
                    data-aos-offset="0" 
                    data-aos-duration="2000">Share Code.</h1>
                <h1 data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="300"
                    data-aos-offset="0" 
                    data-aos-duration="2500">Build Together.</h1>
                <h1 data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="300"
                    data-aos-offset="0" 
                    data-aos-duration="3000">Create Magic.</h1>
                <p data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="300"
                    data-aos-offset="0" 
                    data-aos-duration="3000">Where developers connect, collaborate, and create.Join thousands already building together.</p>
            </div>

            <div className="callToActionBtns">
                <Link data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="300"
                    data-aos-offset="0" 
                    data-aos-duration="3000" to="/login">
                    <Button1 text="Start Exploring" style={"button2"} />
                </Link>

                <Link data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="300"
                    data-aos-offset="0" 
                    data-aos-duration="3000" to="/explorefeatures">
                    <Button1 text="Explore Features" style={"button1"} />
                </Link>
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

                    <Link >
                        <Button1 toggle={toggleShowExample} text="See Examples" style={"button4"} />
                    </Link>

                </div>

            </div>

            <div className='Footer'>
                <Footer />
            </div>

            {ShowExample ? <div className='ShowExampleContainer'>
                <Button1 toggle={toggleShowExample} text={"x"} style={"closeBTN"} />
                <div className='ShowExample'>
                    <ExampleProjectCard data={exampleProject} />
                </div>
            </div> : ""}
        </div>
    );
};

export default SplashPage;