import React, { useState } from "react";
import Button1 from "./Button1";

const NewProject = ({
  handlePorpulatingNewProject,
  toogleProjectNameExists,
  projectNameExists,
  newProject,
  handleSaveNewProject,
  toggle,
}) => {
  const [RepoName, setRepoName] = useState("");
  const [RepoLabel, setRepoLabel] = useState("Private");

  // const handleInputChange = (e) => {
  //     console.log(e)
  // };

  return (
    <div className="newProjectContainer">
      <link
        rel="stylesheet"
        type="text/css"
        href="/assets/css/NewProject.css"
      />

      <div className="newProjectModal">
        <h2>Add New Project</h2>

        <div className="NewProjectInputs">
          {/* Repository Name Input */}
          <div className="input-group">
            <label htmlFor="repoName">Project Name *</label>
            {projectNameExists ? (
              <span className="projectNameCheck">
                {" "}
                Project name already exist
              </span>
            ) : null}
            <input
              id="projectName"
              name="projectName"
              type="text"
              placeholder="Enter repository name"
              value={newProject.projectName}
              onChange={(e) => {
                handlePorpulatingNewProject(e.target.name, e.target.value);
                toogleProjectNameExists(false);
              }}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              placeholder="Describe your project..."
              value={newProject.description}
              onChange={(e) =>
                handlePorpulatingNewProject(e.target.name, e.target.value)
              }
              rows="4"
              maxLength="500"
            />
          </div>

          <div className="input-group">
            <label htmlFor="visibility">Visibility *</label>
            <select
              id="Label"
              name="Label"
              value={newProject.Label}
              onChange={(e) =>
                handlePorpulatingNewProject(e.target.name, e.target.value)
              }
            >
              <option value="Public">Public</option>
              <option value="Private">Private</option>
            </select>
          </div>

          <div className="preview">
            <h4>Preview:</h4>
            <p>Project Name: {newProject.projectName}</p>
            <p>Description: {newProject.description.slice(0, 150)}...</p>
            <p>Visibility: {newProject.Label}</p>
          </div>
        </div>

        <div className="NewProjectBtns">
          <Button1
            toggle={handleSaveNewProject}
            text={"Save"}
            style={"button4"}
          />
          <Button1 toggle={toggle} text={"Cancel"} style={"button0"} />
        </div>
      </div>
    </div>
  );
};

export default NewProject;
