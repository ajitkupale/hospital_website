/* ===== APPOINTMENTS ROUTES ===== */
import { Router, Request, Response } from 'express';
import pool from '../db.js';
import { ResultSetHeader, RowDataPacket } from 'mysql2';

const router = Router();

/* POST /api/appointments — Create a new appointment request */
router.post('/', async (req: Request, res: Response) => {
  try {
    const { name, phone, department, date, message } = req.body;

    // Basic validation
    if (!name || !phone || !department) {
      res.status(400).json({
        success: false,
        message: 'Name, phone, and department are required.',
      });
      return;
    }

    const [result] = await pool.execute<ResultSetHeader>(
      `INSERT INTO appointments (name, phone, department, preferred_date, message)
       VALUES (?, ?, ?, ?, ?)`,
      [
        name,
        phone,
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
