import React, { useEffect, useState } from 'react';
import './Hero.css';

const taglines = [
    "Kickstart Your Hustle, Maga",
    "Sakkath Support for Creators",
    "Namma Creativity, Namma Support",
    "Namma Bengaluru, Namma Backing",
    "Support Hakkidre, Success Guaranteed!",
    "Sakkath Ideas, Full Support",
    "Showcase Your Talent, Macha"
];

const ctas = [
    "Come Macha, Let's Get Funded!",
    "Get Set, Go! Maga",
    "Banni, Let's Get Funded!"
];

const supportingStatements = [
    "Receive support. Start a membership. Set up a shop. Too Easy!",
    "Accept donations. Build a community. Open a shop. Simple and sakkath!",
    "Get funded. Start a membership. Sell your creations. It's easy, maga!",
    "Join the gang. Get support. Monetize your talent. Smooth as filter coffee!",
    "Showcase your work. Receive backing. Grow your community. All in one place, macha!",
    "Empower your talent. Build your base. Earn with ease. Let's go, maga!",
    "Connect with fans. Start memberships. Sell products. Easy as darshini dosa!",
    "Support your passion. Build a tribe. Open your store. It's simple and fun!",
    "Accept fan support. Launch memberships. Start selling. Full power, no tension!",
    "Receive love. Grow your base. Start earning. All in a jiffy, macha!"
];

const Hero = () => {
    const [tagline, setTagline] = useState("");
    const [cta, setCta] = useState("");
    const [supportingStatement, setSupportingStatement] = useState("");

    useEffect(() => {
        const randomTagline = taglines[Math.floor(Math.random() * taglines.length)];
        const randomCta = ctas[Math.floor(Math.random() * ctas.length)];
        const randomSupportingStatement = supportingStatements[Math.floor(Math.random() * supportingStatements.length)];
        setTagline(randomTagline);
        setCta(randomCta);
        setSupportingStatement(randomSupportingStatement);
    }, []);

    return (
        <section className="hero">
            <h1>{tagline}</h1>
            <p>{supportingStatement}</p>
            <button className="primary-btn">{cta}</button>
        </section>
    );
};

export default Hero;
