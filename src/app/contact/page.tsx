import Reveal from "@/components/Reveal";
import LeadForm from "@/components/LeadForm";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata = {
  title: "Start a project — DA🌻 Studio",
  description: "Start a project with DA🌻. Tell us about your product or web brief.",
};

const faqItems = [
  {
    question: "Do you work with early-stage startups?",
    answer: "Absolutely. A clear problem and a committed decision-maker matter more than a huge organization chart. We shape focused sprints around your team's current stage.",
  },
  {
    question: "Can you plug into an existing in-house team?",
    answer: "Yes. We regularly embed alongside internal product, marketing, and engineering teams as senior collaborative design & frontend partners.",
  },
  {
    question: "Do you handle both design and frontend build?",
    answer: "Yes! We specialize in taking projects end-to-end from UX strategy and Figma designs into production Next.js + Tailwind CSS code.",
  },
  {
    question: "What should I include in my brief?",
    answer: "Tell us what problem you're solving, your target timeline, estimated budget range, and what you've tried so far. A polished pitch deck is optional.",
  },
];

export default function ContactPage() {
  return (
    <div className="px-6 md:px-16 py-16">
      <Reveal>
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs uppercase tracking-wider text-coral mb-3 block">
            Project Enquiry
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-ink mb-6">
            Start a project.
          </h1>
          <p className="text-ink/75 text-lg md:text-xl leading-relaxed">
            Have a project brief, an early pitch, or a product in need of sharp design and development? Fill out the form below or email us directly at{" "}
            <a href="mailto:hello@da-studio.in" className="font-bold underline text-ink hover:text-coral">
              hello@da-studio.in
            </a>.
          </p>
        </div>
      </Reveal>

      {/* Form Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-24 border-b border-ink/15">
        <div className="lg:col-span-7">
          <Reveal delay={0.2}>
            <LeadForm />
          </Reveal>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-between bg-acid/40 p-8 md:p-12 rounded-3xl border border-ink/10">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-coral mb-4 block">
              Direct Contact
            </span>
            <h3 className="text-2xl font-bold tracking-tight mb-6">
              Prefer direct email?
            </h3>
            <p className="text-ink/75 text-sm leading-relaxed mb-6">
              We respond to all genuine project enquiries within 1–2 working days.
            </p>
            <a
              href="mailto:hello@da-studio.in"
              className="text-lg font-bold underline text-ink hover:text-coral transition-colors"
            >
              hello@da-studio.in
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-ink/15 font-mono text-xs uppercase text-ink/70">
            <span>DA🌻 Studio · India</span>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 max-w-4xl">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-wider text-coral mb-3 block">
            Helpful Answers
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-12">
            Before you hit send.
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <FaqAccordion items={faqItems} />
        </Reveal>
      </section>
    </div>
  );
}
