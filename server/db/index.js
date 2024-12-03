const dotenv = require('dotenv');
const { drizzle } = require('drizzle-orm/node-postgres');

dotenv.config();
const db = drizzle(process.env.DATABASE_URL);

module.exports = { db };
