import React, { useEffect } from 'react';
import axios from 'axios';
import Main from './../common/Header/Main';

useEffect(async () => {
    const url = new URL(window.location.href);
    const authorizationCode = url.searchParams.get('code');
    
    const getAccessToken = authorizationCode => {
        let tokenData = await axios
        .post('백엔드 api 주소', {authorizationCode})
        .then()
        if(authorizationCode) await getAccessToken(authorizationCode);
    }
}, [])
const Used = () => {
    return (
        <div>
            <Main />
        </div>
    )
}

export default Used;