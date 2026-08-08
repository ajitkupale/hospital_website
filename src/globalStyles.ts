/* ===== GLOBAL STYLES — UI/UX PRO MAX REBUILD ===== */
import { COLORS } from './theme';

/**
 * CSS string to inject via MUI's GlobalStyles or a <style> tag.
 * Covers: smooth scroll, custom scrollbar, selection, keyframes,
 * focus-visible, reduced motion, skip-link utility.
 */
export const globalCSS = `
  /* ── Smooth Scroll ── */
  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* ── Skip-to-Content (hidden until focused) ── */
  .skip-link {
    position: absolute;
    top: -100%;
    left: 16px;
    z-index: 9999;
    padding: 12px 24px;
    background: ${COLORS.navy};
    color: ${COLORS.white};
    border-radius: 0 0 8px 8px;
    font-weight: 600;
    font-size: 0.875rem;
    text-decoration: none;
    transition: top 0.2s ease;
  }
  .skip-link:focus {
    top: 0;
  }

  /* ── Global Focus-Visible ── */
  :focus-visible {
    outline: 3px solid ${COLORS.teal};
    outline-offset: 2px;
  }
  /* Remove default outline for mouse clicks */
  :focus:not(:focus-visible) {
    outline: none;
  }

  /* ── Custom Scrollbar ── */
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: ${COLORS.offWhite};
  }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, ${COLORS.teal} 0%, ${COLORS.navy} 100%);
    border-radius: 9999px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(180deg, ${COLORS.tealLight} 0%, ${COLORS.navyLight} 100%);
  }

  /* ── Selection ── */
  ::selection {
    background: rgba(8,145,178,0.2);
    color: ${COLORS.ink};
  }

  /* ── Global Keyframes ── */
  @keyframes fadeSlideUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeSlideDown {
    from { opacity: 0; transform: translateY(-24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeSlideLeft {
    from { opacity: 0; transform: translateX(-24px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes fadeSlideRight {
    from { opacity: 0; transform: translateX(24px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes scaleIn {
    from { opacity: 0; transform: scale(0.9); }
    to   { opacity: 1; transform: scale(1); }
  }
  @keyframes shimmer {
    0%   { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50%      { transform: translateY(-8px); }
  }
  @keyframes floatSlow {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50%      { transform: translateY(-12px) rotate(2deg); }
  }
  @keyframes glowPulse {
    0%, 100% { box-shadow: 0 0 16px rgba(8,145,178,0.15); }
    50%      { box-shadow: 0 0 32px rgba(8,145,178,0.3); }
  }
  @keyframes ripple {
    0%   { transform: scale(1);   opacity: 0.5; }
    100% { transform: scale(2);   opacity: 0; }
  }
  @keyframes spin {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  @keyframes gradientShift {
    0%   { background-position: 0% 50%; }
    50%  { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  @keyframes heartbeat {
    0%, 100% { transform: scale(1); }
    14%      { transform: scale(1.1); }
    28%      { transform: scale(1); }
    42%      { transform: scale(1.06); }
    56%      { transform: scale(1); }
  }
  @keyframes borderGlow {
    0%, 100% { border-color: rgba(8,145,178,0.2); }
    50%      { border-color: rgba(8,145,178,0.5); }
  }

  /* ── Reduced Motion ── */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* ── Gradient text utility ── */
  .gradient-text {
    background: linear-gradient(135deg, ${COLORS.teal} 0%, ${COLORS.tealLight} 50%, ${COLORS.white} 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .gradient-text-dark {
    background: linear-gradient(135deg, ${COLORS.navy} 0%, ${COLORS.teal} 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;
