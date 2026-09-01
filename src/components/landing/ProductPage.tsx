"use client";

import { ArrowRight, Check } from "lucide-react";
import { ReactNode, useEffect } from "react";

import { APP_LOGIN_URL, MarketingFooter, MarketingNav } from "./Landing";
import "./landing.css";

export type ProductSection = {
  title: string;
  description: string;
  bullets: string[];
  visual: ReactNode;
};

export function ProductPage({
  eyebrow,
  title,
  subtitle,
  heroVisual,
  sections,
  ctaLabel = "Request pilot access"
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  heroVisual: ReactNode;
  sections: ProductSection[];
  ctaLabel?: string;
}) {
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>(".nvl .animate-on-scroll"));
    if (!("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="nvl">
      <MarketingNav />

      <header className="nvl-product-hero">
        <div className="nvl-hero-glow" />
        <div className="nvl-product-hero-inner">
          <div>
            <p className="nvl-eyebrow">{eyebrow}</p>
            <h1>{title}</h1>
            <p className="nvl-hero-sub">{subtitle}</p>
            <div className="nvl-hero-cta" style={{ marginTop: 28 }}>
              <a className="nvl-btn nvl-btn-primary" href="mailto:rishi@nirvyalabs.com">
                {ctaLabel} <ArrowRight size={16} />
              </a>
              <a className="nvl-btn nvl-btn-ghost-dark" href={APP_LOGIN_URL}>
                Sign in
              </a>
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
            <div className="nvl-product-section-inner animate-on-scroll">
              <div className="nvl-tab-text">
                <h3>{section.title}</h3>
                <p>{section.description}</p>
                <ul className="nvl-benefits">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>
                      <Check size={15} />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="nvl-tab-visual">{section.visual}</div>
            </div>
          </section>
        ))}
      </div>

      <section className="nvl-section nvl-section-dark nvl-cta">
        <div className="nvl-container animate-on-scroll">
          <h2>Ready to bring this to your facility?</h2>
          <p className="nvl-cta-sub">We&apos;re looking for pilot hospitals in Andhra Pradesh.</p>
          <div className="nvl-cta-actions">
            <a className="nvl-btn nvl-btn-primary nvl-btn-lg" href="mailto:rishi@nirvyalabs.com">
              {ctaLabel} <ArrowRight size={16} />
            </a>
            <a className="nvl-cta-email" href="mailto:rishi@nirvyalabs.com">
              rishi@nirvyalabs.com
            </a>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
