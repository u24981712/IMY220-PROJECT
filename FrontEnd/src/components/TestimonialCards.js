import React from "react";

const TestimonialCards = ({ testimonials }) => {

    const duplicatedTestimonials = [...testimonials, ...testimonials];

    return (
        <div className="testimonials-wrapper">
            <link rel="stylesheet" type="text/css" href="/assets/css/TestimonialCards.css" />

            <div className="testimonials-container">
                {duplicatedTestimonials.map((testimonial, index) => (
                    <div className="testimonial" key={index}>
                        <p className="testimonial-description">{testimonial.description}</p>

                        <div className="testimonial-inner-card">
                            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />

                            <div className="testimonial-nameAndTile">
                                <p>{testimonial.name}</p>
                                <h2>{testimonial.tile}</h2>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TestimonialCards;