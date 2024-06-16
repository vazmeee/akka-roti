import React from 'react';
import './Testimonials.css';

const testimonials = [
    {
        name: 'Emily Clark',
        feedback: 'Amazing platform! Helped me support my favorite artists easily.'
    },
    {
        name: 'David Lee',
        feedback: 'Great experience using Akka Roti. Highly recommended!'
    },
    {
        name: 'Sophia Martinez',
        feedback: 'Love the initiative and the platform. Very user-friendly.'
    }
];

const Testimonials = () => {
    return (
        <section className="testimonials">
            <h2>What People Say</h2>
            <div className="testimonial-cards">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-card">
                        <p>"{testimonial.feedback}"</p>
                        <h3>- {testimonial.name}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
