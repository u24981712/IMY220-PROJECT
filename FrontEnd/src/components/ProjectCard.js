import React, { useState, useEffect } from "react";
import Button1 from "../components/Button1"
import { Link } from "react-router-dom";

const ProjectCard = ({ data }) => {

    // const [repository, setRepository] = useState(null);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     fetch('/getRepos')
    //         .then(res => res.json())
    //         .then(data => {

    //             if (Array.isArray(data) && data[pos]) {
    //                 setRepository(data[pos]);
    //             }
    //             setLoading(false);
    //         })
    //         .catch(error => {
    //             console.error('Error fetching repos:', error);
    //             setLoading(false);
    //         });
    // }, [pos]);

    // if (loading) {
    //     return <div className="Loading">Loading...</div>;
    // }

    return (
        <div className="projectCardContainer">
            <link rel="stylesheet" type="text/css" href="/assets/css/ProjectCard.css" />


            <div className="projectCardHeader">
                <h3 className="projectCardName">{data.projectName}</h3>
                <span className={`label ${data.Label.toLowerCase()}`}>
                    {data.Label}
                </span>
            </div>

            <p className="projectDescription">
                {data.description}
            </p>

            <div className="projectCardFooter">
                <div className="projectCardStats">
                    <div className="projectCardItem">
                        <span className="projectCardDot">●</span>
                        <span className="projectCardText">file no. {data?.files?.length || 0}</span>
                    </div>
                    <div className="projectCardItem">
                        <span className="projectCardDot">●</span>
                        <span className="projectCardText">check-in no. {data?.messages?.length || 0}</span>
                    </div>
                    <div className="projectCardItem">
                        <span className="projectCardDot">●</span>
                        <span className="projectCardText">collab no. {data?.collaborators?.length || 0}</span>
                    </div>
                </div>

                <div className="projectCardActions">
                    <div className="projectCardButtons">
                        <Link to={`/project/${data.projectName}?email=${encodeURIComponent(data.email)}`}>
                            <Button1 text="OPEN" style="button4" />
                        </Link>
                        <Button1 text="Share" style="button4" />
                    </div>
                    <span className="dateCreated">{data.dateCreated}</span>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;