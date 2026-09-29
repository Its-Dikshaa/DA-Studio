"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // Simulate form submission delay & validation
      await new Promise((resolve) => setTimeout(resolve, 1200));

      setStatusMessage({
        text: "Lovely. Your note is on its way — we’ll reply in 1–2 working days.",
        type: "success",
      });
      form.reset();
    } catch {
      setStatusMessage({
        text: "Could not send this just now. Please email hello@da-studio.in instead.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-6 w-full max-w-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="grid gap-2">
          <label className="text-xs font-bold uppercase tracking-wider text-ink">
            Your Name <b className="text-coral">*</b>
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Jane Doe"
            className="w-full bg-transparent border-b border-ink/40 py-2.5 text-sm outline-none focus:border-coral transition-colors placeholder:text-ink/30"
          />
        </div>
        <div className="grid gap-2">
          <label className="text-xs font-bold uppercase tracking-wider text-ink">
            Email Address <b className="text-coral">*</b>
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="jane@company.com"
            className="w-full bg-transparent border-b border-ink/40 py-2.5 text-sm outline-none focus:border-coral transition-colors placeholder:text-ink/30"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="grid gap-2">
          <label className="text-xs font-bold uppercase tracking-wider text-ink">
            Service Focus
          </label>
          <select
            name="service"
            defaultValue="all"
            className="w-full bg-transparent border-b border-ink/40 py-2.5 text-sm outline-none focus:border-coral transition-colors cursor-pointer"
          >
            <option value="all">Full Product / Web Design</option>
            <option value="ux">UX Strategy & Research</option>
            <option value="web">Web Design & Build</option>
            <option value="brand">Brand Systems & Motion</option>
          </select>
        </div>
        <div className="grid gap-2">
          <label className="text-xs font-bold uppercase tracking-wider text-ink">
            Estimated Budget
          </label>
          <select
            name="budget"
            defaultValue="medium"
            className="w-full bg-transparent border-b border-ink/40 py-2.5 text-sm outline-none focus:border-coral transition-colors cursor-pointer"
          >
            <option value="small">$10k – $25k</option>
            <option value="medium">$25k – $50k</option>
            <option value="large">$50k+</option>
          </select>
        </div>
      </div>

      <div className="grid gap-2">
        <label className="text-xs font-bold uppercase tracking-wider text-ink">
          Tell us about the project <b className="text-coral">*</b>
        </label>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="What problem are you solving, what is the timeline, and where do you feel stuck?"
          className="w-full bg-transparent border-b border-ink/40 py-2.5 text-sm outline-none focus:border-coral transition-colors resize-y placeholder:text-ink/30"
        />
      </div>

      <AnimatePresence>
        {statusMessage && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={`text-sm font-bold p-3 rounded-lg ${
              statusMessage.type === "success"
                ? "bg-acid/30 text-ink border border-acid"
                : "bg-coral/20 text-coral border border-coral"
            }`}
          >
            {statusMessage.text}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-fit px-8 py-4 bg-ink text-paper rounded-full text-xs font-extrabold uppercase tracking-wider flex items-center gap-4 hover:bg-coral transition-colors disabled:opacity-50"
      >
        <span>{isSubmitting ? "Sending..." : "Send it over"}</span>
        <span className="text-acid text-base">↗</span>
      </motion.button>
    </form>
  );
}
