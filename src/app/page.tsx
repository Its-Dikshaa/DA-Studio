import Link from "next/link";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import WorkGrid from "@/components/WorkGrid";
import ServicesAccordion from "@/components/ServicesAccordion";

const servicesData = [
  {
    number: "01",
    title: "UX Strategy & Research",
    description:
      "Clarifying product positioning, user journeys, information architecture, and core features before code is written.",
    deliverables: "Positioning map · User flows · Feature prioritization · UX Audit",
  },
  {
    number: "02",
    title: "Product & UI/UX Design",
    description:
      "Crafting high-fidelity interface systems, component libraries, and interactive prototypes tailored for scale.",
    deliverables: "Figma design system · App interfaces · Interactive prototypes · Micro-interactions",
  },
  {
    number: "03",
    title: "Web Design & Development",
    description:
      "Building fast, accessible, motion-rich websites using Next.js, TypeScript, and modern animation standards.",
    deliverables: "Next.js web app · Custom animations · CMS integration · Performance optimization",
  },
  {
    number: "04",
    title: "Brand Systems & Motion",
    description:
      "Defining distinctive visual identities, typographic systems, and motion guidelines that bring digital touchpoints to life.",
    deliverables: "Brand guidelines · Kinetic logo assets · Motion guidelines · UI motion tokens",
  },
];

const marqueeItems = [
  "UX Strategy",
  "Product Design",
  "Next.js Development",
  "Motion Systems",
  "Design Tokens",
  "Kinetic Branding",
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative px-6 md:px-16 pt-16 pb-24 border-b border-ink/10 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-ink/70 mb-6">
                <span className="w-2 h-2 rounded-full bg-coral animate-ping" />
                <span>DA🌻 Studio · Available for Q4/Q1</span>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.92] text-ink">
                Digital products <br />
                with a little more <br />
                <em className="font-serif italic font-normal text-coral">feeling.</em>
              </h1>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="mt-8 text-lg md:text-xl text-ink/75 max-w-xl leading-relaxed">
                An independent design & development studio shaping sharp web platforms, mobile products, and kinetic brand systems.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-ink text-paper rounded-full text-xs font-extrabold uppercase tracking-wider inline-flex items-center gap-4 hover:bg-coral transition-all transform hover:-translate-y-1"
                >
                  <span>Start a project</span>
                  <span className="text-acid text-lg">↗</span>
                </Link>
                <Link
                  href="/work"
                  className="text-xs font-extrabold uppercase tracking-wider text-ink border-b-2 border-ink pb-1 hover:text-coral hover:border-coral transition-colors"
                >
                  Explore archive ↗
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Hero Art Graphic */}
          <div className="lg:col-span-5 relative min-h-[380px] flex items-center justify-center">
            <Reveal delay={0.3}>
              <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
                {/* Orbital Ring */}
                <div className="absolute inset-0 border border-ink/20 rounded-full animate-[spin_40s_linear_infinite]" />
                <div className="absolute inset-8 border border-dashed border-coral/30 rounded-full" />

                {/* Sun Element */}
                <div className="w-56 h-56 rounded-full bg-acid border border-ink shadow-2xl flex items-center justify-center relative z-10">
                  <span className="text-7xl font-extrabold tracking-tighter text-ink -translate-x-1">
                    DA
                  </span>
                </div>

                {/* Floating Card */}
                <div className="absolute bottom-4 right-0 z-20 w-64 p-5 bg-ink text-paper rounded-2xl shadow-2xl transform rotate-6 border border-paper/10">
                  <div className="flex gap-1.5 mb-4">
                    <span className="w-2.5 h-2.5 rounded-full bg-coral" />
                    <span className="w-2.5 h-2.5 rounded-full bg-orange" />
                    <span className="w-2.5 h-2.5 rounded-full bg-acid" />
                  </div>
                  <b className="block text-2xl font-bold tracking-tight text-paper leading-tight">
                    Intentional by design.
                  </b>
                  <small className="block mt-4 font-mono text-[9px] uppercase tracking-wider text-acid">
                    Next.js + Motion ✺
                  </small>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Marquee Ticker */}
      <Marquee items={marqueeItems} />

      {/* Selected Work Section */}
      <section className="px-6 md:px-16 py-28 bg-ink text-paper">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-acid mb-3 block">
                Selected Work
              </span>
              <h2 className="text-4xl md:text-7xl font-extrabold tracking-tighter">
                Recent Case Studies
              </h2>
            </div>
            <p className="text-paper/60 text-sm max-w-xs leading-relaxed">
              Explore our latest collaborations in fintech, wellbeing, and travel discovery.
            </p>
          </div>
        </Reveal>

        <WorkGrid />
      </section>

      {/* Services Section */}
      <section className="px-6 md:px-16 py-28 bg-paper border-b border-ink/10">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            <div className="lg:col-span-4">
              <span className="font-mono text-xs uppercase tracking-wider text-coral mb-3 block">
                Capabilities
              </span>
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-ink">
                Services & Focus
              </h2>
            </div>
            <div className="lg:col-span-8 flex items-end">
              <p className="text-ink/70 text-base md:text-lg max-w-lg leading-relaxed">
                We work across every phase of digital product design — from initial UX discovery to production Next.js frontend engineering.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <ServicesAccordion services={servicesData} />
        </Reveal>
      </section>

      {/* Process Section */}
      <section className="px-6 md:px-16 py-28 bg-acid text-ink border-b border-ink/10">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            <div className="lg:col-span-4">
              <span className="font-mono text-xs uppercase tracking-wider text-ink/70 mb-3 block">
                How we work
              </span>
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-ink">
                Our Rhythm
              </h2>
            </div>
            <div className="lg:col-span-8 flex items-end">
              <p className="text-ink/80 text-base md:text-lg max-w-lg leading-relaxed">
                A focused 4-step process designed to keep decision-making clear, momentum high, and results crisp.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="border-t border-ink/20 divide-y divide-ink/20">
          {[
            {
              step: "01",
              name: "Listen & Uncover",
              desc: "Deep-dive into the business goals, user friction, and underlying market opportunity.",
            },
            {
              step: "02",
              name: "Strategy & Architecture",
              desc: "Define the core product concept, key user journeys, and technical blueprint.",
            },
            {
              step: "03",
              name: "Design System & Interface",
              desc: "Build a scalable UI component system with custom motion tokens and micro-interactions.",
            },
            {
              step: "04",
              name: "Build & Polish",
              desc: "Engineered in Next.js & Tailwind CSS with flawless responsiveness and SEO best practices.",
            },
          ].map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                <span className="md:col-span-2 font-mono text-xs text-coral font-bold">
                  {item.step}
                </span>
                <h3 className="md:col-span-5 text-2xl font-bold tracking-tight text-ink">
                  {item.name}
                </h3>
                <p className="md:col-span-5 text-ink/70 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-16 py-32 bg-ink text-paper text-center">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-wider text-acid mb-4 block">
            Start a conversation
          </span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter max-w-4xl mx-auto leading-tight">
            Have a project in mind? <br />
            <em className="font-serif italic font-normal text-coral">Let&apos;s build it.</em>
          </h2>
          <div className="mt-12">
            <Link
              href="/contact"
              className="px-10 py-5 bg-acid text-ink rounded-full text-xs font-extrabold uppercase tracking-wider inline-flex items-center gap-4 hover:bg-coral hover:text-paper transition-all transform hover:scale-105"
            >
              <span>Get in touch</span>
              <span className="text-xl">↗</span>
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
