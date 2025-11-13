import React from 'react';

export interface Skill {
  name: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  level: number; // Percentage from 0 to 100
}

export interface Project {
  title: string;
  tech: string[];
  description: string;
  githubUrl: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: number;
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  cgpa: string;
}
