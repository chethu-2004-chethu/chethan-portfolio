import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { GitHubIcon, LinkedInIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-700">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center text-sm text-slate-500 dark:text-slate-400">
        <p>&copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All Rights Reserved.</p>
        <div className="flex items-center space-x-4 mt-4 sm:mt-0">
          <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-indigo-500 transition-colors">
            <GitHubIcon className="w-6 h-6" />
          </a>
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-indigo-500 transition-colors">
            <LinkedInIcon className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
