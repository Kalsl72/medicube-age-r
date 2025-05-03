
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import BenefitsSection from '../components/BenefitsSection';
import BeforeAfterSection from '../components/BeforeAfterSection'; 
import HowItWorksSection from '../components/HowItWorksSection';
import FeaturesList from '../components/FeaturesList';
import Footer from '../components/Footer';

const Index = () => {
  // SEO Schema markup
  React.useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Medicube Age-R Booster Pro',
      description: 'Clinically Proven Microcurrent Tech for Younger-Looking Skin at Home',
      brand: {
        '@type': 'Brand',
        name: 'Medicube',
      },
      offers: {
        '@type': 'Offer',
        price: '159.99',
        priceCurrency: 'USD',
        availability: 'https://schema.org/LimitedAvailability',
        url: 'https://s.click.aliexpress.com/e/_olbrenJ',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '2000',
      },
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen w-full font-lato bg-white">
      <Header />
      <main className="pt-0">
        <HeroSection />
        <BenefitsSection />
        <BeforeAfterSection />
        <HowItWorksSection />
        <FeaturesList />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
