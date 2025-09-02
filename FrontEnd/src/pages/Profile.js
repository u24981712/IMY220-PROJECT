import React from "react";
import NavBar from "../components/NavBar"
import Button1 from "../components/Button1";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";

// import { profileImage } from "../pages/LogIn"

const Profile = () => {

    const username = localStorage.getItem("username");

    const [Repositories, setRepositories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/getRepos')
            .then(res => {
                return res.json();
            }).then(data => {
                setRepositories(data);
            })
    }, []);

    return (
        <>
            <NavBar />
            <link rel="stylesheet" type="text/css" href="/assets/css/Profile.css" />


            <div className="profileContainer">
                <div className="profile-sidebar">
                    <div className="profile-card">
                        <div className="avatar">
                            <img className="avatarImage" src={profileImage} alt="Profile" />
                        </div>
                        <h1 className="username">Njabulo Nhlengethwa</h1>
                        <div className="handle">@nndev</div>
                        <p className="bio">Full-stack developer passionate about open source and building amazing web experiences. Always learning, always coding! 🚀</p>

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
                                {/* <div className="stat-number">{dummydata.length}</div> */}
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
                </div>

                <div className="main-content">
                    <div className="section">
                        <h2 className="section-title">
                            <span>📚</span>
                            Popular Repositories
                        </h2>
                        {/* <div className="activity-grid">
                            {dummydata
                                .filter(data => data.downloads > 800 && data.Label == "Public")
                                .map((data, index) => (
                                    <ProjectCard key={index} data={data} />
                                ))
                            }
                        </div> */}
                    </div>

                    <div className="section">
                        <h2 className="section-title">
                            <span>🏆</span>
                            Achievements & Skills
                        </h2>
                        <div>
                            <h3 className="skills-heading">Programming Languages</h3>
                            <div className="skills-section">
                                <span className="badge">JavaScript</span>
                                <span className="badge">TypeScript</span>
                                <span className="badge">Python</span>
                                <span className="badge">Node.js</span>
                                <span className="badge">React</span>
                                <span className="badge">Vue.js</span>
                                <span className="badge">Go</span>
                                <span className="badge">Rust</span>
                            </div>

                            <h3 className="skills-heading">Technologies</h3>
                            <div className="skills-section">
                                <span className="badge">Docker</span>
                                <span className="badge">Kubernetes</span>
                                <span className="badge">AWS</span>
                                <span className="badge">MongoDB</span>
                                <span className="badge">PostgreSQL</span>
                                <span className="badge">Redis</span>
                                <span className="badge">GraphQL</span>
                                <span className="badge">Microservices</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Profile;