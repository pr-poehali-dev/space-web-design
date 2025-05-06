
import React from 'react';
import { RocketIcon, Search, BarChart3 } from 'lucide-react';
import ServiceCard from './ServiceCard';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <RocketIcon className="h-12 w-12 text-cosmic-red" />,
      title: 'Разработка сайтов',
      description: 'Создаем современные, быстрые и адаптивные сайты с учетом всех требований поисковых систем',
      delay: '0.1s'
    },
    {
      icon: <Search className="h-12 w-12 text-cosmic-purple" />,
      title: 'SEO-продвижение',
      description: 'Выводим сайты в топ поисковой выдачи с гарантированным ростом органического трафика',
      delay: '0.2s'
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-cosmic-brightBlue" />,
      title: 'Контекстная реклама',
      description: 'Настраиваем таргетированную рекламу с высокой конверсией и минимальной стоимостью клика',
      delay: '0.3s'
    }
  ];

  return (
    <section className="py-20 px-4 relative z-10">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Наши <span className="bg-gradient-to-r from-cosmic-brightBlue to-cosmic-red bg-clip-text text-transparent">космические</span> услуги
          </h2>
          <p className="text-cosmic-gray text-lg max-w-2xl mx-auto">
            Мы предлагаем полный спектр услуг по разработке и продвижению веб-проектов любой сложности
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              animationDelay={service.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
