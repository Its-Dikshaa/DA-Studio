import Reveal from "@/components/Reveal";
import Link from "next/link";

export const metadata = {
  title: "Terra House Case Study — DA🌻",
  description: "Terra House concept case study for travel and stay discovery.",
};

export default function TerraPage() {
  return (
    <article className="min-h-screen bg-paper text-ink">
      <section className="bg-ink text-paper px-6 md:px-16 pt-20 pb-28">
        <Reveal>
          <div className="font-mono text-xs uppercase tracking-wider text-acid mb-6">
            Case Study 03 / Terra House
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.93] max-w-5xl mb-8">
            Discovery platform for slow travel stays.
          </h1>
          <p className="text-paper/70 text-lg md:text-xl max-w-2xl leading-relaxed">
            Designing and engineering an editorial discovery web platform with rich typography, tactile graphics, and fluid page transitions.
          </p>
        </Reveal>

        <Reveal delay={0.2} className="mt-16 pt-12 border-t border-paper/15 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <span className="block font-mono text-xs text-coral uppercase mb-2">Client</span>
            <b className="text-sm md:text-base font-bold">Terra Stays</b>
          </div>
          <div>
            <span className="block font-mono text-xs text-coral uppercase mb-2">Role</span>
            <b className="text-sm md:text-base font-bold">Web Design & Next.js Build</b>
          </div>
          <div>
            <span className="block font-mono text-xs text-coral uppercase mb-2">Timeline</span>
            <b className="text-sm md:text-base font-bold">10 Weeks</b>
          </div>
          <div>
            <span className="block font-mono text-xs text-coral uppercase mb-2">Year</span>
            <b className="text-sm md:text-base font-bold">2026</b>
          </div>
        </Reveal>
      </section>

      <section className="px-6 md:px-16 py-20 bg-[#f6a29d]">
        <Reveal>
          <div className="min-h-[350px] flex items-center justify-center">
            <div className="w-80 bg-ink text-paper p-8 rounded-2xl shadow-2xl transform -rotate-2">
              <span className="font-mono text-xs uppercase text-acid">Terra House</span>
              <h3 className="font-serif text-3xl font-bold my-4">Architectural Sanctuaries</h3>
              <p className="text-paper/70 text-sm">Curated stays off the beaten track.</p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="px-6 md:px-16 py-24 max-w-5xl mx-auto">
        <Reveal>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8">
            Editorial Web Experience
          </h2>
          <p className="text-ink/80 text-lg leading-relaxed mb-8">
            Terra House blends travel publishing with high-intent booking discovery. We built the platform on Next.js to ensure sub-second page loads, instant search filtering, and seamless image optimization.
          </p>
        </Reveal>

        <div className="pt-16 border-t border-ink/15 flex justify-between items-center">
          <Link href="/work/lune" className="font-mono text-xs uppercase text-ink/70 hover:text-ink">
            ← Previous Case Study
          </Link>
          <Link href="/contact" className="font-bold text-lg text-ink hover:text-coral flex items-center gap-2">
            <span>Start a project like this</span>
            <span>↗</span>
          </Link>
        </div>
      </section>
    </article>
  );
}
