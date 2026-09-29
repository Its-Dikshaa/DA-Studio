import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Services — DA🌻",
  description: "UX strategy, product design, websites and brand systems by DA🌻.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero page-hero--acid" id="top">
        <Reveal className="page-hero-copy">
          <p className="crumb">
            <Link href="/">Home</Link>
            <span>/</span> Services
          </p>
          <h1>
            We make the
            <br />
            <em>important bits</em>
            <br />
            feel obvious.
          </h1>
          <p>
            Strategy, design and front-end craft for teams building something
            worth caring about.
          </p>
        </Reveal>
        <Reveal className="hero-orbital" aria-hidden="true">
          <b>✺</b>
          <i>
            Less hand-off.
            <br />
            More hand-in-hand.
          </i>
        </Reveal>
      </section>

      <section className="page-section">
        <Reveal className="section-grid">
          <div>
            <span className="chapter">( One team, many lenses )</span>
            <h2>
              Not a menu.
              <br />A way <em>forward.</em>
            </h2>
          </div>
          <div className="body-copy">
            <p>
              Good work rarely lives in a silo. We pair the right pieces of
              strategy, UX, visual design and code for the decision in front of
              you.
            </p>
            <p>
              <strong>
                Pick a focused sprint, bring us into an existing team, or ask us to
                take the whole thing from question mark to launch.
              </strong>
            </p>
          </div>
        </Reveal>
      </section>

      <section className="page-section page-section--compact">
        <div className="services-tiles">
          <Reveal as="article" className="service-tile">
            <span>01 / Find clarity</span>
            <h3>
              UX strategy
              <br />& research
            </h3>
            <p>
              Understand people, map the opportunity and agree on the right thing
              to build before precious time disappears.
            </p>
            <div className="circle-mark"></div>
            <Link className="tile-link" href="/services/ux-strategy">
              Explore this service <span>↗</span>
            </Link>
          </Reveal>

          <Reveal as="article" className="service-tile">
            <span>02 / Shape it</span>
            <h3>
              Product
              <br />& UI/UX design
            </h3>
            <p>
              Turn hard-to-explain functionality into a product people can move
              through without a manual.
            </p>
            <div className="circle-mark"></div>
            <Link className="tile-link" href="/services/product-design">
              Explore this service <span>↗</span>
            </Link>
          </Reveal>

          <Reveal as="article" className="service-tile">
            <span>03 / Put it online</span>
            <h3>
              Web design
              <br />& development
            </h3>
            <p>
              Build high-performing websites that carry the brand, answer
              questions and make conversion feel natural.
            </p>
            <div className="circle-mark"></div>
            <Link className="tile-link" href="/services/web-development">
              Explore this service <span>↗</span>
            </Link>
          </Reveal>

          <Reveal as="article" className="service-tile">
            <span>04 / Give it character</span>
            <h3>
              Brand systems
              <br />& motion
            </h3>
            <p>
              Create the visual rules, assets and movement that help a growing
              business look unmistakably itself.
            </p>
            <div className="circle-mark">✺</div>
            <Link className="tile-link" href="/services/brand-motion">
              Explore this service <span>↗</span>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="page-section engagement">
        <Reveal className="content-heading">
          <span className="chapter">( Ways to work together )</span>
          <h2>
            Meet us where your
            <br />
            <em>momentum is.</em>
          </h2>
        </Reveal>
        <div className="engagement-grid">
          <Reveal as="article">
            <span>01</span>
            <h3>The clarity sprint</h3>
            <p>
              A focused 2–4 week engagement to turn a fuzzy problem into a sharp
              product or brand direction.
            </p>
          </Reveal>
          <Reveal as="article">
            <span>02</span>
            <h3>The launch project</h3>
            <p>
              A cross-disciplinary partnership for a new product, rebrand or
              website—from strategy through launch.
            </p>
          </Reveal>
          <Reveal as="article">
            <span>03</span>
            <h3>The steady partner</h3>
            <p>
              Senior design and development support that slots alongside your team
              when the roadmap keeps moving.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="page-cta">
        <h2>
          Not sure where
          <br />
          to <em>begin?</em>
        </h2>
        <Link className="button" href="/contact">
          Let’s figure it out <span>↗</span>
        </Link>
      </section>
    </>
  );
}
