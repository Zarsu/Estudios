import { Pool } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from './dbSchema.ts'; 
import { env, isProd } from '../../env.ts';
import { remember } from '@epic-web/remember';

const createPool = () => {
    return new Pool({
        connectionString: env.DATABASE_URL
    });
}

const client = isProd()
  ? createPool()
  : remember("dbPool", () => createPool()); // Esto crea un Singleton del Pool en desarrollo para evitar múltiples conexiones (hot reload problemas jaj)

export const db = drizzle(client, { schema });