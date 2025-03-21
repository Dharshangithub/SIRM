import mysql from 'mysql2/promise';

const db = mysql.createPool({
  uri: process.env.DATABASE_URL, // Uses the environment variable
});

export default db;
