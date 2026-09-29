import Reveal from "@/components/Reveal";
import ServicesAccordion from "@/components/ServicesAccordion";
import Link from "next/link";

export const metadata = {
  title: "Services — DA🌻 Studio",
  description: "UX strategy, product design, web development, and brand motion systems by DA🌻.",
};

const fullServicesData = [
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

export default function ServicesPage() {
  return (
    <div className="px-6 md:px-16 py-16">
      <Reveal>
        <div className="mb-16">
          <span className="font-mono text-xs uppercase tracking-wider text-coral mb-3 block">
            Capabilities
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-ink mb-6">
            Services & Expertise
          </h1>
          <p className="text-ink/70 text-lg md:text-xl max-w-2xl leading-relaxed">
            We partner with founders and product teams to design and build digital experiences that stand out.
          </p>
        </div>
      </Reveal>

      {/* Interactive Accordion */}
      <Reveal delay={0.2} className="mb-24">
        <ServicesAccordion services={fullServicesData} />
      </Reveal>

      {/* Individual Service Detail Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-20">
        {[
          {
            title: "UX Strategy & Research",
            href: "/services/ux-strategy",
            color: "bg-[#bcb4ff]",
            desc: "Align your product vision with real user behavior before building.",
          },
          {
            title: "Product & UI/UX Design",
            href: "/services/product-design",
            color: "bg-[#d6ff58]",
            desc: "High-crafted interfaces and design systems built for scale.",
          },
          {
            title: "Web Design & Build",
            href: "/services/web-development",
            color: "bg-[#f6a29d]",
            desc: "Production Next.js web applications with fluid animations.",
          },
          {
            title: "Brand Systems & Motion",
            href: "/services/brand-motion",
            color: "bg-[#d9d2ff]",
            desc: "Kinetic brand identity systems and motion token guidelines.",
          },
        ].map((item, idx) => (
          <Reveal key={idx} delay={idx * 0.1}>
            <Link
              href={item.href}
              className={`block p-10 rounded-3xl ${item.color} text-ink hover:scale-[1.02] transition-transform group`}
            >
              <span className="font-mono text-xs uppercase tracking-wider text-ink/70 block mb-4">
                Service Deep-Dive 0{idx + 1}
              </span>
              <h3 className="text-3xl font-extrabold tracking-tight mb-4 flex justify-between items-center">
                <span>{item.title}</span>
                <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  ↗
                </span>
              </h3>
              <p className="text-ink/80 text-sm md:text-base leading-relaxed">
                {item.desc}
              </p>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
