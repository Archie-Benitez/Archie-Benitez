import { useState, useEffect } from 'react';
import { Home, User, Briefcase, Mail, Menu, X, Download, ExternalLink } from 'lucide-react';
import hero1 from '@/assets/hero-1.jpg';

interface SocialNavbarProps {
  isVisible: boolean;
}

interface MenuItem {
  icon: React.ComponentType<any>;
  label: string;
  href: string;
  download?: boolean;
}

const SocialNavbar = ({ isVisible }: SocialNavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isVisible) setIsMenuOpen(false);
  }, [isVisible]);

  const navItems: MenuItem[] = [
    { icon: Home, label: 'Home', href: '#home' },
    { icon: User, label: 'About', href: '#about' },
    { icon: Briefcase, label: 'Projects', href: '#projects' },
    { icon: Mail, label: 'Connect', href: '#connect' },
  ];

  const extraItems: MenuItem[] = [
    { icon: Download, label: 'Download CV', href: '/Archie-Benitez-CV.pdf', download: true },
    { icon: ExternalLink, label: 'Know Me More', href: 'https://your-other-website.com' },
  ];

  const menuItemsMobile: MenuItem[] = [...navItems, ...extraItems];

  const handleNavClick = (href: string) => {
    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector<HTMLElement>(href);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleMenuItemClick = (item: MenuItem) => {
    if (item.href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (item.href.startsWith('#')) {
      const section = document.querySelector<HTMLElement>(item.href);
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    } else if (item.download) {
      const link = document.createElement('a');
      link.href = item.href;
      link.download = '';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(item.href, '_blank', 'noopener,noreferrer');
    }
    setIsMenuOpen(false);
  };

  const MenuItemButton = ({ icon: Icon, label, href, download }: MenuItem) => (
    <button
      onClick={() => handleMenuItemClick({ icon: Icon, label, href, download })}
      className="flex items-center space-x-3 px-4 py-3 rounded-lg text-foreground hover:bg-accent/50 transition-all duration-300 font-medium w-full text-left"
    >
      <Icon size={20} />
      <span>{label}</span>
    </button>
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      <div className="glass-navbar">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Profile + Name + Always Online */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img
                  src={hero1}
                  alt="Profile"
                  className="w-10 h-10 rounded-full object-cover border-2 border-primary/20 transition-all duration-300 hover:scale-110"
                />
                <div className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-success rounded-full border-2 border-white transition-all duration-300"></div>
              </div>
              <div className="flex flex-col">
                <h2 className="font-semibold text-foreground transition-all duration-300">Archie</h2>
                <p className="text-sm text-muted-foreground -mt-0.5">Always Online</p>
              </div>
            </div>

            {/* Desktop Nav Items */}
            {screenWidth >= 768 && (
              <div className="hidden md:flex items-center space-x-2">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    className="flex items-center space-x-1 px-3 py-2 rounded-lg text-foreground hover:bg-accent/50 transition-all duration-300 font-medium hover:scale-105"
                  >
                    <item.icon size={18} />
                    <span>{item.label}</span>
                  </button>
                ))}

                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="ml-4 p-2 rounded-lg hover:bg-accent/50 transition-all duration-300"
                  aria-label="Toggle menu"
                  aria-expanded={isMenuOpen}
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            )}

            {/* Mobile Hamburger */}
            {screenWidth < 768 && (
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 rounded-lg hover:bg-accent/50 transition-all duration-300"
                  aria-label="Toggle menu"
                  aria-expanded={isMenuOpen}
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            )}
          </div>

          {/* Hamburger Menu */}
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="py-4 space-y-2 border-t border-border/20">
              {(screenWidth >= 768 ? extraItems : menuItemsMobile).map((item) => (
                <MenuItemButton key={item.label} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SocialNavbar;
