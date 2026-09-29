import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Lune case study — DA🌻",
  description: "Lune, a DA🌻 concept case study for a human wellbeing product.",
};

export default function LunePage() {
  return (
    <>
      <section className="page-hero case-hero" id="top">
        <Reveal className="page-hero-copy">
          <p className="crumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/work">Work</Link>
            <span>/</span> Lune
          </p>
          <h1>
            Rest is a<br />
            <em>ritual,</em> not<br />
            another metric.
          </h1>
          <p>
            A concept product direction for a wellbeing app that gives people a
            gentler relationship with winding down.
          </p>
        </Reveal>
        <Reveal className="case-hero-art" aria-hidden="true">
          <div
            className="case-orb"
            style={{
              background:
                "radial-gradient(circle at 35% 30%,#f5f1eb 0 4%,#8e80ff 48%,#453d83 100%)",
              boxShadow: "-10px 12px 0 var(--coral)",
            }}
          ></div>
          <p style={{ color: "var(--violet)" }}>
            See you
            <br />
            tomorrow.
          </p>
          <div
            className="case-screen"
            style={{
              background: "#d9d2ff",
              boxShadow: "14px 16px 0 var(--coral)",
            }}
          >
            <b style={{ fontFamily: "var(--serif)", fontSize: "30px" }}>lune</b>
            <i style={{ background: "var(--ink)" }}></i>
            <span style={{ background: "rgba(23,35,27,.2)" }}></span>
            <span style={{ background: "rgba(23,35,27,.2)" }}></span>
          </div>
        </Reveal>
      </section>

      <section className="page-section page-section--compact">
        <Reveal className="case-ledger">
          <div>
            <span>Sector</span>
            <b>Wellbeing</b>
          </div>
          <div>
            <span>Focus</span>
            <b>Product + identity</b>
          </div>
          <div>
            <span>Platform</span>
            <b>Mobile app</b>
          </div>
          <div>
            <span>Scope</span>
            <b>UX, UI, design system</b>
          </div>
        </Reveal>
      </section>

      <section className="page-section">
        <Reveal className="section-grid">
          <div>
            <span className="chapter">( The imagined brief )</span>
            <h2>
              Help people rest
              <br />
              without making
              <br />
              rest a <em>score.</em>
            </h2>
          </div>
          <div className="body-copy">
            <p>
              Many wellbeing products turn a deeply personal experience into
              performance. Lune imagines an alternative: a quiet nightly companion
              that offers presence, not pressure.
            </p>
            <p>
              The product direction uses short rituals, soft progress cues and a warm
              visual world to make coming back feel supportive rather than
              obligatory.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="page-section pale-violet">
        <Reveal>
          <span className="chapter">( Design principle )</span>
        </Reveal>
        <div className="case-visual-row">
          <Reveal className="case-panel" style={{ background: "#d9d2ff" }}>
            <div className="grid-lines"></div>
            <div className="lune-orb--archive" style={{ width: "180px" }}></div>
            <div className="lune-panel">
              <span>LUNE / 01</span>
              <b>
                Rest is
                <br />a ritual.
              </b>
              <i>Designed for better nights</i>
            </div>
          </Reveal>
          <Reveal className="case-panel" style={{ background: "var(--coral)" }}>
            <div className="flow-wire"></div>
            <div className="flow-word">
              Softly
              <br />
              does it.
            </div>
          </Reveal>
        </div>
      </section>

      <section className="case-quote">
        <Reveal>
          <blockquote>
            “The best wellness experience may be the one that doesn&apos;t ask you
            to <em>perform</em> wellness.”
          </blockquote>
        </Reveal>
      </section>

      <section className="page-section">
        <div className="section-grid">
          <Reveal>
            <span className="chapter">( What the direction prioritised )</span>
            <h2>
              Less tracking.
              <br />
              More <em>tending.</em>
            </h2>
          </Reveal>
          <div className="results-grid">
            <Reveal as="article">
              <span>01</span>
              <b>A kind return point</b>
              <p>
                Each session starts where a person is, rather than demanding a
                streak or a perfect record.
              </p>
            </Reveal>
            <Reveal as="article">
              <span>02</span>
              <b>Small rituals</b>
              <p>
                Calm, easy actions that create closure at the end of the day
                without adding cognitive load.
              </p>
            </Reveal>
            <Reveal as="article">
              <span>03</span>
              <b>Quiet feedback</b>
              <p>
                Visual cues that surface patterns carefully, with no judgement and
                no gamified pressure.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="page-cta">
        <h2>
          Want to make a<br />
          product feel more<br />
          <em>human?</em>
        </h2>
        <Link className="button" href="/contact">
          Let’s talk <span>↗</span>
        </Link>
      </section>
    </>
  );
}
