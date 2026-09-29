import Reveal from "@/components/Reveal";
import WorkGrid from "@/components/WorkGrid";
import Link from "next/link";

export const metadata = {
  title: "Work Archive — DA🌻 Studio",
  description: "Selected product, brand, and web directions by DA🌻.",
};

export default function WorkPage() {
  return (
    <div className="px-6 md:px-16 py-16">
      <Reveal>
        <div className="mb-16">
          <span className="font-mono text-xs uppercase tracking-wider text-coral mb-3 block">
            Selected Work
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-ink mb-6">
            Work Archive
          </h1>
          <p className="text-ink/70 text-lg md:text-xl max-w-2xl leading-relaxed">
            A collection of digital products, design systems, and web builds created with care and intent.
          </p>
        </div>
      </Reveal>

      <WorkGrid />

      {/* CTA Box */}
      <Reveal className="mt-28">
        <div className="p-12 md:p-20 bg-ink text-paper rounded-3xl text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
            Your next project goes here.
          </h2>
          <p className="text-paper/70 text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            Bring the awkward brief, the early pitch, or the half-formed idea. Let&apos;s turn it into something exceptional.
          </p>
          <Link
            href="/contact"
            className="px-8 py-4 bg-acid text-ink rounded-full text-xs font-extrabold uppercase tracking-wider inline-flex items-center gap-4 hover:bg-coral hover:text-paper transition-all"
          >
            <span>Start a conversation</span>
            <span className="text-lg">↗</span>
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
