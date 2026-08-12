/* ===== SERVICES & SPECIALTIES SECTION — PREMIUM (REBUILT) ===== */
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import BedIcon from '@mui/icons-material/Bed';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import ScienceIcon from '@mui/icons-material/Science';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import PsychologyIcon from '@mui/icons-material/Psychology';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { COLORS, RADIUS, SHADOW } from '../theme';

const HOSPITAL_SERVICES = [
  {
    id: 'icu',
    icon: <MonitorHeartIcon sx={{ fontSize: 32 }} />,
    title: 'ICU (Intensive Care Unit)',
    desc: 'State-of-the-art ICU with continuous monitoring, ventilator support, and round-the-clock specialist coverage for critically ill patients.',
    badge: '24/7',
    gradient: `linear-gradient(135deg, rgba(220,38,38,0.06) 0%, rgba(220,38,38,0.02) 100%)`,
  },
  {
    id: 'emergency-care',
    icon: <LocalHospitalIcon sx={{ fontSize: 32 }} />,
    title: 'Emergency Care',
    desc: 'Rapid-response emergency team ready at all times. Trauma stabilization, resuscitation, and urgent care — always available.',
    badge: '24/7',
    gradient: `linear-gradient(135deg, rgba(8,145,178,0.06) 0%, rgba(8,145,178,0.02) 100%)`,
  },
  {
    id: 'inpatient-facilities',
    icon: <BedIcon sx={{ fontSize: 32 }} />,
    title: 'Inpatient Facilities',
    desc: 'Clean, well-organized wards with attentive nursing care, hygienic meals, and comfortable rooms for a smooth recovery.',
    badge: 'Inpatient',
    gradient: `linear-gradient(135deg, rgba(22,163,74,0.06) 0%, rgba(22,163,74,0.02) 100%)`,
  },
  {
    id: 'diagnostics-lab',
    icon: <ScienceIcon sx={{ fontSize: 32 }} />,
    title: 'Diagnostics & Lab',
    desc: 'In-house laboratory and diagnostic services for quick, accurate test results that support same-day treatment decisions.',
    badge: 'On-site',
    gradient: `linear-gradient(135deg, rgba(217,119,6,0.06) 0%, rgba(217,119,6,0.02) 100%)`,
  },
];

const OPD_SERVICES = [
  {
    id: 'diabetes-management',
    icon: <BloodtypeIcon sx={{ fontSize: 32 }} />,
    title: 'Diabetes Management',
    desc: 'Comprehensive diabetes care including HbA1c monitoring, medication review, diet counseling, and complication screening.',
  },
  {
    id: 'thyroid-care',
    icon: <ScienceIcon sx={{ fontSize: 32 }} />,
    title: 'Thyroid Care',
    desc: 'Diagnosis and long-term management of hypothyroidism, hyperthyroidism, and thyroid nodules with regular monitoring.',
  },
  {
    id: 'internal-medicine',
    icon: <MedicalServicesIcon sx={{ fontSize: 32 }} />,
    title: 'Internal Medicine',
    desc: 'Broad-spectrum care for adult diseases including infections, respiratory issues, cardiac conditions, and systemic illnesses.',
  },
  {
    id: 'pain-management',
    icon: <PsychologyIcon sx={{ fontSize: 32 }} />,
    title: 'Pain Management',
    desc: 'Personalized pain evaluation and management plans for chronic and acute conditions, improving quality of life.',
  },
  {
    id: 'general-health-checkups',
    icon: <FitnessCenterIcon sx={{ fontSize: 32 }} />,
    title: 'General Health Check-ups',
    desc: 'Routine preventive health assessments with comprehensive blood panels and personalized wellness recommendations.',
  },
  {
    id: 'followup-opd',
    icon: <AccessTimeIcon sx={{ fontSize: 32 }} />,
    title: 'Follow-up OPD',
    desc: 'Structured follow-up consultations to track recovery progress, adjust medications, and answer patient questions.',
  },
];

function ServiceCard({
  id,
  icon,
  title,
  desc,
  badge,
  gradient,
  index,
  visible,
}: {
  id?: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
  badge?: string;
  gradient?: string;
  index: number;
  visible: boolean;
}) {
  return (
    <Card
      id={id}
      sx={{
        height: '100%',
        position: 'relative',
        border: '1px solid rgba(226,232,240,0.6)',
        overflow: 'hidden',
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(24px)',
        transition: `all 0.6s cubic-bezier(0.4,0,0.2,1) ${index * 0.08}s`,
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background: gradient || 'transparent',
          transition: 'opacity 0.4s ease',
          opacity: 0.6,
        },
        '&:hover': {
          borderColor: 'rgba(8,145,178,0.25)',
          boxShadow: SHADOW.lg,
          '&::before': { opacity: 1 },
          '& .service-icon': {
            transform: 'scale(1.12)',
            color: COLORS.teal,
          },
        },
      }}
    >
      <CardContent sx={{ p: 4, position: 'relative' }}>
        <Stack direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ mb: 3 }}>
          <Box
            className="service-icon"
            sx={{
              color: COLORS.navy,
              transition: 'all 0.4s ease',
              p: 1.5,
              borderRadius: `${RADIUS.md}px`,
              bgcolor: COLORS.tealSubtle,
            }}
          >
            {icon}
          </Box>
          {badge && (
            <Chip
              label={badge}
              size="small"
              sx={{
                fontWeight: 700,
                fontSize: '0.68rem',
                background: `linear-gradient(135deg, ${COLORS.navy} 0%, ${COLORS.navyLight} 100%)`,
                color: 'white',
                letterSpacing: '0.03em',
                borderRadius: `${RADIUS.sm}px`,
              }}
            />
          )}
        </Stack>
        <Typography variant="h6" fontWeight={700} gutterBottom sx={{ fontSize: '1.05rem' }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" lineHeight={1.8}>
          {desc}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default function ServicesSection() {
  const { ref, visible } = useScrollReveal(0.05);
  const { ref: opdRef, visible: opdVisible } = useScrollReveal(0.05);

  return (
    <Box
      id="services"
      component="section"
      aria-label="Medical Services at Sunshine Multi-Speciality Center Kolhapur"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative background */}
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
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          right: '-10%',
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: `radial-gradient(circle, rgba(8,145,178,0.03) 0%, transparent 70%)`,
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Chip
            label="What We Offer"
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
            Services &amp;{' '}
            <Box component="span" className="gradient-text-dark">Specialties</Box>
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 580, mx: 'auto', lineHeight: 1.85 }}>
            From emergency care to chronic disease management — our team is equipped and ready to
            deliver expert treatment across a wide range of medical needs.
          </Typography>
        </Box>

        {/* Hospital services */}
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 4 }}>
          <Box
            sx={{
              width: 4,
              height: 28,
              borderRadius: 2,
              background: `linear-gradient(180deg, ${COLORS.teal}, ${COLORS.navy})`,
            }}
          />
          <Typography variant="h5" fontWeight={700} color="text.primary">
            Hospital Services
          </Typography>
        </Stack>

        <Grid
          container
          spacing={3}
          ref={ref as React.Ref<HTMLDivElement>}
          sx={{ mb: 8 }}
        >
          {HOSPITAL_SERVICES.map((s, i) => (
            <Grid key={s.title} size={{ xs: 12, sm: 6, md: 3 }}>
              <ServiceCard {...s} index={i} visible={visible} />
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ mb: 8, borderColor: 'rgba(8,145,178,0.1)' }} />

        {/* OPD services */}
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 4 }}>
          <Box
            sx={{
              width: 4,
              height: 28,
              borderRadius: 2,
              background: `linear-gradient(180deg, ${COLORS.green}, ${COLORS.greenDark})`,
            }}
          />
          <Typography variant="h5" fontWeight={700} color="text.primary">
            OPD / Clinic Services
          </Typography>
        </Stack>

        <Grid container spacing={3} ref={opdRef as React.Ref<HTMLDivElement>}>
          {OPD_SERVICES.map((s, i) => (
            <Grid key={s.title} size={{ xs: 12, sm: 6, md: 4 }}>
              <ServiceCard {...s} index={i} visible={opdVisible} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
