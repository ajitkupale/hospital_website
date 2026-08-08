/* ===== QUICK STATS BAR — GLASSMORPHIC FLOATING (REBUILT) ===== */
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleIcon from '@mui/icons-material/People';
import { COLORS, RADIUS, SHADOW } from '../theme';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useCountUp } from '../hooks/useCountUp';

const STATS = [
  { icon: <AccessTimeIcon />, end: 24, suffix: '/7', label: 'Emergency & ICU', prefix: '' },
  { icon: <StarIcon sx={{ color: COLORS.amber }} />, end: 4.8, suffix: '/5', label: 'Patient Rating', isDecimal: true },
  { icon: <PeopleIcon />, end: 10000, suffix: '+', label: 'Patients Served', prefix: '' },
  { icon: <LocalHospitalIcon />, end: 3, suffix: '', label: 'Clinic Locations', prefix: '' },
];

export default function QuickStatsBar() {
  const { ref, visible } = useScrollReveal(0.3);

  return (
    <Box
      ref={ref as React.Ref<HTMLDivElement>}
      sx={{
        position: 'relative',
        mt: -6,
        mb: 4,
        zIndex: 10,
        px: { xs: 2, md: 0 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            background: 'rgba(11,61,92,0.88)',
            backdropFilter: 'blur(24px) saturate(1.4)',
            WebkitBackdropFilter: 'blur(24px) saturate(1.4)',
            borderRadius: `${RADIUS.xl}px`,
            border: '1px solid rgba(8,145,178,0.12)',
            boxShadow: SHADOW.xl,
            py: { xs: 4, md: 4 },
            px: { xs: 3, md: 5 },
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          <Grid container spacing={3}>
            {STATS.map((s, i) => (
              <StatItem
                key={s.label}
                icon={s.icon}
                end={s.end}
                suffix={s.suffix}
                label={s.label}
                visible={visible}
                delay={i * 0.1}
                isDecimal={s.isDecimal}
              />
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

function StatItem({
  icon,
  end,
  suffix,
  label,
  visible,
  delay,
  isDecimal,
}: {
  icon: React.ReactNode;
  end: number;
  suffix: string;
  label: string;
  visible: boolean;
  delay: number;
  isDecimal?: boolean;
}) {
  const displayValue = useCountUp(isDecimal ? Math.round(end * 10) : end, visible, 2000);
  const formatted = isDecimal ? `${(parseInt(displayValue.replace(/,/g, '')) / 10).toFixed(1)}` : displayValue;

  return (
    <Grid size={{ xs: 6, md: 3 }}>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent={{ xs: 'center', md: 'center' }}
        sx={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(16px)',
          transition: `all 0.6s ease ${delay}s`,
        }}
      >
        <Box
          sx={{
            color: COLORS.teal,
            '& svg': { fontSize: 32 },
            transition: 'all 0.3s ease',
            filter: `drop-shadow(0 0 6px rgba(8,145,178,0.25))`,
            '&:hover': {
              transform: 'scale(1.15) rotate(8deg)',
              filter: `drop-shadow(0 0 12px rgba(8,145,178,0.4))`,
            },
          }}
        >
          {icon}
        </Box>
        <Box>
          <Typography
            variant="h5"
            sx={{
              color: 'white',
              fontWeight: 700,
              lineHeight: 1.1,
              fontSize: { xs: '1.25rem', md: '1.5rem' },
            }}
          >
            {formatted}{suffix}
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: 'rgba(255,255,255,0.55)',
              fontSize: '0.72rem',
              letterSpacing: '0.03em',
            }}
          >
            {label}
          </Typography>
        </Box>
      </Stack>
    </Grid>
  );
}
