"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BrainCircuit, Code, Rocket, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

const aboutCards = [
    {
        icon: Code,
        title: "Python & AI/ML",
        description: "Solid background in Python, OOP, and key AI/ML frameworks like YOLOv8 and Pandas.",
    },
    {
        icon: Rocket,
        title: "Full-Stack Development",
        description: "Experience building scalable web applications with React, Node.js, and Firebase.",
    },
    {
        icon: BrainCircuit,
        title: "Problem Solver",
        description: "Driven by a passion for tackling complex challenges and architecting elegant, efficient solutions.",
    },
];

const About = () => {
  return (
    <section id="about" className="relative section-gradient py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate and aspiring Software Engineer specializing in AI, building intelligent systems that solve real-world problems.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {aboutCards.map((card, i) => (
            <motion.div
              key={card.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="glass-card h-full hover:border-primary/80 transition-colors duration-300">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 text-primary rounded-full p-3 w-fit ring-2 ring-primary/20">
                    <card.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="font-heading pt-4">{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
