import { SignJWT, type JWTPayload } from 'jose';
import {createSecretKey} from 'crypto';
import {env} from '../../env.ts';

// Define the structure of your JWT payload
// In this case, we are including the user's id, email, and username (identifiers that can be used to identify the user in the system)
export interface JwtPayload extends JWTPayload{ 
    id: string;
    email: string;
    username: string;
};

export const generateToken = (payload: JwtPayload) => {
    const secret = env.JWT_SECRET;
    const secretKey = createSecretKey(secret, 'utf-8');

    return new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt() // When the token was issued/created
        .setExpirationTime(env.JWT_EXPIRES_IN) // When the token will expire. You should always set an expiration time for your tokens to enhance security.
        .sign(secretKey);
};