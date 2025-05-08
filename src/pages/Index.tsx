
import { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProblemsSection from '@/components/ProblemsSection';
import SolutionsSection from '@/components/SolutionsSection';
import MethodologySection from '@/components/MethodologySection';
import ServicesSection from '@/components/ServicesSection';
import ResultsSection from '@/components/ResultsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Smooth scroll implementation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;

        window.scrollTo({
          top: targetElement.offsetTop - 80, // offset for fixed header
          behavior: 'smooth'
        });
      });
    });

    // Adicionar tag de Schema.org para SEO
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'Improve - BPO Financeiro',
      'description': 'Serviços de BPO Financeiro com foco em lucro, clareza e tranquilidade para pequenas e médias empresas.',
      'url': 'https://www.improve.com.br',
      'logo': 'https://www.improve.com.br/logo.png',
      'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': '+55-XX-XXXXX-XXXX',
        'contactType': 'customer service',
        'areaServed': 'BR',
        'availableLanguage': 'Portuguese'
      },
      'sameAs': [
        'https://www.facebook.com/improve',
        'https://www.instagram.com/improve',
        'https://www.linkedin.com/company/improve'
      ]
    };

    const scriptElement = document.createElement('script');
    scriptElement.type = 'application/ld+json';
    scriptElement.text = JSON.stringify(schema);
    document.head.appendChild(scriptElement);

    return () => {
      // Cleanup event listeners
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function (e) {
          e.preventDefault();
        });
      });
      
      document.head.removeChild(scriptElement);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex-grow pt-0">
        <HeroSection />
        <AboutSection />
        <ProblemsSection />
        <SolutionsSection />
        <MethodologySection />
        <ServicesSection />
        <ResultsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
