
import React, { ReactNode } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  animationDelay?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon, 
  title, 
  description, 
  animationDelay = "0s" 
}) => {
  return (
    <Card className="bg-cosmic-darkBlue/80 border border-cosmic-blue/30 backdrop-blur-sm overflow-hidden group hover:border-cosmic-brightBlue/50 transition-all duration-300 animate-fade-in" style={{animationDelay}}>
      <CardContent className="p-8">
        <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-4 text-cosmic-white group-hover:text-cosmic-brightBlue transition-colors">
          {title}
        </h3>
        <p className="text-cosmic-gray mb-6">
          {description}
        </p>
        <Button variant="ghost" className="text-cosmic-brightBlue hover:bg-cosmic-blue/10 px-0">
          Подробнее →
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
