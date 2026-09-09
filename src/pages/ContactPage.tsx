import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { useSEO } from '../hooks/useSEO';
import ContactHeroSection from '../components/contact/ContactHeroSection';
import ContactFormCard from '../components/contact/ContactFormCard';
import ContactInfoCards from '../components/contact/ContactInfoCards';
import ContactMapSection from '../components/contact/ContactMapSection';
import FAQSection from '../components/contact/FAQSection';
import OtherWaysSection from '../components/contact/OtherWaysSection';
import NewsletterBanner from '../components/contact/NewsletterBanner';

const ContactPage: React.FC = () => {
  useSEO({
    title: 'Contact Us',
    description: 'Get in touch with REChain. We\'re here to help you find your dream property.',
  });

  return (
    <div className="bg-white min-h-screen">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <ContactHeroSection />

      {/* Contact Form & Info Cards Section */}
      <section className="bg-white py-16">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left - Contact Form (2/3 width) */}
            <div className="lg:col-span-2">
              <ContactFormCard />
            </div>

            {/* Right - Contact Info Cards (1/3 width) */}
            <div className="lg:col-span-1">
              <ContactInfoCards />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <ContactMapSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Other Ways to Connect */}
      <OtherWaysSection />

      {/* Newsletter Banner */}
      <NewsletterBanner />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactPage;
