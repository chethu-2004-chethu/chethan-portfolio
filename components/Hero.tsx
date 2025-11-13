import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { PERSONAL_INFO } from '../constants';
import { GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon } from './Icons';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  
  const socialIcons = [
    { href: PERSONAL_INFO.github, Icon: GitHubIcon, label: 'GitHub' },
    { href: PERSONAL_INFO.linkedin, Icon: LinkedInIcon, label: 'LinkedIn' },
    { href: `mailto:${PERSONAL_INFO.email}`, Icon: MailIcon, label: 'Email' },
    { href: `tel:${PERSONAL_INFO.phone}`, Icon: PhoneIcon, label: 'Phone' },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-10">
      <motion.div
        className="text-center max-w-3xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-extrabold text-slate-800 dark:text-slate-100">
          Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">{PERSONAL_INFO.name}</span>
        </motion.h1>
        
        <motion.div variants={itemVariants} className="mt-4 text-xl md:text-2xl font-semibold text-slate-600 dark:text-slate-300">
          <TypeAnimation
            sequence={[
              'Full Stack Developer',
              2000,
              'React & Node.js Enthusiast',
              2000,
              'Computer Science Graduate',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            aria-label="My roles"
          />
        </motion.div>
        
        <motion.p variants={itemVariants} className="mt-6 max-w-2xl mx-auto text-slate-500 dark:text-slate-400">
          A passionate developer from {PERSONAL_INFO.location} with a knack for building robust and scalable web applications.
        </motion.p>
        
        <motion.div variants={itemVariants} className="mt-8 flex justify-center items-center space-x-4">
          {socialIcons.map(({ href, Icon, label }) => (
             <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-200 dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-300 hover:bg-indigo-100 dark:hover:bg-indigo-900 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 transform hover:scale-110"
                aria-label={label}
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
             >
                <Icon className="w-6 h-6" />
             </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
