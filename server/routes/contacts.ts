/* ===== CONTACTS ROUTES ===== */
import { Router, Request, Response } from 'express';
import pool from '../db.js';
import { ResultSetHeader, RowDataPacket } from 'mysql2';

const router = Router();

/* ── Validation constants ──────────────────────── */
const PHONE_REGEX = /^[6-9]\d{9}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* POST /api/contacts — Submit a contact / enquiry form */
router.post('/', async (req: Request, res: Response) => {
  try {
    const { name, email, phone, subject, message } = req.body;

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

    // Email: optional, but if provided must be valid format
    if (email && !EMAIL_REGEX.test(email)) {
      errors.email = 'Please provide a valid email address.';
    }

    // Message: required, max 2000 characters
    if (!message || typeof message !== 'string' || !message.trim()) {
      errors.message = 'Message is required.';
    } else if (message.length > 2000) {
      errors.message = 'Message cannot exceed 2000 characters.';
    }

    // Subject: optional, max 200 characters
    if (subject && typeof subject === 'string' && subject.length > 200) {
      errors.subject = 'Subject cannot exceed 200 characters.';
    }

    if (Object.keys(errors).length > 0) {
      res.status(400).json({
        success: false,
        message: Object.values(errors)[0],
        errors,
      });
      return;
    }

    /* ── Insert into database ─────────────────────── */
    const [result] = await pool.execute<ResultSetHeader>(
      `INSERT INTO contacts (name, email, phone, subject, message)
       VALUES (?, ?, ?, ?, ?)`,
      [
        name.trim(),
        email || null,
        phoneDigits,
        subject || null,
        message.trim(),
      ]
    );

    res.status(201).json({
      success: true,
      message: 'Your message has been sent successfully!',
      data: { id: result.insertId },
    });
  } catch (error) {
    console.error('Error creating contact:', error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again.',
    });
  }
});

/* GET /api/contacts — List all contact messages (admin) */
router.get('/', async (_req: Request, res: Response) => {
  try {
    const [rows] = await pool.execute<RowDataPacket[]>(
      `SELECT * FROM contacts ORDER BY created_at DESC`
    );

    res.json({ success: true, data: rows });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch contacts.' });
  }
});

/* PATCH /api/contacts/:id/read — Mark a contact message as read (admin) */
router.patch('/:id/read', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const [result] = await pool.execute<ResultSetHeader>(
      `UPDATE contacts SET is_read = TRUE WHERE id = ?`,
      [id]
    );

    if (result.affectedRows === 0) {
      res.status(404).json({ success: false, message: 'Contact not found.' });
      return;
    }

    res.json({ success: true, message: 'Marked as read.' });
  } catch (error) {
    console.error('Error updating contact:', error);
    res.status(500).json({ success: false, message: 'Failed to update.' });
  }
});

export default router;
