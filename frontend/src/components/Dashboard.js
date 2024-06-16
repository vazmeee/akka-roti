import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard.css';

const Dashboard = () => {
    const [donations, setDonations] = useState([]);
    const profileId = "<profile_id>"; // Replace with the actual profile_id or get it from context/props

    useEffect(() => {
        // Fetch the list of donations for a specific profile from the backend
        async function fetchDonations() {
            try {
                const response = await axios.get(`http://localhost:8081/profile/${profileId}`);
                setDonations(response.data.data);
            } catch (error) {
                console.error("Error fetching donations:", error);
            }
        }
        fetchDonations();
    }, [profileId]);

    return (
        <div className="dashboard-container">
            <h1>Dashboard</h1>
            <h2>List of Donations</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Count</th>
                        <th>Message</th>
                    </tr>
                </thead>
                <tbody>
                    {donations.map((donation, index) => (
                        <tr key={index}>
                            <td>{donation.name}</td>
                            <td>{donation.count}</td>
                            <td>{donation.message}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;
