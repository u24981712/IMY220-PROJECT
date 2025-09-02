import React, { useState, useEffect } from 'react';

import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import Button1 from '../components/Button1';
import ProjectCard from '../components/ProjectCard';
import NewProject from '../components/NewProject';
import Footer from '../components/Footer';

const Home = () => {

    const [Repositories, setData] = useState([]);
    const [repoModal, setRepoModal] = useState(false);

    const toggleModal = () => {
        setRepoModal(!repoModal);
        console.log("******REACHED HERE....******")
    }

    const toggleModalSave = () => {

        // SAVE IMPLEMENTATION BUDDY, DON'T FOR GET ***************
        setRepoModal(!repoModal);
        console.log("****** SAVED ******")
    }

    useEffect(() => {

        fetch('http://localhost:8000/getRepos')
        .then(res => {
            return res.json();
        }).then(data => {
            setData(data);
            // console.log(data);
        })

        if (repoModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflowY = 'unset';
        }

        return () => {
            document.body.style.overflowY = 'unset';
        };
    }, []);

    return (
        <>
            <link rel="stylesheet" type="text/css" href="/assets/css/Home.css" />
            {repoModal ? <div className="newProjectContainer">
                <NewProject toggle={toggleModal} />
            </div> : ''}
            <NavBar />

            <div className="mesh-wrap" aria-hidden="true">
                <div className="mesh-layer layer-1"></div>
                <div className="mesh-layer layer-2"></div>
                <div className="mesh-layer layer-3"></div>
                <div className="mesh-layer layer-4"></div>
                <div className="mesh-layer layer-5"></div>
                <div className="mesh-layer layer-6"></div>
            </div>

            <div className="homePage">
                <div className='welcomeMessage'>
                    <h1>Welcome </h1>
                    <p>Let's build something amazing</p>
                </div>
                <div className='BTNsearchBar'>
                    <div className='addBtn'>
                        <Button1 toggle={toggleModal} text={"New Project"} style={"button1"} />
                    </div>
                    <div className='searchBarContainer'>
                        <SearchBar />
                    </div>
                </div>

                <div className="HomePageDropDowns">
                    <select className="dropdown" defaultValue="Popularity">
                        <option value="Popularity">Sort by Popularity</option>
                        <option value="Recent">Sort by Most Recent</option>
                        <option value="Shared">Sort by Most Shared</option>
                        <option value="Downloads">Sort by Most Downloads</option>
                        <option value="Alphabetical">Sort Alphabetically</option>
                    </select>

                    <select className="dropdown" defaultValue="Private">
                        <option value="Private">Private</option>
                        <option value="Public">Public</option>
                    </select>

                    <select className="dropdown" defaultValue="All Time">
                        <option value="All Time">All Time</option>
                        <option value="Today">Today</option>
                        <option value="This Week">This Week</option>
                        <option value="This Month">This Month</option>
                        <option value="This Year">This Year</option>
                    </select>
                </div>


            </div>

            <div className="AllProject">
                {Repositories && Repositories.map((data, index) => (
                    <ProjectCard key={index} data={data} pos={index} />
                ))}
            </div>

            <div className='Loadmore'>
                <Button1 text={"Load More.."} style={"button3"} />
            </div>

            <Footer />
        </>
    );
}

export default Home;