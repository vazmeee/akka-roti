import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { doesSessionExist, signOut } from 'supertokens-auth-react/recipe/session';
import './Header.css';
import logo from '../assets/images/akkaroti.png'; // Import the logo image

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        async function checkSession() {
            const sessionExists = await doesSessionExist();
            setIsLoggedIn(sessionExists);
        }
        checkSession();
    }, []);

    const handleLogout = async () => {
        try {
            await signOut();
            setIsLoggedIn(false);
            navigate('/');
        } catch (error) {
            console.error("Error during logout:", error);
            // Handle logout failure if needed
        }
    };

    return (
        <header>
            <nav>
                <div className="navbar-left">
                    <Link to="/">
                        <img src={logo} alt="Akka Roti Logo" className="logo" />
                        <span className="logo-name">Akka Roti</span>
                    </Link>
                </div>
                <div className="navbar-right">
                    {!isLoggedIn ? (
                        <>
                            <Link to="/faq">FAQ</Link>
                            <Link to="/testimonials">Testimonials</Link>
                            <input type="text" placeholder="Search..." className="search-bar" />
                            <Link to="/auth">Login</Link>
                            {/* <Link to="/signup">Sign Up</Link> */}
                        </>
                    ) : (
                        <>
                            <Link to="/dashboard">Dashboard</Link>
                            <Link to="/donations">Donations</Link>
                            <Link to="/settings">Settings</Link>
                            <button onClick={handleLogout}>Logout</button>
                        </>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;
