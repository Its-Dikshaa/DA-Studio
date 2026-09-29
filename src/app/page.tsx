import Link from "next/link";
import Reveal from "@/components/Reveal";
import LeadForm from "@/components/LeadForm";

export default function Home() {
  return (
    <>
      <section className="hero section" id="top">
        <Reveal className="hero-copy">
          <p className="eyebrow">
            <span></span> Independent studio · India + everywhere
          </p>
          <h1>
            Make it <em>matter.</em>
            <br />
            Make it memorable.
          </h1>
          <p className="hero-body">
            DA🌻 partners with bold teams to turn messy ideas into clear,
            characterful digital products.
          </p>
          <div className="hero-actions">
            <Link className="button button-dark" href="/contact">
              Start a project <span>↗</span>
            </Link>
            <Link className="text-link" href="/work">
              See selected work <span>↓</span>
            </Link>
          </div>
        </Reveal>

        <Reveal
          className="hero-art"
          aria-label="Abstract DA design studio illustration"
          role="img"
        >
          <div className="art-orbit orbit-one"></div>
          <div className="art-orbit orbit-two"></div>
          <div className="art-sun">
            <span>DA</span>
          </div>
          <div className="art-window">
            <div className="window-top">
              <i></i>
              <i></i>
              <i></i>
            </div>
            <div className="window-line line-short"></div>
            <div className="window-line"></div>
            <div className="window-card">
              <b>
                Good ideas
                <br />
                need good homes.
              </b>
              <small>designed with intent</small>
            </div>
          </div>
          <span className="scribble scribble-a">
            made with
            <br />
            feeling
          </span>
          <span className="art-flower">✺</span>
        </Reveal>

        <div className="hero-foot">
          Scroll to explore <span>↓</span>
        </div>
      </section>

      <section className="marquee" aria-label="What DA does">
        <div className="marquee-track">
          <span>UX STRATEGY</span>
          <b>✺</b>
          <span>PRODUCT DESIGN</span>
          <b>✺</b>
          <span>WEB DEVELOPMENT</span>
          <b>✺</b>
          <span>BRAND SYSTEMS</span>
          <b>✺</b>
          <span>UX STRATEGY</span>
          <b>✺</b>
          <span>PRODUCT DESIGN</span>
          <b>✺</b>
          <span>WEB DEVELOPMENT</span>
          <b>✺</b>
          <span>BRAND SYSTEMS</span>
          <b>✺</b>
        </div>
      </section>

      <section className="section intro" id="about">
        <Reveal>
          <p className="section-label">( About DA )</p>
        </Reveal>
        <div className="intro-grid">
          <Reveal>
            <h2>
              We bring the <em>why,</em> the wow and the working code.
            </h2>
          </Reveal>
          <Reveal className="intro-side">
            <p>
              Small team. Senior craft. No bloated decks or design theatre.
              Just focused thinking and digital experiences that make people
              want to stay.
            </p>
            <Link className="text-link" href="/services">
              How we can help <span>↘</span>
            </Link>
          </Reveal>
        </div>
        <Reveal className="principles">
          <article>
            <span>01</span>
            <h3>Clear over clever</h3>
            <p>We make useful feel effortless.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Character counts</h3>
            <p>Every brand deserves a point of view.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Built to grow</h3>
            <p>Beautiful systems, not one-off screens.</p>
          </article>
        </Reveal>
      </section>

      <section className="work-section section" id="work">
        <Reveal className="section-heading">
          <div>
            <p className="section-label">( Selected directions )</p>
            <h2>
              Work with
              <br />
              <em>some spine.</em>
            </h2>
          </div>
          <p>Every project begins with listening, then gets a little braver.</p>
        </Reveal>

        <div className="project-grid">
          <Reveal>
            <Link
              className="project project-tall"
              href="/work/aurora"
              aria-label="Read Aurora concept case study"
            >
              <div className="project-art aurora-art">
                <div className="aurora-phone">
                  <div className="phone-pill"></div>
                  <span>flow</span>
                  <i></i>
                  <i></i>
                  <b>₹ 24,280</b>
                  <small>your money, in motion</small>
                </div>
                <div className="aurora-ring"></div>
                <p>
                  FINANCE,
                  <br />
                  WITHOUT
                  <br />
                  THE FUSS.
                </p>
              </div>
              <div className="project-meta">
                <div>
                  <p>01 / Fintech</p>
                  <h3>Aurora</h3>
                </div>
                <span className="project-arrow">↗</span>
              </div>
            </Link>
          </Reveal>

          <Reveal>
            <Link
              className="project"
              href="/work/terra"
              aria-label="Read Terra House concept case study"
            >
              <div className="project-art terra-art">
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
              </div>
              <div className="project-meta">
                <div>
                  <p>02 / Travel</p>
                  <h3>Terra House</h3>
                </div>
                <span className="project-arrow">↗</span>
              </div>
            </Link>
          </Reveal>

          <Reveal>
            <Link
              className="project"
              href="/work/lune"
              aria-label="Read Lune concept case study"
            >
              <div className="project-art lune-art">
                <div className="lune-grid"></div>
                <div className="lune-orb"></div>
                <div className="lune-panel">
                  <span>LUNE / 01</span>
                  <b>
                    Rest is
                    <br />a ritual.
                  </b>
                  <i>Designed for better nights</i>
                </div>
              </div>
              <div className="project-meta">
                <div>
                  <p>03 / Wellness</p>
                  <h3>Lune</h3>
                </div>
                <span className="project-arrow">↗</span>
              </div>
            </Link>
          </Reveal>
        </div>
        <Reveal>
          <p className="project-note">
            Concept directions shown for demonstration. Your project gets its
            own story, not a recycled skin.
          </p>
        </Reveal>
      </section>

      <section className="services-section section" id="services">
        <Reveal className="services-head">
          <p className="section-label">( What we do )</p>
          <h2>
            From loose
            <br />
            thought to <em>living thing.</em>
          </h2>
        </Reveal>
        <div className="service-list">
          <Reveal>
            <details className="service" open>
              <summary>
                <span>01</span>
                <h3>UX strategy & research</h3>
                <i>+</i>
              </summary>
              <div className="service-detail">
                <p>
                  We find the real problem before drawing the first rectangle.
                  Research, journeys, workshops and product clarity for teams
                  ready to make smarter calls.
                </p>
                <span>
                  Discovery workshops · UX audit · User flows · Information
                  architecture
                  <br />
                  <Link href="/services/ux-strategy">Explore service ↗</Link>
                </span>
              </div>
            </details>
          </Reveal>

          <Reveal>
            <details className="service">
              <summary>
                <span>02</span>
                <h3>Product & UI/UX design</h3>
                <i>+</i>
              </summary>
              <div className="service-detail">
                <p>
                  Interfaces with a pulse: useful, recognisable and easy to grow.
                  We turn strategy into systems your users and developers will
                  genuinely understand.
                </p>
                <span>
                  Product design · Design systems · Prototypes · Usability testing
                  <br />
                  <Link href="/services/product-design">Explore service ↗</Link>
                </span>
              </div>
            </details>
          </Reveal>

          <Reveal>
            <details className="service">
              <summary>
                <span>03</span>
                <h3>Web design & development</h3>
                <i>+</i>
              </summary>
              <div className="service-detail">
                <p>
                  Sites that make a first impression and a second conversion.
                  Thoughtful, responsive builds that are as quick under the hood
                  as they are nice to look at.
                </p>
                <span>
                  Websites · Landing pages · Frontend builds · CMS integration
                  <br />
                  <Link href="/services/web-development">Explore service ↗</Link>
                </span>
              </div>
            </details>
          </Reveal>

          <Reveal>
            <details className="service">
              <summary>
                <span>04</span>
                <h3>Brand systems & motion</h3>
                <i>+</i>
              </summary>
              <div className="service-detail">
                <p>
                  We give growing brands a visual language they can use
                  anywhere—from the first launch slide to the five-hundredth
                  social post.
                </p>
                <span>
                  Visual identity · Art direction · Motion language · Social
                  toolkit
                  <br />
                  <Link href="/services/brand-motion">Explore service ↗</Link>
                </span>
              </div>
            </details>
          </Reveal>
        </div>
      </section>

      <section className="process section">
        <Reveal className="process-intro">
          <p className="section-label">( The DA way )</p>
          <h2>
            Less mystery.
            <br />
            More momentum.
          </h2>
        </Reveal>
        <ol className="process-list">
          <Reveal>
            <li>
              <span>01</span>
              <div>
                <h3>Listen hard</h3>
                <p>
                  We get close to the business, the people and the inconvenient
                  truths.
                </p>
              </div>
              <small>Discover</small>
            </li>
          </Reveal>
          <Reveal>
            <li>
              <span>02</span>
              <div>
                <h3>Choose a direction</h3>
                <p>
                  We make the product and brand choices worth committing to.
                </p>
              </div>
              <small>Define</small>
            </li>
          </Reveal>
          <Reveal>
            <li>
              <span>03</span>
              <div>
                <h3>Make it feel right</h3>
                <p>
                  We prototype, pressure-test and bring the visual magic.
                </p>
              </div>
              <small>Design</small>
            </li>
          </Reveal>
          <Reveal>
            <li>
              <span>04</span>
              <div>
                <h3>Put it in the world</h3>
                <p>
                  We build the details properly, so your experience holds up.
                </p>
              </div>
              <small>Develop</small>
            </li>
          </Reveal>
        </ol>
      </section>

      <section className="statement-section">
        <div className="statement-art" aria-hidden="true">
          <span>✺</span>
          <span>✺</span>
          <span>✺</span>
        </div>
        <Reveal>
          <blockquote className="reveal">
            “The internet has enough <em>forgettable.</em> Let&apos;s make your
            corner feel like a place people want to return to.”
          </blockquote>
        </Reveal>
      </section>

      <section className="contact section" id="contact">
        <Reveal className="contact-intro">
          <p className="section-label">( Start something )</p>
          <h2>
            Tell us
            <br />
            what&apos;s <em>blooming.</em>
          </h2>
          <p>
            Big idea, small question, early sketch—we&apos;re here for it. Share a
            few details and we&apos;ll come back with a thoughtful next step.
          </p>
          <div className="contact-direct">
            <a href="mailto:hello@da-studio.in">hello@da-studio.in ↗</a>
            <span>Replies within 1–2 working days</span>
          </div>
        </Reveal>

        <Reveal>
          <LeadForm />
        </Reveal>
      </section>
    </>
  );
}
