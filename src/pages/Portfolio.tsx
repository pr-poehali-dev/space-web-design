import React from 'react';
import MainNav from '@/components/MainNav';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import CosmicBackground from '@/components/CosmicBackground';

const Portfolio = () => {
  const projects = [
    {
      title: 'Интернет-магазин электроники',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1000',
      tags: ['E-commerce', 'React', 'Node.js'],
      conversion: '7.4%',
      description: 'Разработка современного интернет-магазина с интеграцией платежных систем и CRM. Оптимизация скорости загрузки и мобильной версии увеличила конверсию на 7.4%.',
    },
    {
      title: 'Корпоративный сайт логистической компании',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000',
      tags: ['Corporate', 'WordPress', 'SEO'],
      conversion: '45%',
      description: 'Редизайн и оптимизация корпоративного сайта. Внедрение системы онлайн-расчёта стоимости доставки увеличило количество заявок на 45%.',
    },
    {
      title: 'Лендинг для IT-школы',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000',
      tags: ['Landing Page', 'HTML/CSS', 'JavaScript'],
      conversion: '60%',
      description: 'Разработка высококонверсионного лендинга для IT-школы. Оптимизация воронки продаж и внедрение системы A/B тестирования увеличило конверсию на 60%.',
    },
    {
      title: 'Сервис бронирования отелей',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000',
      tags: ['Booking System', 'React', 'API'],
      conversion: '32%',
      description: 'Создание сервиса онлайн-бронирования с интерактивным календарем и системой отзывов. Повышение удобства использования увеличило конверсию на 32%.',
    },
    {
      title: 'Медицинский портал',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000',
      tags: ['Healthcare', 'Vue.js', 'MongoDB'],
      conversion: '28%',
      description: 'Разработка медицинского портала с системой онлайн-консультаций и записи к врачу. Оптимизация пользовательского пути увеличила конверсию на 28%.',
    },
    {
      title: 'Агрегатор ресторанов',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000',
      tags: ['Food & Beverage', 'Next.js', 'GraphQL'],
      conversion: '53%',
      description: 'Создание платформы для заказа еды из ресторанов. Внедрение персонализированных рекомендаций увеличило средний чек на 53%.',
    },
  ];

  return (
    <div className="min-h-screen bg-cosmic-black text-cosmic-white">
      <CosmicBackground />
      <MainNav />
      
      <div className="container mx-auto py-20 px-4 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cosmic-brightBlue to-cosmic-red bg-clip-text text-transparent">
            Наши космические проекты
          </h1>
          <p className="text-xl text-cosmic-gray max-w-3xl mx-auto">
            Каждый проект — это новая галактика возможностей для бизнеса наших клиентов.
            Посмотрите, какие результаты мы достигаем.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <Card key={index} className="bg-cosmic-darkBlue/80 border border-cosmic-blue/30 backdrop-blur-sm overflow-hidden group hover:border-cosmic-brightBlue/50 transition-all duration-300">
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2">
                  <Badge className="bg-cosmic-red font-bold">
                    Конверсия: {project.conversion}
                  </Badge>
                </div>
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2 text-cosmic-white group-hover:text-cosmic-brightBlue transition-colors">
                  {project.title}
                </h3>
                <p className="text-cosmic-gray mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="outline" className="border-cosmic-blue/50 text-cosmic-lightGray">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button variant="ghost" className="text-cosmic-brightBlue hover:bg-cosmic-blue/10 px-0">
                  Подробнее о проекте →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-6 text-cosmic-white">Хотите так же?</h2>
          <p className="text-xl text-cosmic-gray max-w-2xl mx-auto mb-8">
            Мы готовы помочь вашему бизнесу достичь космических высот с помощью современных технологий и маркетинговых стратегий.
          </p>
          <Button className="bg-cosmic-red hover:bg-cosmic-brightRed text-white px-8 py-6 text-lg">
            Обсудить ваш проект
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
