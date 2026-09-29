"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
}

export default function Reveal({
  children,
  className = "",
  delay = 0,
  yOffset = 24,
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.2, 0.7, 0.2, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
