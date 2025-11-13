import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { PROJECTS } from '../constants';
import { GitHubIcon } from './Icons';
import { Project } from '../types';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const { title, tech, description, githubUrl } = project;

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
      className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden flex flex-col h-full"
    >
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-slate-200">{title}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t) => (
            <span key={t} className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300 text-xs font-semibold px-2.5 py-0.5 rounded-full">
              {t}
            </span>
          ))}
        </div>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
          {description}
        </p>
      </div>
      <div className="p-6 bg-slate-50 dark:bg-slate-800/50 mt-auto">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
        >
          View on GitHub
          <GitHubIcon className="w-5 h-5 ml-2" />
        </a>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Projects">
      <div className="grid md:grid-cols-2 gap-8">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
