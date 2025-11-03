"use client";
import { EDUCATION } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section id="education" className="relative section-gradient py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">My academic background and qualifications.</p>
        </motion.div>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="glass-card hover:border-primary/80 transition-colors duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto bg-primary/10 text-primary rounded-full p-4 w-fit mb-4 ring-2 ring-primary/20">
                  <GraduationCap className="w-10 h-10" />
                </div>
                <CardTitle className="font-heading">{EDUCATION.degree}</CardTitle>
                <p className="text-primary font-semibold text-lg">{EDUCATION.institution}</p>
                <p className="text-muted-foreground">{EDUCATION.period}</p>
              </CardHeader>
              <CardContent className="text-center">
                <h4 className="font-semibold mb-4 text-foreground">Relevant Courses:</h4>
                <div className="flex flex-wrap justify-center gap-2">
                  {EDUCATION.courses.map((course, index) => (
                    <Badge key={index} variant="secondary" className="px-3 py-1 text-sm">{course}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
