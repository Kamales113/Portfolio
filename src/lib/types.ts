import type { LucideIcon } from 'lucide-react';
import type { IconType } from 'react-icons';

export type NavItem = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  links: {
    github?: string;
    demo?: string;
  };
  image: string;
  category: string;
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string[];
};

export type Skill = {
  name: string;
  icon: IconType;
  color: string;
  description: string;
};

export type SkillCategory = {
  name: string;
  skills: Skill[];
};

export type Education = {
  degree: string;
  institution: string;
  period: string;
  courses: string[];
};

export type ContactLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};
