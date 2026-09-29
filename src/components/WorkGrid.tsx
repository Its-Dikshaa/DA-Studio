"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export interface ProjectItem {
  id: string;
  category: "product" | "brand" | "web";
  categoryName: string;
  client: string;
  title: string;
  description: string;
  href: string;
  bgClass: string;
  visualType: "aurora" | "lune" | "terra" | "placeholder";
}

const projects: ProjectItem[] = [
  {
    id: "aurora",
    category: "product",
    categoryName: "Fintech · UI/UX & Design System",
    client: "Aurora",
    title: "Calmer, clearer financial management",
    description: "Re-imagining a high-density wealth dashboard with intentional layout, warmth, and motion.",
    href: "/work/aurora",
    bgClass: "bg-[#bcb4ff]",
    visualType: "aurora",
  },
  {
    id: "lune",
    category: "brand",
    categoryName: "Wellbeing · Brand & Motion",
    client: "Lune",
    title: "A brand language that moves like breathing",
    description: "Creating a soft, kinetic visual identity and product experience for a human wellbeing companion.",
    href: "/work/lune",
    bgClass: "bg-[#d9d2ff]",
    visualType: "lune",
  },
  {
    id: "terra",
    category: "web",
    categoryName: "Hospitality · Web Experience",
    client: "Terra House",
    title: "Discovery platform for slow travel stays",
    description: "Building an editorial discovery web platform with rich tactile graphics and fluid transitions.",
    href: "/work/terra",
    bgClass: "bg-[#f6a29d]",
    visualType: "terra",
  },
];

export default function WorkGrid() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div>
      {/* Category Filters */}
      <div className="flex flex-wrap gap-3 mb-12">
        {[
          { id: "all", label: "All Work" },
          { id: "product", label: "Product Design" },
          { id: "brand", label: "Brand & Motion" },
          { id: "web", label: "Web Development" },
        ].map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`px-4 py-2 rounded-full border text-xs font-mono transition-all ${
              activeFilter === filter.id
                ? "bg-ink text-paper border-ink"
                : "border-ink/20 text-ink/70 hover:border-ink hover:text-ink"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
              className="group block"
            >
              <Link href={project.href}>
                <div
                  className={`relative min-h-[380px] rounded-2xl overflow-hidden p-8 flex flex-col justify-between ${project.bgClass}`}
                >
                  <div className="flex justify-between items-start z-10">
                    <span className="font-mono text-xs uppercase tracking-wider text-ink/80 bg-paper/80 backdrop-blur-sm px-3 py-1 rounded-full border border-ink/10">
                      {project.client}
                    </span>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 45 }}
                      className="w-10 h-10 rounded-full bg-paper text-ink flex items-center justify-center text-xl shadow-md transition-all group-hover:bg-acid"
                    >
                      ↗
                    </motion.div>
                  </div>

                  {/* Visual Art Preview */}
                  <div className="my-auto py-6 flex justify-center items-center">
                    {project.visualType === "aurora" && (
                      <div className="relative w-48 h-60 border-4 border-ink rounded-t-2xl bg-paper p-4 transform rotate-6 shadow-xl transition-transform group-hover:rotate-3 duration-300">
                        <div className="w-16 h-2 bg-ink rounded-full mx-auto mb-4" />
                        <span className="block font-bold text-xl tracking-tight text-ink">
                          ₹ 24,280
                        </span>
                        <div className="h-2 w-full bg-acid my-3 rounded" />
                        <div className="h-2 w-3/4 bg-ink/10 rounded" />
                        <div className="mt-8 font-serif text-2xl font-bold text-coral leading-none -rotate-6">
                          in motion
                        </div>
                      </div>
                    )}

                    {project.visualType === "lune" && (
                      <div className="relative flex items-center justify-center">
                        <div className="w-40 h-40 rounded-full bg-radial from-paper via-[#8f83ff] to-[#403d7b] shadow-2xl transition-transform group-hover:scale-105 duration-300" />
                        <span className="absolute font-serif text-3xl font-bold text-paper -rotate-6">
                          Lune
                        </span>
                      </div>
                    )}

                    {project.visualType === "terra" && (
                      <div className="relative w-52 h-44 bg-ink text-paper p-4 rounded-xl -rotate-3 shadow-xl transition-transform group-hover:rotate-0 duration-300">
                        <span className="font-mono text-[9px] uppercase text-acid">
                          Terra House
                        </span>
                        <b className="block font-serif text-2xl font-normal leading-tight my-2">
                          Slow travel discovery
                        </b>
                        <i className="font-mono text-[9px] text-coral uppercase not-italic">
                          Tactile Web ✺
                        </i>
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-4 flex justify-between items-start gap-4">
                  <div>
                    <span className="block font-mono text-[10px] text-coral uppercase tracking-wider mb-1">
                      {project.categoryName}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight text-ink group-hover:text-coral transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-ink/70 text-sm max-w-md leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
