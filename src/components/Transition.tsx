
import React from 'react';
import { motion } from 'framer-motion';

type TransitionProps = {
  children: React.ReactNode;
  className?: string;
};

const Transition = ({ children, className = '' }: TransitionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Transition;
