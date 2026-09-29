import Reveal from "@/components/Reveal";
import Link from "next/link";

export const metadata = {
  title: "About — DA🌻 Studio",
  description: "Meet DA🌻, an independent design and development studio.",
};

export default function AboutPage() {
  return (
    <div className="px-6 md:px-16 py-16">
      <Reveal>
        <div className="max-w-4xl mb-20">
          <span className="font-mono text-xs uppercase tracking-wider text-coral mb-3 block">
            About Studio
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-ink mb-8 leading-[0.93]">
            Small, sharp studio for ambitious digital products.
          </h1>
          <p className="text-ink/75 text-lg md:text-2xl leading-relaxed font-light">
            We are a focused design and development partner building software with character, speed, and craftsmanship.
          </p>
        </div>
      </Reveal>

      {/* Principles Section */}
      <section className="py-16 border-t border-ink/15">
        <Reveal>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-12">
            Our Studio Values
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              num: "01",
              title: "No fluff, high intent",
              desc: "We skip heavy agency bureaucracy and work directly with founders and product owners.",
            },
            {
              num: "02",
              title: "Code is design",
              desc: "Interfaces aren't static Figma frames; we design with motion, responsiveness, and code in mind.",
            },
            {
              num: "03",
              title: "Craft in details",
              desc: "From custom cursor glow feedback to sub-second page loads, micro-details define macro quality.",
            },
          ].map((principle, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className="p-8 bg-paper border border-ink/15 rounded-2xl h-full flex flex-col justify-between">
                <span className="font-mono text-xs text-coral">{principle.num}</span>
                <div className="mt-8">
                  <h3 className="text-2xl font-bold mb-3">{principle.title}</h3>
                  <p className="text-ink/70 text-sm leading-relaxed">{principle.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <Reveal className="mt-20">
        <div className="p-12 md:p-16 bg-acid text-ink rounded-3xl flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-2">
              Think we&apos;d make a good team?
            </h2>
            <p className="text-ink/80 text-base">Let&apos;s talk about your upcoming build or redesign.</p>
          </div>
          <Link
            href="/contact"
            className="px-8 py-4 bg-ink text-paper rounded-full text-xs font-extrabold uppercase tracking-wider hover:bg-coral transition-colors shrink-0"
          >
            Say Hello ↗
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
