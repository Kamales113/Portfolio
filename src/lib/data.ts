import type { NavItem, Project, Experience, Education, SkillCategory } from '@/lib/types';
import {
  Github,
  Linkedin,
  Mail,
  FileText,
} from 'lucide-react';
import {
  SiPython,
  SiJavascript,
  SiCplusplus,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiMysql,
  SiGit,
  SiOpencv,
  SiPandas,
  SiNumpy
} from 'react-icons/si';
import { PlaceHolderImages } from './placeholder-images';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    title: 'Helmet Violation & License Plate Detection',
    description: 'A real-time computer vision system to detect helmet violations and recognize license plates using YOLOv8.',
    tags: ['YOLOv8', 'OpenCV', 'Python', 'Computer Vision'],
    links: {
      github: 'https://github.com/Kamales113/Automatic-Helmet-detection-',
    },
    image: PlaceHolderImages.find(p => p.id === "project-helmet")?.imageUrl || "",
    category: 'AI/ML',
  },
  {
    title: 'Meetease - Smart Meeting Room Booking',
    description: 'A web application for booking meeting rooms, built with React and Firebase for real-time data management.',
    tags: ['React', 'Firebase', 'Web App'],
    links: {
      github: 'https://github.com/Kamales113/Meeting-Maestro',
    },
    image: PlaceHolderImages.find(p => p.id === "project-meeting")?.imageUrl || "",
    category: 'Web App',
  },
  {
    title: 'Travel Analyst Itinerary Recommender',
    description: 'A personalized travel itinerary recommender system that leverages Python and external APIs to suggest destinations.',
    tags: ['Python', 'API Integration', 'Recommender System'],
    links: {
      github: 'https://github.com/kamales-m/travel-analyst',
    },
    image: PlaceHolderImages.find(p => p.id === "project-travel")?.imageUrl || "",
    category: 'Data',
  },
  {
    title: 'Student Report & Ranking System',
    description: 'An automated data analysis tool for student reports, utilizing Python with NumPy and Pandas for processing.',
    tags: ['Python', 'NumPy', 'Pandas', 'Data Analysis'],
    links: {
      github: 'https://github.com/kamales-m/student-ranking-system',
    },
    image: PlaceHolderImages.find(p => p.id === "project-student")?.imageUrl || "",
    category: 'Data',
  },
];

export const EXPERIENCE: Experience[] = [
    {
    role: 'Junior Research Fellow',
    company: 'Evolve Robot Lab',
    period: 'Jun 2024 - Jul 2024',
    description: [
      'Contributed to the development of a conversational AI chatbot for automated customer support.',
      'Worked with natural language processing (NLP) techniques to improve chatbot accuracy.',
      'Assisted in research and implementation of machine learning models for conversational systems.',
    ],
  },
  {
    role: 'MERN Trainee',
    company: 'Technologies Global',
    period: 'Feb 2025 - May 2025',
    description: [
      'Developed and maintained web applications using the MERN stack (MongoDB, Express.js, React, Node.js).',
      'Collaborated with a team of developers in an agile environment to deliver high-quality software.',
      'Gained hands-on experience in building RESTful APIs and responsive user interfaces.',
    ],
  },
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    name: 'Programming Languages',
    skills: [
      { name: 'Python', icon: SiPython, color: '#3776AB', description: 'Core language for AI/ML and backend services.' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', description: 'Web development and server-side scripting.' },
      { name: 'C++', icon: SiCplusplus, color: '#00599C', description: 'For performance-critical applications.' },
    ],
  },
  {
    name: 'Frameworks & Libraries',
    skills: [
      { name: 'React', icon: SiReact, color: '#61DAFB', description: 'Building modern UI/UX and native apps.' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#68A063', description: 'Fast and scalable server-side applications.' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF', description: 'Production-ready React applications.' },
      { name: 'OpenCV', icon: SiOpencv, color: '#5C3EE8', description: 'Real-time computer vision tasks.' },
      { name: 'Pandas', icon: SiPandas, color: '#150458', description: 'Data manipulation and analysis.' },
      { name: 'NumPy', icon: SiNumpy, color: '#013243', description: 'Numerical computing in Python.' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', description: 'Rapid UI development.' },
    ],
  },
  {
    name: 'Databases & Tools',
    skills: [
      { name: 'Firebase', icon: SiFirebase, color: '#FFA611', description: 'Real-time backend and database.' },
      { name: 'MongoDB', icon: SiMongodb, color: '#4DB33D', description: 'Scalable NoSQL database solutions.' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1', a: 'Reliable relational database management.' },
      { name: 'Git', icon: SiGit, color: '#F05032', description: 'Version control and collaboration.' },
    ],
  },
];


export const EDUCATION: Education = {
  degree: 'B.Tech in Artificial Intelligence & Data Science',
  institution: 'SRM Valliammai Engineering College',
  period: '2021 – 2025',
  courses: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'Machine Learning', 'Software Engineering', 'Database Management Systems'],
};


export const CONTACT_LINKS = [
  {
    label: 'kamales.m@example.com',
    href: 'mailto:kamales.m@example.com',
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kamales-m-9ab776244',
    icon: Linkedin,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Kamales113',
    icon: Github,
  },
  {
    label: 'Resume',
    href: 'https://drive.google.com/file/d/1_zrqDI_s39pCmd-LzMqbuExvUsk9hwIA/view?usp=drive_link',
    icon: FileText,
  },
];
