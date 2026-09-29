import Link from "next/link";
import Reveal from "@/components/Reveal";
import WorkGrid from "@/components/WorkGrid";

export const metadata = {
  title: "Work — DA🌻",
  description: "Selected product, brand and web directions by DA🌻.",
};

export default function WorkPage() {
  return (
    <>
      <section className="page-hero page-hero--violet" id="top">
        <Reveal className="page-hero-copy">
          <p className="crumb">
            <Link href="/">Home</Link>
            <span>/</span> Work
          </p>
          <h1>
            Work that makes
            <br />
            <em>the point.</em>
          </h1>
          <p>
            We design for a reaction, then make sure the experience is worth
            sticking around for. Here are a few original project directions from the
            DA world.
          </p>
        </Reveal>
        <Reveal className="hero-orbital" aria-hidden="true">
          <b>DA</b>
          <i>
            bright ideas,
            <br />
            properly built
          </i>
        </Reveal>
      </section>

      <section className="page-section">
        <WorkGrid />
      </section>

      <section className="page-cta">
        <h2>
          Have a project that
          <br />
          needs a little <em>nerve?</em>
        </h2>
        <Link className="button" href="/contact">
          Tell us about it <span>↗</span>
        </Link>
      </section>
    </>
  );
}
