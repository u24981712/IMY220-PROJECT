import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import ProjectCard from "../components/ProjectCard";
import SearchBar from "../components/SearchBar";

const Explore = () => {
    const [Repositories, setRepositories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/getRepos')
            .then(res => {
                return res.json();
            }).then(data => {
                setRepositories(data);
                console.log(data);
            })
    }, []);

    return (
        <>
            <link rel="stylesheet" type="text/css" href="/assets/css/Explore.css" />

            <NavBar />
            <div className="ExplorePage">
                <h1>EXPLORE PAGE</h1>

                <div className="ExplorePageSearchBar">
                    <SearchBar />
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

                <div className="ExplorePageProjects">
                    {Repositories && Repositories.map((data, index) => (
                        <div key={index} >
                            <ProjectCard data={data} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Explore;