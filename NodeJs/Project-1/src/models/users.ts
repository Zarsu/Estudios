import {type InferInput} from "valibot";
import {authSchema} from "../schemas/authSchema";
import {type UserRole} from "../enums/users.roles";
import { hash } from "bcrypt";

export type User = InferInput<typeof authSchema> & {
    id: number;
    name: string;
    role: UserRole;
    refreshToken?: string;
}

const users: Map<string, User> = new Map(); // Vamos a utilizar un map, para tener a los usuarios indexados (más rápido el acceso)

/**
 * Creates a new user with the given email, password
 * The password is hashed before being stored
 * The new user is assigned the "USER" role by default
 * @param email The email of the user
 * @param password The password of the user
 * @param name The name of the user
 * @returns {Promise<User>} The created user
 */

export const createUser = async (
    email: string, 
    password: string,
    name: string
): Promise<User> => {
    const hashedPassword = await hash(password, 10);

    const newUser: User = {
        id: Date.now(),
        email,
        password: hashedPassword,
        name,
        role: "USER" 
    };

    users.set(email, newUser);
    return newUser;
};
