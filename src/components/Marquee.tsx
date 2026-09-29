"use client";

import { motion } from "framer-motion";

interface MarqueeProps {
  items: string[];
}

export default function Marquee({ items }: MarqueeProps) {
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="relative z-10 overflow-hidden bg-ink py-4 text-paper border-y border-ink">
      <motion.div
        className="flex whitespace-nowrap gap-8 text-xs font-mono tracking-wider uppercase items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 25,
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div key={index} className="flex items-center gap-8">
            <span>{item}</span>
            <b className="text-acid font-extrabold text-lg">✺</b>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
