import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Terra House case study — DA🌻",
  description: "Terra House, a DA🌻 concept case study for travel and stay discovery.",
};

export default function TerraPage() {
  return (
    <>
      <section className="page-hero case-hero" id="top">
        <Reveal className="page-hero-copy">
          <p className="crumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/work">Work</Link>
            <span>/</span> Terra House
          </p>
          <h1>
            Go where you
            <br />
            can <em>soften.</em>
          </h1>
          <p>
            A concept brand and web direction for a stay discovery platform
            centred on spaces with character—not another endless list of rooms.
          </p>
        </Reveal>
        <Reveal className="case-hero-art" aria-hidden="true">
          <div className="case-orb" style={{ borderRadius: "45%" }}></div>
          <p style={{ color: "var(--coral)" }}>
            Leave the
            <br />
            scroll behind.
          </p>
          <div
            className="case-screen"
            style={{
              background: "#f5a3a0",
              boxShadow: "14px 16px 0 var(--acid)",
            }}
          >
            <b style={{ fontFamily: "var(--serif)", fontSize: "27px" }}>
              Terra
              <br />
              House
            </b>
            <i style={{ background: "var(--ink)" }}></i>
            <span style={{ background: "rgba(23,35,27,.22)" }}></span>
            <span style={{ background: "rgba(23,35,27,.22)" }}></span>
          </div>
        </Reveal>
      </section>

      <section className="page-section page-section--compact">
        <Reveal className="case-ledger">
          <div>
            <span>Sector</span>
            <b>Travel & stays</b>
          </div>
          <div>
            <span>Focus</span>
            <b>Brand + website</b>
          </div>
          <div>
            <span>Platform</span>
            <b>Responsive web</b>
          </div>
          <div>
            <span>Scope</span>
            <b>Identity, UX, UI</b>
          </div>
        </Reveal>
      </section>

      <section className="page-section">
        <Reveal className="section-grid">
          <div>
            <span className="chapter">( The imagined brief )</span>
            <h2>
              Make choosing a<br />
              place feel like<br />
              <em>finding one.</em>
            </h2>
          </div>
          <div className="body-copy">
            <p>
              Booking sites are built for speed, but not always for feeling. Terra
              House explores how slower, editorial discovery can help a traveller
              recognise the place that fits their moment.
            </p>
            <p>
              The experience uses atmosphere as a filter: the view, the pace, the
              people and the story of a stay become as useful as dates and beds.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="page-section pale-coral">
        <Reveal>
          <span className="chapter">( Design principle )</span>
        </Reveal>
        <div className="case-visual-row">
          <Reveal className="case-panel" style={{ background: "#f5a3a0" }}>
            <div className="terra-sun"></div>
            <div className="terra-hill hill-a"></div>
            <div className="terra-hill hill-b"></div>
            <div className="terra-card">
              <span>01 — 06</span>
              <b>
                Slow down.
                <br />
                Find your way.
              </b>
              <i>Explore stays</i>
            </div>
          </Reveal>
          <Reveal className="case-panel" style={{ background: "var(--acid)" }}>
            <div className="flow-wire"></div>
            <div className="flow-word">
              Stay
              <br />
              awhile.
            </div>
          </Reveal>
        </div>
      </section>

      <section className="case-quote">
        <Reveal>
          <blockquote>
            “A destination isn&apos;t just somewhere you <em>go.</em> It&apos;s a
            feeling you decide to step into.”
          </blockquote>
        </Reveal>
      </section>

      <section className="page-section">
        <div className="section-grid">
          <Reveal>
            <span className="chapter">( What the direction prioritised )</span>
            <h2>
              A little more
              <br />
              <em>feeling,</em>
              <br />a lot less noise.
            </h2>
          </Reveal>
          <div className="results-grid">
            <Reveal as="article">
              <span>01</span>
              <b>Editorial discovery</b>
              <p>
                Stories and visual cues that help a person imagine a stay before
                they start comparing it.
              </p>
            </Reveal>
            <Reveal as="article">
              <span>02</span>
              <b>Meaningful filters</b>
              <p>
                Choices based on pace, mood and context—not just a long checklist
                of generic amenities.
              </p>
            </Reveal>
            <Reveal as="article">
              <span>03</span>
              <b>Booking without rupture</b>
              <p>
                A practical conversion flow that keeps the sense of place intact
                all the way to action.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="page-cta">
        <h2>
          Got a brand that
          <br />
          needs more <em>pull?</em>
        </h2>
        <Link className="button" href="/contact">
          Start a project <span>↗</span>
        </Link>
      </section>
    </>
  );
}
