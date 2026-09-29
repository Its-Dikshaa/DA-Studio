import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "About — DA🌻",
  description: "Meet DA🌻, an independent design and development studio.",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero page-hero--coral" id="top">
        <Reveal className="page-hero-copy">
          <p className="crumb">
            <Link href="/">Home</Link>
            <span>/</span> About
          </p>
          <h1>
            Small enough to
            <br />
            care. Sharp enough
            <br />
            to <em>change things.</em>
          </h1>
          <p>
            DA🌻 is an independent design and development studio for ambitious
            digital ideas.
          </p>
        </Reveal>
        <Reveal className="hero-orbital" aria-hidden="true">
          <b>DA</b>
          <i>
            big care,
            <br />
            small ego
          </i>
        </Reveal>
      </section>

      <section className="page-section">
        <Reveal className="section-grid">
          <div>
            <span className="chapter">( A little about us )</span>
            <h2>
              We like work that
              <br />
              has a <em>pulse.</em>
            </h2>
          </div>
          <div className="body-copy">
            <p>
              DA🌻 was made for teams who need senior thinking without the endless
              layers, spreadsheet theatre or unnecessary distance.
            </p>
            <p>
              We bring together product strategy, visual direction and practical
              development so that ideas are not just well-presented—they make
              sense in the hands of real people.
            </p>
            <p>
              <strong>
                Our size is intentional: close enough to ask better questions,
                flexible enough to move when the answer changes.
              </strong>
            </p>
          </div>
        </Reveal>
      </section>

      <section className="page-section page-section--compact pale-acid">
        <Reveal>
          <span className="chapter">( A deliberately small studio )</span>
        </Reveal>
        <div className="team-grid">
          <Reveal as="article" className="team-card">
            <span className="team-badge">?</span>
            <h3>You</h3>
            <p>Founder / team with the hard problem</p>
          </Reveal>
          <Reveal as="article" className="team-card">
            <span className="team-badge">✺</span>
            <h3>DA</h3>
            <p>Strategy, design & development partner</p>
          </Reveal>
          <Reveal as="article" className="team-card">
            <span className="team-badge">↗</span>
            <h3>The thing</h3>
            <p>A product people will understand</p>
          </Reveal>
        </div>
      </section>

      <section className="page-section">
        <div className="section-grid">
          <Reveal>
            <span className="chapter">( What keeps us honest )</span>
            <h2>
              Some things are
              <br />
              not <em>negotiable.</em>
            </h2>
          </Reveal>
          <div className="values-list">
            <Reveal as="article">
              <span>01</span>
              <h3>Say the useful thing</h3>
              <p>
                We will be kind, direct and clear—even when the best answer is to
                make less, not more.
              </p>
            </Reveal>
            <Reveal as="article">
              <span>02</span>
              <h3>Make it make sense</h3>
              <p>
                Visual confidence is great. It earns its place by helping a
                person decide, understand or move forward.
              </p>
            </Reveal>
            <Reveal as="article">
              <span>03</span>
              <h3>Leave it stronger</h3>
              <p>
                We build systems, not fragile showpieces, so your team can keep
                moving after the launch moment.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="page-cta">
        <h2>
          Think we&apos;d make
          <br />a good <em>team?</em>
        </h2>
        <Link className="button" href="/contact">
          Say hello <span>↗</span>
        </Link>
      </section>
    </>
  );
}
