"use client";

import { useEffect, useRef, ReactNode, CSSProperties } from "react";

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
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      role={role}
      aria-label={ariaLabel}
      style={style}
    >
      {children}
    </div>
  );
}
