import type { Skill, Project, Certification, Education } from './types';
import { 
  PythonIcon, JavaIcon, JavaScriptIcon, SQLIcon, ReactIcon, NextjsIcon, NodejsIcon, 
  HTMLIcon, CSSIcon, BootstrapIcon, MySQLIcon, OracleSQLIcon, PostmanIcon, GitIcon, 
  GitHubIcon, AWSIcon, LinuxIcon, AgileIcon 
} from './components/Icons';

export const PERSONAL_INFO = {
  name: "Chethan K",
  location: "Bengaluru, Karnataka",
  email: "chethan.k5611@gmail.com",
  phone: "+91 99001 22713",
  linkedin: "https://linkedin.com/in/chethan-k-758114254",
  github: "https://github.com/chethu-2004-chethu",
  resumeUrl: "https://drive.google.com/file/d/1y6JlA2DhqDSuoMGAyTEzaY7oLX-StN6x/view?usp=sharing"
};

export const PROFESSIONAL_SUMMARY = `Recent Computer Science graduate skilled in React.js, Node.js, and MySQL. Passionate about creating responsive and high-performing web applications, integrating front-end and back-end systems, and collaborating with cross-functional teams.`;

export const SKILLS: { category: string, items: Skill[] }[] = [
  {
    category: "Languages",
    items: [
      { name: "Python", Icon: PythonIcon, level: 85 },
      { name: "Java", Icon: JavaIcon, level: 90 },
      { name: "JavaScript", Icon: JavaScriptIcon, level: 90 },
      { name: "SQL", Icon: SQLIcon, level: 80 },
    ],
  },
  {
    category: "Frameworks/Libraries",
    items: [
      { name: "ReactJS", Icon: ReactIcon, level: 95 },
      { name: "Next.js", Icon: NextjsIcon, level: 85 },
      { name: "Node.js", Icon: NodejsIcon, level: 80 },
    ],
  },
  {
    category: "Web Technologies",
    items: [
      { name: "HTML", Icon: HTMLIcon, level: 95 },
      { name: "CSS", Icon: CSSIcon, level: 90 },
      { name: "Bootstrap", Icon: BootstrapIcon, level: 80 },
    ],
  },
  {
    category: "Databases & Tools",
    items: [
      { name: "MySQL", Icon: MySQLIcon, level: 85 },
      { name: "Oracle SQL", Icon: OracleSQLIcon, level: 75 },
      { name: "Postman", Icon: PostmanIcon, level: 90 },
      { name: "Git", Icon: GitIcon, level: 85 },
      { name: "GitHub", Icon: GitHubIcon, level: 90 },
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "AWS (EC2)", Icon: AWSIcon, level: 70 },
      { name: "Linux", Icon: LinuxIcon, level: 75 },
      { name: "Agile/SDLC", Icon: AgileIcon, level: 80 },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    title: "AI-Powered Freelancing and Skill Enhancement Platform",
    tech: ["ReactJS", "Spring Boot", "Flask", "MySQL"],
    description: "Built a full-stack freelancing platform for resume analysis and skill-based learning. Designed REST APIs for user and project management. Enhanced user experience through automated feedback and client-freelancer transparency.",
    githubUrl: "https://github.com/chethu-2004-chethu",
  },
  {
    title: "Online Course Enrollment Management System",
    tech: ["Java", "Spring Boot", "Hibernate", "JSP", "MySQL"],
    description: "Built a secure course enrollment platform with authentication and CRUD features. Implemented MVC architecture and database integration for a robust backend system.",
    githubUrl: "https://github.com/chethu-2004-chethu",
  },
];

export const CERTIFICATIONS: Certification[] = [
    { name: "Full Stack Java Development", issuer: "JSpiders", year: 2025 },
    { name: "AI & ML Engineer", issuer: "Rooman Technologies", year: 2025 },
    { name: "Walmart Advanced Software Engineering Simulation", issuer: "Forage", year: 2025 },
];

export const EDUCATION_INFO: Education = {
    degree: "B.E in Computer Science",
    institution: "S.J.M Institute of Technology, Chitradurga",
    duration: "Dec 2021 – May 2025",
    cgpa: "CGPA: 8.18",
};

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];