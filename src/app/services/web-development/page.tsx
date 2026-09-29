import Reveal from "@/components/Reveal";
import Link from "next/link";

export const metadata = {
  title: "Web Design & Development — DA🌻",
  description: "Website design and Next.js development services by DA🌻.",
};

export default function WebDevelopmentPage() {
  return (
    <div className="px-6 md:px-16 py-16 max-w-5xl mx-auto">
      <Reveal>
        <span className="font-mono text-xs uppercase tracking-wider text-coral mb-3 block">
          Service 03
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8">
          Web Design & Next.js Build
        </h1>
        <p className="text-ink/75 text-lg md:text-xl leading-relaxed mb-12">
          Engineering production Next.js applications, custom Framer Motion animations, TypeScript integration, and optimized Web Vitals.
        </p>
      </Reveal>

      <Reveal delay={0.2} className="my-16 grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-ink/15 pt-12">
        <div>
          <h3 className="text-2xl font-bold mb-4">Tech Stack</h3>
          <ul className="space-y-3 text-ink/80 text-base">
            <li className="flex items-center gap-3">
              <span className="text-coral">✺</span> Next.js 16 (App Router) & React 19
            </li>
            <li className="flex items-center gap-3">
              <span className="text-coral">✺</span> TypeScript & Strict Type-Safety
            </li>
            <li className="flex items-center gap-3">
              <span className="text-coral">✺</span> Tailwind CSS & Responsive Layouts
            </li>
            <li className="flex items-center gap-3">
              <span className="text-coral">✺</span> Framer Motion / Motion Animations
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">Performance Standards</h3>
          <p className="text-ink/70 leading-relaxed text-sm">
            Sub-second LCP, 100/100 Core Web Vitals, automated SEO metadata, dynamic OpenGraph image generation, and clean Vercel/Netlify deployment.
          </p>
        </div>
      </Reveal>

      <div className="mt-16 pt-8 border-t border-ink/15 flex justify-between items-center">
        <Link href="/services" className="font-mono text-xs uppercase text-ink/70 hover:text-ink">
          ← Back to Services
        </Link>
        <Link href="/contact" className="font-bold text-base text-coral hover:underline">
          Build a Next.js Web App ↗
        </Link>
      </div>
    </div>
  );
}
