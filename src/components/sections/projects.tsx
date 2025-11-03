"use client";

import { useState } from 'react';
import { PROJECTS } from '@/lib/data';
import type { Project } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const ProjectCard = ({ project }: { project: Project }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ duration: 0.4, ease: 'easeInOut' }}
    className="group"
  >
    <Card className="glass-card h-full flex flex-col overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(100,181,246,0.25)] hover:border-primary/80">
      {project.image && (
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
        </div>
      )}
      <CardContent className="p-6 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="font-heading text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        <div className="flex gap-4 mt-auto">
          {project.links.github && (
            <Button asChild variant="outline" size="sm" className="hover:bg-primary/10 hover:text-primary flex-1">
              <Link href={project.links.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Link>
            </Button>
          )}
          {project.links.demo && (
            <Button asChild size="sm" className="hover:neon-glow flex-1">
              <Link href={project.links.demo} target="_blank" rel="noopener noreferrer">
                Live Demo
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  </motion.div>
);


const Projects = () => {
  return (
    <section id="projects" className="relative section-gradient py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A selection of my work. Each project is a story of a challenge, a solution, and learning.
          </p>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            <AnimatePresence>
              {PROJECTS.map((project, index) => (
                <ProjectCard key={`${project.title}-${index}`} project={project} />
              ))}
            </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
