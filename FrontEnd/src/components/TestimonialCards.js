import React from "react";

const TestimonialCards = ({ testimonials }) => {

    // const duplicatedTestimonials = [...testimonials, ...testimonials];

    return (
        
        <div className="testimonials-wrapper">
            <link rel="stylesheet" type="text/css" href="/assets/css/TestimonialCards.css" />

            <div className="testimonials-container">
                {testimonials.slice(0, 8).map((testimonial, index) => (
                    <div className={`testimonial testimonial${index + 1}`} key={index}>
                        <p className="testimonial-description">{testimonial.description}</p>

                        <div className="testimonial-inner-card">
                            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />

                            <div className="testimonial-nameAndTile">
                                <p>{testimonial.name}</p>
                                <h2>{testimonial.title}</h2>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TestimonialCards;