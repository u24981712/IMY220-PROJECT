
import React from "react";
import Button1 from "./Button1";

const ProfilePreview = ({ toggle, profile }) => {
    const { name, surname, email, bio, profileImage, skills } = profile;

    const topSkills = skills?.programmingLanguages?.slice(0, 3) || [];

    const truncatedBio = bio && bio.length > 120 ? `${bio.substring(0, 120)}...` : bio;

    return (
        <div className="profilePreview">
            <link rel="stylesheet" type="text/css" href="/assets/css/ProfileViewer.css" />

            <div className="profilePreviewHeader">
                <img
                    src={profileImage}
                    alt={`${name} ${surname}`}
                    className="profilePreviewAvatar"
                />
                <div className="profilePreviewInfo">
                    <h3 className="profilePreviewName">{name} {surname}</h3>
                    <p className="profilePreviewEmail">{email}</p>
                </div>
            </div>

            <div>


                {truncatedBio && (
                    <p className="profilePreviewBio">{truncatedBio}</p>
                )}

                {topSkills.length > 0 && (
                    <div className="profilePreviewSkills">
                        {topSkills.map((skill, index) => (
                            <span key={index} className="profilePreviewSkillTag">
                                {skill}
                            </span>
                        ))}
                        {skills.programmingLanguages?.length > 3 && (
                            <span className="profilePreviewMoreSkills">
                                +{skills.programmingLanguages.length - 3} more
                            </span>
                        )}
                    </div>
                )}
            </div>

            <div className="PreviewBTN">
                <Button1 toggle={toggle} text={"Close"} style={"buttonClose"} />
            </div>

        </div>
    );
};

export default ProfilePreview;