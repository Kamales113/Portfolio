"use client";

import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  el?: keyof JSX.IntrinsicElements;
  className?: string;
  once?: boolean;
}

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const AnimatedText = ({
  text,
  el: Wrapper = "p",
  className,
  once = true,
}: AnimatedTextProps) => {
  return (
    <Wrapper className={className}>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once }}
        variants={defaultVariants}
        aria-hidden
      >
        {text.split(" ").map((word, i) => (
          <motion.span key={i} variants={defaultVariants} className="inline-block">
            {word.split("").map((char, j) => (
              <motion.span key={j} variants={defaultVariants} className="inline-block">
                {char}
              </motion.span>
            ))}
            <span className="inline-block">&nbsp;</span>
          </motion.span>
        ))}
      </motion.span>
    </Wrapper>
  );
};

export default AnimatedText;
