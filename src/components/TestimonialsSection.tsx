/* ===== TESTIMONIALS SECTION — PREMIUM DARK GLASS (REBUILT) ===== */
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { COLORS, RADIUS } from '../theme';
import { fetchTestimonials, type Testimonial } from '../services/api';

/* Fallback data when API is unavailable */
const FALLBACK_TESTIMONIALS = [
  {
    id: 1,
    name: 'Savita Patil',
    location: 'Rankala, Kolhapur',
    rating: 5,
    text: 'Dr. Kakare identified my mother\'s thyroid condition when two other doctors had missed it. His patience in explaining everything in simple Marathi meant the world to us. The hospital is spotlessly clean and the staff is always helpful.',
    initials: 'SP',
  },
  {
    id: 2,
    name: 'Ramesh Shinde',
    location: 'Laxmipuri, Kolhapur',
    rating: 5,
    text: 'I have been managing my diabetes under Dr. Kakare for 4 years now. My HbA1c has never been better. He always has time for my questions, never makes me feel rushed. Truly a doctor who cares.',
    initials: 'RS',
  },
  {
    id: 3,
    name: 'Priya Deshmukh',
    location: 'Karad',
    rating: 5,
    text: 'We brought my elderly father in at 2 AM with chest pain. The emergency team was ready within minutes. Dr. Kakare himself came in and stayed until my father was stable. The care, the cleanliness, the organized system — 5 stars is not enough.',
    initials: 'PD',
  },
  {
    id: 4,
    name: 'Sunil Jadhav',
    location: 'Kolhapur',
    rating: 5,
    text: 'As someone who is always skeptical of doctors, I was impressed by how Dr. Kakare listened and how accurate his diagnosis was. No unnecessary tests, no over-prescription. Honest medicine. I now recommend him to everyone in my family.',
    initials: 'SJ',
  },
];

export default function TestimonialsSection() {
  const { ref, visible } = useScrollReveal(0.1);
  const [testimonials, setTestimonials] = useState<Testimonial[]>(FALLBACK_TESTIMONIALS);

  useEffect(() => {
    fetchTestimonials().then((res) => {
      if (res.success && res.data && res.data.length > 0) {
        setTestimonials(res.data);
      }
    });
  }, []);

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
        background: `linear-gradient(160deg, ${COLORS.navyDark} 0%, ${COLORS.navy} 50%, ${COLORS.navyLight} 100%)`,
      }}
    >
      {/* Animated gradient mesh */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(ellipse at 15% 30%, rgba(8,145,178,0.06) 0%, transparent 50%),
            radial-gradient(ellipse at 85% 70%, rgba(217,119,6,0.04) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, rgba(22,163,74,0.03) 0%, transparent 60%)
          `,
          pointerEvents: 'none',
        }}
      />

      {/* Decorative circles */}
      <Box sx={{ position: 'absolute', top: -80, right: -80, width: 320, height: 320, borderRadius: '50%', border: '1px solid rgba(8,145,178,0.06)', pointerEvents: 'none' }} />
      <Box sx={{ position: 'absolute', bottom: -100, left: -100, width: 400, height: 400, borderRadius: '50%', border: '1px solid rgba(8,145,178,0.04)', pointerEvents: 'none' }} />
      <Box sx={{ position: 'absolute', top: '40%', right: '10%', width: 176, height: 176, borderRadius: '50%', bgcolor: 'rgba(8,145,178,0.03)', animation: 'floatSlow 10s ease-in-out infinite', pointerEvents: 'none' }} />

      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Chip
            label="Patient Stories"
            sx={{
              mb: 2,
              fontWeight: 700,
              bgcolor: 'rgba(8,145,178,0.1)',
              border: '1px solid rgba(8,145,178,0.2)',
              color: COLORS.tealLight,
              fontSize: '0.8rem',
              borderRadius: `${RADIUS.sm}px`,
            }}
          />
          <Typography variant="h3" fontWeight={700} sx={{ color: 'white', mb: 2 }}>
            What Our{' '}
            <Box
              component="span"
              sx={{
                background: `linear-gradient(135deg, ${COLORS.teal} 0%, ${COLORS.tealLight} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Patients Say
            </Box>
          </Typography>
          <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
            <Rating value={4.8} precision={0.1} readOnly size="medium" />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                background: `linear-gradient(135deg, ${COLORS.amber} 0%, ${COLORS.amberLight} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              4.8 / 5
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.45)' }}>
              based on 200+ reviews
            </Typography>
          </Stack>
        </Box>

        <Grid
          container
          spacing={3}
          ref={ref as React.Ref<HTMLDivElement>}
        >
          {testimonials.map((t, i) => (
            <Grid
              key={t.name}
              size={{ xs: 12, sm: 6, md: 3 }}
              sx={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'none' : 'translateY(24px)',
                transition: `all 0.7s cubic-bezier(0.4,0,0.2,1) ${i * 0.1}s`,
              }}
            >
              <Card
                sx={{
                  height: '100%',
                  bgcolor: 'rgba(255,255,255,0.04)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: `${RADIUS.xl}px`,
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    background: `linear-gradient(90deg, ${COLORS.teal}, ${COLORS.tealLight}, ${COLORS.teal})`,
                    backgroundSize: '200% 100%',
                    animation: 'gradientShift 4s ease infinite',
                    opacity: 0,
                    transition: 'opacity 0.4s ease',
                  },
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.07)',
                    borderColor: 'rgba(8,145,178,0.15)',
                    transform: 'translateY(-4px)',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
                    '&::before': { opacity: 1 },
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <FormatQuoteIcon
                    sx={{
                      color: COLORS.teal,
                      fontSize: 40,
                      mb: 2,
                      opacity: 0.4,
                      filter: `drop-shadow(0 0 4px rgba(8,145,178,0.25))`,
                    }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'rgba(255,255,255,0.82)',
                      lineHeight: 1.85,
                      mb: 4,
                      fontStyle: 'italic',
                      fontSize: '0.875rem',
                    }}
                  >
                    "{t.text}"
                  </Typography>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar
                      sx={{
                        fontWeight: 700,
                        width: 40,
                        height: 40,
                        fontSize: '0.85rem',
                        background: `linear-gradient(135deg, ${COLORS.teal} 0%, ${COLORS.tealDark} 100%)`,
                        color: COLORS.white,
                        boxShadow: `0 4px 12px rgba(8,145,178,0.25)`,
                      }}
                    >
                      {t.initials}
                    </Avatar>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="body2" sx={{ color: 'white', fontWeight: 700, fontSize: '0.875rem' }}>
                        {t.name}
                      </Typography>
                      <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.72rem' }}>
                        {t.location}
                      </Typography>
                    </Box>
                    <Rating value={t.rating} size="small" readOnly />
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
