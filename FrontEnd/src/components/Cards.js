import React from "react";

const Cards = ({ reasons }) => {
    return (
        <div className="cards-container">
            <link rel="stylesheet" type="text/css" href="/assets/css/Cards.css" />

            {reasons.map((reason, index) => (
                <div className="card" key={index}>
                    <img src={reason.image} alt={reason.title} className="card-image" />
                    <h2 className="card-title">{reason.title}</h2>
                    <p className="card-description">{reason.description}</p>
                </div>
            ))}

        </div>
    );
}

export default Cards;