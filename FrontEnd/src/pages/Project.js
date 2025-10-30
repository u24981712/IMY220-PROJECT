import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Button1 from "../components/Button1";
import SingleFile from "../components/SingleFile";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import Messages from "../components/Messages";
import ProfilePreview from "../components/ProfilePreview";

const Project = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const currentUserEmail = localStorage.getItem("username");

  const { projectName } = useParams();

  const [searchParams] = useSearchParams();

  const email = searchParams.get("email");

  const [project, setProject] = useState(null);

  const [repoUser, setRepoUser] = useState(null);

  const [collaborators, setCollaborators] = useState([]);

  const [loading, setLoading] = useState(true);

  const [uploading, setUploading] = useState(false);

  const [selectedFile, setSelectedFile] = useState(null);

  const [message, setMessage] = useState("");

  const [showProfile, setShowProfile] = useState(false);

  const [confirmDelete, setConfirmDelete] = useState(false);

  const [checkInMessage, setCheckInMessage] = useState("");

  const [showCheckInModal, setShowCheckInModal] = useState(false);

  const [newProjectName, setNewProjectName] = useState(projectName);

  const [newLabel, setLabel] = useState("");

  const [EditForm, setEditForm] = useState(false);

  useEffect(() => {
    if (project) {
      setNewProjectName(project.projectName);
      setLabel(project.Label);
    }
  }, [project]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const repoResponse = await fetch(
          `/getProject/${projectName}?email=${encodeURIComponent(email)}`
        );

        const repoData = await repoResponse.json();
        setProject(repoData);

        const userResponse = await fetch("/getUser/" + repoData.email);
        const userData = await userResponse.json();
        setRepoUser(userData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // PROJECT NAME USED AS A DEPENDENCY FOR EACH PROJECT
  }, [projectName]);

  useEffect(() => {
    if (project && project.files) {
      setShowEditOptions(new Array(project.files.length).fill(false));
    }
  }, [project]);

  const toggleShowProfile = () => {
    setShowProfile(!showProfile);
  };

  const [showEditOptions, setShowEditOptions] = useState([]);

  const toggleShowEditOptions = (index) => {
    // setShowEditOptions(!showEditOptions[index]);
    setShowEditOptions((prev) => {
      let newOptionsArray = [...prev];

      newOptionsArray[index] = !newOptionsArray[index];

      return newOptionsArray;
    });
  };

  // UPLOAD AND EDIT BANNER IMAGES
  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    if (file.size > 1 * 1024 * 1024) {
      setMessage("Image too large! Max 1MB allowed.");
      timeOutFunc();
      return;
    }

    if (!file.type.startsWith("image/")) {
      setMessage("Please select an image file.");
      timeOutFunc();
      return;
    }

    setSelectedFile(file);
    setMessage("");
  };

  const handleFileUpload = async (event) => {
    if (!selectedFile) {
      setMessage("Please select an image first.");
      timeOutFunc();
      return;
    }

    setUploading(true);

    const formData = new FormData();

    formData.append("banner", selectedFile);

    formData.append("email", localStorage.getItem("username"));

    try {
      const response = await fetch(
        `/uploadBanner/${encodeURIComponent(projectName)}`,
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();

      if (response.ok) {
        setMessage("Banner uploaded successfully!");

        event.target.value = "";

        const updatedResponse = await fetch(
          `/getProject/${projectName}?email=${encodeURIComponent(email)}`
        );

        const updatedData = await updatedResponse.json();

        setProject(updatedData);
        timeOutFunc();
      } else {
        setMessage(result.error || "Upload failed");
        timeOutFunc();
      }
    } catch (error) {
      console.error("Upload error:", error);

      setMessage("Upload failed. Please try again.");
      timeOutFunc();
    } finally {
      setUploading(false);
    }
  };

  const handleFileSelectUpdate = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    if (file.size > 1 * 1024 * 1024) {
      setMessage("Image too large! Max 1MB allowed.");
      return;
    }

    if (!file.type.startsWith("image/")) {
      setMessage("Please select an image file.");
      return;
    }

    setSelectedFile(file);
    setMessage("");

    setUploading(true);

    const formData = new FormData();
    formData.append("banner", file);
    formData.append("email", localStorage.getItem("username"));

    try {
      const response = await fetch(
        `/uploadBanner/${encodeURIComponent(projectName)}`,
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();

      if (response.ok) {
        setMessage("Banner updated successfully!");

        event.target.value = "";
        setSelectedFile(null);

        const updatedResponse = await fetch(
          `/getProject/${projectName}?email=${encodeURIComponent(email)}`
        );
        const updatedData = await updatedResponse.json();
        setProject(updatedData);
      } else {
        setMessage(result.error || "Upload failed");
      }
    } catch (error) {
      console.error("Upload error:", error);
      setMessage("Upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  // FILE SECTION
  // UPLOAD FILES

  const [file, setFile] = useState(null);
  const [files, setFiles] = useState([]);
  const [fileMessage, setFileMessage] = useState("");

  // SELECT MULTIPLE FILES
  const FileSelect = (event) => {
    const selectedFiles = Array.from(event.target.files);
    if (selectedFiles.length === 0) return;

    const oversizedFiles = selectedFiles.filter(
      (file) => file.size > 10 * 1024 * 1024
    );

    if (oversizedFiles.length > 0) {
      setFileMessage(
        `${oversizedFiles.length} file(s) too large! Max 10MB per file.`
      );
      timeOutFunc();
      return;
    }

    setFiles(selectedFiles);

    setFileMessage(
      `Selected: ${selectedFiles.length} file(s) - ${selectedFiles
        .map((f) => f.name)
        .join(", ")}`
    );
    setShowCheckInModal(true);
  };

  // UPLOAD MULTIPLE FILES
  const FileUpload = async () => {
    if (!files || files.length === 0) {
      setFileMessage("Please select files first.");
      timeOutFunc();
      return;
    }

    const formData = new FormData();

    files.forEach((file) => {
      formData.append("files", file);
    });

    formData.append("email", localStorage.getItem("username"));

    formData.append("checkInMessage", checkInMessage);

    try {
      const response = await fetch(
        `/uploadFile/${encodeURIComponent(projectName)}`,
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();

      if (response.ok) {
        setFileMessage(
          `${result.filesUploaded} file(s) uploaded successfully!`
        );
        setFiles([]);
        setCheckInMessage("");

        setProject(result.project);
        timeOutFunc();
      } else {
        setFileMessage(result.error || "Upload failed");
        timeOutFunc();
      }
    } catch (error) {
      console.error("Upload error:", error);
      setFileMessage("Upload failed. Please try again.");
      timeOutFunc();
    }
  };

  const handleCancelCheckIn = () => {
    setShowCheckInModal(false);
    setFiles([]);
    setCheckInMessage("");
    document.getElementById("file-upload").value = "";
  };

  const handleCheckIn = () => {
    if (!checkInMessage.trim()) {
      setFileMessage("Please enter a check-in message");
      return;
    }
    setShowCheckInModal(false);
    FileUpload();
  };

  // DOWNLOAD FILE
  const handleDownloadFile = async (file) => {
    try {
      const response = await fetch(
        `/downloadFile/${encodeURIComponent(projectName)}/${encodeURIComponent(
          file.fileName
        )}?email=${encodeURIComponent(email)}`
      );

      if (!response.ok) {
        throw new Error("File download failed");
      }

      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = file.fileName;
      document.body.appendChild(a);
      a.click();

      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error("Error downloading file:", error);

      setFileMessage("Failed to download file");
    }
  };

  // DELETE FILE
  const handleDeleteFile = async (fileName) => {
    try {
      if (!confirm(`Are you sure you want to delete "${fileName}"?`)) {
        return;
      }

      const response = await fetch("/deleteFile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          projectName: projectName,
          fileName: fileName,
          email: localStorage.getItem("username"),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to delete file");
      }

      const updatedResponse = await fetch(
        `/getProject/${projectName}?email=${encodeURIComponent(email)}`
      );

      const updatedData = await updatedResponse.json();

      setProject(updatedData);

      setFileMessage("File deleted successfully!");

      timeOutFunc();
    } catch (error) {
      console.error("Error deleting file:", error);
      setFileMessage("Failed to delete file");
    }
  };

  const timeOutFunc = () => {
    setTimeout(() => {
      setFileMessage("");
      setMessage("");
    }, 4000);
  };

  const handleProjectDetele = async (projectName, email) => {
    const res = await fetch("/deleteProject", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        projectName: projectName,
      }),
    });

    navigate(-1);
  };

  const handleRemoveCollaborator = async (email, projectName) => {
    try {
      const response = await fetch("/RemoveCollaborator", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          projectName: projectName,
          friendEmail: email,
          ownerEmail: currentUserEmail,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error("Error removing collaborator:", data.message);
        setFileMessage("Failed to remove collaborator");
        timeOutFunc();
        return;
      }

      const updatedResponse = await fetch(
        `/getProject/${projectName}?email=${encodeURIComponent(
          currentUserEmail
        )}`
      );
      const updatedData = await updatedResponse.json();

      setProject(updatedData);

      setFileMessage("Collaborator removed successfully!");
      timeOutFunc();
    } catch (error) {
      console.error("Network error:", error);
      setFileMessage("Failed to remove collaborator");
      timeOutFunc();
    }
  };

  const handleAddCollaborator = async (email, projectName) => {
    try {
      const response = await fetch("/AddCollaborator", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          projectName: projectName,
          friendEmail: email,
          ownerEmail: currentUserEmail,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error("Error adding collaborator:", data.message);
        setFileMessage("Failed to add collaborator");
        timeOutFunc();
        return;
      }

      const updatedResponse = await fetch(
        `/getProject/${projectName}?email=${encodeURIComponent(
          currentUserEmail
        )}`
      );
      const updatedData = await updatedResponse.json();

      setProject(updatedData);

      setFileMessage("Collaborator added successfully!");
      timeOutFunc();
    } catch (error) {
      console.error("Network error:", error);
      setFileMessage("Failed to add collaborator");
      timeOutFunc();
    }
  };

  const toggleEditForm = () => {
    setEditForm(!EditForm);
  };

  const handleEditProjectDetails = async () => {
    try {
      // Validation
      if (!newProjectName.trim()) {
        setFileMessage("Project name cannot be empty");
        timeOutFunc();
        return;
      }

      if (!newLabel) {
        setFileMessage("Please select a label");
        timeOutFunc();
        return;
      }

      const response = await fetch("/updateProject", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          oldProjectName: project.projectName,
          newProjectName: newProjectName,
          label: newLabel,
          email: currentUserEmail,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setFileMessage(data.message || "Failed to update project");
        timeOutFunc();
        return;
      }

      const updatedResponse = await fetch(
        `/getProject/${newProjectName}?email=${encodeURIComponent(
          currentUserEmail
        )}`
      );
      const updatedData = await updatedResponse.json();

      setProject(updatedData);
      setFileMessage("Project updated successfully!");
      timeOutFunc();
      setEditForm(false);

      if (newProjectName !== project.projectName) {
        navigate(`/project/${newProjectName}?email=${currentUserEmail}`, {
          replace: true,
        });
      }
    } catch (error) {
      console.error("Error updating project:", error);
      setFileMessage("Failed to update project");
      timeOutFunc();
    }
  };

  if (loading) {
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: "#0a2231",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <div
          style={{
            width: "60px",
            height: "60px",
            border: "6px solid rgba(123, 227, 208, 0.2)",
            borderTop: "6px solid #7be3d0",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
          }}
        />
        <h2
          style={{
            color: "#f5edd8",
            margin: 0,
            fontSize: "24px",
            fontWeight: 500,
            fontFamily: "Poppins",
          }}
        >
          Loading...
        </h2>

        <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
      </div>
    );
  }

  return (
    <>
      <link rel="stylesheet" type="text/css" href="/assets/css/Project.css" />
      <NavBar />

      <div className="IndivProjectContainer">
        <div className="projectBanner">
          {project.banner ? (
            <div>
              <img
                src={`data:${project.banner.contentType};base64,${project.banner.imageBase64}`}
                alt="Project Banner"
                className="bannerImage"
              />

              <form className="updateBannerForm">
                <div className="imageform">
                  <label htmlFor="image-upload" className="imageLabel">
                    {uploading ? "Uploading..." : "Update banner"}
                  </label>
                  <input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    className="imageInput"
                    onChange={handleFileSelectUpdate}
                  />

                  {message && (
                    <div
                      className={`message ${
                        message.includes("success") ? "success" : "error"
                      }`}
                    >
                      {message}
                    </div>
                  )}
                </div>
              </form>
            </div>
          ) : project.collaborators?.includes(currentUserEmail) ? (
            <div className="noProjectBanner">
              project.collaborators?.includes(currentUserEmail) ? (
              <span>No Project Banner</span>
              <span className="recommendedDimension">
                Recommended dimension: 1770px x 250px • Max size: 1MB
              </span>
              <form>
                <div className="imageform">
                  <label htmlFor="image-upload" className="imageLabel">
                    {uploading ? "Uploading..." : "Choose Image"}
                  </label>
                  <input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    className="imageInput"
                    onChange={handleFileSelect}
                  />
                </div>
              </form>
              {message && (
                <div
                  className={`message ${
                    message.includes("success") ? "success" : "error"
                  }`}
                >
                  {message}
                </div>
              )}
              <div>
                <Button1
                  toggle={handleFileUpload}
                  text={uploading ? "Uploading..." : "Upload Banner"}
                  style={"DownloadFiles"}
                />
              </div>
              {selectedFile && (
                <div className="selected-file">
                  Selected: {selectedFile.name}
                </div>
              )}
              )
            </div>
          ) : (
            <div className="noProjectBannerView">
              <h1>No Project Banner</h1>
            </div>
          )}
        </div>

        <div className="ProjectInfoHeader">
          <div>
            <p className={`label ${project.Label.toLowerCase()}`}>
              {project.Label}
            </p>
            <h2 className="projectCardName">{project.projectName}</h2>
          </div>

          <div className="GoBackBTN">
            <Button1
              toggle={handleGoBack}
              text={"Go Back"}
              style={"buttonBack"}
            />
          </div>
        </div>

        <div className="horintalLine"></div>

        <div>
          <div
            className={
              project.collaborators?.includes(currentUserEmail)
                ? "fileManagement"
                : "fileManagementNoBtns"
            }
          >
            <input
              placeholder="Search for a file..."
              className="ProjectSearchBar"
            />
            <div className="downloadfiles">
              <Button1 text={"Download Files"} style={"DownloadFiles"} />
            </div>

            {project.collaborators?.includes(currentUserEmail) && (
              <div className="fileFormBTNS">
                <form className="fileSelect">
                  <div className="fileform">
                    <label htmlFor="file-upload" className="fileLabel">
                      Add Files
                    </label>
                    <input
                      id="file-upload"
                      type="file"
                      accept="*"
                      multiple
                      className="imageInput"
                      onChange={FileSelect}
                    />
                  </div>
                </form>
                {showCheckInModal && (
                  <div className="checkInModal">
                    <div className="checkInContent">
                      <h3>Check-in Message</h3>
                      <p>Describe what you're adding or changing:</p>
                      <textarea
                        value={checkInMessage}
                        onChange={(e) => setCheckInMessage(e.target.value)}
                        placeholder="e.g., Added login functionality, Fixed navigation bug..."
                        rows="4"
                        className="checkInTextarea"
                      />
                      <div className="checkInButtons">
                        <Button1
                          toggle={handleCheckIn}
                          text="Check In & Upload"
                          style="DownloadFiles"
                        />
                        <Button1
                          toggle={handleCancelCheckIn}
                          text="Cancel"
                          style="button0"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
            <div>
              {fileMessage && (
                <div
                  className={`message ${
                    fileMessage.includes("success") ? "success" : "error"
                  }`}
                >
                  {fileMessage}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="fileGrid">
          <div className="fileContainer">
            {project.files && project.files.length > 0 ? (
              project.files.map((file, index) => (
                <div key={index} className="singleFiles">
                  <div>
                    📄
                    <Link to={`/file/${file.fileName}`}>{file.fileName}</Link>
                  </div>

                  <div className="creationDate">
                    {file.uploadedAt
                      ? new Date(file.uploadedAt).toLocaleDateString()
                      : "Loading..."}
                  </div>

                  <span
                    onClick={() => toggleShowEditOptions(index)}
                    className="more_vert material-symbols-outlined"
                  >
                    more_vert
                  </span>

                  {showEditOptions[index] && (
                    <div
                      onMouseLeave={() => toggleShowEditOptions(index)}
                      className="showEditOptions"
                    >
                      {currentUserEmail === email ? (
                        <button
                          className="deleteFile actionBTN"
                          onClick={() => handleDeleteFile(file.fileName)}
                        >
                          Delete File
                        </button>
                      ) : null}

                      <button
                        className="downloadFile actionBTN"
                        onClick={() => handleDownloadFile(file)}
                      >
                        Download File
                      </button>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="noProjectFiles">
                <span>Project has no files</span>
              </div>
            )}
          </div>

          <div className="MessagesContainer">
            {project.messages && project.messages.length > 0 ? (
              project.messages.map((messages, index) => (
                <div className="SingleMessage" key={index}>
                  <Messages messages={messages} />
                </div>
              ))
            ) : (
              <div className="noCheckins">
                <span className="">No check-ins made</span>
              </div>
            )}
          </div>
        </div>

        <div className="AddFriendsToProject">
          <div className="FriendsAdded">
            <h3>Collaborators</h3>

            <div className="CollaboratorsLis">
              {project.collaborators.map((c) => (
                <div className="CollaboratorDiv" key={c}>
                  <span>{c}</span>

                  {c === project.email ? null : (
                    <button
                      onClick={() => handleRemoveCollaborator(c, projectName)}
                      className="removeCollaborator"
                    >
                      Remove Collaborator
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
          {repoUser.email !== currentUserEmail ? null : (
            <div className="addCollabs">
              <h3>Add Friend To Project</h3>

              {repoUser.followers
                .filter((f) => !project.collaborators.includes(f))
                .map((f) => (
                  <div className="addFriendAsCollab" key={f}>
                    <span>{f}</span>
                    <button
                      onClick={() => handleAddCollaborator(f, projectName)}
                    >
                      Add as Collaborator
                    </button>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>

      {EditForm ? (
        <div className="editProjectDetailOverlay">
          <div className="editProjectDetail">
            <div className="editProjectHeader">
              <h2>Edit Project Details</h2>
              <button onClick={toggleEditForm} className="closeEditForm">
                ✕
              </button>
            </div>

            <div className="editProjectForm">
              <div className="formGroup">
                <label htmlFor="projectName">Project Name</label>
                <input
                  id="projectName"
                  type="text"
                  value={newProjectName}
                  onChange={(e) => setNewProjectName(e.target.value)}
                  placeholder="Enter project name"
                  className="editInput"
                />
              </div>

              <div className="formGroup">
                <label htmlFor="projectLabel">Label</label>
                <select
                  id="projectLabel"
                  value={newLabel}
                  onChange={(e) => setLabel(e.target.value)}
                  className="editDropdown"
                >
                  <option value="">Select Label</option>
                  <option value="Public">Public</option>
                  <option value="Private">Private</option>
                </select>
              </div>

              <div className="editProjectButtons">
                <Button1
                  toggle={handleEditProjectDetails}
                  text="Save Changes"
                  style="button1"
                />
                <Button1
                  toggle={toggleEditForm}
                  text="Cancel"
                  style="button0"
                />
              </div>

              {fileMessage && (
                <div
                  className={`message ${
                    fileMessage.includes("success") ? "success" : "error"
                  }`}
                >
                  {fileMessage}
                </div>
              )}
            </div>
          </div>
        </div>
      ) : null}

      <div className="projectDelete">
        <button onClick={toggleShowProfile} className="ProfileViewerCard">
          <div className="ProfileViewerAvatar">
            <img src={repoUser?.profileImage} alt="Profile" />
          </div>
          <div className="ProfileViewerInfo">
            <p>Project Owner: {repoUser?.email} </p>
          </div>
        </button>

        <div className="editProjectBTNDiv">
          <Button1
            className="editProjectBTN"
            toggle={toggleEditForm}
            text={"Edit Project"}
            style={"button1"}
          />
        </div>

        {project.email === currentUserEmail ? (
          <div>
            <Button1
              toggle={() => setConfirmDelete(true)}
              text={"Delete Project"}
              style={"button0"}
            />
          </div>
        ) : null}
      </div>

      {confirmDelete ? (
        <div className="modalOverlay">
          <div className="modal">
            <div className="modalContent">
              <p>
                Are you sure you want to delete{" "}
                <span>
                  <strong>{project.projectName.toUpperCase()} </strong>{" "}
                </span>
                ?
              </p>
              <div className="modalButtons">
                <div>
                  <Button1
                    toggle={() => setConfirmDelete(false)}
                    text={"Cancel"}
                    style={"button2"}
                  />
                </div>
                <div>
                  <Button1
                    toggle={() =>
                      handleProjectDetele(project.projectName, repoUser.email)
                    }
                    text={"Delete"}
                    style={"button0"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {showProfile && repoUser ? (
        <div className="ProjectOwner">
          <ProfilePreview
            className="ProjectOwnerPreview"
            toggle={toggleShowProfile}
            profile={repoUser}
            email={email}
          />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Project;
