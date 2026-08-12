/* ===== HERO SECTION — PREMIUM (REBUILT) ===== */
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import PhoneIcon from '@mui/icons-material/Phone';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import StarIcon from '@mui/icons-material/Star';
import AccessibleIcon from '@mui/icons-material/Accessible';
import VerifiedIcon from '@mui/icons-material/Verified';
import { COLORS, RADIUS } from '../theme';
import { useParallax } from '../hooks/useParallax';

export default function HeroSection() {
  const parallaxY = useParallax(0.25);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      id="home"
      component="section"
      aria-labelledby="hero-heading"
      sx={{
        position: 'relative',
        minHeight: { xs: '100svh', md: '100vh' },
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background image with parallax */}
      <Box
        component="img"
        src="/hospital-hero.webp"
        alt="hospital-exterior-sunshine-multispeciality-center-rankala-kolhapur"
        loading="eager"
        fetchPriority="high"
        sx={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '120%',
          objectFit: 'cover',
          objectPosition: 'center',
          zIndex: 0,
          transform: `translateY(-${parallaxY}px)`,
          willChange: 'transform',
        }}
      />

      {/* Premium gradient overlay with mesh */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(ellipse at 20% 50%, rgba(8,145,178,0.10) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 20%, rgba(217,119,6,0.05) 0%, transparent 50%),
            linear-gradient(160deg, rgba(11,61,92,0.90) 0%, rgba(11,61,92,0.80) 40%, rgba(11,61,92,0.60) 100%)
          `,
          zIndex: 1,
        }}
      />

      {/* Animated floating orbs */}
      <Box
        sx={{
          position: 'absolute',
          top: '15%',
          right: '10%',
          width: { xs: 200, md: 320 },
          height: { xs: 200, md: 320 },
          borderRadius: '50%',
          background: `radial-gradient(circle, rgba(8,145,178,0.10) 0%, transparent 70%)`,
          animation: 'floatSlow 8s ease-in-out infinite',
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          left: '5%',
          width: { xs: 120, md: 200 },
          height: { xs: 120, md: 200 },
          borderRadius: '50%',
          background: `radial-gradient(circle, rgba(217,119,6,0.06) 0%, transparent 70%)`,
          animation: 'floatSlow 10s ease-in-out infinite 2s',
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '60%',
          right: '25%',
          width: 144,
          height: 144,
          borderRadius: '50%',
          border: '1px solid rgba(8,145,178,0.08)',
          animation: 'floatSlow 12s ease-in-out infinite 4s',
          zIndex: 1,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, py: { xs: 14, md: 8 } }}>
        <Box
          sx={{
            maxWidth: { xs: '100%', md: '60%' },
          }}
        >
          {/* Trust badges — staggered entrance */}
          <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 3, gap: 1 }}>
            {[
              { icon: <StarIcon sx={{ fontSize: 14, color: '#F59E0B' }} />, label: '4.8/5 Rating' },
              { icon: <VerifiedIcon sx={{ fontSize: 14, color: COLORS.tealLight }} />, label: '24/7 Multi-Speciality' },
              { icon: <AccessibleIcon sx={{ fontSize: 14, color: 'white' }} />, label: 'Wheelchair Accessible' },
            ].map((badge, i) => (
              <Chip
                key={badge.label}
                icon={badge.icon}
                label={badge.label}
                sx={{
                  bgcolor: 'rgba(255,255,255,0.08)',
                  color: 'white',
                  fontWeight: 600,
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  fontSize: '0.8rem',
                  borderRadius: `${RADIUS.sm}px`,
                  animation: `fadeSlideUp 0.6s ease ${0.3 + i * 0.12}s both`,
                  transition: 'all 0.3s ease',
                  '& .MuiChip-icon': {
                    color: 'inherit',
                  },
                  '&:hover': {
                    bgcolor: 'rgba(8,145,178,0.15)',
                    borderColor: 'rgba(8,145,178,0.3)',
                    transform: 'translateY(-2px)',
                  },
                }}
              />
            ))}
          </Stack>

          {/* Main heading with gradient text — SEO H1: primary keyword */}
          <Typography
            id="hero-heading"
            variant="h2"
            component="h1"
            sx={{
              color: 'white',
              fontWeight: 700,
              fontSize: { xs: '2.25rem', sm: '2.75rem', md: '3.5rem' },
              lineHeight: 1.1,
              mb: 3,
              animation: 'fadeSlideUp 0.8s ease 0.1s both',
              textShadow: '0 2px 16px rgba(0,0,0,0.25)',
            }}
          >
            24/7 Multi-Speciality{' '}
            <Box
              component="span"
              sx={{
                background: `linear-gradient(135deg, ${COLORS.teal} 0%, ${COLORS.tealLight} 50%, #ffffff 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: `drop-shadow(0 0 16px rgba(8,145,178,0.25))`,
              }}
            >
              Hospital in Kolhapur
            </Box>
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: 'rgba(255,255,255,0.85)',
              fontWeight: 400,
              mb: 5,
              lineHeight: 1.75,
              fontSize: { xs: '1rem', md: '1.125rem' },
              maxWidth: 540,
              animation: 'fadeSlideUp 0.8s ease 0.25s both',
            }}
          >
            Expert care led by{' '}
            <Box
              component="span"
              sx={{
                color: COLORS.tealLight,
                fontWeight: 600,
              }}
            >
              Dr. Onkar Kakare
            </Box>
            , Internal Medicine Specialist &amp; Diabetologist.
            Serving Kolhapur with compassion, accuracy, and round-the-clock dedication.
          </Typography>

          {/* CTA buttons */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            sx={{ animation: 'fadeSlideUp 0.8s ease 0.4s both' }}
          >
            <Button
              variant="contained"
              size="large"
              startIcon={<PhoneIcon />}
              component="a"
              href="tel:+917276009466"
              sx={{
                py: 2,
                px: 4,
                fontSize: '1rem',
                fontWeight: 700,
                borderRadius: `${RADIUS.md}px`,
                background: `linear-gradient(135deg, ${COLORS.red} 0%, ${COLORS.redDark} 100%)`,
                boxShadow: `0 4px 24px rgba(220,38,38,0.45)`,
                position: 'relative',
                overflow: 'hidden',
                animation: 'none',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  inset: 0,
                  borderRadius: 'inherit',
                  animation: 'ripple 2.5s ease-out infinite',
                  border: `2px solid ${COLORS.red}`,
                  pointerEvents: 'none',
                },
                '&:hover': {
                  boxShadow: `0 8px 40px rgba(220,38,38,0.6)`,
                  transform: 'translateY(-3px)',
                },
              }}
            >
              Emergency: Call Now
            </Button>

            <Button
              variant="outlined"
              size="large"
              startIcon={<CalendarMonthIcon />}
              onClick={() => scrollTo('#contact')}
              sx={{
                py: 2,
                px: 4,
                fontSize: '1rem',
                borderRadius: `${RADIUS.md}px`,
                borderColor: 'rgba(255,255,255,0.35)',
                borderWidth: 2,
                color: 'white',
                backdropFilter: 'blur(8px)',
                background: 'rgba(255,255,255,0.04)',
                '&:hover': {
                  borderColor: COLORS.teal,
                  bgcolor: 'rgba(8,145,178,0.1)',
                  borderWidth: 2,
                  transform: 'translateY(-2px)',
                  boxShadow: `0 4px 20px rgba(8,145,178,0.2)`,
                },
              }}
            >
              Book Appointment
            </Button>
          </Stack>
        </Box>
      </Container>

      {/* Bottom gradient fade */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 120,
          background: `linear-gradient(to top, ${COLORS.offWhite} 0%, transparent 100%)`,
          zIndex: 2,
        }}
      />

      {/* Scroll indicator */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 3,
          animation: 'fadeSlideUp 0.8s ease 0.8s both',
        }}
      >
        <Box
          sx={{
            width: 28,
            height: 48,
            border: `2px solid rgba(8,145,178,0.35)`,
            borderRadius: 14,
            display: 'flex',
            justifyContent: 'center',
            pt: 1,
            animation: 'float 2.5s ease-in-out infinite',
          }}
        >
          <Box
            sx={{
              width: 3,
              height: 10,
              bgcolor: COLORS.teal,
              borderRadius: 2,
              animation: 'scrollDot 1.8s infinite',
              boxShadow: `0 0 6px ${COLORS.teal}`,
              '@keyframes scrollDot': {
                '0%': { transform: 'translateY(0)', opacity: 1 },
                '100%': { transform: 'translateY(16px)', opacity: 0 },
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
