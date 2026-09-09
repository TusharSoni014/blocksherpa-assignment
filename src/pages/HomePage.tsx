import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { useSEO } from '../hooks/useSEO';
import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';
import AIIntelligenceSection from '../components/home/AIIntelligenceSection';
import CuratedListingsSection from '../components/home/CuratedListingsSection';
import ProcessSection from '../components/home/ProcessSection';
import TrustSignalsSection from '../components/home/TrustSignalsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CTASection from '../components/home/CTASection';

const HomePage: React.FC = () => {
  useSEO({
    title: 'Premium Real Estate Platform',
    description: 'REChain offers AI-powered property search, location trends analysis, and investment insights to find your perfect property in Brazil.',
  });

  return (
    <div className="bg-[#F8F6F6] min-h-screen">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <StatsSection />

      {/* AI Intelligence Section */}
      <AIIntelligenceSection />

      {/* Curated Listings Section */}
      <CuratedListingsSection />

      {/* The Path to Your New Beginning Section */}
      <ProcessSection />

      {/* Redefining Real Estate Section */}
      <TrustSignalsSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;