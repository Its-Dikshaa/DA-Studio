import Reveal from "@/components/Reveal";
import Link from "next/link";

export const metadata = {
  title: "Lune Case Study — DA🌻",
  description: "Lune concept case study for a human wellbeing product.",
};

export default function LunePage() {
  return (
    <article className="min-h-screen bg-paper text-ink">
      <section className="bg-ink text-paper px-6 md:px-16 pt-20 pb-28">
        <Reveal>
          <div className="font-mono text-xs uppercase tracking-wider text-acid mb-6">
            Case Study 02 / Lune Wellbeing
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.93] max-w-5xl mb-8">
            A brand language that moves like breathing.
          </h1>
          <p className="text-paper/70 text-lg md:text-xl max-w-2xl leading-relaxed">
            Crafting a fluid kinetic brand system and intuitive iOS app experience for a daily mindfulness companion.
          </p>
        </Reveal>

        <Reveal delay={0.2} className="mt-16 pt-12 border-t border-paper/15 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <span className="block font-mono text-xs text-coral uppercase mb-2">Client</span>
            <b className="text-sm md:text-base font-bold">Lune Health</b>
          </div>
          <div>
            <span className="block font-mono text-xs text-coral uppercase mb-2">Role</span>
            <b className="text-sm md:text-base font-bold">Brand Identity & Motion</b>
          </div>
          <div>
            <span className="block font-mono text-xs text-coral uppercase mb-2">Timeline</span>
            <b className="text-sm md:text-base font-bold">6 Weeks</b>
          </div>
          <div>
            <span className="block font-mono text-xs text-coral uppercase mb-2">Year</span>
            <b className="text-sm md:text-base font-bold">2026</b>
          </div>
        </Reveal>
      </section>

      <section className="px-6 md:px-16 py-20 bg-[#d9d2ff]">
        <Reveal>
          <div className="min-h-[350px] flex items-center justify-center">
            <div className="w-56 h-56 rounded-full bg-radial from-paper via-[#8f83ff] to-[#403d7b] shadow-2xl flex items-center justify-center">
              <span className="font-serif italic text-4xl text-paper font-bold -rotate-6">
                Lune
              </span>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="px-6 md:px-16 py-24 max-w-5xl mx-auto">
        <Reveal>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8">
            The Concept & Motion
          </h2>
          <p className="text-ink/80 text-lg leading-relaxed mb-8">
            Lune needed to feel alive without feeling chaotic. We developed a kinetic visual identity anchored in organic motion tokens — smooth breathing pulses, gradual color shifts, and tactile micro-feedback.
          </p>
        </Reveal>

        <div className="pt-16 border-t border-ink/15 flex justify-between items-center">
          <Link href="/work/aurora" className="font-mono text-xs uppercase text-ink/70 hover:text-ink">
            ← Previous Case Study
          </Link>
          <Link href="/work/terra" className="font-bold text-lg text-ink hover:text-coral flex items-center gap-2">
            <span>Next: Terra House Case Study</span>
            <span>↗</span>
          </Link>
        </div>
      </section>
    </article>
  );
}
