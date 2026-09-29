"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    const nextState = !isOpen;
    setIsOpen(nextState);
    if (nextState) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <>
      <header className="site-header">
        <Link href="/" className="brand" aria-label="DA home" onClick={closeMenu}>
          <span>DA</span>
          <span className="brand-flower" aria-hidden="true">
            ✺
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          <Link
            href="/work"
            aria-current={pathname.startsWith("/work") ? "page" : undefined}
          >
            Work
          </Link>
          <Link
            href="/services"
            aria-current={pathname.startsWith("/services") ? "page" : undefined}
          >
            Services
          </Link>
          <Link
            href="/about"
            aria-current={pathname === "/about" ? "page" : undefined}
          >
            About
          </Link>
        </nav>

        <Link className="header-cta" href="/contact" onClick={closeMenu}>
          Let&apos;s talk <span aria-hidden="true">↗</span>
        </Link>

        <button
          className={`menu-toggle ${isOpen ? "is-open" : ""}`}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Open menu"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
        </button>
      </header>

      <aside
        className={`mobile-menu ${isOpen ? "is-open" : ""}`}
        id="mobile-menu"
        aria-hidden={!isOpen}
      >
        <nav aria-label="Mobile navigation">
          <Link href="/work" onClick={closeMenu}>
            Work <span>01</span>
          </Link>
          <Link href="/services" onClick={closeMenu}>
            Services <span>02</span>
          </Link>
          <Link href="/about" onClick={closeMenu}>
            About <span>03</span>
          </Link>
          <Link href="/contact" onClick={closeMenu}>
            Start a project <span>04</span>
          </Link>
        </nav>
      </aside>
    </>
  );
}
