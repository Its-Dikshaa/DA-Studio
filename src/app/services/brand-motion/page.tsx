import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Brand systems & motion — DA🌻",
  description: "Brand systems and motion design services by DA🌻.",
};

export default function BrandMotionPage() {
  return (
    <>
      <section className="page-hero page-hero--coral service-page-hero" id="top">
        <Reveal className="page-hero-copy">
          <p className="crumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/services">Services</Link>
            <span>/</span> Brand systems & motion
          </p>
          <h1>
            A personality
            <br />
            that knows
            <br />
            <em>how to behave.</em>
          </h1>
          <p>
            Identity, design systems and motion language for businesses that are
            ready to look as intentional as they are.
          </p>
        </Reveal>
        <Reveal className="hero-orbital" aria-hidden="true">
          <b>✺</b>
          <i>
            recognisable
            <br />
            by design
          </i>
        </Reveal>
      </section>

      <section className="page-section">
        <Reveal className="section-grid">
          <div>
            <span className="chapter">( The identity work )</span>
            <h2>
              Build the things
              <br />
              people <em>remember.</em>
            </h2>
          </div>
          <div className="body-copy">
            <p>
              A logo is a beginning, not a brand. We help teams create a visual
              and verbal system with the flexibility to show up everywhere and
              the discipline to still feel like itself.
            </p>
            <p>
              Our motion work makes that system feel alive: never movement for
              movement’s sake, always a cue that helps a brand communicate with a
              bit more confidence.
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
            <h3>Brand foundation</h3>
            <p>
              A point of view on positioning, personality, audience and the one
              idea that should hold every touchpoint together.
            </p>
          </Reveal>
          <Reveal as="article">
            <span>02</span>
            <h3>Visual identity</h3>
            <p>
              Logo, colour, type, imagery and graphic devices with enough range
              to work hard without getting boring.
            </p>
          </Reveal>
          <Reveal as="article">
            <span>03</span>
            <h3>Motion language</h3>
            <p>
              Purposeful transitions, micro-interactions and a movement
              vocabulary that gives digital touchpoints a pulse.
            </p>
          </Reveal>
          <Reveal as="article">
            <span>04</span>
            <h3>Brand toolkit</h3>
            <p>
              Guidelines, templates and ready-to-use assets that help an internal
              team stay recognisable as it grows.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="page-section pale-coral">
        <Reveal>
          <span className="chapter">( Our rhythm )</span>
        </Reveal>
        <div className="service-flow">
          <Reveal as="article">
            <span>01 / Listen</span>
            <h3>Find the truth</h3>
            <p>
              Get to the human insight and business ambition worth building a
              voice around.
            </p>
          </Reveal>
          <Reveal as="article">
            <span>02 / Name it</span>
            <h3>Choose a point of view</h3>
            <p>
              Give the brand a clear character that helps decisions get less
              subjective.
            </p>
          </Reveal>
          <Reveal as="article">
            <span>03 / Make it visible</span>
            <h3>Build the world</h3>
            <p>
              Turn the idea into an identity with enough detail to be genuinely
              useful.
            </p>
          </Reveal>
          <Reveal as="article">
            <span>04 / Set it moving</span>
            <h3>Give it rhythm</h3>
            <p>
              Show how the system responds, transitions and lives beyond a
              static page.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="page-cta">
        <h2>
          Ready for a brand
          <br />
          with a little more
          <br />
          <em>gravitational pull?</em>
        </h2>
        <Link className="button" href="/contact">
          Bring us the brief <span>↗</span>
        </Link>
      </section>
    </>
  );
}
