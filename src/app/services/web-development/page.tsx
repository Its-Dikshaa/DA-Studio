import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Web design & development — DA🌻",
  description: "Website design and development services by DA🌻.",
};

export default function WebDevelopmentPage() {
  return (
    <>
      <section className="page-hero page-hero--ink service-page-hero" id="top">
        <Reveal className="page-hero-copy">
          <p className="crumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/services">Services</Link>
            <span>/</span> Web design & development
          </p>
          <h1>
            Websites people
            <br />
            want to <em>stay on.</em>
          </h1>
          <p>
            High-performing design and development for launches, rebrands and
            digital homes that need to do more than look alive.
          </p>
        </Reveal>
        <Reveal className="hero-orbital" aria-hidden="true">
          <b>&lt;/&gt;</b>
          <i>
            made to move,
            <br />
            made to load
          </i>
        </Reveal>
      </section>

      <section className="page-section">
        <Reveal className="section-grid">
          <div>
            <span className="chapter">( Design meets build )</span>
            <h2>
              Every beautiful
              <br />
              decision needs to
              <br />
              <em>survive the browser.</em>
            </h2>
          </div>
          <div className="body-copy">
            <p>
              We design and build websites as one connected process. That means
              the motion has a job, the responsive version is not an
              afterthought and the final thing is as considered as the Figma
              file.
            </p>
            <p>
              Whether you need a focused conversion page or a full editorial brand
              world, we combine strategy, storytelling, UI and front-end craft.
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
            <h3>Website strategy</h3>
            <p>
              Audience, goals, sitemap and message hierarchy that decide what the
              website needs to do before it tries to impress.
            </p>
          </Reveal>
          <Reveal as="article">
            <span>02</span>
            <h3>Visual direction</h3>
            <p>
              Page systems, art direction and interaction language that give a
              responsive site one strong point of view.
            </p>
          </Reveal>
          <Reveal as="article">
            <span>03</span>
            <h3>Front-end build</h3>
            <p>
              Clean, responsive implementation with performance, accessible
              interactions and content publishing in mind.
            </p>
          </Reveal>
          <Reveal as="article">
            <span>04</span>
            <h3>Launch support</h3>
            <p>
              QA, analytics considerations and a sensible handover so publishing
              feels steady on day one.
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
            <span>01 / Plan</span>
            <h3>Get the story straight</h3>
            <p>
              Set the message, hierarchy and conversion path before pixels start
              to pile up.
            </p>
          </Reveal>
          <Reveal as="article">
            <span>02 / Design</span>
            <h3>Make it felt</h3>
            <p>
              Build the visual world and page moments people will want to
              explore.
            </p>
          </Reveal>
          <Reveal as="article">
            <span>03 / Develop</span>
            <h3>Make it real</h3>
            <p>
              Translate the detail into responsive code that behaves properly
              everywhere.
            </p>
          </Reveal>
          <Reveal as="article">
            <span>04 / Launch</span>
            <h3>Make it ready</h3>
            <p>
              Test the edges, polish the performance and put your new digital
              home to work.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="page-cta">
        <h2>
          Need your web
          <br />
          presence to pull
          <br />
          its <em>weight?</em>
        </h2>
        <Link className="button" href="/contact">
          Start a website project <span>↗</span>
        </Link>
      </section>
    </>
  );
}
