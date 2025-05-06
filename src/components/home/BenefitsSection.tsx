
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitsSection: React.FC = () => {
  const benefits: BenefitProps[] = [
    {
      icon: <CheckCircle2 className="h-6 w-6 text-cosmic-brightBlue" />,
      title: 'Качество кода',
      description: 'Чистый, оптимизированный код, который легко поддерживать'
    },
    {
      icon: <CheckCircle2 className="h-6 w-6 text-cosmic-brightBlue" />,
      title: 'Современные технологии',
      description: 'Используем актуальные фреймворки и библиотеки'
    },
    {
      icon: <CheckCircle2 className="h-6 w-6 text-cosmic-brightBlue" />,
      title: 'Адаптивный дизайн',
      description: 'Сайты отлично выглядят на всех устройствах'
    },
    {
      icon: <CheckCircle2 className="h-6 w-6 text-cosmic-brightBlue" />,
      title: 'Поисковая оптимизация',
      description: 'Сайты соответствуют требованиям SEO из коробки'
    },
  ];

  return (
    <section className="py-20 px-4 relative z-10 bg-cosmic-darkBlue/40">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Почему <span className="bg-gradient-to-r from-cosmic-brightBlue to-cosmic-red bg-clip-text text-transparent">мы?</span>
          </h2>
          <p className="text-cosmic-gray text-lg max-w-2xl mx-auto">
            Наша команда использует инновационные подходы и проверенные технологии для создания эффективных решений
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="bg-cosmic-blue/20 p-3 rounded-full">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-cosmic-white">
                  {benefit.title}
                </h3>
                <p className="text-cosmic-gray">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
