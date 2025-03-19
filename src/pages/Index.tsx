
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Section from '@/components/ui/Section';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Resume from '@/components/sections/Resume';
import Contact from '@/components/sections/Contact';

const Index = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href) {
          document.querySelector(href)?.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-background text-foreground overflow-x-hidden"
      >
        {/* Navigation */}
        <Navbar />
        
        {/* Hero Section */}
        <section id="home" className="relative">
          <Hero />
        </section>
        
        {/* About Section */}
        <Section id="about">
          <About />
        </Section>
        
        {/* Resume Section */}
        <Section id="resume">
          <Resume />
        </Section>
        
        {/* Contact Section */}
        <Section id="contact">
          <Contact />
        </Section>
        
        {/* Footer */}
        <footer className="py-8 text-center text-sm text-muted-foreground">
          <div className="container mx-auto">
            <p>© {new Date().getFullYear()} Utkrisht Sharma. All rights reserved.</p>
          </div>
        </footer>
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
