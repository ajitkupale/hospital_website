/* ===== PRIVACY POLICY PAGE ===== */
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SecurityIcon from '@mui/icons-material/Security';
import ShieldIcon from '@mui/icons-material/Shield';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import LockIcon from '@mui/icons-material/Lock';
import GavelIcon from '@mui/icons-material/Gavel';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import UpdateIcon from '@mui/icons-material/Update';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import StorageIcon from '@mui/icons-material/Storage';
import { COLORS, RADIUS, SHADOW, TRANSITION_MEDIUM } from '../theme';

/* ── Section data ──────────────────────────────────────────────────────── */
const POLICY_SECTIONS = [
  {
    icon: <HealthAndSafetyIcon />,
    title: 'Information We Collect',
    content: [
      'Personal identification details: Full name, date of birth, gender, address, phone number, and email address.',
      'Medical information: Health history, diagnoses, treatment records, prescriptions, lab results, imaging reports, and related clinical data.',
      'Insurance details: Policy numbers, provider name, and claim-related information when applicable.',
      'Appointment data: Booking dates, times, department preferences, and doctor preferences.',
      'Website usage data: Browser type, IP address, device information, pages visited, and cookies (for website improvement only).',
    ],
  },
  {
    icon: <StorageIcon />,
    title: 'How We Use Your Information',
    content: [
      'To provide medical consultations, diagnoses, treatments, and follow-up care.',
      'To schedule, manage, and send reminders for your appointments.',
      'To process billing, insurance claims, and financial transactions.',
      'To comply with legal obligations under Indian healthcare regulations and the Information Technology Act, 2000.',
      'To improve our services, website experience, and patient communication.',
      'To send health awareness updates and appointment reminders (with your consent).',
    ],
  },
  {
    icon: <ShieldIcon />,
    title: 'How We Protect Your Data',
    content: [
      'All patient data is stored on encrypted, secure servers with strict access controls.',
      'We use SSL/TLS encryption for data transmitted through our website.',
      'Access to patient records is restricted to authorized medical and administrative staff on a need-to-know basis.',
      'We conduct regular security audits and vulnerability assessments.',
      'Physical records are stored in secured, access-controlled areas within our facility.',
    ],
  },
  {
    icon: <VerifiedUserIcon />,
    title: 'Your Rights',
    content: [
      'Right to Access: You may request a copy of your personal and medical data at any time.',
      'Right to Correction: You may request corrections to any inaccurate or incomplete information.',
      'Right to Withdraw Consent: You may withdraw consent for non-essential communications at any time.',
      'Right to Data Portability: You can request your medical records be transferred to another healthcare provider.',
      'Right to Erasure: Subject to legal retention requirements, you may request deletion of non-essential data.',
    ],
  },
  {
    icon: <LockIcon />,
    title: 'Data Sharing & Disclosure',
    content: [
      'We do NOT sell, trade, or rent your personal information to any third party.',
      'Data may be shared with referring doctors, specialists, or diagnostic labs solely for your continued care.',
      'We may disclose data when legally required by government authorities, court orders, or regulatory bodies.',
      'Insurance companies may receive necessary medical data for claim processing, with your prior consent.',
    ],
  },
  {
    icon: <GavelIcon />,
    title: 'Legal Compliance',
    content: [
      'This privacy policy complies with the Information Technology Act, 2000 (India) and its associated rules.',
      'We adhere to the Indian Medical Council (Professional Conduct, Etiquette and Ethics) Regulations, 2002.',
      'Our practices align with the Digital Personal Data Protection Act (DPDPA), 2023 guidelines.',
      'Patient consent is obtained for all data collection and processing activities as required by law.',
    ],
  },
  {
    icon: <ChildCareIcon />,
    title: "Children's Privacy",
    content: [
      'For patients under 18 years of age, consent is obtained from a parent or legal guardian.',
      'We collect only the minimum necessary information for the medical treatment of minors.',
      'Parents or guardians may access, modify, or request deletion of their child\'s data at any time.',
    ],
  },
  {
    icon: <UpdateIcon />,
    title: 'Updates to This Policy',
    content: [
      'We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements.',
      'Any significant changes will be communicated through our website or directly to registered patients.',
      'Continued use of our services after policy updates constitutes acceptance of the revised terms.',
    ],
  },
  {
    icon: <ContactMailIcon />,
    title: 'Contact Us',
    content: [
      'If you have questions or concerns about this Privacy Policy, please contact us:',
      'Address: Opposite Dr. Yedekar Hospital, near Nagojirao Patankar Highschool, Rankala, Kolhapur, Maharashtra',
      'You may also visit us in person during hospital hours for any privacy-related queries.',
    ],
  },
];

/* ── Component ─────────────────────────────────────────────────────────── */
export default function PrivacyPolicy() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: COLORS.offWhite }}>
      {/* ── Hero Banner ── */}
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          background: `linear-gradient(135deg, ${COLORS.navy} 0%, ${COLORS.navyDark} 50%, ${COLORS.ink} 100%)`,
          pt: { xs: 12, md: 16 },
          pb: { xs: 8, md: 12 },
        }}
      >
        {/* Decorative orbs */}
        <Box
          sx={{
            position: 'absolute',
            top: '-20%',
            right: '-10%',
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: `radial-gradient(circle, rgba(8,145,178,0.08) 0%, transparent 70%)`,
            pointerEvents: 'none',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '-30%',
            left: '-5%',
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: `radial-gradient(circle, rgba(8,145,178,0.06) 0%, transparent 70%)`,
            pointerEvents: 'none',
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate('/')}
            sx={{
              color: 'rgba(255,255,255,0.6)',
              mb: 4,
              fontWeight: 500,
              transition: TRANSITION_MEDIUM,
              '&:hover': {
                color: COLORS.tealLight,
                bgcolor: 'rgba(255,255,255,0.05)',
              },
            }}
          >
            Back to Home
          </Button>

          <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
            <Box
              sx={{
                p: 1.5,
                borderRadius: `${RADIUS.md}px`,
                background: `linear-gradient(135deg, rgba(8,145,178,0.15), rgba(8,145,178,0.05))`,
                display: 'flex',
                border: '1px solid rgba(8,145,178,0.2)',
              }}
            >
              <SecurityIcon sx={{ color: COLORS.tealLight, fontSize: 32 }} />
            </Box>
            <Typography
              variant="overline"
              sx={{
                color: COLORS.tealLight,
                fontWeight: 700,
                letterSpacing: '0.15em',
                fontSize: '0.75rem',
              }}
            >
              YOUR DATA IS SAFE WITH US
            </Typography>
          </Stack>

          <Typography
            variant="h2"
            sx={{
              color: 'white',
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: '2rem', md: '3rem' },
              maxWidth: 600,
            }}
          >
            Privacy Policy
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255,255,255,0.5)',
              maxWidth: 550,
              lineHeight: 1.8,
              fontSize: '1.05rem',
            }}
          >
            At Sunshine Multi-Speciality Center, we are committed to protecting the privacy
            and confidentiality of your personal and medical information.
          </Typography>
          <Typography
            variant="caption"
            sx={{
              display: 'block',
              mt: 3,
              color: 'rgba(255,255,255,0.3)',
              fontSize: '0.8rem',
            }}
          >
            Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
          </Typography>
        </Container>
      </Box>

      {/* ── Content ── */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Stack spacing={4}>
          {POLICY_SECTIONS.map((section, idx) => (
            <Paper
              key={section.title}
              id={`privacy-section-${idx}`}
              elevation={0}
              sx={{
                p: { xs: 3, md: 5 },
                borderRadius: `${RADIUS.xl}px`,
                border: '1px solid rgba(226,232,240,0.6)',
                boxShadow: SHADOW.sm,
                transition: TRANSITION_MEDIUM,
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                  borderColor: 'rgba(8,145,178,0.2)',
                  boxShadow: SHADOW.md,
                  transform: 'translateY(-2px)',
                },
              }}
            >
              {/* Accent bar */}
              <Box
                sx={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: 4,
                  background: `linear-gradient(180deg, ${COLORS.teal}, ${COLORS.navy})`,
                  borderRadius: '4px 0 0 4px',
                  opacity: 0,
                  transition: TRANSITION_MEDIUM,
                  '.MuiPaper-root:hover &': { opacity: 1 },
                }}
              />

              <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
                <Box
                  sx={{
                    p: 1.25,
                    borderRadius: `${RADIUS.md}px`,
                    background: `linear-gradient(135deg, rgba(8,145,178,0.1), rgba(11,61,92,0.06))`,
                    display: 'flex',
                    color: COLORS.teal,
                  }}
                >
                  {section.icon}
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    color: COLORS.navy,
                    fontWeight: 700,
                    fontSize: { xs: '1.1rem', md: '1.3rem' },
                  }}
                >
                  {idx + 1}. {section.title}
                </Typography>
              </Stack>

              <Stack spacing={2} sx={{ pl: { xs: 0, md: 6.5 } }}>
                {section.content.map((item, i) => (
                  <Stack key={i} direction="row" spacing={1.5} alignItems="flex-start">
                    <Box
                      sx={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        bgcolor: COLORS.teal,
                        mt: 1.1,
                        flexShrink: 0,
                      }}
                    />
                    <Typography
                      variant="body1"
                      sx={{
                        color: COLORS.grayDark,
                        lineHeight: 1.85,
                        fontSize: '0.95rem',
                      }}
                    >
                      {item}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Paper>
          ))}
        </Stack>

        {/* ── Bottom CTA ── */}
        <Divider sx={{ my: 6, borderColor: 'rgba(226,232,240,0.5)' }} />
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="body2"
            sx={{ color: COLORS.gray, mb: 3, fontSize: '0.9rem' }}
          >
            © {new Date().getFullYear()} Sunshine Multi-Speciality Center, Kolhapur.
            All rights reserved.
          </Typography>
          <Button
            variant="outlined"
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate('/')}
            sx={{
              borderColor: 'rgba(8,145,178,0.25)',
              color: COLORS.teal,
              borderRadius: `${RADIUS.md}px`,
              borderWidth: 2,
              fontWeight: 600,
              px: 4,
              transition: TRANSITION_MEDIUM,
              '&:hover': {
                bgcolor: 'rgba(8,145,178,0.04)',
                borderColor: COLORS.teal,
                borderWidth: 2,
                transform: 'translateY(-2px)',
                boxShadow: SHADOW.glow,
              },
            }}
          >
            Back to Home
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
