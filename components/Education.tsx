import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { EDUCATION_INFO } from '../constants';

const Education: React.FC = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    },
  };
  return (
    <Section id="education" title="Education">
      <div className="flex justify-center">
        <motion.div 
          variants={cardVariants}
          className="bg-white dark:bg-slate-800/50 p-8 rounded-lg shadow-lg max-w-xl w-full text-center"
        >
          <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            {EDUCATION_INFO.degree}
          </h3>
          <p className="text-lg mt-2 font-medium text-slate-700 dark:text-slate-300">
            {EDUCATION_INFO.institution}
          </p>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            {EDUCATION_INFO.duration}
          </p>
          <p className="mt-1 font-semibold text-slate-600 dark:text-slate-300">
            {EDUCATION_INFO.cgpa}
          </p>
        </motion.div>
      </div>
    </Section>
  );
};

export default Education;