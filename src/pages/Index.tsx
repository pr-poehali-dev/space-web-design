import React from 'react';
import MainNav from '@/components/MainNav';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { RocketIcon, Code, Search, BarChart3, CheckCircle2 } from 'lucide-react';
import CosmicBackground from '@/components/CosmicBackground';
import Planet from '@/components/Planet';
import Footer from '@/components/Footer';

const Index = () => {
  const stats = [
    { value: '200+', label: ''Реализованных проектов' },
    { value: '95%', label: ''Довольных клиентов' },
    { value: '12 лет', label: ''На рынке IT' },
    { value: '24/7', label: ''Поддержка клиентов' },
  ];

  const benefits = [
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
    <div className="min-h-screen bg-cosmic-black text-cosmic-white">
      <CosmicBackground />
      <MainNav />
      
      {/* Hero Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <Badge className="px-4 py-2 text-base bg-gradient-to-r from-cosmic-brightBlue to-cosmic-purple">
                Разработка современных сайтов
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Покоряйте <span className="bg-gradient-to-r from-cosmic-brightBlue to-cosmic-red bg-clip-text text-transparent">цифровой космос</span> вместе с нами
              </h1>
              <p className="text-xl text-cosmic-gray">
                Мы создаем инновационные веб-решения, которые поморгают бизнесу выйти на новую орбиту роста и привлечения клиентов
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-cosmic-red hover:bg-cosmic-brightRed text-white px-8 py-6 text-lg">
                  Заказать сайт
                </Button>
                <Button variant="outline" className="border-cosmic-blue text-cosmic-white hover:bg-cosmic-blue/20 px-8 py-6 text-lg">
                  Наши работы
                </Button>
              </div>
            </div>
            
            <div className="relative h-[400px] lg:h-[500px] animate-fade-in">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Planet 
                  color="#2979FF"
                  size={100}
                  className="animate-float"
                  hasRing={true}
                  ringColor="rgba(41, 121, 255, 0.3)"
                />
              </div>
              <div className="absolute top-1/4 right-1/4">
                <Planet 
                  color="#FF2975"
                  size={60}
                  className="animate-float"
                />
              </div>
              <div className="absolute bottom-1/4 left-1/4">
                <Planet 
                  color="#8A2BE2"
                  size={40}
                  className="animate-float"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 px-4 relative z-10 bg-cosmic-darkBlue/40">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cosmic-brightBlue to-cosmic-red bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-cosmic-gray">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Services Section */}
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
            <Card className="bg-cosmic-darkBlue/80 border border-cosmic-blue/30 backdrop-blur-sm overflow-hidden group hover:border-cosmic-brightBlue/50 transition-all duration-300 animate-fade-in" style={{animationDelay: "0.1s"}}>
              <CardContent className="p-8">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  <RocketIcon className="h-12 w-12 text-cosmic-red" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-cosmic-white group-hover:text-cosmic-brightBlue transition-colors">
                  Разработка сайтов
                </h3>
                <p className="text-cosmic-gray mb-6">
                  Создаем современные, быстрые и адаптивные сайты с учетом всех требований поисковых систем
                </p>
                <Button variant="ghost" className="text-cosmic-brightBlue hover:bg-cosmic-blue/10 px-0">
                  Подробнее →
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-cosmic-darkBlue/80 border border-cosmic-blue/30 backdrop-blur-sm overflow-hidden group hover:border-cosmic-brightBlue/50 transition-all duration-300 animate-fade-in" style={{animationDelay: "0.2s"}}>
              <CardContent className="p-8">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Search className="h-12 w-12 text-cosmic-purple" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-cosmic-white group-hover:text-cosmic-brightBlue transition-colors">
                  SEO-продвижение
                </h3>
                <p className="text-cosmic-gray mb-6">
                  Выводим сайты в топ поисковой выдачи с гарантированным ростом органического трафика
                </p>
                <Button variant="ghost" className="text-cosmic-brightBlue hover:bg-cosmic-blue/10 px-0">
                  Подробнее →
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-cosmic-darkBlue/80 border border-cosmic-blue/30 backdrop-blur-sm overflow-hidden group hover:border-cosmic-brightBlue/50 transition-all duration-300 animate-fade-in" style={{animationDelay: "0.3s"}}>
              <CardContent className="p-8">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="h-12 w-12 text-cosmic-brightBlue" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-cosmic-white group-hover:text-cosmic-brightBlue transition-colors">
                  Контекстная реклама
                </h3>
                <p className="text-cosmic-gray mb-6">
                  Настраиваем таргетированную рекламу с высокой конверсией и минимальной стоимостью клика
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
      <section className="py-20 px-4 relative z-10 bg-cosmic-darkBlue/40">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Почему <span className="bg-gradient-to-r from-cosmic-brightBlue to-cosmic-red bg-clip-text text-transparent">мы?</span>
            </h2>
            <p className="text-cosmic-gray text-lg max-w-2xl mx-auto">
              Наша команда использует инновационные подходы и провереннные технологии для создания эффективных решений
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
      
      {/* CTA Section */}
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
      
      <Footer />
    </div>
  );
};

export default Index;