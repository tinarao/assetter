import { DB_URL } from '$env/static/private';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { users, profiles, profilesRelations, shops, items } from './schema';

const client = postgres(DB_URL);
export const db = drizzle(client, {
    schema: {
        users,
        profiles,
        profilesRelations,
        shops,
        items
    }
});