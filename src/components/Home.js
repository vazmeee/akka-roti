
// 

import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import {jwtDecode} from 'jwt-decode';
import './Home.css';
import logo from '../assets/akkaroti.png';

const Home = () => {
  const responseGoogle = (response) => {
    try {
      const userObject = jwtDecode(response.credential);
      console.log(userObject);
      // Handle Google login response here, you can send the token to your backend
    } catch (error) {
      console.error("Error decoding token:", error);
    }
  };

  return (
    <GoogleOAuthProvider clientId="GOOGLE_CLIENT_ID">
      <div className="home">
        <img src={logo} alt="Akka Roti Logo" className="logo" />
        <h1>Welcome to Akka Roti</h1>
        <p>Support your favorite creators with ease.</p>
        <GoogleLogin
          onSuccess={responseGoogle}
          onError={() => {
            console.log('Login Failed');
          }}
          text="Sign in with Google"
        />
      </div>
    </GoogleOAuthProvider>
  );
};

export default Home;
