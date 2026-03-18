import bycrypt from 'bcrypt';
import {env} from '../../env.ts';

export const hashPassword = async (password: string) => {
    return await bycrypt.hash(password, env.BYCRYPT_SALT_ROUNDS);
};