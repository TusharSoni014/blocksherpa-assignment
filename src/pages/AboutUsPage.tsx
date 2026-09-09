import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { useSEO } from '../hooks/useSEO';
import AboutHeroSection from '../components/about/AboutHeroSection';
import AboutHeritageSection from '../components/about/AboutHeritageSection';
import AboutStatsSection from '../components/about/AboutStatsSection';
import AboutValuesSection from '../components/about/AboutValuesSection';
import AboutAISection from '../components/about/AboutAISection';
import AboutCTASection from '../components/about/AboutCTASection';

const AboutUsPage: React.FC = () => {
  useSEO({
    title: 'About Us',
    description: 'Learn about REChain — our mission, values, and the AI-powered technology behind luxury real estate in Brazil.',
  });

  return (
    <div className="bg-white min-h-screen">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Hero Section */}
      <AboutHeroSection />

      {/* Our Heritage Section */}
      <AboutHeritageSection />

      {/* Stats Section */}
      <AboutStatsSection />

      {/* Values Section - Driven by Purpose */}
      <AboutValuesSection />

      {/* AI Intelligence Section */}
      <AboutAISection />

      {/* CTA Section */}
      <AboutCTASection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutUsPage;
