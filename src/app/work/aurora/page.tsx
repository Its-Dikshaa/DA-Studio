import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Aurora case study — DA🌻",
  description: "Aurora, a DA🌻 concept case study for a calmer fintech experience.",
};

export default function AuroraPage() {
  return (
    <>
      <section className="page-hero case-hero" id="top">
        <Reveal className="page-hero-copy">
          <p className="crumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/work">Work</Link>
            <span>/</span> Aurora
          </p>
          <h1>
            Finance,
            <br />
            without the <em>fuss.</em>
          </h1>
          <p>
            A concept direction for a new-generation money app that turns nervous
            money moves into clear, quiet next steps.
          </p>
        </Reveal>
        <Reveal className="case-hero-art" aria-hidden="true">
          <div className="case-orb"></div>
          <p>
            Less noise.
            <br />
            More now.
          </p>
          <div className="case-screen">
            <b>flow</b>
            <i></i>
            <span></span>
            <span></span>
          </div>
        </Reveal>
      </section>

      <section className="page-section page-section--compact">
        <Reveal className="case-ledger">
          <div>
            <span>Sector</span>
            <b>Fintech</b>
          </div>
          <div>
            <span>Focus</span>
            <b>Product design</b>
          </div>
          <div>
            <span>Platform</span>
            <b>iOS + Android</b>
          </div>
          <div>
            <span>Scope</span>
            <b>UX, UI, prototype</b>
          </div>
        </Reveal>
      </section>

      <section className="page-section">
        <Reveal className="section-grid">
          <div>
            <span className="chapter">( The imagined brief )</span>
            <h2>
              Take the
              <br />
              anxiety out of
              <br />
              <em>getting started.</em>
            </h2>
          </div>
          <div className="body-copy">
            <p>
              Personal finance products often sell confidence while quietly adding
              complexity. Aurora imagined a better first-time investing
              experience: one that guides a new user without making them feel new.
            </p>
            <p>
              The task was to make choices, progress and trade-offs visible without
              turning the interface into a lecture or a dashboard of
              distractions.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="page-section pale-violet">
        <Reveal>
          <span className="chapter">( Design principle )</span>
        </Reveal>
        <div className="case-visual-row">
          <Reveal className="case-panel case-panel--aurora"></Reveal>
          <Reveal className="case-panel case-panel--flow">
            <div className="flow-wire"></div>
            <div className="flow-word">
              Clarity
              <br />
              moves.
            </div>
          </Reveal>
        </div>
      </section>

      <section className="case-quote">
        <Reveal>
          <blockquote>
            “Trust isn&apos;t a shade of blue. It is the feeling that the next
            step is <em>understandable.</em>”
          </blockquote>
        </Reveal>
      </section>

      <section className="page-section">
        <div className="section-grid">
          <Reveal>
            <span className="chapter">( What the direction prioritised )</span>
            <h2>
              Enough signal
              <br />
              to move with
              <br />
              <em>confidence.</em>
            </h2>
          </Reveal>
          <div className="results-grid">
            <Reveal as="article">
              <span>01</span>
              <b>One next step</b>
              <p>
                A focused home state that makes the most useful action feel
                unmistakable.
              </p>
            </Reveal>
            <Reveal as="article">
              <span>02</span>
              <b>Plain-language money</b>
              <p>
                Human labels and visual context instead of an interface full of
                financial shorthand.
              </p>
            </Reveal>
            <Reveal as="article">
              <span>03</span>
              <b>Calm at the edges</b>
              <p>
                Helpful status, progress and error states that keep the experience
                composed when a user needs it most.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="page-cta">
        <h2>
          Have a complex
          <br />
          product to make
          <br />
          feel <em>simple?</em>
        </h2>
        <Link className="button" href="/contact">
          Talk to DA <span>↗</span>
        </Link>
      </section>
    </>
  );
}
