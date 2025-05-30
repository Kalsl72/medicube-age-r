
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import BenefitsSection from '../components/BenefitsSection';
import BeforeAfterSection from '../components/BeforeAfterSection';
import FeaturesList from '../components/FeaturesList';
import Footer from '../components/Footer';
import ProductFeaturesGallery from '../components/ProductFeaturesGallery';

const Index = () => {
  // Product features data
  const productFeatures = [
    {
      id: 1,
      image: "/lovable-uploads/905653c8-5d6e-4f33-b4fa-df62d67e0750.png",
      title: "4 Smart Modes For Complete Skin Care",
      description: "4-in-1 Smart Modes: Target wrinkles, acne, sagging, and dullness with specialized treatments.",
      color: "amber-500"
    },
    {
      id: 2,
      image: "/lovable-uploads/8fe3eeb1-c140-4a28-bc27-3e23762aabb9.png",
      title: "Booster Mode & Air Shot Mode",
      description: "Booster Mode: Deep wrinkle reduction | Airshot Mode: Pore tightening for acne-prone skin.",
      color: "cyan-500"
    },
    {
      id: 3,
      image: "/lovable-uploads/5e66c10b-18d3-48c9-b070-90d7a1f79fe1.png",
      title: "MC Mode & Derma Shot Mode",
      description: "Derma Shot Mode: Collagen activation | MC Mode: Microcurrent jawline sculpting.",
      color: "green-500"
    }
  ];

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
        
        {/* Product Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold font-montserrat text-center text-deepnavy mb-4">
              Advanced Technology, Multiple Benefits
            </h2>
            <p className="text-center text-deepnavy/80 font-lato mb-12 max-w-2xl mx-auto">
              Experience the versatility of Medicube Age-R Booster Pro with its 4 smart modes
            </p>
            <div className="max-w-4xl mx-auto">
              <ProductFeaturesGallery features={productFeatures} />
            </div>
          </div>
        </section>
        
        <BeforeAfterSection />
        <FeaturesList />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
