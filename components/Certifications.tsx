import React from 'react';
import Section from './Section';
import { CERTIFICATIONS } from '../constants';
import { motion } from 'framer-motion';

const Certifications: React.FC = () => {
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };
  return (
    <Section id="certifications" title="Certifications">
      <div className="max-w-2xl mx-auto">
        <div className="space-y-6">
            {CERTIFICATIONS.map((cert, index) => (
                <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="p-4 bg-white dark:bg-slate-800/50 rounded-lg shadow-md"
                >
                    <h3 className="font-semibold text-lg text-slate-800 dark:text-slate-200">{cert.name}</h3>
                    <p className="text-slate-600 dark:text-slate-400">{cert.issuer} - {cert.year}</p>
                </motion.div>
            ))}
        </div>
      </div>
    </Section>
  );
};

export default Certifications;
