import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Button1 from "../components/Button1";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import EditProfile from "../components/EditProfile";

const Profile = () => {
  const currentUserEmail = localStorage.getItem("username");

  const [searchParams] = useSearchParams();

  const email = searchParams.get("email");

  const profileImage = localStorage.getItem("profileImage") || "";

  const [Projects, setProjects] = useState([]);

  const [user, setUser] = useState(null);

  const [followers, setFollowers] = useState([]);

  const [following, setFollowing] = useState([]);

  const [friendRequestMessage, setFriendRequestsMessage] = useState("");

  const [loading, setLoading] = useState(true);

  const [editModal, setEditModal] = useState(false);

  const toggleProfileModal = () => {
    setEditModal(!editModal);
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.setItem("username", "");
    localStorage.setItem("profileImage", "");

    navigate("/");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user projects
        const projectsRes = await fetch("/getProjects/" + email);
        const projectsData = await projectsRes.json();

        if (Array.isArray(projectsData)) {
          setProjects(projectsData);
        } else {
          setProjects([]);
        }

        // Fetch user data
        const userRes = await fetch("/getUser/" + email);
        const userData = await userRes.json();
        setUser(userData);

        if (userData.following && Array.isArray(userData.following)) {
          const followingPromises = userData.following.map((followEmail) =>
            fetch("/getUser/" + followEmail).then((res) => res.json())
          );

          const followingUsers = await Promise.all(followingPromises);

          setFollowing(followingUsers);
        }

        if (userData.followers && Array.isArray(userData.followers)) {
          const followersPromises = userData.followers.map((followEmail) =>
            fetch("/getUser/" + followEmail).then((res) => res.json())
          );

          const followersUsers = await Promise.all(followersPromises);

          setFollowers(followersUsers);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (email) {
      fetchData();
    }
  }, [email]);

  // SENDIND A FRIEND REQEUST
  const sendFriendRequest = async (receiverEmail) => {
    try {
      const response = await fetch("/sendFriendRequest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: currentUserEmail,
          receiverEmail: receiverEmail,
        }),
      });

      const result = await response.json();

      if (response.message === "request already sent") {
        setFriendRequestsMessage(result.message);
        return;
      }

      if (response.message === "You are already friends with this user") {
        setFriendRequestsMessage(result.message);
        return;
      }

      if (!response.ok) {
        throw new Error(result.message || "Failed to send friend request");
      }

      setFriendRequestsMessage(result.message);

      setTimeout(() => {
        setFriendRequestsMessage("");
      }, 4000);
    } catch (error) {
      // console.error("Error sending friend request:", error);
    }
  };

  // ACCEPT A FRIEND REQUEST
  const acceptFriendRequest = async (requesterEmail) => {
    try {
      const response = await fetch("/acceptFriendRequest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          currentUserEmail: currentUserEmail,
          requesterEmail: requesterEmail,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to accept friend request");
      }
    } catch (error) {
      console.error("Error accepting friend request:", error);
    }
  };

  // DECLINE A FRIEND REQUEST
  const handleDeclineRequest = async (requesterEmail) => {
    try {
      const response = await fetch("/declineFriendRequest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          currentUserEmail: currentUserEmail,
          requesterEmail: requesterEmail,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to decline friend request");
      }

      setUser((prevUser) => ({
        ...prevUser,
        friendRequests: prevUser.friendRequests.filter(
          (email) => email !== requesterEmail
        ),
      }));
    } catch (error) {
      // console.error("Error declining friend request:", error);
    }
  };

  // DELETE PROFILE
  const handleDeleteProfile = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete your profile? This will permanently delete your account and all your projects. This action cannot be undone."
    );

    if (!confirmDelete) return;

    const doubleConfirm = window.confirm(
      "This is your last chance. Are you absolutely sure? All your data will be lost forever."
    );

    if (!doubleConfirm) return;

    try {
      const response = await fetch("/deleteProfile", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: currentUserEmail,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to delete profile");
      }

      alert("Profile deleted successfully");

      localStorage.clear();
      navigate("/");
    } catch (error) {
      console.error("Error deleting profile:", error);
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
      <NavBar />
      <link rel="stylesheet" type="text/css" href="/assets/css/Profile.css" />

      {editModal ? (
        <EditProfile
          toggle={toggleProfileModal}
          user={user}
          setUser={setUser}
        />
      ) : (
        <div className="profileContainer">
          <div className="profile-sidebar">
            <div className="profile-card">
              <div className="avatar">
                <img
                  className="avatarImage"
                  src={user?.profileImage}
                  alt="Profile"
                />
              </div>
              <h1 className="username">
                {user?.name} {user?.surname}
              </h1>

              {currentUserEmail === email && (
                <>
                  <Button1
                    toggle={toggleProfileModal}
                    text={"Edit Profile"}
                    style={"buttonEdit"}
                  />
                </>
              )}
              <div className="handle">{email}</div>

              <p className="bio">{user ? user.bio : ""}</p>

              <div className="stats">
                <div className="stat">
                  <div className="stat-number">{followers?.length}</div>
                  <div className="stat-label">Follower</div>
                </div>
                <div className="stat">
                  <div className="stat-number">{following?.length}</div>
                  <div className="stat-label">Following</div>
                </div>
                <div className="stat">
                  <div className="stat-number">{Projects.length}</div>
                  <div className="stat-label">Projects</div>
                </div>
              </div>

              {/* CHECK IF PASSED IN EMAIL IS THE CURRENT LOGGED IN USER'S EMAIL
                                IF SO, SHOW LOG OUT BUTTON
                                ELSE SHOW FOLLOW BUTTON
                            */}
              {currentUserEmail !== email ? (
                <Button1
                  toggle={() => sendFriendRequest(email)}
                  text={"Follow"}
                  style={"button4 followButton"}
                />
              ) : (
                <Button1
                  toggle={handleLogout}
                  text={"Log out"}
                  style={"buttonOut"}
                />
              )}

              {friendRequestMessage !== "" ? (
                <p>{friendRequestMessage}</p>
              ) : null}
            </div>
          </div>

          <div className="main-content">
            <div className="section">
              <h2 className="section-title">
                <span>📚</span>
                Projects
              </h2>
              <div className="activity-grid">
                {Projects.slice(0, 3)
                  //   .filter((data) => data.Label == "Public")
                  .map((data, index) => (
                    <ProjectCard pos={index} key={index} data={data} />
                  ))}
              </div>
            </div>

            <div className="section">
              <h2 className="section-title">
                <span>🏆</span>
                Achievements & Skills
              </h2>
              {loading ? (
                <div>Loading skills...</div>
              ) : user?.skills ? (
                <>
                  <h3 className="skills-heading">Programming Languages</h3>
                  <div className="skills-section">
                    {user.skills.programmingLanguages.map((language, index) => (
                      <span key={index} className="badge">
                        {language}
                      </span>
                    ))}
                  </div>

                  <h3 className="skills-heading">Technologies</h3>
                  <div className="skills-section">
                    {user.skills.technologies.map((tech, index) => (
                      <span key={index} className="badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </>
              ) : (
                <div className="skills-section">
                  <span>No skills information available</span>
                </div>
              )}
            </div>
          </div>

          <div className="friendsContainer">
            <h2 className="friendsTitle">
              <span>💖</span>
              Friends ({followers ? followers?.length : 0})
            </h2>

            <div className="friendsDivider"></div>

            {loading ? (
              <div>Loading friends...</div>
            ) : followers.length > 0 ? (
              <>
                <div className="friendsGrid">
                  {followers.map((friend, index) => (
                    <div key={index} className="friendCard">
                      <div className="friendAvatar">
                        <img src={friend.profileImage} />
                      </div>
                      <div className="friendInfo">
                        <p>{friend.email} </p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="no-friends">
                <p>No friends found</p>
              </div>
            )}

            {email === currentUserEmail ? (
              <div className="friendRequest">
                <h3> Friend Requests</h3>
                <div className="friendsDivider"></div>

                {user?.friendRequests && user.friendRequests.length > 0 ? (
                  user.friendRequests.map((friend, index) => (
                    <div key={index} className="friendCard friendRequestCard">
                      <div className="friendInfo">
                        <p>{friend}</p>
                      </div>
                      <div className="friendReqBTN">
                        <Button1
                          toggle={() => acceptFriendRequest(friend)}
                          text={"Accept"}
                          style={"acceptBtn"}
                        />
                      </div>
                      <div className="friendReqBTN">
                        <Button1
                          toggle={() => handleDeclineRequest(friend)}
                          text={"Decline"}
                          style={"button0"}
                        />
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="no-requests">
                    <p>No friend requests</p>
                  </div>
                )}
              </div>
            ) : null}
          </div>

          {email === currentUserEmail ? (
            <div className="deleteProfile">
              <Button1
                toggle={handleDeleteProfile}
                text={"Delete Profile"}
                style={"button0"}
              />
            </div>
          ) : null}
        </div>
      )}
    </>
  );
};

export default Profile;
