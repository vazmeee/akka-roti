import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './DonationPage.css';

const DonationPage = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user details from the backend
    axios.get(`/api/user/${username}`)
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the user details!', error);
      });
  }, [username]);

  const handleDonate = () => {
    // Handle donation logic
  }

  return (
    <div className="donation-page">
      {user ? (
        <>
          <h1>Support {user.name}</h1>
          <p>{user.description}</p>
          <button onClick={handleDonate}>Donate</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default DonationPage;
