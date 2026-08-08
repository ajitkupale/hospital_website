/* ===== MySQL CONNECTION POOL ===== */
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 3306,
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'sunshine_hospital',
  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0,
  // Timezone alignment
  timezone: '+05:30',
  // SSL for cloud providers (Aiven, TiDB, etc.)
  ...(process.env.DB_HOST && process.env.DB_HOST !== 'localhost'
    ? { ssl: { rejectUnauthorized: false } }
    : {}),
});

export default pool;
