import React from "react";
import { EmailPasswordAuth, SignInAndUp } from "supertokens-auth-react/recipe/emailpassword";
import { useNavigate } from "react-router-dom";
import "../SupertokensCustom.css"; // Import the custom CSS

export default function SignUp() {
    const navigate = useNavigate();

    const onSignUpSuccess = (context) => {
        // Redirect to the email verification page after successful signup
        if (context.status === "OK") {
            navigate("/verify-email");
        }
    };

    return (
        <EmailPasswordAuth onSignUpSuccess={onSignUpSuccess}>
            <div className="auth-container">
                <h1>Sign Up</h1>
                <SignInAndUp />
            </div>
        </EmailPasswordAuth>
    );
}
