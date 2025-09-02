import React, { useState } from "react"
import Button1 from "./Button1";

const NewProject = ({ toggle }) => {

    const [RepoName, setRepoName] = useState("");
    const [RepoLabel, setRepoLabel] = useState("Private");

    const [projectData, setProjectData] = useState({
        repoName: '',
        description: '',
        Label: 'Public',
        dateCreated: "",
        commits: 0,
        collabs: 0,
        downloads: 0,
        shares: 0,
        files: []
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProjectData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="newProjectContainer">
            <link rel="stylesheet" type="text/css" href="/assets/css/NewProject.css" />

            <div className="newProjectModal">
                <h2>Add New Repositories</h2>

                <div className="NewProjectInputs">
                    {/* Repository Name Input */}
                    <div className="input-group">
                        <label htmlFor="repoName">Repository Name *</label>
                        <input
                            id="repoName"
                            name="repoName"
                            type="text"
                            placeholder="Enter repository name"
                            value={projectData.repoName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            placeholder="Describe your project..."
                            value={projectData.description}
                            onChange={handleInputChange}
                            rows="4"
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="visibility">Visibility *</label>
                        <select
                            id="visibility"
                            name="visibility"
                            value={projectData.Label}
                            onChange={handleInputChange}
                        >
                            <option value="Public">Public</option>
                            <option value="Private">Private</option>
                        </select>
                    </div>

                    <div className="preview">
                        <h4>Preview:</h4>
                        <p>Repo Name: {projectData.repoName}</p>
                        <p>Description: {projectData.description}</p>
                        <p>Visibility: {projectData.Label}</p>
                    </div>
                </div>

                <div className="NewProjectBtns">
                    <Button1 text={"Save"} style={"button4"} />
                    <Button1 toggle={toggle} text={"Cancel"} style={"button0"} />
                </div>
            </div>
        </div>

    )
}

export default NewProject;