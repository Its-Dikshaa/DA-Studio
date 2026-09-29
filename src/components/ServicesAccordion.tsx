"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ServiceItem {
  number: string;
  title: string;
  description: string;
  deliverables: string;
}

interface ServicesAccordionProps {
  services: ServiceItem[];
}

export default function ServicesAccordion({ services }: ServicesAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="border-t border-ink/20 divide-y divide-ink/20">
      {services.map((service, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="py-2">
            <button
              onClick={() => toggle(index)}
              className="w-full py-8 grid grid-cols-[auto_1fr_auto] items-center gap-6 text-left focus:outline-none group"
            >
              <span className="font-mono text-xs text-coral">{service.number}</span>
              <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight group-hover:text-coral transition-colors">
                {service.title}
              </h3>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-3xl font-light text-ink/80"
              >
                +
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pb-8 grid grid-cols-1 md:grid-cols-2 gap-8 pl-0 md:pl-12">
                    <p className="text-ink/80 text-sm md:text-base leading-relaxed">
                      {service.description}
                    </p>
                    <span className="font-mono text-xs uppercase text-ink/60 self-end">
                      Deliverables: {service.deliverables}
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
