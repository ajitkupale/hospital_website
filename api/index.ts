/* ===== VERCEL SERVERLESS ADAPTER ===== */
// This file wraps the Express app as a Vercel serverless function.
// Vercel automatically picks up files in the /api directory.
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import appointmentsRouter from '../server/routes/appointments.js';
import contactsRouter from '../server/routes/contacts.js';
import testimonialsRouter from '../server/routes/testimonials.js';

dotenv.config();

const app = express();

/* ── Middleware ────────────────────────────────── */
app.use(cors({
  origin: process.env.CORS_ORIGIN || '*',
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  credentials: true,
}));
app.use(express.json());

/* ── Routes ───────────────────────────────────── */
app.use('/api/appointments', appointmentsRouter);
app.use('/api/contacts', contactsRouter);
app.use('/api/testimonials', testimonialsRouter);

/* ── Health check ─────────────────────────────── */
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

export default app;
