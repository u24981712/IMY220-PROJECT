import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Button1 from "../components/Button1";

const EditProfile = ({ toggle, user, setUser }) => {
  const [formData, setFormData] = useState(user);
  const [newLanguage, setNewLanguage] = useState("");
  const [newTechnology, setNewTechnology] = useState("");
  const [message, setMessage] = useState("");

  // Profile image upload states
  const [file, setFile] = useState(null);
  const [fileMessage, setFileMessage] = useState("");
  const [uploading, setUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(formData.profileImage);

  const handleAddLanguage = () => {
    if (!newLanguage.trim()) return;

    setFormData((prev) => ({
      ...prev,
      skills: {
        ...prev.skills,
        programmingLanguages: [
          ...prev.skills.programmingLanguages,
          newLanguage.trim(),
        ],
      },
    }));
    setNewLanguage("");
  };

  const handleRemoveLanguage = (index) => {
    setFormData((prev) => ({
      ...prev,
      skills: {
        ...prev.skills,
        programmingLanguages: prev.skills.programmingLanguages.filter(
          (_, i) => i !== index
        ),
      },
    }));
  };

  const handleAddTechnology = () => {
    if (!newTechnology.trim()) return;

    setFormData((prev) => ({
      ...prev,
      skills: {
        ...prev.skills,
        technologies: [...prev.skills.technologies, newTechnology.trim()],
      },
    }));
    setNewTechnology("");
  };

  const handleRemoveTechnology = (index) => {
    setFormData((prev) => ({
      ...prev,
      skills: {
        ...prev.skills,
        technologies: prev.skills.technologies.filter((_, i) => i !== index),
      },
    }));
  };

  const handleSaveChanges = async () => {
    try {
      const { profileImage, ...dataToUpdate } = formData;

      const response = await fetch("/updateUser", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToUpdate),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("Profile updated successfully!");
        setUser(result.user);
        setTimeout(() => {
          toggle();
        }, 1500);
      } else {
        setMessage(result.error || "Update failed");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      setMessage("Update failed. Please try again.");
    }
  };

  const handleKeyPress = (e, type) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (type === "language") {
        handleAddLanguage();
      } else {
        handleAddTechnology();
      }
    }
  };

  // FILE UPLOAD HANDLERS
  const FileSelect = (event) => {
    const selectedFile = event.target.files[0];
    if (!selectedFile) return;

    // Validate file type
    if (!selectedFile.type.startsWith("image/")) {
      setFileMessage("Please select an image file.");
      setTimeout(() => setFileMessage(""), 3000);
      return;
    }

    if (selectedFile.size > 3 * 1024 * 1024) {
      setFileMessage("File too large! Max 3MB allowed.");
      setTimeout(() => setFileMessage(""), 3000);
      return;
    }

    setFile(selectedFile);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result);
    };
    reader.readAsDataURL(selectedFile);

    uploadProfileImage(selectedFile);
  };

  const uploadProfileImage = async (fileToUpload) => {
    const uploadFile = fileToUpload || file;

    if (!uploadFile) {
      setFileMessage("Please select a file first.");
      setTimeout(() => setFileMessage(""), 3000);
      return;
    }

    setUploading(true);
    setFileMessage("Uploading...");

    const formDataToSend = new FormData();
    formDataToSend.append("file", uploadFile);
    formDataToSend.append("email", user.email);

    try {
      const response = await fetch("/uploadProfileImage", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();

      if (response.ok) {
        setFileMessage("Profile image updated successfully!");

        setFormData((prev) => ({
          ...prev,
          profileImage: result.user.profileImage,
        }));

        setUser(result.user);

        setFile(null);

        setTimeout(() => setFileMessage(""), 3000);
      } else {
        setFileMessage(result.error || "Upload failed");
        setPreviewUrl(formData.profileImage);
        setTimeout(() => setFileMessage(""), 3000);
      }
    } catch (error) {
      console.error("Upload error:", error);
      setFileMessage("Upload failed. Please try again.");
      setPreviewUrl(formData.profileImage);
      setTimeout(() => setFileMessage(""), 3000);
    } finally {
      setUploading(false);
    }
  };

  return (
    <>
      <link
        rel="stylesheet"
        type="text/css"
        href="/assets/css/EditProfile.css"
      />

      <div className="edit-profile-container">
        <div className="edit-profile-header">
          <h1>Edit Profile</h1>
          <p>Update your personal information and skills</p>
        </div>

        <div className="edit-profile-content">
          <div className="profile-image-section">
            <div className="avatar-preview">
              <img src={previewUrl} alt="Profile" className="avatar-large" />
              {uploading && (
                <div className="upload-overlay">
                  <div className="spinner"></div>
                </div>
              )}
            </div>

            <div className="fileFormBTNS">
              <form className="fileSelect">
                <div className="fileform">
                  <label
                    htmlFor="file-upload"
                    className={`fileLabel ${uploading ? "disabled" : ""}`}
                  >
                    {uploading ? "Uploading..." : "Change Profile Image"}
                  </label>
                  <input
                    id="file-upload"
                    type="file"
                    accept="image/*"
                    className="imageInput"
                    onChange={FileSelect}
                    disabled={uploading}
                  />
                </div>
              </form>
              {fileMessage && (
                <p
                  className={`file-message ${
                    fileMessage.includes("success") ? "success" : "error"
                  }`}
                >
                  {fileMessage}
                </p>
              )}
            </div>
          </div>

          <div className="form-section">
            <div className="form-group">
              <label htmlFor="name">First Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="surname">Last Name</label>
              <input
                type="text"
                id="surname"
                value={formData.surname}
                onChange={(e) =>
                  setFormData({ ...formData, surname: e.target.value })
                }
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                disabled
                className="form-input"
                title="Email cannot be changed"
              />
            </div>

            <div className="form-group">
              <label htmlFor="bio">Bio</label>
              <textarea
                id="bio"
                value={formData.bio}
                onChange={(e) =>
                  setFormData({ ...formData, bio: e.target.value })
                }
                className="form-textarea"
                rows="4"
                placeholder="Tell us about yourself..."
              />
            </div>
          </div>

          <div className="skills-section">
            <h3>Programming Languages</h3>
            <div className="skills-tags">
              {formData.skills.programmingLanguages.map((language, index) => (
                <span key={index} className="skill-tag">
                  {language}
                  <button
                    onClick={() => handleRemoveLanguage(index)}
                    className="remove-tag"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
            <div className="add-skill-input">
              <input
                type="text"
                placeholder="Add programming language..."
                value={newLanguage}
                onChange={(e) => setNewLanguage(e.target.value)}
                onKeyPress={(e) => handleKeyPress(e, "language")}
                className="form-input"
              />
              <button onClick={handleAddLanguage} className="add-skill-btn">
                Add
              </button>
            </div>

            <h3>Technologies</h3>
            <div className="skills-tags">
              {formData.skills.technologies.map((tech, index) => (
                <span key={index} className="skill-tag">
                  {tech}
                  <button
                    onClick={() => handleRemoveTechnology(index)}
                    className="remove-tag"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
            <div className="add-skill-input">
              <input
                type="text"
                placeholder="Add technology..."
                value={newTechnology}
                onChange={(e) => setNewTechnology(e.target.value)}
                onKeyPress={(e) => handleKeyPress(e, "technology")}
                className="form-input"
              />
              <button onClick={handleAddTechnology} className="add-skill-btn">
                Add
              </button>
            </div>
          </div>

          {message && (
            <div
              className={`message ${
                message.includes("success") ? "success" : "error"
              }`}
            >
              {message}
            </div>
          )}

          <div className="form-actions">
            <Button1
              toggle={handleSaveChanges}
              text="Save Changes"
              style="buttonSave"
            />
            <Button1 toggle={toggle} text="Cancel" style="button0" />
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
