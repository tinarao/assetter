export default {
    schema: './src/lib/db/schema.ts',
    out: './drizzle',
    dialect: 'postgresql',
    url: process.env.DB_URL,
    verbose: true,
    strict: true
};