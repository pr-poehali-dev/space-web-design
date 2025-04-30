import React from 'react';
import MainNav from '@/components/MainNav';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { RocketIcon, Code, Search, BarChart3, CheckCircle2 } from 'lucide-react';
import CosmicBackground from '@/components/CosmicBackground';
import Planet from '@/components/Planet';
import { motion } from '@/components/ui/motion';

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
      <section className="pt-20 pb-32 px-4 relative">
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Badge className="bg-cosmic-blue/20 text-cosmic-brightBlue hover:bg-cosmic-blue/30 px-4 py-2">
                Разработка • SEO • Реклама
              </Badge>
              
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Запустите свой бизнес в 
                <span className="block bg-gradient-to-r from-cosmic-brightBlue to-cosmic-red bg-clip-text text-transparent">
                  цифровую галактику
                </span>
              </h1>
              
              <p className="text-xl text-cosmic-gray">
                Мы создаем высококонверсионные сайты с фокусом на привлечение клиентов 
                и увеличение продаж. Наши проекты показывают конверсию до 60%.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-cosmic-red hover:bg-cosmic-brightRed text-white">
                  Обсудить проект
                </Button>
                <Button size="lg" variant="outline" className="border-cosmic-blue text-cosmic-white hover:bg-cosmic-blue/20">
                  Смотреть портфолио
                </Button>
              </div>
              
              {/* Stats in single row with shadow and hover animations */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-6 w-full">
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ y: -5, scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                    className="bg-cosmic-darkBlue/50 backdrop-blur-sm p-4 rounded-lg border border-cosmic-blue/20 
                      shadow-[0_0_15px_rgba(41,121,255,0.2)] hover:shadow-[0_0_20px_rgba(41,121,255,0.4)] 
                      transition-all duration-300 flex flex-col items-center justify-center"
                  >
                    <span className="text-2xl md:text-3xl font-bold text-cosmic-white bg-gradient-to-r from-cosmic-brightBlue to-cosmic-red bg-clip-text text-transparent">
                      {stat.value}
                    </span>
                    <span className="text-cosmic-gray text-center whitespace-nowrap">{stat.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <Planet className="w-full h-full max-w-md mx-auto" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Preview */}
      <section className="py-20 px-4 relative bg-cosmic-darkBlue/50">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cosmic-brightBlue to-cosmic-red bg-clip-text text-transparent">
              Космические услуги для земного бизнеса
            </h2>
            <p className="text-xl text-cosmic-gray max-w-3xl mx-auto">
              Используем передовые технологии, чтобы создавать для вас сайты, 
              которые не только потрясающе выглядят, но и эффективно работают
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-cosmic-darkBlue/80 border border-cosmic-blue/30 backdrop-blur-sm overflow-hidden group hover:border-cosmic-brightBlue/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center bg-cosmic-blue/20 group-hover:scale-110 transition-transform duration-300">
                    <Code className="h-8 w-8 text-cosmic-brightBlue" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center text-cosmic-white group-hover:text-cosmic-brightBlue transition-colors">
                  Разработка сайтов
                </h3>
                <p className="text-cosmic-gray text-center">
                  От лендингов до сложных веб-приложений. 
                  Создаем сайты с высокой конверсией и адаптивным дизайном.
                </p>
                <div className="mt-6 text-center">
                  <Button variant="ghost" className="text-cosmic-brightBlue hover:bg-cosmic-blue/10">
                    Подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-cosmic-darkBlue/80 border border-cosmic-blue/30 backdrop-blur-sm overflow-hidden group hover:border-cosmic-brightBlue/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center bg-cosmic-blue/20 group-hover:scale-110 transition-transform duration-300">
                    <Search className="h-8 w-8 text-cosmic-purple" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center text-cosmic-white group-hover:text-cosmic-brightBlue transition-colors">
                  SEO-продвижение
                </h3>
                <p className="text-cosmic-gray text-center">
                  Выводим сайты в топ поисковой выдачи и увеличиваем 
                  органический трафик для вашего бизнеса.
                </p>
                <div className="mt-6 text-center">
                  <Button variant="ghost" className="text-cosmic-brightBlue hover:bg-cosmic-blue/10">
                    Подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-cosmic-darkBlue/80 border border-cosmic-blue/30 backdrop-blur-sm overflow-hidden group hover:border-cosmic-brightBlue/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center bg-cosmic-blue/20 group-hover:scale-110 transition-transform duration-300">
                    <BarChart3 className="h-8 w-8 text-cosmic-red" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center text-cosmic-white group-hover:text-cosmic-brightBlue transition-colors">
                  Контекстная реклама
                </h3>
                <p className="text-cosmic-gray text-center">
                  Настраиваем рекламные кампании с высокой 
                  конверсией и низкой стоимостью клика.
                </p>
                <div className="mt-6 text-center">
                  <Button variant="ghost" className="text-cosmic-brightBlue hover:bg-cosmic-blue/10">
                    Подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" className="border-cosmic-blue text-cosmic-white hover:bg-cosmic-blue/20">
              Все услуги
            </Button>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cosmic-brightBlue to-cosmic-red bg-clip-text text-transparent">
              Почему выбирают нас
            </h2>
            <p className="text-xl text-cosmic-gray max-w-3xl mx-auto">
              Наш подход ориентирован на результат. Мы не просто создаем красивые сайты —
              мы создаем инструменты для привлечения клиентов и роста бизнеса
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start p-6 bg-cosmic-darkBlue/30 rounded-lg border border-cosmic-blue/10 hover:border-cosmic-blue/30 transition-all">
                <div className="mr-4 mt-1">{benefit.icon}</div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-cosmic-white">{benefit.title}</h3>
                  <p className="text-cosmic-gray">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Case Studies / Featured Projects */}
      <section className="py-20 px-4 relative bg-cosmic-darkBlue/50">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cosmic-brightBlue to-cosmic-red bg-clip-text text-transparent">
              Наши успешные проекты
            </h2>
            <p className="text-xl text-cosmic-gray max-w-3xl mx-auto">
              За каждым проектом стоит история успеха. Взгляните на результаты, 
              которых мы достигли для наших клиентов
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-cosmic-darkBlue/80 border border-cosmic-blue/30 backdrop-blur-sm overflow-hidden group hover:border-cosmic-brightBlue/50 transition-all duration-300">
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1000" 
                  alt="E-commerce project" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2">
                  <Badge className="bg-cosmic-red font-bold">
                    Конверсия: 7.4%
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-cosmic-white group-hover:text-cosmic-brightBlue transition-colors">
                  Интернет-магазин электроники
                </h3>
                <p className="text-cosmic-gray mb-4">
                  Увеличение конверсии и среднего чека после редизайна и оптимизации.
                </p>
                <Button variant="ghost" className="text-cosmic-brightBlue hover:bg-cosmic-blue/10 px-0">
                  Подробнее →
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-cosmic-darkBlue/80 border border-cosmic-blue/30 backdrop-blur-sm overflow-hidden group hover:border-cosmic-brightBlue/50 transition-all duration-300">
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000" 
                  alt="Corporate website" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2">
                  <Badge className="bg-cosmic-red font-bold">
                    Конверсия: 45%
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-cosmic-white group-hover:text-cosmic-brightBlue transition-colors">
                  Корпоративный сайт
                </h3>
                <p className="text-cosmic-gray mb-4">
                  Внедрение системы онлайн-расчёта стоимости увеличило заявки на 45%.
                </p>
                <Button variant="ghost" className="text-cosmic-brightBlue hover:bg-cosmic-blue/10 px-0">
                  Подробнее →
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-cosmic-darkBlue/80 border border-cosmic-blue/30 backdrop-blur-sm overflow-hidden group hover:border-cosmic-brightBlue/50 transition-all duration-300">
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000" 
                  alt="Landing page" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2">
                  <Badge className="bg-cosmic-red font-bold">
                    Конверсия: 60%
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-cosmic-white group-hover:text-cosmic-brightBlue transition-colors">
                  Лендинг IT-школы
                </h3>
                <p className="text-cosmic-gray mb-4">
                  Оптимизация воронки продаж и A/B тестирование увеличило конверсию на 60%.
                </p>
                <Button variant="ghost" className="text-cosmic-brightBlue hover:bg-cosmic-blue/10 px-0">
                  Подробнее →
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" className="border-cosmic-blue text-cosmic-white hover:bg-cosmic-blue/20">
              Все проекты
            </Button>
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
      
      {/* Footer */}
      <footer className="py-16 px-4 relative bg-cosmic-darkBlue/80 border-t border-cosmic-blue/30">
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center mb-6">
                <RocketIcon className="h-8 w-8 text-cosmic-brightBlue" />
                <span className="ml-2 text-xl font-bold bg-gradient-to-r from-cosmic-brightBlue to-cosmic-red bg-clip-text text-transparent">
                  CosmosDev
                </span>
              </div>
              <p className="text-cosmic-gray">
                Создаем сайты, которые приносят клиентов и увеличивают продажи
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4 text-cosmic-white">Услуги</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-cosmic-gray hover:text-cosmic-brightBlue transition-colors">Разработка сайтов</a></li>
                <li><a href="#" className="text-cosmic-gray hover:text-cosmic-brightBlue transition-colors">SEO-продвижение</a></li>
                <li><a href="#" className="text-cosmic-gray hover:text-cosmic-brightBlue transition-colors">Контекстная реклама</a></li>
                <li><a href="#" className="text-cosmic-gray hover:text-cosmic-brightBlue transition-colors">Техническая поддержка</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4 text-cosmic-white">О компании</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-cosmic-gray hover:text-cosmic-brightBlue transition-colors">О нас</a></li>
                <li><a href="#" className="text-cosmic-gray hover:text-cosmic-brightBlue transition-colors">Портфолио</a></li>
                <li><a href="#" className="text-cosmic-gray hover:text-cosmic-brightBlue transition-colors">Блог</a></li>
                <li><a href="#" className="text-cosmic-gray hover:text-cosmic-brightBlue transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4 text-cosmic-white">Контакты</h4>
              <ul className="space-y-2">
                <li className="text-cosmic-gray">г. Москва, ул. Космонавтов, 42</li>
                <li className="text-cosmic-gray">+7 (495) 123-45-67</li>
                <li><a href="mailto:info@cosmosdev.ru" className="text-cosmic-gray hover:text-cosmic-brightBlue transition-colors">info@cosmosdev.ru</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-cosmic-blue/30 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-cosmic-gray text-sm">
              © 2025 CosmosDev. Все права защищены.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-cosmic-gray hover:text-cosmic-brightBlue transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-cosmic-gray hover:text-cosmic-brightBlue transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
