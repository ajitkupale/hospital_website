/* ===== HOME PAGE (wraps all landing sections) ===== */
import HeroSection from '../components/HeroSection';
import QuickStatsBar from '../components/QuickStatsBar';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import PatientResourcesSection from '../components/PatientResourcesSection';
import ContactSection from '../components/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <QuickStatsBar />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <PatientResourcesSection />
      <ContactSection />
    </>
  );
}
