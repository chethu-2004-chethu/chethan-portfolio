import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { SKILLS } from '../constants';
import { Skill } from '../types';

const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => {
  const { name, Icon, level } = skill;

  const barVariants = {
    hidden: { width: 0 },
    visible: {
      width: `${level}%`,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="w-full">
      <div className="flex items-center mb-2">
        <Icon className="w-6 h-6 mr-3 text-indigo-500" />
        <span className="font-medium text-slate-700 dark:text-slate-300">{name}</span>
      </div>
      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
        <motion.div
          className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2.5 rounded-full"
          variants={barVariants}
          aria-valuenow={level}
          aria-valuemin={0}
          aria-valuemax={100}
          role="progressbar"
          aria-label={`${name} skill level`}
        />
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <Section id="skills" title="Technical Skills">
      <div className="space-y-12">
        {SKILLS.map((skillCategory) => (
          <motion.div 
            key={skillCategory.category} 
            className="p-6 bg-white dark:bg-slate-800/50 rounded-lg shadow-lg"
            variants={categoryVariants}
          >
            <h3 className="text-xl font-semibold mb-6 text-slate-800 dark:text-slate-200 text-center md:text-left">
              {skillCategory.category}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {skillCategory.items.map((skill) => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
