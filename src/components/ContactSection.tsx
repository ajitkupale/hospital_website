/* ===== CONTACT & APPOINTMENT SECTION — PREMIUM (REBUILT) ===== */
import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import MenuItem from '@mui/material/MenuItem';
import CircularProgress from '@mui/material/CircularProgress';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { COLORS, RADIUS, SHADOW } from '../theme';
import { submitAppointment } from '../services/api';

const DEPARTMENTS = [
  'Internal Medicine',
  'Diabetology',
  'Thyroid Care',
  'General Consultation',
  'Emergency',
  'Other',
];

const LOCATIONS = [
  {
    name: 'Main Hospital — Rankala, Kolhapur',
    address: 'Opposite Dr. Yedekar Hospital, near Nagojirao Patankar Highschool, Rankala, Kolhapur, Maharashtra',
    phone: '+91 XXXXX XXXXX',
    hours: '24/7 — Emergency always open',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30655.65765838489!2d74.2079866!3d16.703591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1000309e8a9f7%3A0x5b5f4af84e2de4cb!2sRankala%20Lake%2C%20Kolhapur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1704000000000!5m2!1sen!2sin',
  },
  {
    name: 'Clinic — Laxmipuri, Kolhapur',
    address: 'Laxmipuri, Kolhapur, Maharashtra',
    phone: '+91 XXXXX XXXXX',
    hours: 'Mon–Sat: 9 AM – 2 PM & 5 PM – 9 PM',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30655.65765838489!2d74.2179866!3d16.713591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1007fe9ede065%3A0x4e20def4dbd04fda!2sLaxmipuri%2C%20Kolhapur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1704000000000!5m2!1sen!2sin',
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', phone: '', department: '', date: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const result = await submitAppointment(form);

    setLoading(false);
    if (result.success) {
      setSubmitted(true);
      setForm({ name: '', phone: '', department: '', date: '', message: '' });
    } else {
      setError(result.message);
    }
  };

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative top gradient line */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: `linear-gradient(90deg, transparent, ${COLORS.teal}, transparent)`,
          opacity: 0.25,
        }}
      />
      {/* Background orb */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '-10%',
          right: '-5%',
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: `radial-gradient(circle, rgba(8,145,178,0.03) 0%, transparent 70%)`,
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Chip
            label="Get in Touch"
            sx={{
              mb: 2,
              fontWeight: 700,
              background: `linear-gradient(135deg, rgba(8,145,178,0.08) 0%, rgba(8,145,178,0.03) 100%)`,
              border: `1px solid rgba(8,145,178,0.25)`,
              color: COLORS.navy,
              fontSize: '0.8rem',
              borderRadius: `${RADIUS.sm}px`,
            }}
          />
          <Typography variant="h3" fontWeight={700} sx={{ mb: 2 }}>
            Book an{' '}
            <Box component="span" className="gradient-text-dark">Appointment</Box>
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 560, mx: 'auto', lineHeight: 1.85 }}>
            Fill in the form below and our team will confirm your appointment within a few hours.
            For urgent care, please call directly or use WhatsApp.
          </Typography>
        </Box>

        <Grid container spacing={5}>
          {/* Booking form */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Card
              sx={{
                border: '1px solid rgba(226,232,240,0.6)',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  inset: -1,
                  borderRadius: 'inherit',
                  padding: 1,
                  background: `linear-gradient(135deg, rgba(8,145,178,0.2), transparent, rgba(8,145,178,0.1))`,
                  mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  maskComposite: 'exclude',
                  WebkitMaskComposite: 'xor',
                  pointerEvents: 'none',
                  opacity: 0,
                  transition: 'opacity 0.5s ease',
                },
                '&:hover::before': { opacity: 1 },
              }}
            >
              <CardContent sx={{ p: { xs: 3, md: 5 } }}>
                <Typography variant="h5" fontWeight={700} gutterBottom>
                  Appointment Request
                </Typography>

                {submitted ? (
                  <Box
                    sx={{
                      textAlign: 'center',
                      py: 5,
                      animation: 'scaleIn 0.5s ease both',
                    }}
                  >
                    <CheckCircleOutlineIcon
                      sx={{
                        fontSize: 64,
                        color: COLORS.green,
                        mb: 2,
                        filter: `drop-shadow(0 0 12px rgba(22,163,74,0.35))`,
                      }}
                    />
                    <Typography variant="h6" fontWeight={700} gutterBottom>
                      Request Received!
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 400, mx: 'auto' }}>
                      Thank you! We have received your request and will contact you shortly to confirm your appointment.
                    </Typography>
                    <Button
                      variant="outlined"
                      onClick={() => setSubmitted(false)}
                      sx={{
                        mt: 3,
                        borderColor: COLORS.teal,
                        color: COLORS.navy,
                        borderRadius: `${RADIUS.md}px`,
                        '&:hover': {
                          borderColor: COLORS.teal,
                          bgcolor: COLORS.tealSubtle,
                        },
                      }}
                    >
                      Book Another
                    </Button>
                  </Box>
                ) : (
                  <Box component="form" onSubmit={handleSubmit} noValidate>
                    <Grid container spacing={3} sx={{ mt: 0.5 }}>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          required
                          fullWidth
                          label="Full Name"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="e.g. Ramesh Patil"
                        />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          required
                          fullWidth
                          label="Phone Number"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+91 XXXXX XXXXX"
                          type="tel"
                        />
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          required
                          fullWidth
                          select
                          label="Department / Reason"
                          name="department"
                          value={form.department}
                          onChange={handleChange}
                        >
                          {DEPARTMENTS.map((d) => (
                            <MenuItem key={d} value={d}>{d}</MenuItem>
                          ))}
                        </TextField>
                      </Grid>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          fullWidth
                          label="Preferred Date"
                          name="date"
                          value={form.date}
                          onChange={handleChange}
                          type="date"
                          slotProps={{ inputLabel: { shrink: true } }}
                        />
                      </Grid>
                      <Grid size={12}>
                        <TextField
                          fullWidth
                          label="Additional Message (optional)"
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          multiline
                          rows={3}
                          placeholder="Briefly describe your symptoms or any relevant medical history..."
                        />
                      </Grid>
                      <Grid size={12}>
                        {error && (
                          <Alert severity="error" sx={{ mb: 2 }} onClose={() => setError(null)}>
                            {error}
                          </Alert>
                        )}
                        <Button
                          type="submit"
                          variant="contained"
                          fullWidth
                          size="large"
                          disabled={loading}
                          endIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
                          sx={{
                            py: 2,
                            fontSize: '1rem',
                            fontWeight: 700,
                            borderRadius: `${RADIUS.md}px`,
                            background: `linear-gradient(135deg, ${COLORS.navy} 0%, ${COLORS.navyLight} 100%)`,
                            boxShadow: SHADOW.md,
                            '&:hover': {
                              background: `linear-gradient(135deg, ${COLORS.navyLight} 0%, ${COLORS.navy} 100%)`,
                              boxShadow: SHADOW.lg,
                              transform: 'translateY(-2px)',
                            },
                          }}
                        >
                          {loading ? 'Submitting...' : 'Request Appointment'}
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                )}
              </CardContent>
            </Card>
          </Grid>

          {/* Contact info */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={3}>
              {/* Quick contact card */}
              <Card
                sx={{
                  background: `linear-gradient(135deg, ${COLORS.navy} 0%, ${COLORS.navyLight} 100%)`,
                  border: 'none',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: -48,
                    right: -48,
                    width: 192,
                    height: 192,
                    borderRadius: '50%',
                    background: 'rgba(8,145,178,0.08)',
                    pointerEvents: 'none',
                  },
                }}
              >
                <CardContent sx={{ p: 4, position: 'relative' }}>
                  <Typography variant="h6" fontWeight={700} sx={{ color: 'white', mb: 3 }}>
                    Quick Contact
                  </Typography>
                  <Stack spacing={2}>
                    <Button
                      fullWidth
                      variant="contained"
                      startIcon={<PhoneIcon />}
                      component="a"
                      href="tel:+91XXXXXXXXXX"
                      sx={{
                        py: 2,
                        fontWeight: 700,
                        borderRadius: `${RADIUS.md}px`,
                        background: `linear-gradient(135deg, ${COLORS.red} 0%, ${COLORS.redDark} 100%)`,
                        boxShadow: `0 4px 20px rgba(220,38,38,0.35)`,
                        '&:hover': {
                          boxShadow: `0 8px 32px rgba(220,38,38,0.5)`,
                          transform: 'translateY(-2px)',
                        },
                      }}
                    >
                      Emergency: Call Now — 24/7
                    </Button>
                    <Button
                      fullWidth
                      variant="contained"
                      startIcon={<WhatsAppIcon />}
                      component="a"
                      href="https://wa.me/91XXXXXXXXXX"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        py: 2,
                        fontWeight: 700,
                        borderRadius: `${RADIUS.md}px`,
                        bgcolor: '#25D366',
                        '&:hover': {
                          bgcolor: '#128C7E',
                          transform: 'translateY(-2px)',
                        },
                      }}
                    >
                      WhatsApp Us
                    </Button>
                  </Stack>
                </CardContent>
              </Card>

              {/* Location cards */}
              {LOCATIONS.map((loc) => (
                <Card
                  key={loc.name}
                  sx={{
                    border: '1px solid rgba(226,232,240,0.6)',
                    '&:hover': {
                      borderColor: 'rgba(8,145,178,0.2)',
                      boxShadow: SHADOW.lg,
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Stack direction="row" spacing={2} alignItems="flex-start" sx={{ mb: 3 }}>
                      <Box
                        sx={{
                          p: 1,
                          borderRadius: `${RADIUS.sm}px`,
                          bgcolor: COLORS.tealSubtle,
                          color: COLORS.navy,
                          display: 'flex',
                        }}
                      >
                        <LocationOnIcon sx={{ fontSize: 22 }} />
                      </Box>
                      <Box>
                        <Typography variant="subtitle1" fontWeight={700}>{loc.name}</Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, lineHeight: 1.6 }}>
                          {loc.address}
                        </Typography>
                      </Box>
                    </Stack>
                    <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                      <AccessTimeIcon sx={{ color: COLORS.teal, fontSize: 18 }} />
                      <Typography variant="body2" color="text.secondary">{loc.hours}</Typography>
                    </Stack>
                    <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
                      <PhoneIcon sx={{ color: COLORS.teal, fontSize: 18 }} />
                      <Typography
                        variant="body2"
                        component="a"
                        href={`tel:${loc.phone}`}
                        sx={{
                          color: COLORS.navy,
                          fontWeight: 600,
                          textDecoration: 'none',
                          transition: 'color 0.3s ease',
                          '&:hover': { color: COLORS.teal },
                        }}
                      >
                        {loc.phone}
                      </Typography>
                    </Stack>
                    <Box
                      component="iframe"
                      src={loc.mapSrc}
                      sx={{
                        width: '100%',
                        height: 176,
                        border: 0,
                        borderRadius: `${RADIUS.md}px`,
                        filter: 'saturate(0.85) contrast(1.05)',
                        transition: 'filter 0.4s ease',
                        '&:hover': { filter: 'saturate(1) contrast(1)' },
                      }}
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Map for ${loc.name}`}
                    />
                  </CardContent>
                </Card>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
