-- ===== SUNSHINE MULTI-SPECIALITY CENTER — DATABASE SCHEMA =====
-- Run this script to create all tables in the Aiven cloud database.
-- The app connects to 'defaultdb' as configured in .env (DB_NAME).

USE defaultdb;

-- ─────────────────────────────────────────────
-- APPOINTMENTS — Booking requests from patients
-- ─────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS appointments (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  name        VARCHAR(100)  NOT NULL,
  phone       VARCHAR(20)   NOT NULL,
  department  VARCHAR(100)  NOT NULL,
  preferred_date DATE       DEFAULT NULL,
  message     TEXT          DEFAULT NULL,
  status      ENUM('pending', 'confirmed', 'cancelled', 'completed')
              NOT NULL DEFAULT 'pending',
  created_at  TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at  TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

  INDEX idx_status    (status),
  INDEX idx_created   (created_at)
) ENGINE=InnoDB;

-- ──────────────────────────────────────────────
-- CONTACTS — General contact / enquiry messages
-- ──────────────────────────────────────────────
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
) ENGINE=InnoDB;

-- ──────────────────────────────────────────────
-- TESTIMONIALS — Patient reviews / testimonials
-- ──────────────────────────────────────────────
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
) ENGINE=InnoDB;

-- ─────────────────────────────────────────────
-- SEED DATA — Default testimonials (approved)
-- ─────────────────────────────────────────────
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
   'SJ', TRUE);
