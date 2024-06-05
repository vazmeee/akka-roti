import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dashboard.css';

const Dashboard = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    // Fetch donations from the backend
    axios.get('/api/donations')
      .then(response => {
        setDonations(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the donations!', error);
      });
  }, []);

  return (
    <div className="dashboard">
      <h1>Your Donations</h1>
      <table>
        <thead>
          <tr>
            <th>Donor Name</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {donations.map((donation, index) => (
            <tr key={index}>
              <td>{donation.donorName}</td>
              <td>{donation.amount}</td>
              <td>{new Date(donation.date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
