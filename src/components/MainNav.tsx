
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { RocketIcon, Code, Search, BarChart3, MessageSquare, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MainNav: React.FC = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const navItems = [
    { path: '/', label: 'Главная', icon: <RocketIcon className="w-4 h-4 mr-2" /> },
    { path: '/services', label: 'Услуги', icon: <Code className="w-4 h-4 mr-2" /> },
    { path: '/portfolio', label: 'Портфолио', icon: <BarChart3 className="w-4 h-4 mr-2" /> },
    { path: '/contact', label: 'Контакты', icon: <MessageSquare className="w-4 h-4 mr-2" /> },
  ];

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <div className={cn(
      "sticky top-0 z-50 w-full backdrop-blur-md border-b border-cosmic-blue/30 transition-all duration-300",
      isScrolled ? "bg-cosmic-black/90" : "bg-cosmic-black/80"
    )}>
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center">
          <RocketIcon className="h-8 w-8 text-cosmic-brightBlue animate-float" />
          <span className="ml-2 text-xl font-bold bg-gradient-to-r from-cosmic-brightBlue to-cosmic-red bg-clip-text text-transparent">
            CosmosDev
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
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
        
        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-cosmic-white"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
        
        {/* CTA Button - show on desktop only */}
        <div className="hidden md:block">
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center rounded-md bg-cosmic-red px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-cosmic-brightRed"
          >
            Заказать сайт
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-cosmic-darkBlue/95 backdrop-blur-md border-b border-cosmic-blue/30 py-4">
          <nav className="container flex flex-col space-y-4">
            {navItems.map(item => (
              <Link 
                key={item.path} 
                to={item.path}
                className={cn(
                  "flex items-center px-4 py-3 text-sm font-medium rounded-md transition-colors",
                  location.pathname === item.path 
                    ? "bg-cosmic-blue/20 text-cosmic-brightBlue" 
                    : "text-cosmic-white hover:bg-cosmic-blue/10 hover:text-cosmic-brightBlue"
                )}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="mx-4 flex items-center justify-center rounded-md bg-cosmic-red px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-cosmic-brightRed"
            >
              Заказать сайт
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};

export default MainNav;
