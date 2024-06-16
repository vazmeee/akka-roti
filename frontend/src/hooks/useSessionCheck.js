import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { doesSessionExist } from 'supertokens-auth-react/recipe/session';

const useSessionCheck = () => {
    const navigate = useNavigate();

    useEffect(() => {
        async function checkSession() {
            if (!(await doesSessionExist())) {
                navigate('/auth', { state: { message: 'Session expired, please login again.' } });
            }
        }
        checkSession();
    }, [navigate]);
};

export default useSessionCheck;
