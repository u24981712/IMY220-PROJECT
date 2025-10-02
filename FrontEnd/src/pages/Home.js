import React, { useState, useEffect } from 'react';

import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import Button1 from '../components/Button1';
import ProjectCard from '../components/ProjectCard';
import NewProject from '../components/NewProject';
import Footer from '../components/Footer';

const Home = () => {

    const [projects, setProjects] = useState([]);

    const [user, setUser] = useState({});

    const [repoModal, setRepoModal] = useState(false);

    const [projectNameExists, setProjectNameExists] = useState(false);

    const [newProject, setNewProject] = useState({
        email: "",
        projectName: "",
        Label: "Public",
        description: "New Codex APP",
        dateCreated: "",
        downloads: 0,
        shares: 0,
        files: [],
        changes: [
            {
                editor: "",
                message: "",
                dateEditted: ""
            }
        ],
        collaborators: [],
        hashtags: []
    });

    useEffect(() => {

        const email = localStorage.getItem("username");

        if (email) {
            setNewProject(prev => ({
                ...prev,
                email: email
            }));
        }

        fetch('/getProjects/' + email)
            .then(res => {
                return res.json();
            }).then(data => {
                if (Array.isArray(data)) {
                    setProjects(data);
                } else if (data.message) {
                    setProjects([]);
                }
            })

        fetch('/getUser/' + email)
            .then(res => {
                return res.json();
            }).then(data => {
                setUser(data);
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

    // TOGGLE FUNCTION DEFINITION SECTION
    const toggleModal = () => {
        setRepoModal(!repoModal);
        console.log("******REACHED HERE....******")
    }

    // const toggleModalSave = () => {
    //     // SAVE IMPLEMENTATION BUDDY, DON'T FORGET ***************
    //     setRepoModal(!repoModal);
    //     console.log("****** SAVED ******")
    // };

    const toogleProjectNameExists = (val) => {

        console.log("Value changed to: ", val);

        setProjectNameExists(val);
    };


    // USESTATE SETTERS 

    const handlePorpulatingNewProject = (field, value) => {

        setNewProject(prev => ({
            ...prev,
            [field]: value
        }))

    };

    // SERVER BASED REQUEST FUNCTION DEFINITION SECTION

    const handleSaveNewProject = async () => {
        try {
            console.log("Sending project:", newProject);

            const res = await fetch('/newProject', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newProject)
            });

            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`)
            }

            const resData = await res.json();

            if (resData.message == "Project name already exists") {

                console.log("shii there cuhh");

                toogleProjectNameExists(true);

                return;

            }

            fetch('/getProjects/' + email)
                .then(res => {
                    return res.json();
                }).then(data => {
                    if (Array.isArray(data)) {
                        setProjects(data);
                    } else if (data.message) {
                        setProjects([]);
                    }
                })
                ;
            setRepoModal(!repoModal);

            set

            console.log("****** SAVED NEW PROJECT******")


        } catch (error) {

            console.log(error.message);

        }
    };

    return (
        <>
            <link rel="stylesheet" type="text/css" href="/assets/css/Home.css" />

            {repoModal ? <div className="newProjectContainer">
                <NewProject
                    handlePorpulatingNewProject={handlePorpulatingNewProject}
                    projectNameExists={projectNameExists}
                    toogleProjectNameExists={toogleProjectNameExists}
                    newProject={newProject}
                    handleSaveNewProject={handleSaveNewProject}
                    toggle={toggleModal} />
            </div> : ''}
            <NavBar />

            {/* <div className="mesh-wrap" aria-hidden="true">
                <div className="mesh-layer layer-1"></div>
                <div className="mesh-layer layer-2"></div>
                <div className="mesh-layer layer-3"></div>
                <div className="mesh-layer layer-4"></div>
                <div className="mesh-layer layer-5"></div>
                <div className="mesh-layer layer-6"></div>
            </div> */}

            <div className="homePage">
                <div className='welcomeMessage'>
                    <h1>Welcome {user.name} </h1>
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
                {projects.length > 0 ? projects.map((data, index) => (
                    <ProjectCard projectNameExists={projectNameExists} key={data.projectName} data={data} pos={index} />
                )) :
                    <div className='noProjects'>
                        <p>Your workspace is empty.</p>
                        <p>✨Create a project to begin💫</p>
                    </div>
                }
            </div>

            {/* <div className='Loadmore'>
                <Button1 text={"Load More.."} style={"button3"} />
            </div> */}

            <div className='footerDiv'>
                <Footer />
            </div>

        </>
    );
}

export default Home;