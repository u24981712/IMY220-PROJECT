import React, { useState, useEffect } from "react"
import NavBar from "../components/NavBar"
import Button1 from "../components/Button1"
import SingleFile from "../components/SingleFile";
import { Link, useParams, useNavigate } from "react-router-dom";
import Messages from "../components/Messages";
import ProfilePreview from "../components/ProfilePreview";

const Project = () => {

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    const email = localStorage.getItem("username");

    const profileImage = localStorage.getItem("profileImage") || "";

    const { projectName } = useParams();

    const [repository, setRepository] = useState(null);

    const [repoUser, setRepoUser] = useState(null);

    const [loading, setLoading] = useState(true);
    // const [repoData, setSearchQuery] = useState({});

    const [showProfile, setShowProfile] = useState(false);

    const toggleShowProfile = () => {
        setShowProfile(!showProfile);
    }



    useEffect(() => {
        const fetchData = async () => {
            try {

                const repoResponse = await fetch('http://localhost:8000/getRepo/' + projectName);
                const repoData = await repoResponse.json();
                setRepository(repoData);

                const userResponse = await fetch('http://localhost:8000/getUser/' + repoData.email);
                const userData = await userResponse.json();
                setRepoUser(userData);

            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [projectName]); // Add projectName as dependency



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
                    <div>
                        <p className={`label ${repository.Label.toLowerCase()}`}>
                            {repository.Label}
                        </p>
                        <h2 className="projectCardName">{repository.projectName}</h2>
                    </div>

                    <div className="GoBackBTN">
                        <Button1 toggle={handleGoBack} text={"Go Back"} style={"buttonBack"} />
                    </div>
                </div>


                <div className="horintalLine">
                </div>

                <div className="fileManagement">
                    <input placeholder="Search for a file..." className="ProjectSearchBar" />
                    <div className="downloadfiles">
                        <Button1 text={"Download Files"} style={"DownloadFiles"} />
                    </div>
                    <div className="addfiles">
                        <Button1 text={"Add Files"} style={"DownloadFiles"} />
                    </div>
                </div>

                <div className="fileGrid">

                    <div className="fileContainer">
                        {repository.files.map((file, index) => (

                            <div key={index} className="singleFiles">
                                <div>
                                    {file.includes('/') ? '📁' : '📄'}
                                    <Link to={`/file/${file}`}>{file}</Link>
                                </div>
                                <div>
                                    2025-09-02
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="MessagesContainer">
                        {repository.messages.map((messages, index) => (
                            <div className="SingleMessage" key={index}>
                                <Messages messages={messages} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <button onClick={toggleShowProfile} className="ProfileViewerCard">
                <div className="ProfileViewerAvatar" >
                    <img src={repoUser.profileImage} />
                </div>
                <div className="ProfileViewerInfo">
                    <p>Project Owner: {repoUser.email} </p>
                </div>
            </button>

            {showProfile ?
                <div className="ProjectOwner">
                    <ProfilePreview className="ProjectOwnerPreview" toggle={toggleShowProfile} profile={repoUser} />
                </div> : ""}
        </>
    )
}

export default Project;