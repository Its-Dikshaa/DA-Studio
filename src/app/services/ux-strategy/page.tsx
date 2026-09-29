import Reveal from "@/components/Reveal";
import Link from "next/link";

export const metadata = {
  title: "UX Strategy & Research — DA🌻",
  description: "UX strategy and user research services by DA🌻.",
};

export default function UxStrategyPage() {
  return (
    <div className="px-6 md:px-16 py-16 max-w-5xl mx-auto">
      <Reveal>
        <span className="font-mono text-xs uppercase tracking-wider text-coral mb-3 block">
          Service 01
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8">
          UX Strategy & Research
        </h1>
        <p className="text-ink/75 text-lg md:text-xl leading-relaxed mb-12">
          Before writing code or pushing pixels, we help you ask the right questions, clarify user journeys, and eliminate feature clutter.
        </p>
      </Reveal>

      <Reveal delay={0.2} className="my-16 grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-ink/15 pt-12">
        <div>
          <h3 className="text-2xl font-bold mb-4">What we do</h3>
          <ul className="space-y-3 text-ink/80 text-base">
            <li className="flex items-center gap-3">
              <span className="text-coral">✺</span> Product positioning & feature framing
            </li>
            <li className="flex items-center gap-3">
              <span className="text-coral">✺</span> User interviews & UX friction mapping
            </li>
            <li className="flex items-center gap-3">
              <span className="text-coral">✺</span> Information architecture & wireframing
            </li>
            <li className="flex items-center gap-3">
              <span className="text-coral">✺</span> Competitive UX benchmarking
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">Deliverables</h3>
          <p className="text-ink/70 leading-relaxed text-sm">
            Comprehensive UX strategy deck, interactive wireframe maps, user persona insights, and prioritized product roadmap.
          </p>
        </div>
      </Reveal>

      <div className="mt-16 pt-8 border-t border-ink/15 flex justify-between items-center">
        <Link href="/services" className="font-mono text-xs uppercase text-ink/70 hover:text-ink">
          ← Back to Services
        </Link>
        <Link href="/contact" className="font-bold text-base text-coral hover:underline">
          Book a UX Strategy Session ↗
        </Link>
      </div>
    </div>
  );
}
