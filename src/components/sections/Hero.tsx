
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Atom, BrainCircuit, Code } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-sci-200 rounded-full filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-sci-300 rounded-full filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        
        <div className="grid grid-cols-[repeat(20,5vw)] grid-rows-[repeat(20,5vh)] gap-8 absolute inset-0 opacity-5">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="col-span-1 row-span-1 border-t border-l border-foreground/20"></div>
          ))}
        </div>
      </div>
      
      {/* Main content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center mb-6 gap-3"
          >
            <span className="inline-flex items-center justify-center h-10 w-10 rounded-full glass text-sci-500">
              <Atom className="h-6 w-6" />
            </span>
            <span className="bg-sci-100 text-sci-700 text-sm font-medium px-3 py-1 rounded-full">
              Scientist & Developer
            </span>
            <span className="inline-flex items-center justify-center h-10 w-10 rounded-full glass text-sci-500">
              <Code className="h-6 w-6" />
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
          >
            <span className="block">Utkrisht Sharma</span>
            <span className="text-gradient">AI Scientist & Engineer</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-muted-foreground text-lg md:text-xl max-w-3xl mb-8 leading-relaxed"
          >
            Exploring the intersection of artificial intelligence, software engineering, and data science 
            to build innovative solutions for complex real-world problems.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <a 
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={cn(
                "flex items-center justify-center gap-2 px-6 py-3 rounded-full",
                "bg-sci-500 text-white hover:bg-sci-600 transition-colors",
                "font-medium shadow-md hover:shadow-lg"
              )}
            >
              Discover My Work
              <BrainCircuit className="h-5 w-5" />
            </a>
            
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={cn(
                "flex items-center justify-center gap-2 px-6 py-3 rounded-full",
                "glass border border-sci-200 hover:bg-sci-500/10 transition-colors",
                "font-medium"
              )}
            >
              Get In Touch
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.a
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.6, 
          delay: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5
        }}
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center text-sm text-foreground/60 hover:text-sci-500 transition-colors"
      >
        <span className="mb-2">Scroll down</span>
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </motion.a>
    </div>
  );
};

export default Hero;
