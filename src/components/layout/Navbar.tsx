
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { 
  Home, User, FileText, Mail, Menu, X, 
  AtomIcon, BrainCircuit, CircuitBoard 
} from 'lucide-react';

type NavItem = {
  label: string;
  icon: React.ReactNode;
  href: string;
};

const navItems: NavItem[] = [
  { label: 'Home', icon: <Home className="h-5 w-5" />, href: '#home' },
  { label: 'About', icon: <User className="h-5 w-5" />, href: '#about' },
  { label: 'Resume', icon: <FileText className="h-5 w-5" />, href: '#resume' },
  { label: 'Contact', icon: <Mail className="h-5 w-5" />, href: '#contact' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      let currentSection = 'home';
      
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = section.id;
        }
      });
      
      setActiveSection(currentSection);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className={cn(
          "fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center justify-center gap-8 py-6 px-4 glass rounded-full",
          isScrolled && "backdrop-blur-md bg-white/80 shadow-md"
        )}
      >
        <div className="relative flex flex-col gap-8">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className={cn(
                "relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300",
                activeSection === item.href.substring(1)
                  ? "text-white bg-sci-500 shadow-lg"
                  : "text-foreground/70 hover:text-sci-500"
              )}
              title={item.label}
            >
              {item.icon}
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: activeSection === item.href.substring(1) ? 1 : 0 }}
                className="absolute -right-2 -top-1 flex h-4 w-4 items-center justify-center"
              >
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sci-500 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-sci-600"></span>
              </motion.span>
            </a>
          ))}
        </div>
      </motion.nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className={cn(
          "md:hidden fixed top-6 right-6 z-50 p-2 rounded-full transition-all duration-300",
          mobileMenuOpen ? "bg-white text-sci-600" : "glass text-foreground",
        )}
        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
      >
        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{ 
          opacity: mobileMenuOpen ? 1 : 0,
          x: mobileMenuOpen ? 0 : '100%'
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed inset-0 z-40 bg-white/90 backdrop-blur-md flex flex-col justify-center items-center gap-6 md:hidden",
          !mobileMenuOpen && "pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center justify-center space-y-4">
          <AtomIcon className="h-10 w-10 text-sci-500 mb-4 animate-float" />
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className={cn(
                "flex items-center gap-3 px-4 py-2 rounded-full transition-all duration-300",
                activeSection === item.href.substring(1)
                  ? "text-white bg-sci-500 shadow-md"
                  : "text-foreground hover:text-sci-500"
              )}
            >
              {item.icon}
              <span className="font-medium">{item.label}</span>
            </a>
          ))}
        </div>
        
        <div className="absolute bottom-8 flex justify-center gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="w-12 h-12 flex items-center justify-center rounded-full glass-dark"
          >
            <BrainCircuit className="h-6 w-6 text-sci-500" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="w-12 h-12 flex items-center justify-center rounded-full glass-dark"
          >
            <CircuitBoard className="h-6 w-6 text-sci-500" />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
