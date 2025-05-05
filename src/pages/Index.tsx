
import React from 'react';
import MainNav from '@/components/MainNav';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { RocketIcon, Code, Search, BarChart3, CheckCircle2 } from 'lucide-react';
import CosmicBackground from '@/components/CosmicBackground';
import Planet from '@/components/Planet';
import { motion } from '@/components/ui/motion';
import Footer from '@/components/Footer';

const Index = () => {
  const stats = [
    { value: '200+', label: 'Реализованных проектов' },
    { value: '95%', label: 'Довольных клиентов' },
    { value: '12 лет', label: 'На рынке IT' },
    { value: '24/7', label: 'Поддержка клиентов' },
  ];

  const benefits = [
    {
      icon: <CheckCircle2 className="h-6 w-6 text-cosmic-brightBlue" />,
      title: 'Высокая конверсия',
      description: 'Создаем сайты, которые конвертируют посетителей в клиентов'
    },
    {
      icon: <CheckCircle2 className="h-6 w-6 text-cosmic-brightBlue" />,
      title: 'Адаптивный дизайн',
      description: 'Ваш сайт будет отлично выглядеть на любом устройстве'
    },
    {
      icon: <CheckCircle2 className="h-6 w-6 text-cosmic-brightBlue" />,
      title: 'SEO-оптимизация',
      description: 'Все наши сайты оптимизированы для поисковых систем'
    },
    {
      icon: <CheckCircle2 className="h-6 w-6 text-cosmic-brightBlue" />,
      title: 'Быстрая загрузка',
      description: 'Оптимизированный код для максимальной производительности'
    },
    {
      icon: <CheckCircle2 className="h-6 w-6 text-cosmic-brightBlue" />,
      title: 'Интеграции',
      description: 'Подключаем любые сервисы и системы аналитики'
    },
    {
      icon: <CheckCircle2 className="h-6 w-6 text-cosmic-brightBlue" />,
      title: 'Поддержка',
      description: 'Обеспечиваем техническую поддержку 24/7'
    },
  ];

  return (
    <div className="min-h-screen bg-cosmic-black text-cosmic-white">
      <CosmicBackground />
      <MainNav />
      
      {/* Hero Section */}
      <section className="relative pt-20 md:pt-24 lg:pt-32 pb-16 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <div 
                className="opacity-0 animate-in" 
                style={{transform: 'translateY(0)', animation: 'fadeInUp 0.5s forwards'}}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Космические <span className="bg-gradient-to-r from-cosmic-brightBlue to-cosmic-red bg-clip-text text-transparent">технологии</span> для земного бизнеса
                </h1>
                <p className="text-xl text-cosmic-gray mb-8 max-w-xl">
                  Мы создаем сайты, которые не только выглядят потрясающе, но и приносят реальные результаты для вашего бизнеса
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-cosmic-red hover:bg-cosmic-brightRed text-white px-8">
                    Заказать сайт
                  </Button>
                  <Button size="lg" variant="outline" className="border-cosmic-blue text-cosmic-white hover:bg-cosmic-blue/20">
                    Наши работы
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div
                className="opacity-0 transition-opacity duration-700 delay-200"
                style={{animation: 'fadeIn 0.7s 0.2s forwards'}}
              >
                <div className="relative flex justify-center items-center">
                  <div className="absolute w-full h-full bg-gradient-to-r from-cosmic-purple/20 to-cosmic-brightBlue/20 blur-3xl rounded-full opacity-50"></div>
                  <Planet 
                    color="#2979FF" 
                    size={120} 
                    className="absolute top-10 right-20 md:right-40"
                    hasRing={true}
                  />
                  <Planet 
                    color="#E41E45" 
                    size={80} 
                    className="absolute -bottom-10 left-20"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?auto=format&fit=crop&q=80&w=600" 
                    alt="Космические технологии" 
                    className="rounded-lg shadow-[0_0_50px_rgba(41,121,255,0.3)] max-w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-cosmic-darkBlue/50 backdrop-blur-sm rounded-lg border border-cosmic-blue/30 transform transition-all opacity-0"
                style={{
                  animation: `fadeInUp 0.5s ${index * 0.1}s forwards`
                }}
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cosmic-brightBlue to-cosmic-red bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-cosmic-gray">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-cosmic-darkBlue text-cosmic-brightBlue px-4 py-1 text-sm font-medium rounded-full">
              Наши услуги
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cosmic-white">
              Что мы <span className="bg-gradient-to-r from-cosmic-brightBlue to-cosmic-red bg-clip-text text-transparent">предлагаем</span>
            </h2>
            <p className="text-xl text-cosmic-gray max-w-2xl mx-auto">
              Полный спектр услуг по созданию и продвижению вашего онлайн-присутствия
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-cosmic-darkBlue/80 border border-cosmic-blue/30 backdrop-blur-sm overflow-hidden group hover:border-cosmic-brightBlue/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="mb-6 rounded-full bg-cosmic-blue/20 w-14 h-14 flex items-center justify-center group-hover:bg-cosmic-blue/40 transition-colors">
                  <Code className="h-6 w-6 text-cosmic-brightBlue" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-cosmic-white">Разработка сайтов</h3>
                <p className="text-cosmic-gray mb-6">
                  Создаем современные, адаптивные и быстрые сайты, которые отлично выглядят на всех устройствах
                </p>
                <Button variant="ghost" className="text-cosmic-brightBlue hover:bg-cosmic-blue/10 px-0">
                  Подробнее →
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-cosmic-darkBlue/80 border border-cosmic-blue/30 backdrop-blur-sm overflow-hidden group hover:border-cosmic-brightBlue/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="mb-6 rounded-full bg-cosmic-blue/20 w-14 h-14 flex items-center justify-center group-hover:bg-cosmic-blue/40 transition-colors">
                  <Search className="h-6 w-6 text-cosmic-brightBlue" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-cosmic-white">SEO-продвижение</h3>
                <p className="text-cosmic-gray mb-6">
                  Выводим ваш сайт в топ поисковой выдачи, увеличивая органический трафик и конверсию
                </p>
                <Button variant="ghost" className="text-cosmic-brightBlue hover:bg-cosmic-blue/10 px-0">
                  Подробнее →
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-cosmic-darkBlue/80 border border-cosmic-blue/30 backdrop-blur-sm overflow-hidden group hover:border-cosmic-brightBlue/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="mb-6 rounded-full bg-cosmic-blue/20 w-14 h-14 flex items-center justify-center group-hover:bg-cosmic-blue/40 transition-colors">
                  <BarChart3 className="h-6 w-6 text-cosmic-brightBlue" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-cosmic-white">Аналитика и маркетинг</h3>
                <p className="text-cosmic-gray mb-6">
                  Настраиваем системы аналитики и помогаем оптимизировать маркетинговую стратегию
                </p>
                <Button variant="ghost" className="text-cosmic-brightBlue hover:bg-cosmic-blue/10 px-0">
                  Подробнее →
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-cosmic-darkBlue text-cosmic-brightBlue px-4 py-1 text-sm font-medium rounded-full">
                Преимущества
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cosmic-white">
                Почему клиенты выбирают <span className="bg-gradient-to-r from-cosmic-brightBlue to-cosmic-red bg-clip-text text-transparent">нас</span>
              </h2>
              <p className="text-xl text-cosmic-gray mb-8">
                Мы объединяем технологии, дизайн и маркетинг, чтобы создать для вас уникальное решение
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex">
                    <div className="mr-4 mt-1">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-cosmic-white">{benefit.title}</h3>
                      <p className="text-cosmic-gray">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div 
                className="opacity-0 transition-opacity duration-700"
                style={{animation: 'fadeIn 0.7s forwards'}}
              >
                <div className="absolute w-full h-full bg-gradient-to-r from-cosmic-purple/20 to-cosmic-brightBlue/20 blur-3xl rounded-full opacity-50"></div>
                <img 
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89f394?auto=format&fit=crop&q=80&w=600" 
                  alt="Наши преимущества" 
                  className="rounded-lg shadow-[0_0_50px_rgba(228,30,69,0.3)] max-w-full h-auto relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto p-8 md:p-12 bg-gradient-to-r from-cosmic-darkBlue/90 to-cosmic-blue/20 rounded-xl border border-cosmic-blue/30 text-center backdrop-blur-sm">
            <RocketIcon className="h-16 w-16 mx-auto mb-6 text-cosmic-brightBlue animate-float" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cosmic-white">
              Готовы вывести ваш бизнес на новую орбиту?
            </h2>
            <p className="text-xl text-cosmic-gray mb-8 max-w-2xl mx-auto">
              Запишитесь на бесплатную консультацию, и мы поможем определить наилучшую
              стратегию для вашего проекта
            </p>
            <Button size="lg" className="bg-cosmic-red hover:bg-cosmic-brightRed text-white px-8 py-6 text-lg">
              Бесплатная консультация
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
