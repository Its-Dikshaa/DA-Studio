"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/work", label: "Work", num: "01" },
  { href: "/services", label: "Services", num: "02" },
  { href: "/about", label: "About", num: "03" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 flex h-20 items-center justify-between px-6 md:px-16 bg-paper/90 backdrop-blur-md border-b border-ink/10 transition-all">
        {/* Brand Logo */}
        <Link
          href="/"
          className="group flex items-center gap-1 font-sans text-2xl font-extrabold tracking-tighter"
          onClick={() => setIsOpen(false)}
        >
          <span>DA</span>
          <span className="text-coral text-2xl leading-none inline-block transition-transform duration-300 group-hover:rotate-45">
            ✺
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 ml-16">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-xs font-bold tracking-wide transition-colors ${
                  isActive ? "text-ink" : "text-ink/70 hover:text-ink"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-ink"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center gap-2 text-xs font-extrabold group"
        >
          <span>Let&apos;s talk</span>
          <span className="text-coral text-lg transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
            ↗
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-ink origin-center block"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-ink block"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-ink origin-center block"
          />
        </button>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-30 flex flex-col bg-acid pt-28 px-6 pb-10 md:hidden"
          >
            <nav className="flex flex-col gap-6 my-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex justify-between items-center text-4xl font-extrabold tracking-tight border-b border-ink/20 pb-4"
                >
                  <span>{link.label}</span>
                  <span className="font-mono text-xs tracking-normal opacity-70">
                    {link.num}
                  </span>
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="flex justify-between items-center text-4xl font-extrabold tracking-tight border-b border-ink/20 pb-4 text-coral"
              >
                <span>Start a project</span>
                <span className="font-mono text-xs tracking-normal opacity-70">
                  04
                </span>
              </Link>
            </nav>

            <div className="pt-8 border-t border-ink/20 flex justify-between items-center font-mono text-xs uppercase">
              <span>DA🌻 Studio</span>
              <span>Made with intent</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
