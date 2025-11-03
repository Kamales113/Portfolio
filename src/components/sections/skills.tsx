"use client";

import { SKILLS_DATA } from '@/lib/data';
import { motion } from 'framer-motion';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const Skills = () => {
  return (
    <section id="skills" className="relative section-gradient py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A collection of technologies I'm proficient with and passionate about.
          </p>
        </motion.div>
        
        <TooltipProvider>
          {SKILLS_DATA.map((category, catIndex) => (
            <div key={catIndex} className="mb-12">
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="font-heading text-2xl font-semibold mb-8 text-center text-primary"
              >
                {category.name}
              </motion.h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-10 justify-items-center">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: (skillIndex * 0.05) + 0.3 }}
                    className="group flex flex-col items-center space-y-3"
                  >
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div
                          className="p-4 bg-background/50 rounded-xl border border-border/50 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_4px_hsl(var(--primary)/0.3)] hover:border-primary/80 cursor-pointer"
                          style={{ color: skill.color }}
                        >
                          <skill.icon className="h-10 w-10" />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{skill.description}</p>
                      </TooltipContent>
                    </Tooltip>
                    <p className="text-sm font-medium text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </TooltipProvider>
      </div>
    </section>
  );
};

export default Skills;
