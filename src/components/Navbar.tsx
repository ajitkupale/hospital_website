/* ===== PREMIUM NAVBAR — GLASSMORPHIC (REBUILT) ===== */
import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PhoneIcon from '@mui/icons-material/Phone';
import Chip from '@mui/material/Chip';
import { COLORS, RADIUS, TRANSITION_MEDIUM } from '../theme';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Patient Resources', href: '#resources' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const elevated = useScrollTrigger({ disableHysteresis: true, threshold: 20 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );
    NAV_LINKS.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    setDrawerOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <AppBar
        component="nav"
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: elevated
            ? 'rgba(11,61,92,0.92)'
            : 'rgba(11,61,92,0.3)',
          backdropFilter: 'blur(20px) saturate(1.6)',
          WebkitBackdropFilter: 'blur(20px) saturate(1.6)',
          borderBottom: elevated
            ? `1px solid rgba(8,145,178,0.15)`
            : '1px solid rgba(255,255,255,0.08)',
          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: elevated
            ? '0 8px 32px rgba(0,0,0,0.2)'
            : 'none',
        }}
      >
        <Toolbar sx={{ gap: 1, py: 1, minHeight: { xs: 56, md: 64 } }}>
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexGrow: 1 }}>
            <Box
              sx={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <LocalHospitalIcon
                sx={{
                  color: COLORS.teal,
                  fontSize: 30,
                  filter: `drop-shadow(0 0 6px rgba(8,145,178,0.4))`,
                  animation: 'heartbeat 3s ease-in-out infinite',
                }}
              />
            </Box>
            <Box>
              <Typography
                variant="h6"
                component="span"
                sx={{
                  color: 'white',
                  fontWeight: 700,
                  fontSize: { xs: '0.95rem', md: '1.15rem' },
                  letterSpacing: '-0.02em',
                }}
              >
                Sunshine
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: COLORS.tealLight,
                  display: 'block',
                  lineHeight: 1,
                  fontSize: '0.6rem',
                  letterSpacing: '0.15em',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                }}
              >
                MULTI-SPECIALITY CENTER
              </Typography>
            </Box>
          </Box>

          {/* Desktop links */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5, alignItems: 'center' }}>
            {NAV_LINKS.map(({ label, href }) => {
              const isActive = activeSection === href.slice(1);
              return (
                <Button
                  key={label}
                  onClick={() => scrollTo(href)}
                  sx={{
                    color: isActive ? COLORS.tealLight : 'rgba(255,255,255,0.75)',
                    fontWeight: isActive ? 700 : 500,
                    fontSize: '0.875rem',
                    px: 2,
                    py: 1,
                    borderRadius: `${RADIUS.sm}px`,
                    position: 'relative',
                    overflow: 'hidden',
                    transition: TRANSITION_MEDIUM,
                    bgcolor: isActive ? 'rgba(8,145,178,0.1)' : 'transparent',
                    '&:hover': {
                      color: 'white',
                      bgcolor: 'rgba(8,145,178,0.12)',
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 6,
                      left: '50%',
                      transform: isActive ? 'translateX(-50%) scaleX(1)' : 'translateX(-50%) scaleX(0)',
                      width: '50%',
                      height: 2,
                      borderRadius: 1,
                      background: `linear-gradient(90deg, ${COLORS.teal}, ${COLORS.tealLight})`,
                      transition: 'transform 0.3s ease',
                    },
                    '&:hover::after': {
                      transform: 'translateX(-50%) scaleX(1)',
                    },
                  }}
                >
                  {label}
                </Button>
              );
            })}
          </Box>

          {/* Emergency chip */}
          <Chip
            icon={<PhoneIcon sx={{ fontSize: 14, color: 'white' }} />}
            label="24/7 Emergency"
            component="a"
            href="tel:+91XXXXXXXXXX"
            clickable
            sx={{
              display: { xs: 'none', sm: 'flex' },
              background: `linear-gradient(135deg, ${COLORS.red} 0%, ${COLORS.redDark} 100%)`,
              color: 'white',
              fontWeight: 700,
              fontSize: '0.72rem',
              ml: 2,
              border: 'none',
              borderRadius: `${RADIUS.sm}px`,
              boxShadow: `0 2px 12px rgba(220,38,38,0.35)`,
              transition: TRANSITION_MEDIUM,
              animation: 'glowPulse 3s ease-in-out infinite',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: `0 4px 24px rgba(220,38,38,0.55)`,
              },
              '& .MuiChip-icon': {
                color: 'white',
              },
            }}
          />

          {/* Mobile menu toggle */}
          <IconButton
            onClick={() => setDrawerOpen(true)}
            aria-label="Open navigation menu"
            sx={{
              display: { md: 'none' },
              color: 'white',
              ml: 1,
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: `${RADIUS.sm}px`,
              width: 44,
              height: 44,
              '&:hover': {
                borderColor: COLORS.teal,
                bgcolor: 'rgba(8,145,178,0.08)',
              },
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile drawer — glassmorphic */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 300,
            bgcolor: 'rgba(11,61,92,0.96)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
          },
        }}
      >
        <Box sx={{ pt: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 3, pb: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <LocalHospitalIcon sx={{ color: COLORS.teal, fontSize: 24 }} />
              <Typography variant="h6" sx={{ color: 'white', fontWeight: 700 }}>Menu</Typography>
            </Box>
            <IconButton
              onClick={() => setDrawerOpen(false)}
              aria-label="Close navigation menu"
              sx={{
                color: 'rgba(255,255,255,0.7)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: `${RADIUS.sm}px`,
                width: 40,
                height: 40,
                '&:hover': { color: COLORS.tealLight, borderColor: COLORS.teal },
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          <Box sx={{ px: 2, mb: 2 }}>
            <Box sx={{ height: 1, background: `linear-gradient(90deg, transparent, ${COLORS.teal}, transparent)`, opacity: 0.3 }} />
          </Box>

          <List>
            {NAV_LINKS.map(({ label, href }, i) => {
              const isActive = activeSection === href.slice(1);
              return (
                <ListItem key={label} disablePadding sx={{ animation: `fadeSlideLeft 0.4s ease ${i * 0.06}s both` }}>
                  <ListItemButton
                    onClick={() => scrollTo(href)}
                    sx={{
                      py: 2,
                      px: 3,
                      mx: 1,
                      borderRadius: `${RADIUS.sm}px`,
                      bgcolor: isActive ? 'rgba(8,145,178,0.12)' : 'transparent',
                      borderLeft: isActive ? `3px solid ${COLORS.teal}` : '3px solid transparent',
                      '&:hover': { bgcolor: 'rgba(8,145,178,0.08)' },
                    }}
                  >
                    <ListItemText
                      primary={label}
                      primaryTypographyProps={{
                        fontWeight: isActive ? 700 : 500,
                        color: isActive ? COLORS.tealLight : 'rgba(255,255,255,0.8)',
                        fontSize: '1rem',
                        letterSpacing: '-0.01em',
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>

          <Box sx={{ px: 3, pt: 3 }}>
            <Button
              fullWidth
              variant="contained"
              color="error"
              startIcon={<PhoneIcon />}
              component="a"
              href="tel:+91XXXXXXXXXX"
              sx={{
                py: 2,
                fontWeight: 700,
                borderRadius: `${RADIUS.md}px`,
                background: `linear-gradient(135deg, ${COLORS.red} 0%, ${COLORS.redDark} 100%)`,
                boxShadow: `0 4px 20px rgba(220,38,38,0.35)`,
              }}
            >
              Emergency: 24/7
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
