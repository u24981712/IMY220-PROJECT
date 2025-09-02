import React, { useState, useEffect } from "react"
import NavBar from "../components/NavBar"
import Button1 from "../components/Button1"
import { useParams } from "react-router-dom";

const Project = () => {


    const { id } = useParams();

    const [repository, setRepository] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:8000/getRepos/:' + id)
            .then(res => res.json())
            .then(data => {

                setRepository(data[id]);

                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching repos:', error);
                setLoading(false);
            });
    }, [id]);

    // const [ repoData, setSearchQuery ] = useState({});

    // repoData = dummydata[id];

    // const handleInputChange = (e) => {
    //     setSearchQuery(e.target.value);
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log('Searching for:', searchQuery);

    // };

    // const handleClear = () => {
    //     setSearchQuery('');
    // };

    if (loading) {
        return <div className="Loading">Loading...</div>;
    }


    return (
        <>
            <link rel="stylesheet" type="text/css" href="/assets/css/Project.css" />
            <NavBar />

            <div className="IndivProjectContainer">

                <div className="ProjectInfoHeader">
                    <p className={`label ${repository.Label.toLowerCase()}`}>
                        {repository.Label}
                    </p>
                    <h2 className="projectCardName">{repository.projectName}</h2>
                </div>

                <div className="horintalLine">
                </div>

                <div className="fileManagement">
                    <input placeholder="Search for a file..." className="ProjectSearchBar" />
                    <div className="downloadfiles">
                        <Button1 text={"Download Files"} style={"DownloadFiles"} />
                    </div>
                    <div className="addfiles">
                        <Button1 text={"Add Files"} style={"addFiles"} />
                    </div>
                </div>

                <div className="fileContainer">

                    {repository.files.map((file, index) => (

                        <div key={index} className="singleFiles">
                            <div>
                                {file.includes('/') ? '📁' : '📄'}{file}
                            </div>
                            <div>
                                2025-09-02
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </>
    )

}


export default Project;