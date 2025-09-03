import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar"
import Button1 from "../components/Button1";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import { Link, useNavigate } from 'react-router-dom';
import EditProfile from "../components/EditProfile";

const Profile = () => {

    const email = localStorage.getItem("username");

    const profileImage = localStorage.getItem("profileImage") || "";

    const [Repositories, setRepositories] = useState([]);
    const [user, setUser] = useState(null);
    const [friends, setFriends] = useState(null);


    const [loading, setLoading] = useState(true);

    const [editModal, setEditModal] = useState(false);

    const toggleProfileModal = () => {
        setEditModal(!editModal);
        console.log("******REACHED HERE....******")
    }

    const navigate = useNavigate();

    const handleLogout = () => {

        localStorage.setItem("username", "");
        localStorage.setItem("profileImage", "");

        navigate('/');
    }

    useEffect(() => {
        try {

            fetch('http://localhost:8000/getRepos/' + email)
                .then(res => {
                    return res.json();
                }).then(data => {
                    setRepositories(data);
                    // console.log(data);
                });

            fetch('http://localhost:8000/getUser/' + email)
                .then(res => {
                    return res.json();
                }).then(data => {
                    setUser(data);
                    setFriends(data.friends)
                    // console.log(data);
                })

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }
    }, []);



    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <NavBar />
            <link rel="stylesheet" type="text/css" href="/assets/css/Profile.css" />

            {editModal ?
                <EditProfile toggle={toggleProfileModal} user={user} /> :

                <div className="profileContainer">
                    <div className="profile-sidebar">
                        <div className="profile-card">
                            <div className="avatar">
                                <img className="avatarImage" src={profileImage} alt="Profile" />
                            </div>
                            <h1 className="username">Njabulo Nhlengethwa</h1>

                            <Button1 toggle={toggleProfileModal} text={"Edit Profile"} style={"buttonEdit"} />

                            <div className="handle">{email}</div>

                            <p className="bio">{user ? user.bio : ""}</p>

                            <div className="stats">
                                <div className="stat">
                                    <div className="stat-number">127</div>
                                    <div className="stat-label">Followers</div>
                                </div>
                                <div className="stat">
                                    <div className="stat-number">89</div>
                                    <div className="stat-label">Following</div>
                                </div>
                                <div className="stat">
                                    <div className="stat-number">{Repositories.length}</div>
                                    <div className="stat-label">Repos</div>
                                </div>
                            </div>

                            <div className="profile-info">
                                <div className="info-item">
                                    <span>🏢</span>
                                    <span>University Of Preotoria</span>
                                </div>
                                <div className="info-item">
                                    <span>📍</span>
                                    <span>Preotoria, Gauteng</span>
                                </div>
                                <div className="info-item">
                                    <span>📧</span>
                                    <span>u24981712@tuks.co.za</span>
                                </div>
                                <div className="info-item">
                                    <span>📅</span>
                                    <span>Joined March 2020</span>
                                </div>
                            </div>

                            <Button1 text={"Follow"} style={"button4 followButton"} />

                        </div>

                        <div className="LogoutBTN">
                            <Button1 toggle={handleLogout} text={"Log out"} style={"buttonOut"} />
                        </div>


                    </div>

                    <div className="main-content">
                        <div className="section">
                            <h2 className="section-title">
                                <span>📚</span>
                                Popular Repositories
                            </h2>
                            <div className="activity-grid">
                                {Repositories
                                    .filter(data => data.downloads > 600 && data.Label == "Public")
                                    .map((data, index) => (
                                        <ProjectCard pos={index} key={index} data={data} />
                                    ))
                                }
                            </div>
                        </div>

                        <div className="section">
                            <h2 className="section-title">
                                <span>🏆</span>
                                Achievements & Skills
                            </h2>
                            {loading ? (
                                <div>Loading skills...</div>
                            ) : user?.skills ? (
                                <>
                                    <h3 className="skills-heading">Programming Languages</h3>
                                    <div className="skills-section">
                                        {user.skills.programmingLanguages.map((language, index) => (
                                            <span key={index} className="badge">{language}</span>
                                        ))}
                                    </div>

                                    <h3 className="skills-heading">Technologies</h3>
                                    <div className="skills-section">
                                        {user.skills.technologies.map((tech, index) => (
                                            <span key={index} className="badge">{tech}</span>
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <div className="skills-section">
                                    <span>No skills information available</span>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="friendsContainer">
                        <h2 className="friendsTitle">
                            <span>💖</span>
                            Friends ({friends ? friends.length : 0})
                        </h2>

                        <div className="friendsDivider"></div>

                        {loading ? (
                            <div>Loading friends...</div>
                        ) : friends && friends.length > 0 ? (
                            <div className="friendsGrid">
                                {friends.map((friend, index) => (
                                    <div key={index} className="friendCard">
                                        <div className="friendAvatar" >
                                            <img src={friend.image} />
                                        </div>
                                        <div className="friendInfo">
                                            <p>{friend.username} </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="no-friends">
                                <p>No friends found</p>
                            </div>
                        )}
                    </div>
                </div>

            }
            <Footer />
        </>
    )
}

export default Profile;