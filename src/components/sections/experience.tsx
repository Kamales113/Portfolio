"use client";
import { EXPERIENCE } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="experience" className="relative section-gradient py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">My professional journey and key contributions.</p>
        </motion.div>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-border/50"></div>
          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative mb-12 flex items-center"
              style={{ flexDirection: index % 2 === 0 ? 'row' : 'row-reverse' }}
            >
              <div className="w-1/2 px-4">
                <Card className={`glass-card hover:border-primary/80 transition-colors duration-300`}>
                  <CardHeader>
                    <CardTitle className="font-heading">{exp.role}</CardTitle>
                    <p className="text-primary font-semibold">{exp.company}</p>
                    <p className="text-sm text-muted-foreground pt-1">{exp.period}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex">
                          <span className="text-primary mr-2">&#8227;</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 z-10">
                <div className="bg-primary/20 text-primary rounded-full p-2 ring-4 ring-background">
                  <Briefcase className="w-6 h-6" />
                </div>
              </div>
              <div className="w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
