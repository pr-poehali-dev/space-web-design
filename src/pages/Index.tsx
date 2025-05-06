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
    { value: '200+', label: 'Реализованных проектов' },
    { value: '95%', label: 'Довольных клиентов' },
    { value: '12 лет', label: 'На рынке IT' },
    { value: '24/7', label: 'Поддержка клиентов' },
  ];

  const benefits = [
    {
      icon: <CheckCircle2 className=