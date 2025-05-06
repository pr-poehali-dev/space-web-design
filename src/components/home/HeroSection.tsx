
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Planet from '@/components/Planet';

const HeroSection: React.FC = () => {
  return (
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
              Мы создаем инновационные веб-решения, которые помогают бизнесу выйти на новую орбиту роста и привлечения клиентов
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
  );
};

export default HeroSection;
