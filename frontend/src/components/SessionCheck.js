import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { doesSessionExist } from 'supertokens-auth-react/recipe/session';

const SessionCheck = ({ children }) => {
    const navigate = useNavigate();

    useEffect(() => {
        async function checkSession() {
            if (!(await doesSessionExist())) {
                navigate('/auth', { state: { message: 'Session expired, please login again.' } });
            }
        }
        checkSession();
    }, [navigate]);

    return <>{children}</>;
};

export default SessionCheck;
