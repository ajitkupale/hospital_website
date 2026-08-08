-- ===== VIEW ALL DATA — SUNSHINE MULTI-SPECIALITY CENTER =====
-- Usage: mysql -h HOST -P PORT -u USER -p < server/view_data.sql

USE defaultdb;

-- ─────────────────────────────────────────────
-- 1. ALL APPOINTMENTS
-- ─────────────────────────────────────────────
SELECT '========== APPOINTMENTS ==========' AS '';
SELECT 
  id,
  name,
  phone,
  email,
  department,
  preferred_date,
  message,
  status,
  created_at
FROM appointments
ORDER BY created_at DESC;

SELECT CONCAT('Total Appointments: ', COUNT(*)) AS '' FROM appointments;

-- ─────────────────────────────────────────────
-- 2. ALL CONTACT ENQUIRIES
-- ─────────────────────────────────────────────
SELECT '========== CONTACT ENQUIRIES ==========' AS '';
SELECT 
  id,
  name,
  email,
  phone,
  subject,
  message,
  CASE WHEN is_read = 1 THEN 'Yes' ELSE 'No' END AS is_read,
  created_at
FROM contacts
ORDER BY created_at DESC;

SELECT CONCAT('Total Contacts: ', COUNT(*)) AS '' FROM contacts;

-- ─────────────────────────────────────────────
-- 3. ALL TESTIMONIALS
-- ─────────────────────────────────────────────
SELECT '========== TESTIMONIALS ==========' AS '';
SELECT 
  id,
  name,
  location,
  rating,
  text,
  CASE WHEN is_approved = 1 THEN 'Yes' ELSE 'No' END AS approved,
  created_at
FROM testimonials
ORDER BY created_at DESC;

SELECT CONCAT('Total Testimonials: ', COUNT(*)) AS '' FROM testimonials;
