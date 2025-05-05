
import React from 'react';
import { RocketIcon } from 'lucide-react';

const Footer: React.FC = () => {
  return (
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
              <li><a href="/services" className="text-cosmic-gray hover:text-cosmic-brightBlue transition-colors">Разработка сайтов</a></li>
              <li><a href="/services" className="text-cosmic-gray hover:text-cosmic-brightBlue transition-colors">SEO-продвижение</a></li>
              <li><a href="/services" className="text-cosmic-gray hover:text-cosmic-brightBlue transition-colors">Контекстная реклама</a></li>
              <li><a href="/services" className="text-cosmic-gray hover:text-cosmic-brightBlue transition-colors">Техническая поддержка</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 text-cosmic-white">О компании</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-cosmic-gray hover:text-cosmic-brightBlue transition-colors">О нас</a></li>
              <li><a href="/portfolio" className="text-cosmic-gray hover:text-cosmic-brightBlue transition-colors">Портфолио</a></li>
              <li><a href="/services" className="text-cosmic-gray hover:text-cosmic-brightBlue transition-colors">Услуги</a></li>
              <li><a href="/contact" className="text-cosmic-gray hover:text-cosmic-brightBlue transition-colors">Контакты</a></li>
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
  );
};

export default Footer;
