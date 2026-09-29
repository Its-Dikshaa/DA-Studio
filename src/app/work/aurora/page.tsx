import Reveal from "@/components/Reveal";
import Link from "next/link";

export const metadata = {
  title: "Aurora Case Study — DA🌻",
  description: "Aurora concept case study for a calmer fintech experience.",
};

export default function AuroraPage() {
  return (
    <article className="min-h-screen bg-paper text-ink">
      {/* Hero Header */}
      <section className="bg-ink text-paper px-6 md:px-16 pt-20 pb-28">
        <Reveal>
          <div className="font-mono text-xs uppercase tracking-wider text-acid mb-6">
            Case Study 01 / Aurora Fintech
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.93] max-w-5xl mb-8">
            Calmer, clearer financial management.
          </h1>
          <p className="text-paper/70 text-lg md:text-xl max-w-2xl leading-relaxed">
            Re-architecting a complex multi-asset investment platform to reduce cognitive load and bring warmth to personal wealth.
          </p>
        </Reveal>

        {/* Key Details Ledger */}
        <Reveal delay={0.2} className="mt-16 pt-12 border-t border-paper/15 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <span className="block font-mono text-xs text-coral uppercase mb-2">Client</span>
            <b className="text-sm md:text-base font-bold">Aurora Capital</b>
          </div>
          <div>
            <span className="block font-mono text-xs text-coral uppercase mb-2">Role</span>
            <b className="text-sm md:text-base font-bold">UX Strategy & Design System</b>
          </div>
          <div>
            <span className="block font-mono text-xs text-coral uppercase mb-2">Timeline</span>
            <b className="text-sm md:text-base font-bold">8 Weeks</b>
          </div>
          <div>
            <span className="block font-mono text-xs text-coral uppercase mb-2">Year</span>
            <b className="text-sm md:text-base font-bold">2026</b>
          </div>
        </Reveal>
      </section>

      {/* Hero Visual Banner */}
      <section className="px-6 md:px-16 py-16 bg-[#bcb4ff]">
        <Reveal>
          <div className="min-h-[400px] flex items-center justify-center relative p-8">
            <div className="w-full max-w-sm bg-paper p-6 border-4 border-ink rounded-3xl shadow-2xl transform rotate-3">
              <span className="font-mono text-xs uppercase text-coral">Aurora Wealth</span>
              <h3 className="text-3xl font-extrabold text-ink my-4">₹ 24,280.00</h3>
              <div className="w-full h-3 bg-acid rounded mb-2" />
              <div className="w-2/3 h-3 bg-ink/10 rounded mb-6" />
              <p className="font-serif italic font-semibold text-lg text-coral">Your money, in motion.</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Case Study Content */}
      <section className="px-6 md:px-16 py-24 max-w-5xl mx-auto">
        <Reveal>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8">
            The Challenge
          </h2>
          <p className="text-ink/80 text-lg leading-relaxed mb-12">
            Most financial dashboards overwhelm users with dense tables, neon green indicators, and aggressive chart tickers. Aurora wanted an approach that prioritized clarity, psychological calm, and quick decision-making.
          </p>
        </Reveal>

        {/* Results Grid */}
        <Reveal delay={0.2} className="my-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 bg-paper border border-ink/15 rounded-2xl">
            <span className="font-mono text-xs text-coral">01 / Friction</span>
            <b className="block text-3xl font-bold mt-6 text-ink">-42%</b>
            <p className="text-ink/70 text-sm mt-2">Reduction in time-to-first-trade for new investors.</p>
          </div>
          <div className="p-8 bg-paper border border-ink/15 rounded-2xl">
            <span className="font-mono text-xs text-coral">02 / Adoption</span>
            <b className="block text-3xl font-bold mt-6 text-ink">+68%</b>
            <p className="text-ink/70 text-sm mt-2">Increase in daily active wallet engagement.</p>
          </div>
          <div className="p-8 bg-paper border border-ink/15 rounded-2xl">
            <span className="font-mono text-xs text-coral">03 / NPS</span>
            <b className="block text-3xl font-bold mt-6 text-ink">74</b>
            <p className="text-ink/70 text-sm mt-2">User satisfaction rating post-redesign.</p>
          </div>
        </Reveal>

        {/* Quote */}
        <Reveal className="my-20 p-12 bg-coral text-paper rounded-3xl">
          <blockquote className="text-2xl md:text-4xl font-extrabold leading-tight tracking-tight mb-6">
            &ldquo;DA transformed what used to be a stressful dashboard into an experience our customers actually look forward to opening every morning.&rdquo;
          </blockquote>
          <span className="font-mono text-xs uppercase tracking-wider text-acid">
            — Product Director, Aurora Capital
          </span>
        </Reveal>

        {/* Next Case Study Navigation */}
        <div className="pt-16 border-t border-ink/15 flex justify-between items-center">
          <Link href="/work" className="font-mono text-xs uppercase text-ink/70 hover:text-ink">
            ← All Case Studies
          </Link>
          <Link href="/work/lune" className="font-bold text-lg text-ink hover:text-coral flex items-center gap-2">
            <span>Next: Lune Case Study</span>
            <span>↗</span>
          </Link>
        </div>
      </section>
    </article>
  );
}
