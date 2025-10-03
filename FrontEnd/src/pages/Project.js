import React, { useState, useEffect } from "react"
import NavBar from "../components/NavBar"
import Button1 from "../components/Button1"
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

    const email = searchParams.get('email');

    const [project, setProject] = useState(null);

    const [repoUser, setRepoUser] = useState(null);

    const [loading, setLoading] = useState(true);

    const [uploading, setUploading] = useState(false);

    const [selectedFile, setSelectedFile] = useState(null);

    const [message, setMessage] = useState('');

    const [showProfile, setShowProfile] = useState(false);

    const [confirmDelete, setConfirmDelete] = useState(false);

    const [checkInMessage, setCheckInMessage] = useState('');

    const [showCheckInModal, setShowCheckInModal] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {

                const repoResponse = await fetch(`/getProject/${projectName}?email=${encodeURIComponent(email)}`);

                const repoData = await repoResponse.json();
                setProject(repoData);

                const userResponse = await fetch('/getUser/' + repoData.email);
                const userData = await userResponse.json();
                setRepoUser(userData);

            } catch (error) {
                console.error('Error fetching data:', error);
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
    }

    const [showEditOptions, setShowEditOptions] = useState([]);

    const toggleShowEditOptions = (index) => {

        // console.log("FILE INDEX :" + index);

        // setShowEditOptions(!showEditOptions[index]);
        setShowEditOptions(prev => {
            let newOptionsArray = [...prev];

            newOptionsArray[index] = !newOptionsArray[index];

            return newOptionsArray;
        });
    }

    // UPLOAD AND EDIT BANNER IMAGES
    const handleFileSelect = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        if (file.size > 1 * 1024 * 1024) {
            setMessage('Image too large! Max 1MB allowed.');
            timeOutFunc();
            return;
        }

        if (!file.type.startsWith('image/')) {
            setMessage('Please select an image file.');
            timeOutFunc();
            return;
        }

        setSelectedFile(file);
        setMessage('');
    }

    const handleFileUpload = async (event) => {

        if (!selectedFile) {
            setMessage('Please select an image first.');
            timeOutFunc();
            return;
        }

        setUploading(true);

        const formData = new FormData();

        formData.append('banner', selectedFile);

        formData.append('email', localStorage.getItem("username"));

        try {
            const response = await fetch(`/uploadBanner/${encodeURIComponent(projectName)}`, {
                method: 'POST',
                body: formData
            });

            const result = await response.json();

            if (response.ok) {
                setMessage('Banner uploaded successfully!');

                event.target.value = '';

                const updatedResponse = await fetch(`/getProject/${projectName}?email=${encodeURIComponent(email)}`);

                const updatedData = await updatedResponse.json();

                setProject(updatedData);
                timeOutFunc();

            } else {

                setMessage(result.error || 'Upload failed');
                timeOutFunc();
            }

        } catch (error) {
            console.error('Upload error:', error);

            setMessage('Upload failed. Please try again.');
            timeOutFunc();

        } finally {
            setUploading(false);
        }
    };

    const handleFileSelectUpdate = async (event) => {
        const file = event.target.files[0];
        if (!file) return;

        if (file.size > 1 * 1024 * 1024) {
            setMessage('Image too large! Max 1MB allowed.');
            return;
        }

        if (!file.type.startsWith('image/')) {
            setMessage('Please select an image file.');
            return;
        }

        setSelectedFile(file);
        setMessage('');

        setUploading(true);

        const formData = new FormData();
        formData.append('banner', file);
        formData.append('email', localStorage.getItem("username"));

        try {
            const response = await fetch(`/uploadBanner/${encodeURIComponent(projectName)}`, {
                method: 'POST',
                body: formData
            });

            const result = await response.json();

            if (response.ok) {
                setMessage('Banner updated successfully!');

                event.target.value = '';
                setSelectedFile(null);

                const updatedResponse = await fetch(`/getProject/${projectName}?email=${encodeURIComponent(email)}`);
                const updatedData = await updatedResponse.json();
                setProject(updatedData);

            } else {
                setMessage(result.error || 'Upload failed');
            }

        } catch (error) {
            console.error('Upload error:', error);
            setMessage('Upload failed. Please try again.');
        } finally {
            setUploading(false);
        }
    }

    // FILE SECTION
    // UPLOAD FILES

    const [file, setFile] = useState(null);
    const [fileMessage, setFileMessage] = useState('');

    // SELECT SINGLE FILE
    const FileSelect = (event) => {
        const selectedFile = event.target.files[0];
        if (!selectedFile) return;

        if (selectedFile.size > 10 * 1024 * 1024) {
            setFileMessage('File too large! Max 10MB allowed.');
            timeOutFunc();
            return;
        }

        setFile(selectedFile);
        setFileMessage(`Selected: ${selectedFile.name}`);
        setShowCheckInModal(true);
    }

    // SELECT SINGLE FILE
    const FileUpload = async () => {
        if (!file) {
            setFileMessage('Please select a file first.');
            timeOutFunc();
            return;
        }

        const formData = new FormData();
        formData.append('file', file);
        formData.append('email', localStorage.getItem("username"));
        formData.append('checkInMessage', checkInMessage);

        try {
            const response = await fetch(`/uploadFile/${encodeURIComponent(projectName)}`, {
                method: 'POST',
                body: formData
            });

            const result = await response.json();

            if (response.ok) {
                setFileMessage('File uploaded successfully!');
                setFile(null);
                setCheckInMessage('');

                setProject(result.project);

            } else {
                setFileMessage(result.error || 'Upload failed');
                timeOutFunc();
            }
        } catch (error) {
            console.error('Upload error:', error);
            setFileMessage('Upload failed. Please try again.');
            timeOutFunc();
        }
    }

    const handleCancelCheckIn = () => {

        setShowCheckInModal(false);
        setFile(null);
        setCheckInMessage('');
        document.getElementById('file-upload').value = '';

    }

    const handleCheckIn = () => {

        if (!checkInMessage.trim()) {
            setFileMessage('Please enter a check-in message');
            return;
        }
        setShowCheckInModal(false);
        FileUpload();
    }

    // DOWNLOAD FILE
    const handleDownloadFile = async (file) => {
        try {
            const response = await fetch(`/downloadFile/${encodeURIComponent(projectName)}/${encodeURIComponent(file.fileName)}?email=${encodeURIComponent(email)}`);

            if (!response.ok) {
                throw new Error('File download failed');
            }

            const blob = await response.blob();

            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = file.fileName;
            document.body.appendChild(a);
            a.click();

            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);

            // console.log('File downloaded successfully:', file.fileName);

        } catch (error) {

            console.error('Error downloading file:', error);

            setFileMessage('Failed to download file');
        }
    };

    // DELETE FILE
    const handleDeleteFile = async (fileName) => {
        try {
            if (!confirm(`Are you sure you want to delete "${fileName}"?`)) {
                return;
            }

            const response = await fetch('/deleteFile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    projectName: projectName,
                    fileName: fileName,
                    email: localStorage.getItem("username")
                })
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || 'Failed to delete file');
            }

            // console.log('File deleted successfully:', fileName);

            const updatedResponse = await fetch(`/getProject/${projectName}?email=${encodeURIComponent(email)}`);

            const updatedData = await updatedResponse.json();

            setProject(updatedData);

            setFileMessage('File deleted successfully!');

            timeOutFunc();

        } catch (error) {
            console.error('Error deleting file:', error);
            setFileMessage('Failed to delete file');
        }
    };

    const timeOutFunc = () => {

        setTimeout(() => {
            setFileMessage('');
            setMessage('');
        }, 4000);
    }

    const handleProjectDetele = async (projectName, email) => {

        const res = await fetch("/deleteProject", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                projectName: projectName,
                email: email
            })
        });

        navigate(-1);


    }

    if (loading) {
        return <div className="Loading">Loading...</div>;
    }

    return (
        <>
            <link rel="stylesheet" type="text/css" href="/assets/css/Project.css" />
            <NavBar />

            <div className="IndivProjectContainer">

                <div className="projectBanner">
                    {project.banner ?
                        <div>
                            <img
                                src={`data:${project.banner.contentType};base64,${project.banner.imageBase64}`}
                                alt="Project Banner"
                                className="bannerImage"

                            // onMouseEnter={handleDeteleBanner(true)}
                            // onMouseLeave={handleDeteleBanner(false)}
                            />

                            <form className="updateBannerForm" >
                                <div className="imageform">
                                    <label htmlFor="image-upload" className="imageLabel">
                                        {uploading ? 'Uploading...' : 'Update banner'}
                                    </label>
                                    <input
                                        id="image-upload"
                                        type="file"
                                        accept="image/*"
                                        className="imageInput"
                                        onChange={handleFileSelectUpdate}
                                    />

                                    {message && (
                                        <div className={`message ${message.includes('success') ? 'success' : 'error'}`}>
                                            {message}
                                        </div>
                                    )}
                                </div>
                            </form>

                        </div>


                        :

                        <div className="noProjectBanner">
                            <span>No Project Banner</span>
                            <span className="recommendedDimension">
                                Recommended dimension: 1770px x 250px • Max size: 1MB
                            </span>

                            <form>
                                <div className="imageform">
                                    <label htmlFor="image-upload" className="imageLabel">
                                        {uploading ? 'Uploading...' : 'Choose Image'}
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
                                <div className={`message ${message.includes('success') ? 'success' : 'error'}`}>
                                    {message}
                                </div>
                            )}

                            <div>
                                <Button1
                                    toggle={handleFileUpload}
                                    text={uploading ? 'Uploading...' : 'Upload Banner'}
                                    style={"DownloadFiles"}
                                />
                            </div>

                            {selectedFile && (
                                <div className="selected-file">
                                    Selected: {selectedFile.name}
                                </div>
                            )}
                        </div>
                    }
                </div>

                <div className="ProjectInfoHeader">
                    <div>
                        <p className={`label ${project.Label.toLowerCase()}`}>
                            {project.Label}
                        </p>
                        <h2 className="projectCardName">{project.projectName}</h2>
                    </div>

                    <div className="GoBackBTN">
                        <Button1 toggle={handleGoBack} text={"Go Back"} style={"buttonBack"} />
                    </div>
                </div>


                <div className="horintalLine">
                </div>

                <div>
                    <div className={project.collaborators?.includes(currentUserEmail) ? "fileManagement" : "fileManagementNoBtns"}>
                        <input placeholder="Search for a file..." className="ProjectSearchBar" />
                        <div className="downloadfiles">
                            <Button1 text={"Download Files"} style={"DownloadFiles"} />
                        </div>

                        {project.collaborators?.includes(currentUserEmail) &&
                            <div className="fileFormBTNS">
                                <form className="fileSelect" >
                                    <div className="fileform">
                                        <label htmlFor="file-upload" className="fileLabel">
                                            Add File
                                        </label>
                                        <input
                                            id="file-upload"
                                            type="file"
                                            accept="*"
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

                        }
                        <div>
                            {fileMessage && (
                                <div className={`message ${fileMessage.includes('success') ? 'success' : 'error'}`}>
                                    {fileMessage}
                                </div>
                            )}
                        </div>

                    </div>
                </div>

                <div className="fileGrid">

                    <div className="fileContainer">

                        {project.files && project.files.length > 0 ? (project.files.map((file, index) => (

                            <div key={index} className="singleFiles">

                                <div>
                                    📄
                                    <Link to={`/file/${file.fileName}`}>{file.fileName}</Link>
                                </div>

                                <div className="creationDate">
                                    {file.uploadedAt
                                        ? new Date(file.uploadedAt).toLocaleDateString()
                                        : 'Loading...'}
                                </div>

                                <span onClick={() => toggleShowEditOptions(index)} className="more_vert material-symbols-outlined">
                                    more_vert
                                </span>

                                {showEditOptions[index] && (
                                    < div onMouseLeave={() => toggleShowEditOptions(index)} className="showEditOptions">

                                        {currentUserEmail === email ?
                                            < button className="deleteFile actionBTN" onClick={() => handleDeleteFile(file.fileName)}>
                                                Delete File
                                            </button>
                                            : null}

                                        <button className="downloadFile actionBTN" onClick={() => handleDownloadFile(file)}>
                                            Download File
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))) : (

                            <div className="noProjectFiles">
                                <span >Project has no files</span>
                            </div>
                        )}
                    </div>

                    <div className="MessagesContainer">

                        {project.messages && project.messages.length > 0 ? project.messages.map((messages, index) => (
                            <div className="SingleMessage" key={index}>
                                <Messages messages={messages} />
                            </div>
                        )) :

                            <div className="noCheckins">
                                <span className="">No check-ins made</span>
                            </div>

                        }
                    </div>
                </div>
            </div >

            <div className="projectDelete">

                <button onClick={toggleShowProfile} className="ProfileViewerCard">
                    <div className="ProfileViewerAvatar" >
                        <img src={repoUser?.profileImage} alt="Profile" />
                    </div>
                    <div className="ProfileViewerInfo">
                        <p>Project Owner: {repoUser?.email} </p>
                    </div>
                </button>

                {project.email === currentUserEmail ?
                    <div>
                        <Button1 toggle={() => setConfirmDelete(true)} text={"Delete Project"} style={"button0"} />
                    </div>
                    :
                    null}

            </div>

            {
                confirmDelete ? (
                    <div className="modalOverlay">
                        <div className="modal">
                            <div className="modalContent">
                                <p>Are you sure you want to delete <span><strong>{project.projectName.toUpperCase()} </strong> </span>?</p>
                                <div className="modalButtons">
                                    <div>
                                        <Button1 toggle={() => setConfirmDelete(false)} text={"Cancel"} style={"button2"} />
                                    </div>
                                    <div>
                                        <Button1 toggle={() => handleProjectDetele(project.projectName, repoUser.email)} text={"Delete"} style={"button0"} />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div >
                ) : null
            }



            {
                showProfile && repoUser ?
                    <div className="ProjectOwner">
                        <ProfilePreview className="ProjectOwnerPreview" toggle={toggleShowProfile} profile={repoUser} email={email} />
                    </div> : ""
            }
        </>
    )
}

export default Project;