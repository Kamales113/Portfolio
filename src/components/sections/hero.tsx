"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-[700px] flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-background z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto px-4 md:px-6"
      >
        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="font-heading text-4xl md:text-6xl font-extrabold tracking-tight mb-4"
        >
          Hi, I’m Kamales —{" "}
          <span
            className="tech-gradient"
            style={{
              display: "inline-block",
              background: "linear-gradient(90deg, #4f9eff, #a86eff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
              lineHeight: 1.05,
            }}
          >
            AI Engineer & Full-Stack Developer
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-10"
        >
          Designing intelligent, scalable, and human-centered solutions.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto transition-all duration-300 hover:neon-glow"
          >
            <Link href="#projects">
              <Eye className="mr-2 h-4 w-4" />
              View Projects
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full sm:w-auto transition-all duration-300 hover:bg-primary/10 hover:text-primary"
          >
            <Link
              href="https://drive.google.com/file/d/1_zrqDI_s39pCmd-LzMqbuExvUsk9hwIA/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Link>
          </Button>
        </motion.div>
      </motion.div>

      {/* Styles */}
      <style jsx>{`
        @keyframes move {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              hsl(var(--border) / 0.3) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              hsl(var(--border) / 0.3) 1px,
              transparent 1px
            );
          background-size: 60px 60px;
          animation: move 15s linear infinite;
        }

        .tech-gradient {
          display: inline-block !important;
          background: linear-gradient(90deg, #4f9eff, #a86eff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
        }
      `}</style>
    </section>
  );
};

export default Hero;
