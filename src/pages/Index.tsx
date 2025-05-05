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