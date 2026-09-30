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
  as: Component = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

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
      { threshold: 0.05, rootMargin: "50px 0px" }
    );

    observer.observe(el);

    // Safety fallback: Ensure element is visible after short delay even if IntersectionObserver event was delayed
    const timer = setTimeout(() => {
      if (el && !el.classList.contains("is-visible")) {
        el.classList.add("is-visible");
      }
    }, 300);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  const Element = Component as any;

  return (
    <Element
      ref={ref}
      className={`reveal ${className}`}
      role={role}
      aria-label={ariaLabel}
      style={style}
    >
      {children}
    </Element>
  );
}
