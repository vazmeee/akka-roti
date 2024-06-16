import React, { useState, useEffect } from "react";
import { EmailPasswordAuth, SignInAndUp } from "supertokens-auth-react/recipe/emailpassword";
import { useNavigate } from "react-router-dom";
import "../SupertokensCustom.css"; // Import the custom CSS

export default function SignIn() {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000); // Simulate fetching data with a delay

        return () => clearTimeout(timer);
    }, []);

    const onSignInSuccess = () => {
        // Redirect to the dashboard page after successful sign-in
        navigate("/dashboard");
    };

    return (
        <div className={loading ? "" : "fadeIn"}>
            <EmailPasswordAuth onSignInSuccess={onSignInSuccess}>
                <div className="auth-container">
                    <h1>Sign In</h1>
                    <SignInAndUp />
                </div>
            </EmailPasswordAuth>
        </div>
    );
}
