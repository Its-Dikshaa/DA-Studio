"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 bg-ink text-paper px-6 md:px-16 pt-16 pb-8 border-t border-paper/10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-16 items-start">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-2xl font-extrabold tracking-tighter"
          >
            <span>DA</span>
            <span className="text-coral">✺</span>
          </Link>
        </div>

        <div>
          <p className="text-paper/70 text-base leading-relaxed max-w-sm">
            Design and development with
            <br />a little more feeling.
          </p>
        </div>

        <div className="flex justify-start md:justify-end">
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, backgroundColor: "#D6FF58", color: "#17231B" }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 rounded-full border border-paper/30 flex items-center justify-center text-xl transition-colors"
            aria-label="Back to top"
          >
            ↑
          </motion.button>
        </div>
      </div>

      <div className="pt-6 border-t border-paper/15 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono uppercase text-paper/60">
        <span>© {new Date().getFullYear()} DA🌻 Studio</span>
        <div className="flex gap-6">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-acid transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-acid transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://behance.net"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-acid transition-colors"
          >
            Behance
          </a>
        </div>
        <span>Made with intent in India</span>
      </div>
    </footer>
  );
}
