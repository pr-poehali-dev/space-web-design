import React from 'react';
import MainNav from '@/components/MainNav';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { PhoneIcon, MapPinIcon, MailIcon, MessageSquare } from 'lucide-react';
import CosmicBackground from '@/components/CosmicBackground';
import Footer from '@/components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen bg-cosmic-black text-cosmic-white">
      <CosmicBackground />
      <MainNav />
      
      <div className="container mx-auto py-20 px-4 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cosmic-brightBlue to-cosmic-red bg-clip-text text-transparent">
            Установите связь с нашей галактикой
          </h1>
          <p className="text-xl text-cosmic-gray max-w-3xl mx-auto">
            Мы всегда на связи и готовы обсудить ваш проект. 
            Выберите удобный способ коммуникации или заполните форму обратной связи.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-8">
            <Card className="bg-cosmic-darkBlue/80 border border-cosmic-blue/30 backdrop-blur-sm overflow-hidden hover:border-cosmic-brightBlue/50 transition-all duration-300">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-cosmic-white">Свяжитесь с нами</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-cosmic-blue/20 p-3 rounded-full mr-4">
                      <PhoneIcon className="h-5 w-5 text-cosmic-brightBlue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-cosmic-white">Телефон</h3>
                      <p className="text-cosmic-gray">+7 (495) 123-45-67</p>
                      <p className="text-cosmic-gray">+7 (495) 987-65-43</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-cosmic-blue/20 p-3 rounded-full mr-4">
                      <MailIcon className="h-5 w-5 text-cosmic-brightBlue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-cosmic-white">Email</h3>
                      <p className="text-cosmic-gray">info@cosmosdev.ru</p>
                      <p className="text-cosmic-gray">support@cosmosdev.ru</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-cosmic-blue/20 p-3 rounded-full mr-4">
                      <MapPinIcon className="h-5 w-5 text-cosmic-brightBlue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-cosmic-white">Адрес</h3>
                      <p className="text-cosmic-gray">г. Москва, ул. Космонавтов, д. 42</p>
                      <p className="text-cosmic-gray">БЦ «Галактика», 15 этаж</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-cosmic-blue/20 p-3 rounded-full mr-4">
                      <MessageSquare className="h-5 w-5 text-cosmic-brightBlue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-cosmic-white">Мессенджеры</h3>
                      <div className="flex space-x-4 mt-2">
                        <div className="w-10 h-10 rounded-full bg-cosmic-blue/20 flex items-center justify-center">
                          <span className="text-lg">📱</span>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-cosmic-blue/20 flex items-center justify-center">
                          <span className="text-lg">💬</span>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-cosmic-blue/20 flex items-center justify-center">
                          <span className="text-lg">✈️</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="relative p-1 rounded-xl bg-gradient-to-r from-cosmic-brightBlue via-cosmic-purple to-cosmic-red">
              <Card className="bg-cosmic-darkBlue p-6 rounded-lg h-full">
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold mb-4 text-cosmic-white">Приходите на консультацию</h3>
                  <p className="text-cosmic-gray mb-4">
                    Запишитесь на бесплатную консультацию и обсудите ваш проект с нашими экспертами.
                  </p>
                  <Button className="w-full bg-cosmic-red hover:bg-cosmic-brightRed text-white">
                    Записаться на консультацию
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <Card className="bg-cosmic-darkBlue/80 border border-cosmic-blue/30 backdrop-blur-sm overflow-hidden hover:border-cosmic-brightBlue/50 transition-all duration-300">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-cosmic-white">Отправьте сообщение</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm text-cosmic-lightGray">Ваше имя</label>
                    <Input 
                      id="name" 
                      className="bg-cosmic-blue/10 border-cosmic-blue/30 focus:border-cosmic-brightBlue text-cosmic-white" 
                      placeholder="Иван Иванов"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm text-cosmic-lightGray">Email</label>
                    <Input 
                      id="email" 
                      type="email" 
                      className="bg-cosmic-blue/10 border-cosmic-blue/30 focus:border-cosmic-brightBlue text-cosmic-white" 
                      placeholder="ivan@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm text-cosmic-lightGray">Телефон</label>
                  <Input 
                    id="phone" 
                    className="bg-cosmic-blue/10 border-cosmic-blue/30 focus:border-cosmic-brightBlue text-cosmic-white" 
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm text-cosmic-lightGray">Тема сообщения</label>
                  <Input 
                    id="subject" 
                    className="bg-cosmic-blue/10 border-cosmic-blue/30 focus:border-cosmic-brightBlue text-cosmic-white" 
                    placeholder="Разработка сайта"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-cosmic-lightGray">Сообщение</label>
                  <Textarea 
                    id="message" 
                    rows={5} 
                    className="bg-cosmic-blue/10 border-cosmic-blue/30 focus:border-cosmic-brightBlue text-cosmic-white resize-none" 
                    placeholder="Расскажите о вашем проекте..."
                  />
                </div>
                
                <Button className="w-full bg-cosmic-red hover:bg-cosmic-brightRed text-white py-6">
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;