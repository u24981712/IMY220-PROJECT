import React, { useState, useEffect } from "react";
import Button1 from "../components/Button1"
import { Link } from "react-router-dom";

const ExampleProjectCard = ({ data }) => {

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
                        <span className="projectCardText">file no. {data.files.length}</span>
                    </div>
                    <div className="projectCardItem">
                        <span className="projectCardDot">●</span>
                        <span className="projectCardText">commit no. {data.commits}</span>
                    </div>
                    <div className="projectCardItem">
                        <span className="projectCardDot">●</span>
                        <span className="projectCardText">collab no. {data.collabs}</span>
                    </div>
                </div>

                <div className="projectCardActions">
                    <div className="projectCardButtons">
                        
                        <Button1 text="OPEN" style="button4" />

                        <Button1 text="Share" style="button4" />
                    </div>
                    <span className="dateCreated">{data.dateCreated}</span>
                </div>
            </div>
        </div>
    )
}

export default ExampleProjectCard;