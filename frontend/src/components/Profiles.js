import React from 'react';
import './Profiles.css';

const profiles = [
    {
        name: 'John Doe',
        description: 'A passionate artist from Bangalore',
        image: 'https://via.placeholder.com/150'
    },
    {
        name: 'Jane Smith',
        description: 'A software developer who loves to create',
        image: 'https://via.placeholder.com/150'
    },
    {
        name: 'Samuel Green',
        description: 'A musician bringing joy through music',
        image: 'https://via.placeholder.com/150'
    }
];

const Profiles = () => {
    return (
        <section className="profiles">
            <h2>Featured Profiles</h2>
            <div className="profile-cards">
                {profiles.map((profile, index) => (
                    <div key={index} className="profile-card">
                        <img src={profile.image} alt={profile.name} />
                        <h3>{profile.name}</h3>
                        <p>{profile.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Profiles;
