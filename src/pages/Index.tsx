
import React from 'react';
import MainNav from '@/components/MainNav';
import CosmicBackground from '@/components/CosmicBackground';
import Footer from '@/components/Footer';

// Импортируем компоненты секций
import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import ServicesSection from '@/components/home/ServicesSection';
import BenefitsSection from '@/components/home/BenefitsSection';
import CtaSection from '@/components/home/CtaSection';

const Index = () => {
  // Данные для статистики
  const stats = [
    { value: '200+', label: 'Реализованных проектов' },
    { value: '95%', label: 'Довольных клиентов' },
    { value: '12 лет', label: 'На рынке IT' },
    { value: '24/7', label: 'Поддержка клиентов' },
  ];

  return (
    <div className="min-h-screen bg-cosmic-black text-cosmic-white">
      <CosmicBackground />
      <MainNav />
      
      {/* Секции страницы */}
      <HeroSection />
      <StatsSection stats={stats} />
      <ServicesSection />
      <BenefitsSection />
      <CtaSection />
      
      <Footer />
    </div>
  );
};

export default Index;
