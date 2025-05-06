
import React from 'react';
import { Button } from '@/components/ui/button';

const CtaSection: React.FC = () => {
  return (
    <section className="py-20 px-4 relative z-10">
      <div className="container mx-auto max-w-4xl text-center animate-fade-in-up">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Готовы к <span className="bg-gradient-to-r from-cosmic-brightBlue to-cosmic-red bg-clip-text text-transparent">космическому</span> взлету?
        </h2>
        <p className="text-cosmic-gray text-lg mb-8 max-w-2xl mx-auto">
          Наша команда поможет вашему бизнесу достичь новых высот с помощью современных веб-технологий и маркетинговых стратегий
        </p>
        <Button className="bg-cosmic-red hover:bg-cosmic-brightRed text-white px-8 py-6 text-lg">
          Начать проект
        </Button>
      </div>
    </section>
  );
};

export default CtaSection;
