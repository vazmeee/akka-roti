import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/linkshare">LinkShare</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/setup-payments">Setup Payments</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
