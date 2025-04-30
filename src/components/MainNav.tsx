import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { RocketIcon, Code, Search, BarChart3, MessageSquare } from 'lucide-react';

const MainNav: React.FC = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Главная', icon: <RocketIcon className="w-4 h-4 mr-2" /> },
    { path: '/services', label: 'Услуги', icon: <Code className="w-4 h-4 mr-2" /> },
    { path: '/portfolio', label: 'Портфолио', icon: <BarChart3 className="w-4 h-4 mr-2" /> },
    { path: '/contact', label: 'Контакты', icon: <MessageSquare className="w-4 h-4 mr-2" /> },
  ];

  return (
    <div className="sticky top-0 z-50 w-full backdrop-blur-md bg-cosmic-black/80 border-b border-cosmic-blue/30">
      <div className="container flex h-16 items-center">
        <Link to="/" className="flex items-center mr-8">
          <RocketIcon className="h-8 w-8 text-cosmic-brightBlue animate-float" />
          <span className="ml-2 text-xl font-bold bg-gradient-to-r from-cosmic-brightBlue to-cosmic-red bg-clip-text text-transparent">
            CosmosDev
          </span>
        </Link>
        
        <NavigationMenu className="mx-auto">
          <NavigationMenuList>
            {navItems.map(item => (
              <NavigationMenuItem key={item.path}>
                <Link to={item.path}>
                  <NavigationMenuLink 
                    className={cn(
                      "flex items-center px-4 py-2 text-sm font-medium transition-colors hover:text-cosmic-brightBlue",
                      location.pathname === item.path 
                        ? "text-cosmic-brightBlue" 
                        : "text-cosmic-white"
                    )}
                  >
                    {item.icon}
                    {item.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        
        <div className="ml-auto">
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center rounded-md bg-cosmic-red px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-cosmic-brightRed"
          >
            Заказать сайт
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
