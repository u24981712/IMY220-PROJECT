import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Button1 from "../components/Button1";

const EditProfile = ({ toggle, user }) => {
    // const [formData, setFormData] = useState({
    //     name: "Michael",
    //     surname: "Brown",
    //     email: "michael.b@example.com",
    //     bio: "Mobile developer focused on React Native and Flutter. Passionate about cross-platform development, AI integration, and creating seamless mobile experiences. Always exploring new tech trends.",
    //     profileImage: "https://api.dicebear.com/9.x/adventurer/svg?seed=Leo",
    //     skills: {
    //         programmingLanguages: ["C#", "Java", "Kotlin", "Swift", "Python", "JavaScript"],
    //         technologies: [".NET", "Spring Boot", "Android", "iOS", "Azure", "SQL Server", "Unity"]
    //     }
    // });

    const [formData, setFormData] = useState(user);

    const [newLanguage, setNewLanguage] = useState("");
    const [newTechnology, setNewTechnology] = useState("");

    return (
        <>
            <link rel="stylesheet" type="text/css" href="/assets/css/EditProfile.css" />

            <div className="edit-profile-container">
                <div className="edit-profile-header">
                    <h1>Edit Profile</h1>
                    <p>Update your personal information and skills</p>
                </div>

                <div className="edit-profile-content">
                    <div className="profile-image-section">
                        <div className="avatar-preview">
                            <img src={formData.profileImage} alt="Profile" className="avatar-large" />
                        </div>
                    </div>

                    <div className="form-section">
                        <div className="form-group">
                            <label htmlFor="name">First Name</label>
                            <input
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="form-input"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="surname">Last Name</label>
                            <input
                                type="text"
                                id="surname"
                                value={formData.surname}
                                onChange={(e) => setFormData({ ...formData, surname: e.target.value })}
                                className="form-input"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="form-input"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="bio">Bio</label>
                            <textarea
                                id="bio"
                                value={formData.bio}
                                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                                className="form-textarea"
                                rows="4"
                            />
                        </div>

                    </div>

                    <div className="skills-section">
                        <h3>Programming Languages</h3>
                        <div className="skills-tags">
                            {formData.skills.programmingLanguages.map((language, index) => (
                                <span key={index} className="skill-tag">
                                    {language}
                                    <button className="remove-tag">×</button>
                                </span>
                            ))}
                        </div>
                        <div className="add-skill-input">
                            <input
                                type="text"
                                placeholder="Add programming language..."
                                value={newLanguage}
                                onChange={(e) => setNewLanguage(e.target.value)}
                                className="form-input"
                            />
                            <button className="add-skill-btn">Add</button>
                        </div>

                        <h3>Technologies</h3>
                        <div className="skills-tags">
                            {formData.skills.technologies.map((tech, index) => (
                                <span key={index} className="skill-tag">
                                    {tech}
                                    <button className="remove-tag">×</button>
                                </span>
                            ))}
                        </div>
                        <div className="add-skill-input">
                            <input
                                type="text"
                                placeholder="Add technology..."
                                value={newTechnology}
                                onChange={(e) => setNewTechnology(e.target.value)}
                                className="form-input"
                            />
                            <button className="add-skill-btn">Add</button>
                        </div>
                    </div>

                    <div className="form-actions">
                        <Button1 text="Save Changes" style="buttonSave" />
                        <Button1 toggle={toggle} text="Cancel" style="button0" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditProfile;