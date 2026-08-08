/* ===== Run schema against cloud MySQL (Aiven) ===== */
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

async function setup() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: { rejectUnauthorized: false },
  });

  console.log('✅ Connected to Aiven MySQL!\n');

  // Create tables
  await connection.execute(`
    CREATE TABLE IF NOT EXISTS appointments (
      id          INT AUTO_INCREMENT PRIMARY KEY,
      name        VARCHAR(100)  NOT NULL,
      phone       VARCHAR(20)   NOT NULL,
      email       VARCHAR(150)  DEFAULT NULL,
      department  VARCHAR(100)  NOT NULL,
      preferred_date DATE       DEFAULT NULL,
      message     TEXT          DEFAULT NULL,
      status      ENUM('pending', 'confirmed', 'cancelled', 'completed')
                  NOT NULL DEFAULT 'pending',
      created_at  TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at  TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      INDEX idx_status    (status),
      INDEX idx_created   (created_at)
    ) ENGINE=InnoDB
  `);
  console.log('✅ appointments table created');

  // Migration: add email column if it doesn't exist (for existing tables)
  try {
    await connection.execute(`ALTER TABLE appointments ADD COLUMN email VARCHAR(150) DEFAULT NULL AFTER phone`);
    console.log('✅ email column added to appointments');
  } catch {
    // Column already exists — ignore
  }

  await connection.execute(`
    CREATE TABLE IF NOT EXISTS contacts (
      id          INT AUTO_INCREMENT PRIMARY KEY,
      name        VARCHAR(100)  NOT NULL,
      email       VARCHAR(150)  DEFAULT NULL,
      phone       VARCHAR(20)   NOT NULL,
      subject     VARCHAR(200)  DEFAULT NULL,
      message     TEXT          NOT NULL,
      is_read     BOOLEAN       NOT NULL DEFAULT FALSE,
      created_at  TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP,
      INDEX idx_is_read   (is_read),
      INDEX idx_created   (created_at)
    ) ENGINE=InnoDB
  `);
  console.log('✅ contacts table created');

  await connection.execute(`
    CREATE TABLE IF NOT EXISTS testimonials (
      id          INT AUTO_INCREMENT PRIMARY KEY,
      name        VARCHAR(100)  NOT NULL,
      location    VARCHAR(150)  DEFAULT NULL,
      rating      TINYINT UNSIGNED NOT NULL DEFAULT 5,
      text        TEXT          NOT NULL,
      initials    VARCHAR(5)    NOT NULL,
      is_approved BOOLEAN       NOT NULL DEFAULT FALSE,
      created_at  TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP,
      INDEX idx_approved  (is_approved),
      INDEX idx_rating    (rating)
    ) ENGINE=InnoDB
  `);
  console.log('✅ testimonials table created');

  // Seed testimonials
  const [existing] = await connection.execute('SELECT COUNT(*) as cnt FROM testimonials');
  const count = (existing as any)[0].cnt;

  if (count === 0) {
    await connection.execute(`
      INSERT INTO testimonials (name, location, rating, text, initials, is_approved) VALUES
        ('Savita Patil', 'Rankala, Kolhapur', 5,
         'Dr. Kakare identified my mother''s thyroid condition when two other doctors had missed it. His patience in explaining everything in simple Marathi meant the world to us. The hospital is spotlessly clean and the staff is always helpful.',
         'SP', TRUE),
        ('Ramesh Shinde', 'Laxmipuri, Kolhapur', 5,
         'I have been managing my diabetes under Dr. Kakare for 4 years now. My HbA1c has never been better. He always has time for my questions, never makes me feel rushed. Truly a doctor who cares.',
         'RS', TRUE),
        ('Priya Deshmukh', 'Karad', 5,
         'We brought my elderly father in at 2 AM with chest pain. The emergency team was ready within minutes. Dr. Kakare himself came in and stayed until my father was stable. The care, the cleanliness, the organized system — 5 stars is not enough.',
         'PD', TRUE),
        ('Sunil Jadhav', 'Kolhapur', 5,
         'As someone who is always skeptical of doctors, I was impressed by how Dr. Kakare listened and how accurate his diagnosis was. No unnecessary tests, no over-prescription. Honest medicine. I now recommend him to everyone in my family.',
         'SJ', TRUE)
    `);
    console.log('✅ Seed testimonials inserted');
  } else {
    console.log(`ℹ️  Testimonials already seeded (${count} rows)`);
  }

  await connection.end();
  console.log('\n🎉 Database setup complete!');
}

setup().catch((err) => {
  console.error('❌ Setup failed:', err.message);
  process.exit(1);
});
