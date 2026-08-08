/* ===== CONTACTS ROUTES ===== */
import { Router, Request, Response } from 'express';
import pool from '../db.js';
import { ResultSetHeader, RowDataPacket } from 'mysql2';

const router = Router();

/* POST /api/contacts — Submit a contact / enquiry form */
router.post('/', async (req: Request, res: Response) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Basic validation
    if (!name || !phone || !message) {
      res.status(400).json({
        success: false,
        message: 'Name, phone, and message are required.',
      });
      return;
    }

    const [result] = await pool.execute<ResultSetHeader>(
      `INSERT INTO contacts (name, email, phone, subject, message)
       VALUES (?, ?, ?, ?, ?)`,
      [
        name,
        email || null,
        phone,
        subject || null,
        message,
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
