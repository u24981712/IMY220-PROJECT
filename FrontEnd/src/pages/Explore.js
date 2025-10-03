import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import ProjectCard from "../components/ProjectCard";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";

const Explore = () => {
    const [Repositories, setRepositories] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch('/getProjects')
            .then(res => {
                return res.json();
            }).then(data => {
                const newData = data.filter((data) => data.Label === "Public");
                setRepositories(newData);
            });
    }, []);

    const filteredRepositories = Repositories.filter(repo =>
        repo.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        repo.description?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <link rel="stylesheet" type="text/css" href="/assets/css/Explore.css" />

            <NavBar />
            <div className="ExplorePage">
                <h2 className="LETSEXPLORE">Let's <span>X</span>plore!</h2>

                <div className="ExplorePageSearchBar">
                    <SearchBar onSearch={setSearchTerm} />
                </div>

                <div className="HomePageDropDowns">
                    <select className="dropdown" defaultValue="Popularity">
                        <option value="Popularity">Sort by Popularity</option>
                        <option value="Recent">Sort by Most Recent</option>
                        <option value="Shared">Sort by Most Shared</option>
                        <option value="Downloads">Sort by Most Downloads</option>
                        <option value="Alphabetical">Sort Alphabetically</option>
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
                    {filteredRepositories.length > 0 ? (
                        filteredRepositories.map((data, index) => (
                            <div key={index}>
                                <ProjectCard data={data} />
                            </div>
                        ))
                    ) : (
                        <p>No projects found.</p>
                    )}
                </div>
            </div>
            <div className='footerDiv'>
                <Footer />
            </div>
        </>
    );
}

export default Explore;