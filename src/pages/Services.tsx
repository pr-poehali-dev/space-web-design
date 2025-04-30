import React from 'react';
import MainNav from '@/components/MainNav';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RocketIcon, Code, BarChart3, Search, Globe, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from '@/components/ui/motion';
import CosmicBackground from '@/components/CosmicBackground';

const Services = () => {
  const services = [
    {
      icon: <Code className="h-12 w-12 text-cosmic-brightBlue" />,
      title: 'Разработка сайтов',
      description: 'Создаем современные, быстрые и адаптивные сайты с учетом всех требований поисковых систем',
      features: ['Адаптивный дизайн', 'SEO-оптимизация', 'Высокая скорость загрузки']
    },
    {
      icon: <Search className="h-12 w-12 text-cosmic-purple" />,
      title: 'SEO-продвижение',
      description: 'Выводим сайты в топ поисковой выдачи с гарантированным ростом органического трафика',
      features: ['Аудит и оптимизация', 'Рост позиций', 'Увеличение конверсии']
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-cosmic-red" />,
      title: 'Контекстная реклама',
      description: 'Настраиваем таргетированную рекламу с высокой конверсией и минимальной стоимостью клика',
      features: ['Яндекс.Директ', 'Google Ads', 'Аналитика и оптимизация']
    },
    {
      icon: <Globe className="h-12 w-12 text-cosmic-brightBlue" />,
      title: 'Техническая поддержка',
      description: 'Обеспечиваем бесперебойную работу вашего сайта 24/7 с быстрым реагированием на любые проблемы',
      features: ['Мониторинг', 'Обновления', 'Резервное копирование']
    },
    {
      icon: <Cpu className="h-12 w-12 text-cosmic-purple" />,
      title: 'Интеграции и API',
      description: 'Подключаем любые сторонние сервисы и создаем индивидуальные решения для автоматизации',
      features: ['CRM-системы', 'Платежные шлюзы', 'Аналитика']
    },
    {
      icon: <RocketIcon className="h-12 w-12 text-cosmic-red" />,
      title: 'Космический маркетинг',
      description: 'Запускаем комплексные стратегии продвижения для выхода на новые орбиты продаж',
      features: ['Анализ конкурентов', 'Стратегия роста', 'Автоматизация маркетинга']
    },
  ];

  return (
    <div className="min-h-screen bg-cosmic-black text-cosmic-white">
      <CosmicBackground />
      <MainNav />
      
      <div className="container mx-auto py-20 px-4 relative z-10">
        <motion 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cosmic-brightBlue to-cosmic-red bg-clip-text text-transparent">
            Космические решения для земного бизнеса
          </h1>
          <p className="text-xl text-cosmic-gray max-w-3xl mx-auto">
            Запустите свой бизнес на орбиту успеха с помощью наших передовых 
            технологий и стратегий цифрового маркетинга
          </p>
        </motion>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <motion
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-cosmic-darkBlue/80 border border-cosmic-blue/30 backdrop-blur-sm h-full overflow-hidden group hover:border-cosmic-brightBlue/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-center text-cosmic-white group-hover:text-cosmic-brightBlue transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-cosmic-gray text-center mb-6">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-cosmic-lightGray">
                        <div className="w-2 h-2 rounded-full bg-cosmic-brightBlue mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 text-center">
                    <Button variant="outline" className="border-cosmic-blue text-cosmic-white hover:bg-cosmic-blue/20">
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-8 text-cosmic-white">Готовы запустить свой проект?</h2>
          <Button className="bg-cosmic-red hover:bg-cosmic-brightRed text-white px-8 py-6 text-lg">
            Получить бесплатную консультацию
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;
