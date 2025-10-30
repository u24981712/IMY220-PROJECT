import React, { useEffect, useState } from "react";

import Button1 from "../components/Button1";
import { Link } from "react-router-dom";

const NavBar = () => {
  const profileImage = localStorage.getItem("profileImage") || "";

  const email = localStorage.getItem("username");

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/getUser/" + email)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUser(data);
      });
  }, []);

  return (
    <nav className="navbar">
      <link rel="stylesheet" type="text/css" href="/assets/css/NavBar.css" />

      <div className="Navlogo">
        <Link to="/home">
          <img src="/assets/images/codex2.png" alt="Logo" />
        </Link>
      </div>

      <div className="nav-buttons">
        <Link to="/home">
          {/* <Button1 toggle={handleActive1} text="Dashboard" style={active === "Home" ? "button2" : "button1"} /> */}
          <Button1 text="Dashboard" style={"button1"} />
        </Link>

        <Link to="/explore">
          {/* <Button1 toggle={handleActive2} text="Explore" style={active === "Explore" ? "button2" : "button1"} /> */}
          <Button1 text="Explore" style={"button1"} />
        </Link>
      </div>
      <div className="NavProfileImage">
        <Link to={`/profile?email=${encodeURIComponent(email)}`}>
          <img
            className="profileImage"
            src={user?.profileImage}
            alt="Profile"
          />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
