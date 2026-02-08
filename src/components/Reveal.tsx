import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

const defaultVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const defaultTransition = { duration: 0.6, ease: [0.22, 1, 0.36, 1] };

type RevealProps = {
  children: ReactNode;
  delay?: number;
};

export function Reveal({ children, delay = 0 }: RevealProps) {
  return (
    <motion.div
      variants={defaultVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ ...defaultTransition, delay }}
    >
      {children}
    </motion.div>
  );
}
