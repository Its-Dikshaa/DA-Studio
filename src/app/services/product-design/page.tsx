import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Product & UI/UX design — DA🌻",
  description: "Product and UI/UX design services by DA🌻.",
};

export default function ProductDesignPage() {
  return (
    <>
      <section className="page-hero page-hero--violet service-page-hero" id="top">
        <Reveal className="page-hero-copy">
          <p className="crumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/services">Services</Link>
            <span>/</span> Product design
          </p>
          <h1>
            Useful first.
            <br />
            <em>Beautiful</em>
            <br />
            because of it.
          </h1>
          <p>
            Product and UI/UX design that makes complicated ideas feel familiar
            from the very first tap.
          </p>
        </Reveal>
        <Reveal className="hero-orbital" aria-hidden="true">
          <b>✺</b>
          <i>
            the details
            <br />
            are the product
          </i>
        </Reveal>
      </section>

      <section className="page-section">
        <Reveal className="section-grid">
          <div>
            <span className="chapter">( The work )</span>
            <h2>
              More than a<br />
              nice <em>set of screens.</em>
            </h2>
          </div>
          <div className="body-copy">
            <p>
              We design digital products around real behaviour, a clear content
              hierarchy and the small moments that keep a person oriented.
            </p>
            <p>
              From early concepts to an extendable design system, we make
              experiences that your team can build confidently and your
              customers can use without thinking twice.
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
            <h3>Product journeys</h3>
            <p>
              Flows, information architecture and content structure that let the
              important action feel like the natural next one.
            </p>
          </Reveal>
          <Reveal as="article">
            <span>02</span>
            <h3>Interface direction</h3>
            <p>
              A visual language with enough character to be remembered and enough
              logic to be used every day.
            </p>
          </Reveal>
          <Reveal as="article">
            <span>03</span>
            <h3>Interactive prototypes</h3>
            <p>
              Clickable, testable prototypes that help stakeholders see and users
              react before the build gets expensive.
            </p>
          </Reveal>
          <Reveal as="article">
            <span>04</span>
            <h3>Design systems</h3>
            <p>
              Reusable components, states and rules that make quality easier to
              keep as the product gets bigger.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="page-section pale-violet">
        <Reveal>
          <span className="chapter">( Our rhythm )</span>
        </Reveal>
        <div className="service-flow">
          <Reveal as="article">
            <span>01 / Map</span>
            <h3>See the whole</h3>
            <p>Set the user journeys, content hierarchy and design principles.</p>
          </Reveal>
          <Reveal as="article">
            <span>02 / Explore</span>
            <h3>Give it shape</h3>
            <p>
              Move through deliberate concepts until there is a clear visual
              voice.
            </p>
          </Reveal>
          <Reveal as="article">
            <span>03 / Refine</span>
            <h3>Make it work</h3>
            <p>Handle states, edge cases and interaction details with care.</p>
          </Reveal>
          <Reveal as="article">
            <span>04 / Systemise</span>
            <h3>Make it last</h3>
            <p>
              Document the decisions so the next screen gets easier, not harder.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="page-cta">
        <h2>
          Have a product that
          <br />
          needs better <em>instincts?</em>
        </h2>
        <Link className="button" href="/contact">
          Show us the brief <span>↗</span>
        </Link>
      </section>
    </>
  );
}
