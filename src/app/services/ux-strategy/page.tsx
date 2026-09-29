import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "UX strategy & research — DA🌻",
  description: "UX strategy and user research services by DA🌻.",
};

export default function UxStrategyPage() {
  return (
    <>
      <section className="page-hero page-hero--acid service-page-hero" id="top">
        <Reveal className="page-hero-copy">
          <p className="crumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/services">Services</Link>
            <span>/</span> UX strategy
          </p>
          <h1>
            Find the
            <br />
            <em>right thing</em>
            <br />
            to make.
          </h1>
          <p>
            Research and product strategy for teams that would rather learn early
            than repair later.
          </p>
        </Reveal>
        <Reveal className="hero-orbital" aria-hidden="true">
          <b>?</b>
          <i>
            good questions
            <br />
            change everything
          </i>
        </Reveal>
      </section>

      <section className="page-section">
        <Reveal className="section-grid">
          <div>
            <span className="chapter">( What this solves )</span>
            <h2>
              When the problem
              <br />
              is still a little <em>foggy.</em>
            </h2>
          </div>
          <div className="body-copy">
            <p>
              Before a product gets beautiful, it needs to get honest. We help
              teams understand the audience, simplify the opportunity and decide
              what deserves to be built first.
            </p>
            <p>
              We blend qualitative research, product thinking and rapid framing
              into a practical direction your team can act on—not a deck that
              gathers dust.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="page-section page-section--compact">
        <Reveal>
          <span className="chapter">( Typical outputs )</span>
        </Reveal>
        <div className="deliverable-grid">
          <Reveal as="article">
            <span>01</span>
            <h3>Signal finding</h3>
            <p>
              User interviews, stakeholder conversations and competitive signals to
              reveal what is actually getting in people’s way.
            </p>
          </Reveal>
          <Reveal as="article">
            <span>02</span>
            <h3>Journey clarity</h3>
            <p>
              Clear flows and service moments that show where users lose momentum
              and where the experience can win it back.
            </p>
          </Reveal>
          <Reveal as="article">
            <span>03</span>
            <h3>Product direction</h3>
            <p>
              A shared point of view on audience, value proposition, priorities and
              what a useful first version should prove.
            </p>
          </Reveal>
          <Reveal as="article">
            <span>04</span>
            <h3>Testable prototype</h3>
            <p>
              Enough tangible product thinking to put a direction in front of
              people and learn before committing to build.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="page-section pale-acid">
        <Reveal>
          <span className="chapter">( Our rhythm )</span>
        </Reveal>
        <div className="service-flow">
          <Reveal as="article">
            <span>01 / Listen</span>
            <h3>Get close</h3>
            <p>Align on the business pressure, users and decisions worth making.</p>
          </Reveal>
          <Reveal as="article">
            <span>02 / Look</span>
            <h3>Find signal</h3>
            <p>Research the actual behaviour, not just the assumed behaviour.</p>
          </Reveal>
          <Reveal as="article">
            <span>03 / Frame</span>
            <h3>Choose focus</h3>
            <p>Turn observations into opportunities a team can rally around.</p>
          </Reveal>
          <Reveal as="article">
            <span>04 / Test</span>
            <h3>Make it real</h3>
            <p>Use prototypes to de-risk the big choices before delivery begins.</p>
          </Reveal>
        </div>
      </section>

      <section className="page-cta">
        <h2>
          Need a better
          <br />
          question before
          <br />a <em>bigger build?</em>
        </h2>
        <Link className="button" href="/contact">
          Start a conversation <span>↗</span>
        </Link>
      </section>
    </>
  );
}
