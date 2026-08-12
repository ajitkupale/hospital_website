/* ===== PREMIUM FOOTER (REBUILT) ===== */
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { COLORS, RADIUS, SHADOW, TRANSITION_MEDIUM } from '../theme';

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Dr. Onkar Kakare', href: '#dr-onkar-kakare' },
  { label: 'Services', href: '#services' },
  { label: 'Patient Resources', href: '#resources' },
  { label: 'Book Appointment', href: '#contact' },
];

const SERVICES_LINKS = [
  { label: 'Internal Medicine', href: '#internal-medicine' },
  { label: 'Diabetes Management', href: '#diabetes-management' },
  { label: 'Thyroid Care', href: '#thyroid-care' },
  { label: 'ICU & Emergency', href: '#icu' },
  { label: 'Pain Management', href: '#pain-management' },
  { label: 'General Health Check-ups', href: '#general-health-checkups' },
];

const SOCIALS = [
  { icon: <FacebookIcon fontSize="small" />, label: 'Facebook', color: '#1877F2' },
  { icon: <InstagramIcon fontSize="small" />, label: 'Instagram', color: '#E4405F' },
  { icon: <YouTubeIcon fontSize="small" />, label: 'YouTube', color: '#FF0000' },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top gradient accent line */}
      <Box
        sx={{
          height: 3,
          background: `linear-gradient(90deg, ${COLORS.teal}, ${COLORS.navy}, ${COLORS.teal})`,
          backgroundSize: '200% 100%',
          animation: 'gradientShift 6s ease infinite',
        }}
      />

      <Box
        sx={{
          bgcolor: COLORS.ink,
          pt: 8,
          pb: 3,
          position: 'relative',
        }}
      >
        {/* Background orbs */}
        <Box
          sx={{
            position: 'absolute',
            top: '10%',
            right: '-5%',
            width: 300,
            height: 300,
            borderRadius: '50%',
            background: `radial-gradient(circle, rgba(8,145,178,0.03) 0%, transparent 70%)`,
            pointerEvents: 'none',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '20%',
            left: '-8%',
            width: 250,
            height: 250,
            borderRadius: '50%',
            background: `radial-gradient(circle, rgba(8,145,178,0.02) 0%, transparent 70%)`,
            pointerEvents: 'none',
          }}
        />

        <Container maxWidth="lg">
          <Grid container spacing={5} sx={{ mb: 6 }}>
            {/* Brand */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <LocalHospitalIcon
                    sx={{
                      color: COLORS.teal,
                      fontSize: 32,
                      filter: `drop-shadow(0 0 6px rgba(8,145,178,0.35))`,
                    }}
                  />
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ color: 'white', fontWeight: 700, lineHeight: 1.2 }}>
                    Sunshine Multi-Speciality Center
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: COLORS.tealLight,
                      fontWeight: 500,
                      letterSpacing: '0.1em',
                      fontSize: '0.6rem',
                    }}
                  >
                    KOLHAPUR, MAHARASHTRA
                  </Typography>
                </Box>
              </Stack>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.45)', lineHeight: 1.9, mb: 4, maxWidth: 340 }}>
                Dedicated to providing compassionate, accurate, and accessible healthcare to every
                family in Kolhapur — 24 hours a day, 7 days a week.
              </Typography>
              <Stack direction="row" spacing={1}>
                {SOCIALS.map((social) => (
                  <IconButton
                    key={social.label}
                    size="small"
                    aria-label={social.label}
                    sx={{
                      color: 'rgba(255,255,255,0.4)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: `${RADIUS.sm}px`,
                      width: 40,
                      height: 40,
                      transition: TRANSITION_MEDIUM,
                      '&:hover': {
                        color: social.color,
                        borderColor: social.color,
                        bgcolor: `${social.color}12`,
                        transform: 'translateY(-3px)',
                        boxShadow: `0 4px 16px ${social.color}25`,
                      },
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Stack>
            </Grid>

            {/* Quick links */}
            <Grid size={{ xs: 6, md: 2 }}>
              <Typography
                variant="subtitle2"
                sx={{
                  color: COLORS.tealLight,
                  fontWeight: 700,
                  mb: 3,
                  letterSpacing: '0.1em',
                  fontSize: '0.72rem',
                }}
              >
                QUICK LINKS
              </Typography>
              <Stack spacing={1}>
                {QUICK_LINKS.map(({ label, href }) => (
                  <Button
                    key={label}
                    onClick={() => scrollTo(href)}
                    sx={{
                      color: 'rgba(255,255,255,0.45)',
                      justifyContent: 'flex-start',
                      p: 0,
                      minWidth: 0,
                      fontWeight: 400,
                      fontSize: '0.875rem',
                      letterSpacing: '0.01em',
                      transition: TRANSITION_MEDIUM,
                      '&:hover': {
                        color: COLORS.tealLight,
                        bgcolor: 'transparent',
                        transform: 'translateX(4px)',
                      },
                    }}
                  >
                    {label}
                  </Button>
                ))}
              </Stack>
            </Grid>

            {/* Services */}
            <Grid size={{ xs: 6, md: 2 }}>
              <Typography
                variant="subtitle2"
                sx={{
                  color: COLORS.tealLight,
                  fontWeight: 700,
                  mb: 3,
                  letterSpacing: '0.1em',
                  fontSize: '0.72rem',
                }}
              >
                SERVICES
              </Typography>
              <Stack spacing={1}>
                {SERVICES_LINKS.map((s) => (
                  <Button
                    key={s.label}
                    onClick={() => scrollTo(s.href)}
                    sx={{
                      color: 'rgba(255,255,255,0.45)',
                      justifyContent: 'flex-start',
                      p: 0,
                      minWidth: 0,
                      fontWeight: 400,
                      fontSize: '0.875rem',
                      letterSpacing: '0.01em',
                      transition: TRANSITION_MEDIUM,
                      '&:hover': {
                        color: COLORS.tealLight,
                        bgcolor: 'transparent',
                        transform: 'translateX(4px)',
                      },
                    }}
                  >
                    {s.label}
                  </Button>
                ))}
              </Stack>
            </Grid>

            {/* Contact — wrapped in <address> for NAP semantic markup */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography
                variant="subtitle2"
                sx={{
                  color: COLORS.tealLight,
                  fontWeight: 700,
                  mb: 3,
                  letterSpacing: '0.1em',
                  fontSize: '0.72rem',
                }}
              >
                CONTACT US
              </Typography>
              <Box component="address" sx={{ fontStyle: 'normal' }}>
                <Stack spacing={3}>
                  {/* Hospital address — Rankala */}
                  <Stack direction="row" spacing={2} alignItems="flex-start">
                    <Box
                      sx={{
                        p: 0.75,
                        borderRadius: `${RADIUS.sm}px`,
                        bgcolor: 'rgba(8,145,178,0.08)',
                        display: 'flex',
                        mt: 0.25,
                      }}
                    >
                      <LocationOnIcon sx={{ color: COLORS.teal, fontSize: 18 }} />
                    </Box>
                    <Box>
                      <Typography variant="caption" sx={{ color: COLORS.tealLight, fontWeight: 700, display: 'block', mb: 0.5, fontSize: '0.65rem', letterSpacing: '0.08em' }}>HOSPITAL</Typography>
                      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.45)', lineHeight: 1.75 }}>
                        Opposite Dr. Yedekar Hospital, near Nagojirao Patankar Highschool,{' '}
                        Rankala, Kolhapur, Maharashtra — 416012
                      </Typography>
                    </Box>
                  </Stack>
                  {/* Clinic address — Laxmipuri (OPD only, NOT a hospital) */}
                  <Stack direction="row" spacing={2} alignItems="flex-start">
                    <Box
                      sx={{
                        p: 0.75,
                        borderRadius: `${RADIUS.sm}px`,
                        bgcolor: 'rgba(8,145,178,0.08)',
                        display: 'flex',
                        mt: 0.25,
                      }}
                    >
                      <LocationOnIcon sx={{ color: COLORS.teal, fontSize: 18 }} />
                    </Box>
                    <Box>
                      <Typography variant="caption" sx={{ color: COLORS.tealLight, fontWeight: 700, display: 'block', mb: 0.5, fontSize: '0.65rem', letterSpacing: '0.08em' }}>OPD CLINIC</Typography>
                      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.45)', lineHeight: 1.75 }}>
                        Dr. Onkar Kakare Clinic, Laxmipuri, Kolhapur, Maharashtra
                      </Typography>
                    </Box>
                  </Stack>
                  {/* Phone — same number for both locations */}
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box
                      sx={{
                        p: 0.75,
                        borderRadius: `${RADIUS.sm}px`,
                        bgcolor: 'rgba(8,145,178,0.08)',
                        display: 'flex',
                      }}
                    >
                      <PhoneIcon sx={{ color: COLORS.teal, fontSize: 18 }} />
                    </Box>
                    <Typography
                      variant="body2"
                      component="a"
                      href="tel:+917276009466"
                      sx={{
                        color: 'rgba(255,255,255,0.45)',
                        textDecoration: 'none',
                        transition: 'color 0.3s ease',
                        '&:hover': { color: COLORS.tealLight },
                      }}
                    >
                      +91 72760 09466 (24/7)
                    </Typography>
                  </Stack>
                  <Button
                    variant="outlined"
                    startIcon={<PhoneIcon />}
                    component="a"
                    href="tel:+917276009466"
                    sx={{
                      borderColor: 'rgba(8,145,178,0.25)',
                      color: COLORS.tealLight,
                      alignSelf: 'flex-start',
                      borderRadius: `${RADIUS.md}px`,
                      borderWidth: 2,
                      fontWeight: 600,
                      transition: TRANSITION_MEDIUM,
                      '&:hover': {
                        bgcolor: 'rgba(8,145,178,0.06)',
                        borderColor: COLORS.teal,
                        borderWidth: 2,
                        transform: 'translateY(-2px)',
                        boxShadow: SHADOW.glow,
                      },
                    }}
                  >
                    Call for Emergency
                  </Button>
                </Stack>
              </Box>
            </Grid>
          </Grid>

          <Divider
            sx={{
              mb: 3,
              borderColor: 'rgba(255,255,255,0.05)',
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                left: '50%',
                top: -1,
                transform: 'translateX(-50%)',
                width: 120,
                height: 2,
                background: `linear-gradient(90deg, transparent, rgba(8,145,178,0.25), transparent)`,
              },
            }}
          />

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            justifyContent="space-between"
            alignItems="center"
            spacing={1}
          >
            <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.75rem' }}>
              © {new Date().getFullYear()} Sunshine Multi-Speciality Center. All rights reserved.
            </Typography>
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography
                component={Link}
                to="/privacy-policy"
                variant="caption"
                sx={{
                  color: 'rgba(255,255,255,0.35)',
                  fontSize: '0.75rem',
                  textDecoration: 'none',
                  transition: TRANSITION_MEDIUM,
                  '&:hover': {
                    color: COLORS.tealLight,
                  },
                }}
              >
                Privacy Policy
              </Typography>
              <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.15)' }}>|</Typography>
              <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.75rem' }}>
                Dr. Onkar Kakare — MBBS, MD (Internal Medicine) · Diabetologist
              </Typography>
            </Stack>
          </Stack>
        </Container>

        {/* Back to top button */}
        <Fab
          size="small"
          onClick={scrollToTop}
          aria-label="Back to top"
          sx={{
            position: 'absolute',
            top: -20,
            right: { xs: 20, md: 40 },
            background: `linear-gradient(135deg, ${COLORS.teal} 0%, ${COLORS.tealDark} 100%)`,
            color: COLORS.white,
            boxShadow: `0 4px 20px rgba(8,145,178,0.3)`,
            transition: TRANSITION_MEDIUM,
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: SHADOW.glowStrong,
            },
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Box>
    </Box>
  );
}
