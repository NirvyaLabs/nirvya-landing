"use client";

import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

import { APP_LOGIN_URL, MarketingFooter, MarketingNav } from "./Landing";
import "./landing.css";

export type ProductSection = {
  title: string;
  description: string;
  bullets: string[];
  visual: ReactNode;
};

const PILOT_URL =
  "mailto:rishi@nirvyalabs.com?subject=Nirvya%20pilot%20request&body=Organisation%3A%0ACountry%3A%0AFacilities%20or%20care%20settings%3A%0AWhat%20should%20the%20pilot%20prove%3F%0A";

export function ProductPage({
  eyebrow,
  title,
  subtitle,
  heroVisual,
  sections,
  ctaLabel = "Request a pilot"
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  heroVisual: ReactNode;
  sections: ProductSection[];
  ctaLabel?: string;
}) {
  return (
    <div className="nvl">
      <MarketingNav />

      <main>
        <header className="nvl-product-hero">
          <div className="nvl-product-hero-inner">
            <div>
              <div className="nvl-product-breadcrumb">
                <Link href="/#platform">Platform</Link><span>/</span><span>{eyebrow}</span>
              </div>
              <h1>{title}</h1>
              <p className="nvl-hero-sub">{subtitle}</p>
              <div className="nvl-hero-cta">
                <a className="nvl-btn nvl-btn-primary" href={PILOT_URL}>
                  {ctaLabel} <ArrowRight size={16} />
                </a>
                <a className="nvl-btn nvl-btn-ghost-dark" href={APP_LOGIN_URL}>Sign in</a>
              </div>
            </div>
            <div className="nvl-tab-visual">{heroVisual}</div>
          </div>
        </header>

        <div className="nvl-product-sections">
          {sections.map((section, index) => (
            <section
              className={index % 2 === 1 ? "nvl-product-section flip" : "nvl-product-section"}
              key={section.title}
            >
              <div className="nvl-product-section-inner">
                <div className="nvl-tab-text">
                  <h3>{section.title}</h3>
                  <p>{section.description}</p>
                  <ul className="nvl-benefits">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}><Check size={15} />{bullet}</li>
                    ))}
                  </ul>
                </div>
                <div className="nvl-tab-visual">{section.visual}</div>
              </div>
            </section>
          ))}
        </div>

        <section className="nvl-section-dark nvl-cta">
          <div className="nvl-container">
            <h2>Start with one care journey.</h2>
            <p className="nvl-cta-sub">Define what a pilot should prove in your facility or health system.</p>
            <div className="nvl-cta-actions">
              <a className="nvl-btn nvl-btn-primary" href={PILOT_URL}>
                Request a pilot <ArrowRight size={16} />
              </a>
              <a className="nvl-btn nvl-btn-ghost-dark" href="mailto:rishi@nirvyalabs.com">Talk to the team</a>
            </div>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
}
