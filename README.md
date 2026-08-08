# 🏥 Sunshine Multi-Speciality Center — Website

Official website for **Sunshine Multi-Speciality Center**, a 24/7 hospital and clinic in Kolhapur, Maharashtra, led by **Dr. Onkar Kakare** (MBBS, MD — Internal Medicine & Diabetology).

## Tech Stack

- **React 19** + **TypeScript**
- **Material UI (MUI) v7** — Component library
- **Vite 8** — Build tool & dev server
- **Inter + Roboto** — Typography

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/          # UI sections
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── QuickStatsBar.tsx
│   ├── AboutSection.tsx
│   ├── ServicesSection.tsx
│   ├── TestimonialsSection.tsx
│   ├── PatientResourcesSection.tsx
│   ├── ContactSection.tsx
│   ├── Footer.tsx
│   └── WhatsAppFab.tsx
├── hooks/               # Custom React hooks
│   ├── useScrollReveal.ts
│   ├── useCountUp.ts
│   └── useParallax.ts
├── App.tsx              # Root component
├── main.tsx             # Entry point
├── theme.ts             # MUI theme & design tokens
└── globalStyles.ts      # Global CSS & keyframes
public/
├── hospital-hero.webp   # Hero background image
└── doctor-kakare.webp   # Doctor profile image
```
