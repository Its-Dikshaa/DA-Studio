"use client";

import { useState } from "react";
import Link from "next/link";

export default function WorkGrid() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filterCards = (filter: string) => {
    setActiveFilter(filter);
  };

  const isVisible = (category: string) => {
    if (activeFilter === "all") return true;
    return category.includes(activeFilter);
  };

  return (
    <>
      <div className="archive-head">
        <div>
          <span className="chapter">( The archive )</span>
          <h2>
            Different problems.
            <br />
            <em>One good standard.</em>
          </h2>
        </div>
        <div className="filter-list" role="group" aria-label="Filter work">
          <button
            className={activeFilter === "all" ? "is-active" : ""}
            onClick={() => filterCards("all")}
          >
            All work
          </button>
          <button
            className={activeFilter === "product" ? "is-active" : ""}
            onClick={() => filterCards("product")}
          >
            Product
          </button>
          <button
            className={activeFilter === "web" ? "is-active" : ""}
            onClick={() => filterCards("web")}
          >
            Web
          </button>
          <button
            className={activeFilter === "brand" ? "is-active" : ""}
            onClick={() => filterCards("brand")}
          >
            Brand
          </button>
        </div>
      </div>

      <div className="archive-grid">
        <Link
          className="archive-card reveal is-visible"
          href="/work/aurora"
          hidden={!isVisible("product")}
        >
          <div className="archive-card-art">
            <span className="word-art">
              Finance,
              <br />
              but lighter.
            </span>
            <div className="mini-phone">
              <strong>flow</strong>
              <i></i>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="archive-card-content">
            <div>
              <small>Product design · Fintech</small>
              <h3>Aurora</h3>
              <p>
                A calmer money movement experience for a new generation of investors.
              </p>
            </div>
            <span className="project-arrow">↗</span>
          </div>
        </Link>

        <Link
          className="archive-card reveal is-visible"
          href="/work/terra"
          hidden={!isVisible("web brand")}
        >
          <div className="archive-card-art">
            <span className="word-art">
              Go where
              <br />
              you soften.
            </span>
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
          <div className="archive-card-content">
            <div>
              <small>Brand + website · Travel</small>
              <h3>Terra House</h3>
              <p>
                A stay discovery platform that lets landscapes do the talking.
              </p>
            </div>
            <span className="project-arrow">↗</span>
          </div>
        </Link>

        <Link
          className="archive-card reveal is-visible"
          href="/work/lune"
          hidden={!isVisible("product brand")}
        >
          <div className="archive-card-art">
            <div className="grid-lines"></div>
            <div className="lune-orb--archive"></div>
            <div className="lune-panel">
              <span>LUNE / 01</span>
              <b>
                Rest is
                <br />a ritual.
              </b>
              <i>Designed for better nights</i>
            </div>
          </div>
          <div className="archive-card-content">
            <div>
              <small>Product + identity · Wellness</small>
              <h3>Lune</h3>
              <p>
                A more human nightly ritual for people who are tired of tracking
                everything.
              </p>
            </div>
            <span className="project-arrow">↗</span>
          </div>
        </Link>

        <Link
          className="archive-card reveal is-visible"
          href="/contact"
          hidden={!isVisible("web")}
        >
          <div className="archive-card-art">
            <span className="word-art">
              Your next
              <br />
              one goes here.
            </span>
            <div
              className="mini-phone"
              style={{
                transform: "translateX(-50%) rotate(-9deg)",
                background: "var(--acid)",
              }}
            >
              <strong>
                maybe
                <br />
                you?
              </strong>
              <i style={{ background: "var(--coral)" }}></i>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="archive-card-content">
            <div>
              <small>Your ambition · Next</small>
              <h3>Something new</h3>
              <p>
                Bring the awkward brief, the early pitch or the half-formed idea.
              </p>
            </div>
            <span className="project-arrow">↗</span>
          </div>
        </Link>
      </div>
    </>
  );
}
