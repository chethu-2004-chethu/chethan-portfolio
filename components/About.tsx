import React from 'react';
import Section from './Section';
import { PROFESSIONAL_SUMMARY } from '../constants';
import { motion } from 'framer-motion';

const About: React.FC = () => {
    const textVariant = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
    };

    return (
        <Section id="about" title="About Me">
            <motion.p 
              variants={textVariant}
              className="text-center text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed"
            >
                {PROFESSIONAL_SUMMARY}
            </motion.p>
        </Section>
    );
};

export default About;
