/* ===== ABOUT US SECTION — PREMIUM (REBUILT) ===== */
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VerifiedIcon from '@mui/icons-material/Verified';
import ElderlyIcon from '@mui/icons-material/Elderly';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useCountUp } from '../hooks/useCountUp';
import { COLORS, RADIUS, SHADOW, TRANSITION_MEDIUM } from '../theme';

const SPECIALTIES = [
  'Internal Medicine',
  'Diabetology',
  'General Practice',
  'Thyroid Care',
  'Hypertension',
  'Infectious Disease',
];

const VALUES = [
  { icon: <FavoriteIcon />, title: 'Patient-First Care', desc: 'Every decision is guided by what is best for the patient, not convenience.' },
  { icon: <VerifiedIcon />, title: 'Accurate Diagnoses', desc: 'Dr. Kakare is widely recognized for thorough, precise clinical assessments.' },
  { icon: <ElderlyIcon />, title: 'Gentle with Elderly', desc: 'Exceptionally patient and respectful with senior patients and their families.' },
  { icon: <MedicalServicesIcon />, title: '24/7 Availability', desc: 'Our hospital never closes — emergencies are handled round the clock.' },
];

export default function AboutSection() {
  const { ref: textRef, visible: textVisible } = useScrollReveal();
  const { ref: imgRef, visible: imgVisible } = useScrollReveal();
  const { ref: statsRef, visible: statsVisible } = useScrollReveal(0.3);

  const yearsCount = useCountUp(15, statsVisible, 1800, '+');
  const patientsCount = useCountUp(10, statsVisible, 1800, 'K+');
  const ratingDisplay = useCountUp(48, statsVisible, 1800);

  return (
    <Box
      id="about"
      component="section"
      aria-label="About Sunshine Multi-Speciality Center"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.default',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative background shapes */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          right: '-5%',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: `radial-gradient(circle, rgba(8,145,178,0.03) 0%, transparent 70%)`,
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '5%',
          left: '-8%',
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: `radial-gradient(circle, rgba(11,61,92,0.03) 0%, transparent 70%)`,
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg">
        {/* Section heading */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Chip
            label="About Us"
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
          <Typography variant="h3" sx={{ fontWeight: 700, color: 'text.primary', mb: 2 }}>
            Caring for Kolhapur{' '}
            <Box component="span" className="gradient-text-dark">Since 2008</Box>
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto', lineHeight: 1.85 }}>
            Sunshine Multi-Speciality Center was founded with a single mission: to bring world-class,
            compassionate healthcare to every family in Kolhapur — regardless of background.
          </Typography>
        </Box>

        {/* Mission grid */}
        <Grid container spacing={6} alignItems="center" sx={{ mb: 12 }}>
          <Grid
            size={{ xs: 12, md: 6 }}
            ref={textRef as React.Ref<HTMLDivElement>}
            sx={{
              opacity: textVisible ? 1 : 0,
              transform: textVisible ? 'none' : 'translateX(-32px)',
              transition: 'opacity 0.8s ease, transform 0.8s ease',
            }}
          >
            <Typography variant="h4" gutterBottom fontWeight={700}>
              Our{' '}
              <Box component="span" className="gradient-text-dark">Mission</Box>
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.9 }}>
              We believe that access to quality healthcare should never be a privilege. Since opening
              our doors in Rankala, Kolhapur, we have served tens of thousands of patients with a
              focus on accurate diagnoses, transparent communication, and genuine compassion.
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.9 }}>
              Our hospital is built on the values of hygiene, organization, and trust. Patients return
              to us not just because of our medical expertise, but because they feel heard,
              respected, and cared for as human beings — not case numbers.
            </Typography>

            {/* Animated stats */}
            <Stack
              ref={statsRef as React.Ref<HTMLDivElement>}
              direction="row"
              spacing={4}
              sx={{ mb: 2 }}
            >
              {[
                { val: yearsCount, label: 'Years of Service' },
                { val: patientsCount, label: 'Patients Treated' },
                { val: `${(parseInt(ratingDisplay.replace(/,/g, '')) / 10).toFixed(1)}★`, label: 'Patient Rating' },
              ].map(({ val, label }, i) => (
                <Box
                  key={label}
                  sx={{
                    textAlign: 'center',
                    opacity: statsVisible ? 1 : 0,
                    transform: statsVisible ? 'none' : 'translateY(16px)',
                    transition: `all 0.6s ease ${i * 0.15}s`,
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      background: `linear-gradient(135deg, ${COLORS.navy} 0%, ${COLORS.teal} 100%)`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {val}
                  </Typography>
                  <Typography variant="caption" color="text.secondary" fontWeight={500}>
                    {label}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Grid>

          <Grid
            size={{ xs: 12, md: 6 }}
            ref={imgRef as React.Ref<HTMLDivElement>}
            sx={{
              opacity: imgVisible ? 1 : 0,
              transform: imgVisible ? 'none' : 'translateX(32px)',
              transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s',
            }}
          >
            <Box sx={{ position: 'relative' }}>
              {/* Decorative frame */}
              <Box
                sx={{
                  position: 'absolute',
                  top: -16,
                  right: -16,
                  bottom: 16,
                  left: 16,
                  borderRadius: `${RADIUS.xl}px`,
                  border: `2px solid rgba(8,145,178,0.2)`,
                  zIndex: 0,
                }}
              />
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: `${RADIUS.xl}px`,
                  overflow: 'hidden',
                  boxShadow: SHADOW.xl,
                  zIndex: 1,
                }}
              >
                <Box
                  component="img"
                  src="/hospital-hero.webp"
                  alt="sunshine-multispeciality-center-hospital-building-rankala-kolhapur"
                  loading="lazy"
                  sx={{ width: '100%', display: 'block', aspectRatio: '4/3', objectFit: 'cover' }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: `linear-gradient(transparent, rgba(11,61,92,0.85))`,
                    p: 3,
                  }}
                >
                  <Stack direction="row" spacing={1} alignItems="center">
                    <LocalHospitalIcon sx={{ color: COLORS.teal }} />
                    <Typography variant="body2" sx={{ color: 'white', fontWeight: 600 }}>
                      Main Branch — Rankala, Kolhapur
                    </Typography>
                  </Stack>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ mb: 12, borderColor: 'rgba(8,145,178,0.1)' }} />

        {/* Doctor profile — anchor targeted by sitemap and internal links */}
        <Box sx={{ mb: 10 }} id="dr-onkar-kakare">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Chip
              label="Our Doctor"
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
            <Typography variant="h3" fontWeight={700}>
              Meet{' '}
              <Box component="span" className="gradient-text-dark">Dr. Onkar Kakare</Box>
            </Typography>
          </Box>

          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  position: 'relative',
                  mx: 'auto',
                  maxWidth: 360,
                }}
              >
                {/* Gradient border frame */}
                <Box
                  sx={{
                    position: 'absolute',
                    inset: -3,
                    borderRadius: `${RADIUS.xl}px`,
                    background: `linear-gradient(135deg, ${COLORS.teal}, ${COLORS.navy}, ${COLORS.teal})`,
                    backgroundSize: '200% 200%',
                    animation: 'gradientShift 4s ease infinite',
                    zIndex: 0,
                  }}
                />
                <Box
                  sx={{
                    position: 'relative',
                    borderRadius: `${RADIUS.lg}px`,
                    overflow: 'hidden',
                    zIndex: 1,
                  }}
                >
                  <Box
                    component="img"
                    src="/doctor-kakare.webp"
                    alt="dr-onkar-kakare-diabetologist-internal-medicine-specialist-kolhapur"
                    loading="lazy"
                    sx={{ width: '100%', display: 'block', aspectRatio: '3/4', objectFit: 'cover' }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      p: 3,
                      background: 'linear-gradient(transparent, rgba(11,61,92,0.92))',
                    }}
                  >
                    <Typography variant="h6" sx={{ color: 'white', fontWeight: 700 }}>Dr. Onkar Kakare</Typography>
                    <Typography variant="body2" sx={{ color: COLORS.tealLight, fontWeight: 500 }}>MBBS, MD (Internal Medicine)</Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 8 }}>
              <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 3, gap: 1 }}>
                {SPECIALTIES.map((s) => (
                  <Chip
                    key={s}
                    label={s}
                    size="small"
                    sx={{
                      fontWeight: 600,
                      border: `1px solid rgba(8,145,178,0.25)`,
                      bgcolor: COLORS.tealSubtle,
                      color: COLORS.navy,
                      borderRadius: `${RADIUS.sm}px`,
                      transition: TRANSITION_MEDIUM,
                      '&:hover': {
                        bgcolor: 'rgba(8,145,178,0.12)',
                        borderColor: COLORS.teal,
                        transform: 'translateY(-2px)',
                        boxShadow: `0 4px 12px rgba(8,145,178,0.12)`,
                      },
                    }}
                  />
                ))}
              </Stack>

              <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.9 }}>
                Dr. Onkar Kakare is a highly respected Internal Medicine Specialist, General Practitioner,
                and Diabetologist with over 15 years of clinical experience. Trained at some of
                Maharashtra's leading medical institutions, he brings a rare combination of diagnostic
                precision and genuine warmth to every patient interaction.
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.9 }}>
                He is particularly known for his patient and respectful approach with elderly
                patients — taking time to listen, explain clearly, and ensure they feel completely at
                ease. His reputation for humble, polite behaviour has made him one of the most trusted
                physicians in Kolhapur.
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.9 }}>
                <Box component="span" fontWeight={700} color="text.primary">Consultation Locations:</Box>{' '}
                Main OPD at Sunshine Multi-Speciality Center, Rankala (opposite Dr. Yedekar Hospital, near
                Nagojirao Patankar Highschool); also available at Laxmipuri, Kolhapur, and Karad.
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {/* Values */}
        <Grid container spacing={3}>
          {VALUES.map((v, i) => (
            <Grid key={v.title} size={{ xs: 12, sm: 6, md: 3 }}>
              <Card
                sx={{
                  height: '100%',
                  textAlign: 'center',
                  p: 1,
                  position: 'relative',
                  overflow: 'visible',
                  border: '1px solid rgba(226,232,240,0.6)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  animation: `fadeSlideUp 0.6s ease ${0.1 + i * 0.1}s both`,
                  '&:hover': {
                    borderColor: 'rgba(8,145,178,0.25)',
                    transform: 'translateY(-6px)',
                    boxShadow: SHADOW.lg,
                    '& .icon-box': {
                      transform: 'scale(1.1) rotate(5deg)',
                      boxShadow: `0 8px 24px rgba(8,145,178,0.2)`,
                    },
                  },
                }}
              >
                <CardContent>
                  <Box
                    className="icon-box"
                    sx={{
                      display: 'inline-flex',
                      p: 2,
                      borderRadius: `${RADIUS.md}px`,
                      background: `linear-gradient(135deg, rgba(8,145,178,0.08) 0%, rgba(11,61,92,0.04) 100%)`,
                      color: COLORS.navy,
                      mb: 2,
                      transition: 'all 0.4s ease',
                      '& svg': { fontSize: 32 },
                    }}
                  >
                    {v.icon}
                  </Box>
                  <Typography variant="h6" fontWeight={700} gutterBottom sx={{ fontSize: '1rem' }}>
                    {v.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" lineHeight={1.75}>
                    {v.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
