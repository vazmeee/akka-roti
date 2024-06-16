import React from 'react';
import { useSessionContext } from 'supertokens-auth-react/recipe/session';
import axios from 'axios';

function CallAPIView() {
    const session = useSessionContext();

    const callAPI = async () => {
        try {
            const response = await axios.get('http://localhost:8081/secure', {
                headers: {
                    'Authorization': `Bearer ${session.accessTokenPayload}`
                }
            });
            alert(response.data.message);
        } catch (error) {
            alert('Failed to call API');
        }
    };

    return (
        <div>
            <h1>Call API View</h1>
            <button onClick={callAPI}>Call API</button>
        </div>
    );
}

export default CallAPIView;
