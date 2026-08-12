/* ===== PATIENT RESOURCES SECTION — PREMIUM (REBUILT) ===== */
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArticleIcon from '@mui/icons-material/Article';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import WheelchairPickupIcon from '@mui/icons-material/WheelchairPickup';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { COLORS, RADIUS, SHADOW, TRANSITION_MEDIUM } from '../theme';

const BLOG_POSTS = [
  {
    title: 'Understanding Type 2 Diabetes: Signs, Risks & Prevention',
    date: 'June 12, 2025',
    category: 'Diabetes',
    href: '#diabetes-management',
    excerpt: 'Type 2 diabetes often goes undiagnosed for years. Dr. Kakare explains the early warning signs every adult should know and the lifestyle changes that can delay or prevent progression.',
    accentColor: COLORS.red,
  },
  {
    title: 'Thyroid Problems: Why They Are More Common Than You Think',
    date: 'May 28, 2025',
    category: 'Thyroid',
    href: '#thyroid-care',
    excerpt: 'Fatigue, weight changes, and mood swings could all be thyroid-related. Learn how a simple blood test can reveal what\'s really going on.',
    accentColor: COLORS.teal,
  },
  {
    title: 'Managing Hypertension Without Fear: A Practical Guide',
    date: 'April 15, 2025',
    category: 'Internal Medicine',
    href: '#internal-medicine',
    excerpt: 'High blood pressure is called the "silent killer" for a reason — but with the right approach, it is very manageable. Our guide covers medication, diet, and monitoring.',
    accentColor: COLORS.green,
  },
  {
    title: 'When to Go to the ER vs. Schedule a Doctor\'s Appointment',
    date: 'March 3, 2025',
    category: 'Emergency',
    href: '#emergency-care',
    excerpt: 'Not every symptom needs an emergency room visit, but some do. Dr. Kakare outlines the key differences so you make the right call — fast.',
    accentColor: COLORS.amber,
  },
];

const VISITOR_TIPS = [
  'Visiting hours: 8:00 AM – 8:00 PM (ICU visits by prior arrangement)',
  'Max 2 visitors per patient at a time',
  'Please maintain silence in patient wards',
  'Sanitize hands on entry and exit',
  'Wheelchair and lift access available for all floors',
  'Parking available in front of main building',
];

const INSURANCE = [
  'Medi-Assist', 'Star Health Insurance', 'HDFC Ergo', 'New India Assurance',
  'Oriental Insurance', 'National Insurance', 'ICICI Lombard', 'Bajaj Allianz',
];

const FAQ_ITEMS = [
  {
    q: 'Is Sunshine Multi-Speciality Center open 24/7?',
    a: 'Yes, Sunshine Multi-Speciality Center at Rankala, Kolhapur is open 24 hours a day, 7 days a week, including emergency and ICU services.',
  },
  {
    q: 'What insurance providers does Sunshine accept?',
    a: 'We accept cashless treatment from Medi-Assist, Star Health, HDFC Ergo, New India Assurance, Oriental Insurance, National Insurance, ICICI Lombard, Bajaj Allianz, and more.',
  },
  {
    q: 'What are the visiting hours?',
    a: 'General visiting hours are 8:00 AM to 8:00 PM. ICU visits are by prior arrangement only. Maximum 2 visitors per patient at a time.',
  },
  {
    q: 'How can I book an appointment?',
    a: 'Call or WhatsApp at 7276009466, or fill the appointment form on this website. For emergencies, call directly — we are available 24/7.',
  },
  {
    q: 'Where is the hospital located?',
    a: 'Sunshine Multi-Speciality Center (hospital) is at Rankala, Kolhapur — opposite Dr. Yedekar Hospital, near Nagojirao Patankar Highschool. Dr. Kakare also consults at his OPD clinic in Laxmipuri, Kolhapur, and in Karad.',
  },
  {
    q: 'Does the hospital have ICU facilities?',
    a: 'Yes — our ICU has continuous monitoring, ventilator support, and round-the-clock specialist coverage.',
  },
];

export default function PatientResourcesSection() {
  const { ref, visible } = useScrollReveal(0.05);
  const { ref: blogRef, visible: blogVisible } = useScrollReveal(0.05);
  const { ref: faqRef, visible: faqVisible } = useScrollReveal(0.05);

  return (
    <Box
      id="resources"
      component="section"
      aria-label="Patient Resources, Health Blog and FAQ"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.default',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative */}
      <Box
        sx={{
          position: 'absolute',
          top: '30%',
          left: '-5%',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: `radial-gradient(circle, rgba(8,145,178,0.03) 0%, transparent 70%)`,
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Chip
            label="Patient Resources"
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
            Everything You{' '}
            <Box component="span" className="gradient-text-dark">Need to Know</Box>
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 580, mx: 'auto', lineHeight: 1.85 }}>
            Information about insurance, visitor guidelines, and health education to make your
            experience with us as smooth as possible.
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mb: 10 }} ref={ref as React.Ref<HTMLDivElement>}>
          {/* Insurance */}
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'none' : 'translateY(24px)',
              transition: 'opacity 0.7s ease, transform 0.7s ease',
            }}
          >
            <Card
              sx={{
                height: '100%',
                border: '1px solid rgba(226,232,240,0.6)',
                '&:hover': {
                  borderColor: 'rgba(8,145,178,0.2)',
                  boxShadow: SHADOW.lg,
                },
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
                  <Box
                    sx={{
                      p: 1.5,
                      borderRadius: `${RADIUS.md}px`,
                      bgcolor: COLORS.tealSubtle,
                      color: COLORS.navy,
                      display: 'flex',
                    }}
                  >
                    <CreditCardIcon sx={{ fontSize: 28 }} />
                  </Box>
                  <Typography variant="h5" fontWeight={700}>Insurance &amp; Cashless Facility</Typography>
                </Stack>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.85 }}>
                  We accept cashless treatment under most major insurance providers. Our billing team
                  handles TPA coordination so you can focus entirely on recovery.
                </Typography>
                <Typography variant="subtitle2" sx={{ color: COLORS.navy, fontWeight: 700, mb: 2 }}>
                  Empanelled Insurance Partners
                </Typography>
                <Stack direction="row" flexWrap="wrap" gap={1}>
                  {INSURANCE.map((ins) => (
                    <Chip
                      key={ins}
                      label={ins}
                      size="small"
                      sx={{
                        fontSize: '0.72rem',
                        fontWeight: 500,
                        border: '1px solid rgba(8,145,178,0.15)',
                        bgcolor: 'rgba(8,145,178,0.03)',
                        borderRadius: `${RADIUS.sm}px`,
                        transition: TRANSITION_MEDIUM,
                        '&:hover': {
                          bgcolor: 'rgba(8,145,178,0.08)',
                          borderColor: COLORS.teal,
                          transform: 'translateY(-1px)',
                        },
                      }}
                    />
                  ))}
                </Stack>
                <Divider sx={{ my: 3, borderColor: 'rgba(8,145,178,0.08)' }} />
                <Stack direction="row" spacing={2} alignItems="flex-start">
                  <CheckCircleIcon sx={{ color: COLORS.green, mt: 0.25, fontSize: 20 }} />
                  <Typography variant="body2" color="text.secondary" lineHeight={1.7}>
                    For cashless pre-authorization, please bring your insurance card and photo ID at
                    the time of admission. Our helpdesk is available 24/7.
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          {/* Visitor guidelines */}
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'none' : 'translateY(24px)',
              transition: 'opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s',
            }}
          >
            <Card
              sx={{
                height: '100%',
                border: '1px solid rgba(226,232,240,0.6)',
                '&:hover': {
                  borderColor: 'rgba(8,145,178,0.2)',
                  boxShadow: SHADOW.lg,
                },
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
                  <Box
                    sx={{
                      p: 1.5,
                      borderRadius: `${RADIUS.md}px`,
                      bgcolor: COLORS.tealSubtle,
                      color: COLORS.navy,
                      display: 'flex',
                    }}
                  >
                    <AccessTimeIcon sx={{ fontSize: 28 }} />
                  </Box>
                  <Typography variant="h5" fontWeight={700}>Visitor Guidelines</Typography>
                </Stack>
                <List dense disablePadding>
                  {VISITOR_TIPS.map((tip, i) => (
                    <ListItem
                      key={tip}
                      disableGutters
                      sx={{
                        py: 1,
                        animation: visible ? `fadeSlideLeft 0.5s ease ${i * 0.06}s both` : 'none',
                      }}
                    >
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <CheckCircleIcon
                          sx={{
                            color: COLORS.teal,
                            fontSize: 18,
                            filter: `drop-shadow(0 0 2px rgba(8,145,178,0.25))`,
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={tip}
                        primaryTypographyProps={{
                          variant: 'body2',
                          color: 'text.secondary',
                          lineHeight: 1.7,
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
                <Divider sx={{ my: 2, borderColor: 'rgba(8,145,178,0.08)' }} />
                <Stack direction="row" spacing={2} alignItems="center">
                  <WheelchairPickupIcon sx={{ color: COLORS.navy }} />
                  <Typography variant="body2" color="text.secondary">
                    Full wheelchair accessibility throughout the hospital, including ramps, wide corridors, and accessible restrooms.
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Health blog */}
        <Box>
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 5 }}>
            <Stack>
              <Chip
                label="Health Blog"
                sx={{
                  mb: 2,
                  fontWeight: 700,
                  background: `linear-gradient(135deg, rgba(8,145,178,0.08) 0%, rgba(8,145,178,0.03) 100%)`,
                  border: `1px solid rgba(8,145,178,0.25)`,
                  color: COLORS.navy,
                  fontSize: '0.8rem',
                  borderRadius: `${RADIUS.sm}px`,
                  alignSelf: 'flex-start',
                }}
              />
              <Typography variant="h4" fontWeight={700}>
                Doctor's{' '}
                <Box component="span" className="gradient-text-dark">Health Tips</Box>
              </Typography>
            </Stack>
          </Stack>

          <Grid container spacing={3} ref={blogRef as React.Ref<HTMLDivElement>}>
            {BLOG_POSTS.map((post, i) => (
              <Grid
                key={post.title}
                size={{ xs: 12, sm: 6, md: 3 }}
                sx={{
                  opacity: blogVisible ? 1 : 0,
                  transform: blogVisible ? 'none' : 'translateY(24px)',
                  transition: `all 0.6s cubic-bezier(0.4,0,0.2,1) ${i * 0.1 + 0.1}s`,
                }}
              >
                {/* Card links to relevant service section for internal linking */}
                <Card
                  component="a"
                  href={post.href}
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.preventDefault();
                    const el = document.querySelector(post.href);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  aria-label={`Read about ${post.category} — ${post.title}`}
                  sx={{
                    height: '100%',
                    display: 'block',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    border: '1px solid rgba(226,232,240,0.6)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 4,
                      background: `linear-gradient(90deg, ${post.accentColor}, ${post.accentColor}88)`,
                      opacity: 0.6,
                    },
                    '&:hover': {
                      borderColor: `${post.accentColor}40`,
                      '&::before': { opacity: 1, height: 4 },
                      '& .read-more': {
                        transform: 'translateX(4px)',
                        color: post.accentColor,
                      },
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
                      <Chip
                        label={post.category}
                        size="small"
                        sx={{
                          fontWeight: 600,
                          fontSize: '0.7rem',
                          background: `${post.accentColor}10`,
                          color: post.accentColor,
                          border: `1px solid ${post.accentColor}25`,
                          borderRadius: `${RADIUS.sm}px`,
                        }}
                      />
                      <Typography variant="caption" color="text.disabled" fontWeight={500}>
                        {post.date}
                      </Typography>
                    </Stack>
                    <Typography
                      variant="h6"
                      fontWeight={700}
                      gutterBottom
                      sx={{ lineHeight: 1.4, fontSize: '0.95rem', minHeight: 56, color: 'text.primary' }}
                    >
                      {post.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" lineHeight={1.8} sx={{ mb: 3 }}>
                      {post.excerpt}
                    </Typography>
                    <Stack
                      className="read-more"
                      direction="row"
                      alignItems="center"
                      spacing={0.5}
                      sx={{
                        color: COLORS.navy,
                        transition: TRANSITION_MEDIUM,
                      }}
                    >
                      <ArticleIcon sx={{ fontSize: 16 }} />
                      <Typography variant="caption" fontWeight={600}>Read more</Typography>
                      <ArrowForwardIcon sx={{ fontSize: 14 }} />
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* ═══ FAQ Section — visible HTML matching FAQPage JSON-LD schema ═══ */}
        <Box id="faq" sx={{ mt: 10 }}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Chip
              label="FAQ"
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
            <Typography variant="h4" fontWeight={700}>
              Frequently Asked{' '}
              <Box component="span" className="gradient-text-dark">Questions</Box>
            </Typography>
          </Box>
          <Box
            ref={faqRef as React.Ref<HTMLDivElement>}
            itemScope
            itemType="https://schema.org/FAQPage"
          >
            <Grid container spacing={2}>
              {FAQ_ITEMS.map((item, i) => (
                <Grid
                  key={item.q}
                  size={{ xs: 12, md: 6 }}
                  sx={{
                    opacity: faqVisible ? 1 : 0,
                    transform: faqVisible ? 'none' : 'translateY(16px)',
                    transition: `all 0.5s ease ${i * 0.08}s`,
                  }}
                  itemScope
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                >
                  <Card
                    sx={{
                      height: '100%',
                      border: '1px solid rgba(226,232,240,0.6)',
                      '&:hover': {
                        borderColor: 'rgba(8,145,178,0.2)',
                        boxShadow: SHADOW.lg,
                      },
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Typography
                        variant="subtitle1"
                        fontWeight={700}
                        gutterBottom
                        itemProp="name"
                        sx={{ color: COLORS.navy, display: 'flex', alignItems: 'flex-start', gap: 1 }}
                      >
                        <Box
                          component="span"
                          sx={{
                            display: 'inline-flex',
                            flexShrink: 0,
                            mt: 0.25,
                            width: 20,
                            height: 20,
                            borderRadius: '50%',
                            bgcolor: COLORS.tealSubtle,
                            color: COLORS.teal,
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '0.65rem',
                            fontWeight: 800,
                          }}
                        >
                          Q
                        </Box>
                        {item.q}
                      </Typography>
                      <Box itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          lineHeight={1.8}
                          itemProp="text"
                          sx={{ pl: 3.5 }}
                        >
                          {item.a}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
