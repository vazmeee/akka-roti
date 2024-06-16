import React from 'react';
import './Donations.css';

const donations = [
    {
        name: 'Alice Johnson',
        amount: 100,
        message: 'Keep up the great work!'
    },
    {
        name: 'Bob Brown',
        amount: 50,
        message: 'Happy to support!'
    },
    {
        name: 'Charlie Davis',
        amount: 75,
        message: 'Inspiring work!'
    }
];

const Donations = () => {
    return (
        <section className="donations">
            <h2>Recent Donations</h2>
            <div className="donation-list">
                {donations.map((donation, index) => (
                    <div key={index} className="donation-item">
                        <h3>{donation.name}</h3>
                        <p>Donated: ₹{donation.amount}</p>
                        <p>{donation.message}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Donations;
