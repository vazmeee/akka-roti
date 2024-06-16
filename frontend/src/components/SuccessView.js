import React from 'react';
import { EmailPasswordSignInAndUp } from 'supertokens-auth-react/recipe/emailpassword';

function SuccessView() {
    return (
        <div>
            <h1>Success View</h1>
            <EmailPasswordSignInAndUp />
        </div>
    );
}

export default SuccessView;
