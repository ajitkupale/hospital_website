/* ===== API CLIENT — Sunshine Multi-Speciality Center ===== */

// In development, the Express server runs on port 3001.
// In production (Vercel), API routes are at the same origin under /api.
const API_BASE = import.meta.env.DEV ? 'http://localhost:3001' : '';

/* ── Types ──────────────────────────────────────── */
export interface AppointmentPayload {
  name: string;
  phone: string;
  department: string;
  date: string;
  email?: string;
  message: string;
}

export interface ContactPayload {
  name: string;
  email?: string;
  phone: string;
  subject?: string;
  message: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  initials: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
}

/* ── Helper ─────────────────────────────────────── */
async function request<T>(
  endpoint: string,
  options?: RequestInit
): Promise<ApiResponse<T>> {
  try {
    const res = await fetch(`${API_BASE}${endpoint}`, {
      headers: { 'Content-Type': 'application/json' },
      ...options,
    });
    const json = await res.json();
    return json as ApiResponse<T>;
  } catch (error) {
    console.error(`API error (${endpoint}):`, error);
    return {
      success: false,
      message: 'Unable to connect to the server. Please try again later.',
    };
  }
}

/* ── Appointments ───────────────────────────────── */
export function submitAppointment(data: AppointmentPayload) {
  return request<{ id: number }>('/api/appointments', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

/* ── Contacts ───────────────────────────────────── */
export function submitContact(data: ContactPayload) {
  return request<{ id: number }>('/api/contacts', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

/* ── Testimonials ───────────────────────────────── */
export function fetchTestimonials() {
  return request<Testimonial[]>('/api/testimonials');
}
