/* ===== APPOINTMENTS ROUTES ===== */
import { Router, Request, Response } from 'express';
import pool from '../db.js';
import { ResultSetHeader, RowDataPacket } from 'mysql2';

const router = Router();

/* ── Validation constants ──────────────────────── */
const VALID_DEPARTMENTS = [
  'Internal Medicine', 'Diabetology', 'Thyroid Care',
  'General Consultation', 'Emergency', 'Other',
];
const PHONE_REGEX = /^[6-9]\d{9}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* POST /api/appointments — Create a new appointment request */
router.post('/', async (req: Request, res: Response) => {
  try {
    const { name, phone, department, date, email, message } = req.body;

    /* ── Validate all fields ──────────────────────── */
    const errors: Record<string, string> = {};

    // Name: required, 2-100 characters
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters.';
    } else if (name.trim().length > 100) {
      errors.name = 'Name cannot exceed 100 characters.';
    }

    // Phone: required, 10 digits, starts with 6/7/8/9
    const phoneDigits = (phone || '').replace(/\D/g, '');
    if (!PHONE_REGEX.test(phoneDigits)) {
      errors.phone = 'Phone must be a valid 10-digit Indian mobile number (starting with 6/7/8/9).';
    }

    // Department: required, must be a valid option
    if (!department || !VALID_DEPARTMENTS.includes(department)) {
      errors.department = `Department must be one of: ${VALID_DEPARTMENTS.join(', ')}`;
    }

    // Date: optional, but if provided must not be in the past
    if (date) {
      const selected = new Date(date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (isNaN(selected.getTime())) {
        errors.date = 'Invalid date format.';
      } else if (selected < today) {
        errors.date = 'Date cannot be in the past.';
      }
    }

    // Email: optional, but if provided must be valid format
    if (email && !EMAIL_REGEX.test(email)) {
      errors.email = 'Please provide a valid email address.';
    }

    // Message: optional, max 500 characters
    if (message && typeof message === 'string' && message.length > 500) {
      errors.message = 'Message cannot exceed 500 characters.';
    }

    if (Object.keys(errors).length > 0) {
      res.status(400).json({
        success: false,
        message: Object.values(errors)[0], // Return the first error as main message
        errors,
      });
      return;
    }

    /* ── Insert into database ─────────────────────── */
    const [result] = await pool.execute<ResultSetHeader>(
      `INSERT INTO appointments (name, phone, email, department, preferred_date, message)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [
        name.trim(),
        phoneDigits,
        email || null,
        department,
        date || null,
        message || null,
      ]
    );

    res.status(201).json({
      success: true,
      message: 'Appointment request submitted successfully!',
      data: { id: result.insertId },
    });
  } catch (error) {
    console.error('Error creating appointment:', error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again or call us directly.',
    });
  }
});

/* GET /api/appointments — List all appointments (admin) */
router.get('/', async (_req: Request, res: Response) => {
  try {
    const [rows] = await pool.execute<RowDataPacket[]>(
      `SELECT * FROM appointments ORDER BY created_at DESC`
    );

    res.json({ success: true, data: rows });
  } catch (error) {
    console.error('Error fetching appointments:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch appointments.' });
  }
});

/* PATCH /api/appointments/:id/status — Update appointment status (admin) */
router.patch('/:id/status', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const validStatuses = ['pending', 'confirmed', 'cancelled', 'completed'];
    if (!status || !validStatuses.includes(status)) {
      res.status(400).json({
        success: false,
        message: `Status must be one of: ${validStatuses.join(', ')}`,
      });
      return;
    }

    const [result] = await pool.execute<ResultSetHeader>(
      `UPDATE appointments SET status = ? WHERE id = ?`,
      [status, id]
    );

    if (result.affectedRows === 0) {
      res.status(404).json({ success: false, message: 'Appointment not found.' });
      return;
    }

    res.json({ success: true, message: `Appointment status updated to '${status}'.` });
  } catch (error) {
    console.error('Error updating appointment status:', error);
    res.status(500).json({ success: false, message: 'Failed to update status.' });
  }
});

export default router;
