import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import DonationPage from './components/DonationPage';
import LinkShare from './components/LinkShare';
import Profile from './components/Profile';
import SetupPayments from './components/SetupPayments';

const App = () => {
  const [user, setUser] = useState(null);

  const handleLoginSuccess = (userObject) => {
    setUser(userObject);
  };

  return (
    <Router>
      {user && <Navbar />}
      <Routes>
        <Route path="/" element={<LandingPage onLoginSuccess={handleLoginSuccess} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/linkshare" element={<LinkShare />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/setup-payments" element={<SetupPayments />} />
        <Route path="/:username" element={<DonationPage />} />
      </Routes>
    </Router>
  );
};

export default App;
