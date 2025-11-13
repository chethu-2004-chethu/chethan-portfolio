import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { PERSONAL_INFO } from '../constants';
import { MailIcon, PhoneIcon } from './Icons';

const Contact: React.FC = () => {
    
  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for form submission logic
    alert("Thank you for your message! This is a demo form.");
  };

  return (
    <Section id="contact" title="Get in Touch">
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div variants={formVariants}>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
            Have a question or want to work together? Feel free to reach out. I'm open to new opportunities and collaborations.
          </p>
          <div className="space-y-4">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-4 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400">
              <MailIcon className="w-6 h-6 text-indigo-500" />
              <span>{PERSONAL_INFO.email}</span>
            </a>
            <a href={`tel:${PERSONAL_INFO.phone}`} className="flex items-center gap-4 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400">
              <PhoneIcon className="w-6 h-6 text-indigo-500" />
              <span>{PERSONAL_INFO.phone}</span>
            </a>
          </div>
        </motion.div>
        <motion.form 
            onSubmit={handleSubmit} 
            className="space-y-4"
            variants={formVariants}
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
            <input type="text" name="name" id="name" required className="mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
            <input type="email" name="email" id="email" required className="mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
            <textarea name="message" id="message" rows={4} required className="mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
          </div>
          <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-transform hover:scale-105">
            Send Message
          </button>
        </motion.form>
      </div>
    </Section>
  );
};

export default Contact;
