/* ===== FLOATING WHATSAPP BUTTON — PREMIUM (REBUILT) ===== */
import { useState, useEffect } from 'react';
import Fab from '@mui/material/Fab';
import Tooltip from '@mui/material/Tooltip';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Box from '@mui/material/Box';
import { RADIUS, TRANSITION_MEDIUM } from '../theme';

export default function WhatsAppFab() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: { xs: 24, md: 32 },
        right: { xs: 24, md: 32 },
        zIndex: 1200,
        opacity: mounted ? 1 : 0,
        transform: mounted ? 'translateY(0) scale(1)' : 'translateY(24px) scale(0.8)',
        transition: 'opacity 0.5s ease, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
      }}
    >
      {/* Ripple rings */}
      <Box
        sx={{
          position: 'absolute',
          inset: -8,
          borderRadius: '50%',
          border: '2px solid #25D366',
          animation: 'ripple 3s ease-out infinite',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          inset: -8,
          borderRadius: '50%',
          border: '2px solid #25D366',
          animation: 'ripple 3s ease-out infinite 1s',
          pointerEvents: 'none',
        }}
      />

      <Tooltip
        title="Chat on WhatsApp"
        placement="left"
        slotProps={{
          tooltip: {
            sx: {
              bgcolor: 'rgba(15,23,42,0.92)',
              backdropFilter: 'blur(8px)',
              fontSize: '0.82rem',
              fontWeight: 600,
              borderRadius: `${RADIUS.sm}px`,
              px: 2,
              py: 1,
              border: '1px solid rgba(255,255,255,0.08)',
            },
          },
        }}
      >
        <Fab
          component="a"
          href="https://wa.me/91XXXXXXXXXX?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Sunshine%20Multi-Speciality%20Center."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          sx={{
            bgcolor: '#25D366',
            color: 'white',
            width: 56,
            height: 56,
            boxShadow: '0 6px 24px rgba(37,211,102,0.4)',
            transition: TRANSITION_MEDIUM,
            '&:hover': {
              bgcolor: '#128C7E',
              transform: 'scale(1.1) rotate(6deg)',
              boxShadow: '0 8px 36px rgba(37,211,102,0.55)',
            },
          }}
        >
          <WhatsAppIcon sx={{ fontSize: 28 }} />
        </Fab>
      </Tooltip>
    </Box>
  );
}
