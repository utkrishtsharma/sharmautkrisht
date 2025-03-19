
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type SectionProps = {
  id: string;
  className?: string;
  children: React.ReactNode;
};

const Section = ({ id, className, children }: SectionProps) => {
  return (
    <section 
      id={id}
      className={cn(
        "min-h-screen w-full flex flex-col items-center justify-center py-16 px-4 md:px-6 lg:px-8",
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-6xl mx-auto"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;
