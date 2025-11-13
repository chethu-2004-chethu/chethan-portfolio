import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = '' }) => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    },
  };

  return (
    <motion.section
      id={id}
      className={`py-16 md:py-24 ${className}`}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      aria-labelledby={`${id}-heading`}
    >
      <div className="container mx-auto max-w-5xl">
        <h2 id={`${id}-heading`} className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-slate-800 dark:text-slate-200">
          {title}
        </h2>
        {children}
      </div>
    </motion.section>
  );
};

export default Section;
