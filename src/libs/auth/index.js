import {jwtVerify} from 'jose';

export const getJwtSecretKey = () => {
    const secret = process.env.NEXT_PUBLIC_JWT_SECRET_KEY
    if (!secret) {
        throw new Error("JWT secret key is not available");
    }
    return new TextEncoder().encode(secret);
}

export const verifyJwtToken = async (token) => {
    try{
        const {payload} = await jwtVerify(token, getJwtSecretKey());
        return payload
    }catch(err) {
        return null
    }
}