import React from 'react';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://REChain.vercel.app';

interface StructuredDataProps {
  type: 'website' | 'organization' | 'property' | 'aiHub';
  data?: {
    title?: string;
    description?: string;
    location?: string;
    region?: string;
    price?: number;
    sqm?: number;
    beds?: number;
    baths?: number;
    createdAt?: string;
    image?: string;
  };
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  const location = useLocation();
  const currentUrl = `${SITE_URL}${location.pathname}`;

  const schemas: Record<string, object> = {
    website: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'REChain',
      url: SITE_URL,
      description: 'AI-powered luxury real estate platform for finding your perfect property in Brazil.',
      potentialAction: {
        '@type': 'SearchAction',
        target: `${SITE_URL}/properties?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
    organization: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'REChain',
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      sameAs: [
        'https://github.com/',
        'https://linkedin.com',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        availableLanguage: ['English', 'Hindi'],
      },
    },
    property: {
      '@context': 'https://schema.org',
      '@type': 'RealEstateListing',
      name: data?.title || 'Property Listing',
      description: data?.description || 'Property details',
      url: currentUrl,
      datePosted: data?.createdAt || new Date().toISOString(),
      image: data?.image || `${SITE_URL}/og-image.png`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: data?.location || 'City',
        addressRegion: data?.region || 'Region',
        addressCountry: 'IN',
      },
      ...(data?.price && { price: `$${data.price}`, priceCurrency: 'INR' }),
      ...(data?.sqm && {
        floorSize: {
          '@type': 'QuantitativeValue',
          unitText: 'sqm',
          value: data.sqm,
        },
      }),
      ...(data?.beds && { numberOfRooms: data.beds }),
      ...(data?.baths && { numberOfBathroomsTotal: data.baths }),
    },
    aiHub: {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'AI Property Hub - REChain',
      applicationCategory: 'RealEstateApplication',
      description: 'AI-powered real estate analytics, property search, and investment insights.',
      url: `${SITE_URL}/ai-hub`,
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
      },
    },
  };

  const schemaData = schemas[type] || schemas.website;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default StructuredData;
