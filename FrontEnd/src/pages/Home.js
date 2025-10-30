import React, { useState, useEffect } from "react";

import { useParams, Link } from "react-router-dom";

import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import Button1 from "../components/Button1";
import ProjectCard from "../components/ProjectCard";
import NewProject from "../components/NewProject";
import Footer from "../components/Footer";

const Home = () => {
  const { home } = useParams();

  const [projects, setProjects] = useState([]);

  const [allProjects, setAllProjects] = useState([]);

  const [localActivity, setLocalActivity] = useState([]);

  const [user, setUser] = useState({});

  const [allUsers, setAllUsers] = useState([]);

  const [repoModal, setRepoModal] = useState(false);

  const [activityModal, setActivityModal] = useState(false);

  const [activityType, setActivityType] = useState("Local");

  const [projectNameExists, setProjectNameExists] = useState(false);

  const email = localStorage.getItem("username");

  const [searchTerm, setSearchTerm] = useState("");

  // Filter states
  const [sortBy, setSortBy] = useState("Alphabetical");
  const [labelFilter, setLabelFilter] = useState("All");
  const [timeFilter, setTimeFilter] = useState("All Time");

  const [newProject, setNewProject] = useState({
    email: "",
    projectName: "",
    Label: "Public",
    description: "New Codex APP",
    dateCreated: "",
    downloads: 0,
    shares: 0,
    files: [],
    changes: [
      {
        editor: "",
        message: "",
        dateEditted: "",
      },
    ],
    collaborators: [email],
    hashtags: [],
  });

  useEffect(() => {
    if (email) {
      setNewProject((prev) => ({
        ...prev,
        email: email,
      }));
    }

    fetch("/getProjects/" + email)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setProjects(data);

          const activity = data
            .filter((d) => d.messages.length !== 0)
            .map((d) => {
              return {
                messages: d.messages,
                banner: d.banner,
              };
            });

          setLocalActivity(activity);
        } else if (data.message) {
          setProjects([]);
        }
      });

    fetch("/getProjects")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const newData = data.filter((data) => data.Label === "Public");
        setAllProjects(newData);
      });

    fetch("/getUsers")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setAllUsers(data);
      });

    fetch("/getUser/" + email)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUser(data);
      });

    if (repoModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowY = "unset";
    }

    return () => {
      document.body.style.overflowY = "unset";
    };
  }, []);

  // TOGGLE FUNCTION DEFINITION SECTION
  const toggleModal = () => {
    setRepoModal(!repoModal);
  };

  const toggleActivityModal = () => {
    setActivityModal(!activityModal);
  };

  const toggleActivityType = (val) => {
    if (val === "Local") {
      setActivityType("Local");
    } else {
      setActivityType("Global");
    }
  };

  const toogleProjectNameExists = (val) => {
    setProjectNameExists(val);
  };

  // USESTATE SETTERS

  const handlePorpulatingNewProject = (field, value) => {
    setNewProject((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // SERVER BASED REQUEST FUNCTION DEFINITION SECTION

  const handleSaveNewProject = async () => {
    try {
      const res = await fetch("/newProject", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProject),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const resData = await res.json();

      if (resData.message == "Project name already exists") {
        toogleProjectNameExists(true);

        return;
      }

      fetch("/getProjects/" + email)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          if (Array.isArray(data)) {
            setProjects(data);
          } else if (data.message) {
            setProjects([]);
          }
        });

      setRepoModal(false);
    } catch (error) {
      // console.log(error.message);
    }
  };

  // FILTER PROJECTS BASED ON TIME
  const filterByTime = (project) => {
    if (timeFilter === "All Time") return true;

    const projectDate = new Date(project.dateCreated);
    const today = new Date();

    switch (timeFilter) {
      case "Today":
        return projectDate.toDateString() === today.toDateString();

      case "This Week":
        const weekAgo = new Date(today);
        weekAgo.setDate(today.getDate() - 7);
        return projectDate >= weekAgo;

      case "This Month":
        return (
          projectDate.getMonth() === today.getMonth() &&
          projectDate.getFullYear() === today.getFullYear()
        );

      case "This Year":
        return projectDate.getFullYear() === today.getFullYear();

      default:
        return true;
    }
  };

  // COMBINING FILTERS AND SORTING HERE
  const filteredRepositories = projects
    .filter((repo) => {
      const matchesSearch =
        repo.projectName
          ?.toLowerCase()
          .includes(searchTerm.trim().toLowerCase()) ||
        repo.description
          ?.toLowerCase()
          .includes(searchTerm.trim().toLowerCase());

      // FILTER THE PROJECTS BASED ON LABEL
      const matchesLabel = labelFilter === "All" || repo.Label === labelFilter;

      // FILTER THE PROJECTS BASED ON TIME
      const matchesTime = filterByTime(repo);

      return matchesSearch && matchesLabel && matchesTime;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "Most Files":
          return (b.files?.length || 0) - (a.files?.length || 0);

        case "Least Files":
          return (a.files?.length || 0) - (b.files?.length || 0);

        case "Alphabetical":
          return a.projectName.localeCompare(b.projectName);

        default:
          return 0;
      }
    });

  const filteredUsers = allUsers?.filter(
    (user) =>
      user.name?.toLowerCase().includes(searchTerm.trim().toLowerCase()) ||
      user.email?.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );

  return (
    <>
      <link rel="stylesheet" type="text/css" href="/assets/css/Home.css" />

      {repoModal ? (
        <div className="newProjectContainer">
          <NewProject
            handlePorpulatingNewProject={handlePorpulatingNewProject}
            projectNameExists={projectNameExists}
            toogleProjectNameExists={toogleProjectNameExists}
            newProject={newProject}
            handleSaveNewProject={handleSaveNewProject}
            toggle={toggleModal}
          />
        </div>
      ) : (
        ""
      )}
      <NavBar />

      <div className="homePage">
        <div className="welcomeMessage">
          <h1>Welcome {user.name} </h1>
          <p>Let's build something amazing</p>
        </div>
        <div className="BTNsearchBar">
          <div className="addBtn">
            <Button1
              toggle={toggleModal}
              text={"New Project"}
              style={"button1"}
            />
          </div>
          <div className="searchBarContainerDiv">
            <SearchBar onSearch={setSearchTerm} />
          </div>
          <div className="ActivityBtn">
            <Button1
              toggle={toggleActivityModal}
              text={"Activity"}
              style={"button1"}
            />
          </div>
        </div>

        {activityModal ? (
          <div
            className={`${
              activityModal
                ? "showActivity showActivityAnimation"
                : "showActivity"
            }`}
          >
            <div className="closeActivity">
              <Button1
                text={"Close"}
                toggle={toggleActivityModal}
                style={"button0"}
              />

              <Button1
                text={"Local Activity"}
                toggle={() => toggleActivityType("Local")}
                style={"button4"}
              />
              <Button1
                text={"Global Activity"}
                toggle={() => toggleActivityType("Global")}
                style={"button4"}
              />
            </div>
            <div className="activityContainer">
              {activityType === "Local" ? (
                <div>
                  <h2>Local Activity</h2>

                  <div className="localActivity">
                    {localActivity &&
                      [...localActivity]
                        .sort((a, b) => {
                          const dateA = new Date(a.messages[0]?.date || 0);
                          const dateB = new Date(b.messages[0]?.date || 0);
                          return dateB - dateA;
                        })
                        .map((activity, i) => (
                          <div key={i} className="activity-card">
                            <div className="activityImage">
                              {activity?.banner?.imageBase64 ? (
                                <img
                                  src={`data:image/jpeg;base64,${activity.banner.imageBase64}`}
                                  alt={
                                    activity.messages[0]?.fileName ||
                                    "Activity image"
                                  }
                                  onError={(e) => {
                                    e.target.style.display = "none";
                                  }}
                                />
                              ) : (
                                <div className="image-placeholder">
                                  No Image
                                </div>
                              )}
                            </div>

                            <div className="activity-header">
                              <span className="fileName">
                                {activity.messages[0]?.fileName ||
                                  "Unknown file"}
                              </span>
                              <span className="date">
                                {activity.messages[0]?.date || "Unknown date"}
                              </span>
                            </div>
                            <div className="activity-content">
                              <p className="messages">
                                {activity.messages[0]?.message || "No message"}
                              </p>
                            </div>
                            <div className="activity-footer">
                              <span className="uploaded-by">
                                Uploaded by:{" "}
                                {activity.messages[0]?.uploadedBy ||
                                  "Unknown user"}
                              </span>
                            </div>
                          </div>
                        ))}
                  </div>
                </div>
              ) : (
                <div>
                  <h2>Global Activity</h2>

                  <div className="globalActivity">
                    {allProjects &&
                      [...allProjects].map((project, i) => {
                        const message =
                          project.messages && project.messages.length > 0
                            ? project.messages[0]
                            : {};

                        return (
                          <div key={i} className="activity-card">
                            <div className="activityImage">
                              {project?.banner?.imageBase64 ? (
                                <img
                                  src={`data:image/jpeg;base64,${project.banner.imageBase64}`}
                                  alt={message?.fileName || "Activity image"}
                                  onError={(e) => {
                                    e.target.style.display = "none";
                                  }}
                                />
                              ) : (
                                <div className="image-placeholder">
                                  No Image
                                </div>
                              )}
                            </div>

                            <div className="activity-header">
                              <span className="fileName">
                                {message?.fileName || "Unknown file"}
                              </span>
                              <span className="date">
                                {message?.date ||
                                  message?.timestamp ||
                                  "Unknown date"}
                              </span>
                            </div>
                            <div className="activity-content">
                              <p className="messages">
                                {message?.message || "No message"}
                              </p>
                            </div>
                            <div className="activity-footer">
                              <span className="uploaded-by">
                                Uploaded by:{" "}
                                {message?.uploadedBy || "Unknown user"}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : null}

        <div className="HomePageDropDowns">
          <select
            className="dropdown"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="Most Files">Sort by Most Files</option>
            <option value="Least Files">Sort by Least Files</option>
            <option value="Alphabetical">Sort Alphabetically</option>
          </select>

          <select
            className="dropdown"
            value={labelFilter}
            onChange={(e) => setLabelFilter(e.target.value)}
          >
            <option value="All">All Projects</option>
            <option value="Private">Private</option>
            <option value="Public">Public</option>
          </select>

          <select
            className="dropdown"
            value={timeFilter}
            onChange={(e) => setTimeFilter(e.target.value)}
          >
            <option value="All Time">All Time</option>
            <option value="Today">Today</option>
            <option value="This Week">This Week</option>
            <option value="This Month">This Month</option>
            <option value="This Year">This Year</option>
          </select>
        </div>
      </div>

      {searchTerm !== "" ? (
        <div className="userSearch">
          <h3>USER SEARCH DIV</h3>
          <div className="userSearchDiv">
            {filteredUsers.map((user, i) => (
              <Link
                key={i}
                to={`/profile?email=${encodeURIComponent(user.email)}`}
              >
                <div className="userSearchContainer">
                  <div className="userIMGDIV">
                    <img src={user.profileImage} alt={user.profileImage} />
                  </div>
                  <div className="userDeatils">
                    <span>{user.name}</span>
                    <span>{user.email}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ) : null}

      <div className="AllProject">
        {filteredRepositories.length > 0 ? (
          filteredRepositories.map((data, index) => (
            <ProjectCard
              projectNameExists={projectNameExists}
              key={data.projectName}
              data={data}
              pos={index}
            />
          ))
        ) : searchTerm === "" ? (
          <div className="noProjects">
            <p>Your workspace is empty.</p>
            <p>✨Create a project to begin💫</p>
          </div>
        ) : (
          <div className="Noprojectsfound">
            <p>No projects found.</p>
          </div>
        )}
      </div>

      <div className="footerDiv">
        <Footer />
      </div>
    </>
  );
};

export default Home;
