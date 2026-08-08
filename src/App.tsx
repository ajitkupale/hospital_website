/* ===== ROOT APP ===== */
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import QuickStatsBar from './components/QuickStatsBar';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import PatientResourcesSection from './components/PatientResourcesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppFab from './components/WhatsAppFab';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <main>
        <HeroSection />
        <QuickStatsBar />
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
        <PatientResourcesSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFab />
    </ThemeProvider>
  );
}

export default App;
