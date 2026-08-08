/* ===== PREMIUM THEME — UI/UX PRO MAX REBUILD ===== */
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// ── Design Tokens ──────────────────────────────────────────────────────

/** Radius scale (8px grid aligned) */
const RADIUS = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  pill: 9999,
} as const;

/** Shadow scale – subtle, layered, warm-tinted */
const SHADOW = {
  sm: '0 1px 3px rgba(11,61,92,0.06), 0 1px 2px rgba(11,61,92,0.04)',
  md: '0 4px 16px rgba(11,61,92,0.08)',
  lg: '0 12px 40px rgba(11,61,92,0.10)',
  xl: '0 20px 60px rgba(11,61,92,0.12)',
  glow: '0 0 24px rgba(8,145,178,0.15)',
  glowStrong: '0 0 40px rgba(8,145,178,0.25)',
} as const;

/** Color palette — WCAG AA compliant medical teal */
const COLORS = {
  // Primary: Deep navy-teal (warmer)
  navy:        '#0B3D5C',
  navyLight:   '#1A5276',
  navyDark:    '#072A40',

  // Accent: Medical teal (WCAG AA on white ✓)
  teal:        '#0891B2',
  tealLight:   '#22D3EE',
  tealDark:    '#0E7490',
  tealSubtle:  'rgba(8,145,178,0.08)',

  // Warm accent — deeper amber
  amber:       '#D97706',
  amberLight:  '#F59E0B',

  // Emergency — accessible red
  red:         '#DC2626',
  redDark:     '#B91C1C',

  // Success / medical green
  green:       '#16A34A',
  greenDark:   '#15803D',

  // Neutrals
  white:       '#FFFFFF',
  offWhite:    '#F8FAFC',
  grayLight:   '#E2E8F0',
  gray:        '#94A3B8',
  grayDark:    '#475569',
  charcoal:    '#1E293B',
  ink:         '#0F172A',
} as const;

// ── Transition presets ──

const EASE_SMOOTH = 'cubic-bezier(0.4, 0, 0.2, 1)';
const TRANSITION_FAST = `all 0.2s ${EASE_SMOOTH}`;
const TRANSITION_MEDIUM = `all 0.3s ${EASE_SMOOTH}`;
const TRANSITION_SLOW = `all 0.4s ${EASE_SMOOTH}`;

// ── Theme ──────────────────────────────────────────────────────────────

let theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: COLORS.navy,
      light: COLORS.navyLight,
      dark: COLORS.navyDark,
      contrastText: COLORS.white,
    },
    secondary: {
      main: COLORS.teal,
      light: COLORS.tealLight,
      dark: COLORS.tealDark,
      contrastText: COLORS.white,
    },
    error: {
      main: COLORS.red,
      dark: COLORS.redDark,
      contrastText: COLORS.white,
    },
    success: {
      main: COLORS.green,
      dark: COLORS.greenDark,
    },
    warning: {
      main: COLORS.amber,
      light: COLORS.amberLight,
    },
    background: {
      default: COLORS.offWhite,
      paper: COLORS.white,
    },
    text: {
      primary: COLORS.ink,
      secondary: COLORS.grayDark,
    },
    divider: COLORS.grayLight,
  },

  typography: {
    fontFamily: '"Figtree", "Inter", "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontFamily: '"Figtree", "Inter", sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.03em',
      lineHeight: 1.1,
    },
    h2: {
      fontFamily: '"Figtree", "Inter", sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.025em',
      lineHeight: 1.15,
    },
    h3: {
      fontFamily: '"Figtree", "Inter", sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.02em',
      lineHeight: 1.2,
    },
    h4: {
      fontFamily: '"Figtree", "Inter", sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.015em',
      lineHeight: 1.25,
    },
    h5: {
      fontFamily: '"Figtree", "Inter", sans-serif',
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    h6: {
      fontFamily: '"Figtree", "Inter", sans-serif',
      fontWeight: 600,
      letterSpacing: '-0.005em',
    },
    subtitle1: {
      fontFamily: '"Noto Sans", "Roboto", sans-serif',
      fontWeight: 600,
      letterSpacing: '-0.005em',
    },
    subtitle2: {
      fontFamily: '"Noto Sans", "Roboto", sans-serif',
      fontWeight: 600,
      letterSpacing: '0.04em',
      textTransform: 'uppercase' as const,
      fontSize: '0.75rem',
    },
    body1: {
      fontFamily: '"Noto Sans", "Roboto", sans-serif',
      lineHeight: 1.8,
      letterSpacing: '0.01em',
      fontSize: '1rem',
    },
    body2: {
      fontFamily: '"Noto Sans", "Roboto", sans-serif',
      lineHeight: 1.75,
      letterSpacing: '0.01em',
    },
    button: {
      fontFamily: '"Figtree", "Inter", sans-serif',
      fontWeight: 600,
      letterSpacing: '0.02em',
    },
    caption: {
      fontFamily: '"Noto Sans", "Roboto", sans-serif',
    },
    overline: {
      fontFamily: '"Noto Sans", "Roboto", sans-serif',
    },
  },

  shape: {
    borderRadius: RADIUS.lg,
  },

  components: {
    /* ── Buttons ── */
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none' as const,
          fontWeight: 600,
          borderRadius: RADIUS.md,
          transition: TRANSITION_MEDIUM,
          '@media (prefers-reduced-motion: reduce)': {
            transition: 'none',
          },
        },
        containedPrimary: {
          background: `linear-gradient(135deg, ${COLORS.navy} 0%, ${COLORS.navyLight} 100%)`,
          boxShadow: SHADOW.md,
          '&:hover': {
            background: `linear-gradient(135deg, ${COLORS.navyLight} 0%, ${COLORS.navy} 100%)`,
            boxShadow: SHADOW.lg,
            transform: 'translateY(-2px)',
          },
          '&:focus-visible': {
            outline: `3px solid ${COLORS.teal}`,
            outlineOffset: 2,
          },
        },
        containedSecondary: {
          background: `linear-gradient(135deg, ${COLORS.teal} 0%, ${COLORS.tealLight} 100%)`,
          color: COLORS.white,
          boxShadow: `0 4px 20px rgba(8,145,178,0.3)`,
          '&:hover': {
            background: `linear-gradient(135deg, ${COLORS.tealLight} 0%, ${COLORS.teal} 100%)`,
            boxShadow: `0 8px 32px rgba(8,145,178,0.4)`,
            transform: 'translateY(-2px)',
          },
          '&:focus-visible': {
            outline: `3px solid ${COLORS.navy}`,
            outlineOffset: 2,
          },
        },
        containedError: {
          background: `linear-gradient(135deg, ${COLORS.red} 0%, ${COLORS.redDark} 100%)`,
          boxShadow: `0 4px 20px rgba(220,38,38,0.35)`,
          '&:hover': {
            boxShadow: `0 8px 32px rgba(220,38,38,0.5)`,
            transform: 'translateY(-2px)',
          },
          '&:focus-visible': {
            outline: `3px solid ${COLORS.teal}`,
            outlineOffset: 2,
          },
        },
        outlined: {
          borderWidth: 2,
          '&:hover': {
            borderWidth: 2,
            transform: 'translateY(-1px)',
          },
          '&:focus-visible': {
            outline: `3px solid ${COLORS.teal}`,
            outlineOffset: 2,
          },
        },
      },
    },

    /* ── Cards ── */
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: RADIUS.xl,
          border: `1px solid rgba(226,232,240,0.6)`,
          boxShadow: SHADOW.sm,
          transition: TRANSITION_SLOW,
          overflow: 'hidden',
          '@media (prefers-reduced-motion: reduce)': {
            transition: 'box-shadow 0.2s ease, border-color 0.2s ease',
          },
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: SHADOW.lg,
            borderColor: 'rgba(8,145,178,0.2)',
          },
        },
      },
    },

    /* ── Chips ── */
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: RADIUS.sm,
          fontWeight: 600,
          transition: TRANSITION_FAST,
        },
        colorPrimary: {
          background: `linear-gradient(135deg, ${COLORS.navy} 0%, ${COLORS.navyLight} 100%)`,
          color: COLORS.white,
        },
        outlinedPrimary: {
          borderColor: COLORS.teal,
          color: COLORS.navy,
          '&:hover': {
            background: COLORS.tealSubtle,
          },
        },
      },
    },

    /* ── Text Fields ── */
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: RADIUS.md,
            transition: `box-shadow 0.3s ease`,
            '&.Mui-focused': {
              boxShadow: `0 0 0 3px rgba(8,145,178,0.12)`,
            },
            '& fieldset': {
              borderWidth: 2,
              borderColor: COLORS.grayLight,
              transition: 'border-color 0.3s ease',
            },
            '&:hover fieldset': {
              borderColor: COLORS.teal,
            },
            '&.Mui-focused fieldset': {
              borderColor: COLORS.teal,
              borderWidth: 2,
            },
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: COLORS.tealDark,
          },
        },
      },
    },

    /* ── AppBar ── */
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },

    /* ── Fab ── */
    MuiFab: {
      styleOverrides: {
        root: {
          transition: TRANSITION_MEDIUM,
          '&:focus-visible': {
            outline: `3px solid ${COLORS.teal}`,
            outlineOffset: 2,
          },
          '@media (prefers-reduced-motion: reduce)': {
            transition: 'none',
          },
        },
      },
    },

    /* ── Rating ── */
    MuiRating: {
      styleOverrides: {
        iconFilled: {
          color: COLORS.amber,
        },
      },
    },

    /* ── Divider ── */
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: 'rgba(226,232,240,0.5)',
        },
      },
    },

    /* ── Alert ── */
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: RADIUS.md,
        },
        standardSuccess: {
          background: `linear-gradient(135deg, rgba(22,163,74,0.08) 0%, rgba(21,128,61,0.08) 100%)`,
          border: `1px solid rgba(22,163,74,0.3)`,
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
export { COLORS, RADIUS, SHADOW, EASE_SMOOTH, TRANSITION_FAST, TRANSITION_MEDIUM, TRANSITION_SLOW };
