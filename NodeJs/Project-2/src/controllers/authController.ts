import type { Request, Response } from 'express';
import {db} from '../db/connection.ts';
import { users , type NewUser} from '../db/dbSchema.ts';
import { hashPassword } from '../utils/passwords.ts';
import { generateToken } from '../utils/jwt.ts';

export const register = async (req: Request<any, any, NewUser>, res: Response) => {
    try{
        const { email, username, password } = req.body; // Destructure the incoming request body to get email, username, and password

        const hashedPassword = await hashPassword(password);

        const [newUser] = await db.insert(users).values({
            email,
            username,
            password: hashedPassword,
        }).returning({
            id: users.id,
            email: users.email,
            username: users.username,
            firstName: users.firstName,
            lastName: users.lastName,
            createdAt: users.createdAt,
        });

        if (!newUser) throw new Error("User creation failed");

        const token = await generateToken({
            id: newUser.id,
            email: newUser.email,
            username: newUser.username,
        });

        return res.status(201).json({ 
            message: 'User registered successfully',
            newUser, 
            token });

    }catch(error){
        console.error('Registration error', error);
        res.status(500).json({ error: 'Failed to create a user' });
    }
};