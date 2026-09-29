import Link from "next/link";
import Reveal from "@/components/Reveal";
import LeadForm from "@/components/LeadForm";

export const metadata = {
  title: "Start a project — DA🌻",
  description: "Start a project with DA🌻.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero page-hero--cream contact-page" id="top">
        <Reveal className="page-hero-copy">
          <p className="crumb">
            <Link href="/">Home</Link>
            <span>/</span> Contact
          </p>
          <h1>
            Tell us what&apos;s
            <br />
            <em>blooming.</em>
          </h1>
          <p>
            A rough brief is welcome. A brave idea is even better. Give us the
            useful details and we’ll respond within 1–2 working days.
          </p>
        </Reveal>
        <Reveal className="contact-doodle" aria-hidden="true">
          <span className="doodle-flower">抓</span>
          <span className="doodle-note">
            Good things start with a slightly awkward first message.
          </span>
        </Reveal>
      </section>

      <section className="page-section">
        <div className="section-grid">
          <Reveal>
            <span className="chapter">( Project enquiry )</span>
            <h2>
              Let&apos;s get the
              <br />
              <em>right bits</em>
              <br />
              on the table.
            </h2>
            <div className="contact-direct">
              <a href="mailto:hello@da-studio.in">hello@da-studio.in ↗</a>
              <span>Prefer email? We like those too.</span>
            </div>
          </Reveal>

          <Reveal>
            <LeadForm />
          </Reveal>
        </div>
      </section>

      <section className="page-section page-section--compact pale-violet">
        <div className="section-grid">
          <Reveal>
            <span className="chapter">( Helpful answers )</span>
            <h2>
              Before you
              <br />
              <em>hit send.</em>
            </h2>
          </Reveal>
          <Reveal className="faq-list">
            <details open>
              <summary>Do you work with early-stage startups?</summary>
              <p>
                Absolutely. A clear question and a committed decision-maker matter
                more than a huge organisation chart. We can shape a focused first
                engagement around your stage.
              </p>
            </details>
            <details>
              <summary>Can you work with an existing team?</summary>
              <p>
                Yes. We regularly plug into in-house product, marketing and
                engineering teams as a senior collaborative partner—not a separate
                black box.
              </p>
            </details>
            <details>
              <summary>Do you design and build?</summary>
              <p>
                Yes. We can take a site from strategy and visual direction into a
                responsive front-end build, or work alongside your internal
                engineering team.
              </p>
            </details>
            <details>
              <summary>What should I include in my brief?</summary>
              <p>
                The problem, the audience, the timeline, what you have already
                tried and where you feel stuck. A polished document is optional;
                an honest explanation is better.
              </p>
            </details>
          </Reveal>
        </div>
      </section>
    </>
  );
}
