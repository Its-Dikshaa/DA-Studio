"use client";

import Link from "next/link";

export default function Footer() {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <Link className="brand" href="/" aria-label="Back to top" onClick={scrollToTop}>
          DA<span className="brand-flower" aria-hidden="true">✺</span>
        </Link>
        <p>
          Design and development with
          <br />a little more feeling.
        </p>
        <a className="footer-up" href="#top" aria-label="Back to top" onClick={scrollToTop}>
          ↑
        </a>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} DA🌻</span>
        <div>
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
          <a href="#">Behance</a>
        </div>
        <span>Made with intent in India</span>
      </div>
    </footer>
  );
}
