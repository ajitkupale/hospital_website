/* ===== EXPRESS SERVER — SUNSHINE MULTI-SPECIALITY CENTER API ===== */
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import appointmentsRouter from './routes/appointments.js';
import contactsRouter from './routes/contacts.js';
import testimonialsRouter from './routes/testimonials.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

/* ── Middleware ────────────────────────────────── */
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
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

/* ── Start server ─────────────────────────────── */
app.listen(PORT, () => {
  console.log(`\n🏥 Sunshine API server running at http://localhost:${PORT}`);
  console.log(`   Health check: http://localhost:${PORT}/api/health\n`);
});

export default app;
