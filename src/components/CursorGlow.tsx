"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorGlow() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-50 hidden md:block h-64 w-64 rounded-full"
      style={{
        background: "radial-gradient(circle, rgba(214,255,88,0.25) 0%, transparent 70%)",
      }}
      animate={{
        x: mousePosition.x - 128,
        y: mousePosition.y - 128,
      }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 250,
        mass: 0.5,
      }}
    />
  );
}
