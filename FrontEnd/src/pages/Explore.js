import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import ProjectCard from "../components/ProjectCard";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import Button1 from "../components/Button1";

const Explore = () => {
  const [Repositories, setRepositories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [allUsers, setAllUsers] = useState([]);

  // Filter states
  const [sortBy, setSortBy] = useState("Alphabetical");
  const [timeFilter, setTimeFilter] = useState("All Time");

  // COUNT FOR PAGINATION (LOADING MORE PROJECTS BASICALLY)
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    fetch("/getProjects")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const newData = data.filter((data) => data.Label === "Public");
        setRepositories(newData);
      });

    fetch("/getUsers")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setAllUsers(data);
      });
  }, []);

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

  const filteredUsers = allUsers?.filter(
    (user) =>
      user.name?.toLowerCase().includes(searchTerm.trim().toLowerCase()) ||
      user.email?.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );

  // COMBINED FILTERS AND SORTING HERE
  const filteredRepositories = Repositories.filter((repo) => {
    // SEARCH TERM FILTER
    const matchesSearch =
      repo.projectName
        ?.toLowerCase()
        .includes(searchTerm.trim().toLowerCase()) ||
      repo.description?.toLowerCase().includes(searchTerm.trim().toLowerCase());

    // FILTER THE PROJECTS BASED ON TIME
    const matchesTime = filterByTime(repo);

    return matchesSearch && matchesTime;
  }).sort((a, b) => {
    switch (sortBy) {
      case "Popularity":
        const popularityA = (a.downloads || 0) + (a.shares || 0);
        const popularityB = (b.downloads || 0) + (b.shares || 0);
        return popularityB - popularityA;

      case "Most Recent":
        return new Date(b.dateCreated) - new Date(a.dateCreated);

      case "Most Shared":
        return (b.shares || 0) - (a.shares || 0);

      case "Most Downloads":
        return (b.downloads || 0) - (a.downloads || 0);

      case "Alphabetical":
        return a.projectName.localeCompare(b.projectName);

      default:
        return 0;
    }
  });

  // GET VISIBLE PROJECTS BASED ON COUNT
  const visibleProjects = filteredRepositories.slice(0, visibleCount);

  // CHECK IF THERE ARE MORE PROJECTS TO LOAD
  const hasMoreProjects = visibleCount < filteredRepositories.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 2);
  };

  return (
    <>
      <link rel="stylesheet" type="text/css" href="/assets/css/Explore.css" />

      <NavBar />
      <div className="ExplorePage">
        <h2 className="LETSEXPLORE">
          Let's <span>X</span>plore!
        </h2>

        <div className="ExplorePageSearchBar">
          <SearchBar onSearch={setSearchTerm} />
        </div>

        <div className="HomePageDropDowns">
          <select
            className="dropdown"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="Popularity">Sort by Popularity</option>
            <option value="Most Recent">Sort by Most Recent</option>
            <option value="Alphabetical">Sort Alphabetically</option>
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

        <div className="ExplorePageProjects">
          {visibleProjects.length > 0 ? (
            visibleProjects.map((data, index) => (
              <div key={index}>
                <ProjectCard data={data} />
              </div>
            ))
          ) : (
            <div className="Noprojectsfound">
              <p>No projects found.</p>
            </div>
          )}
        </div>
        {hasMoreProjects && visibleProjects.length > 0 && (
          <div className="loadMoreContainer">
            <Button1
              toggle={handleLoadMore}
              text={"Load More"}
              style="button1"
            />
          </div>
        )}
      </div>
      <div className="footerDiv">
        <Footer />
      </div>
    </>
  );
};

export default Explore;
