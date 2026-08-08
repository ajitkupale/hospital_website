/* ===== TESTIMONIALS ROUTES ===== */
import { Router, Request, Response } from 'express';
import pool from '../db.js';
import { ResultSetHeader, RowDataPacket } from 'mysql2';

const router = Router();

/* GET /api/testimonials — Get approved testimonials (public) */
router.get('/', async (_req: Request, res: Response) => {
  try {
    const [rows] = await pool.execute<RowDataPacket[]>(
      `SELECT id, name, location, rating, text, initials
       FROM testimonials
       WHERE is_approved = TRUE
       ORDER BY created_at DESC`
    );

    res.json({ success: true, data: rows });
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch testimonials.' });
  }
});

/* POST /api/testimonials — Add a new testimonial (admin) */
router.post('/', async (req: Request, res: Response) => {
  try {
    const { name, location, rating, text, initials, is_approved } = req.body;

    // Basic validation
    if (!name || !text || !initials) {
      res.status(400).json({
        success: false,
        message: 'Name, text, and initials are required.',
      });
      return;
    }

    const ratingVal = Math.min(5, Math.max(1, Number(rating) || 5));

    const [result] = await pool.execute<ResultSetHeader>(
      `INSERT INTO testimonials (name, location, rating, text, initials, is_approved)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [
        name,
        location || null,
        ratingVal,
        text,
        initials,
        is_approved ? true : false,
      ]
    );

    res.status(201).json({
      success: true,
      message: 'Testimonial added successfully!',
      data: { id: result.insertId },
    });
  } catch (error) {
    console.error('Error creating testimonial:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to add testimonial.',
    });
  }
});

/* PATCH /api/testimonials/:id/approve — Approve/unapprove a testimonial (admin) */
router.patch('/:id/approve', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { is_approved } = req.body;

    const [result] = await pool.execute<ResultSetHeader>(
      `UPDATE testimonials SET is_approved = ? WHERE id = ?`,
      [is_approved ? true : false, id]
    );

    if (result.affectedRows === 0) {
      res.status(404).json({ success: false, message: 'Testimonial not found.' });
      return;
    }

    res.json({
      success: true,
      message: is_approved ? 'Testimonial approved.' : 'Testimonial unapproved.',
    });
  } catch (error) {
    console.error('Error updating testimonial:', error);
    res.status(500).json({ success: false, message: 'Failed to update testimonial.' });
  }
});

export default router;
