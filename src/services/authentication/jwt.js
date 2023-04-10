import * as jose from 'jose';

export const validateToken = async(token) => {
    let key = new TextEncoder().encode(process.env.REACT_APP_TOKEN_SECRET);
    try {
        let user = await jose.jwtVerify(token, key);
        return user;
    } catch (error) {
        return null;
    }
};

