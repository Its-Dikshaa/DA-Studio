"use client";

import { motion } from "framer-motion";
import { ReactNode, CSSProperties } from "react";

interface RevealProps {
  children?: ReactNode;
  className?: string;
  role?: string;
  "aria-label"?: string;
  style?: CSSProperties;
  as?: keyof React.JSX.IntrinsicElements;
}

export default function Reveal({
  children,
  className = "",
  role,
  "aria-label": ariaLabel,
  style,
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
      className={`reveal is-visible ${className}`}
      role={role}
      aria-label={ariaLabel}
      style={style}
    >
      {children}
    </motion.div>
  );
}
