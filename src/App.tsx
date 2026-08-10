/* ===== ROOT APP ===== */
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import theme from './theme';
import Navbar from './components/Navbar';
import WhatsAppFab from './components/WhatsAppFab';

/* ---- lazy-loaded chunks ---- */
const HomePage = lazy(() => import('./pages/HomePage'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const Footer = lazy(() => import('./components/Footer'));

/* ---- loading fallback ---- */
const PageLoader = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '60vh',
    }}
  >
    <CircularProgress color="primary" />
  </Box>
);

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <main>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
        <WhatsAppFab />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
