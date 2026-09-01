"use client";

import {
  ArrowRight,
  Check,
  ChevronDown,
  Github,
  Menu,
  MessageCircle,
  Share2,
  Stethoscope,
  X
} from "lucide-react";
import Link from "next/link";
import { ReactNode, useEffect, useRef, useState } from "react";

import { MockDashboard, MockExchange, MockWhatsApp } from "./mockups";
import "./landing.css";

export const APP_LOGIN_URL = `${
  process.env.NEXT_PUBLIC_APP_URL ?? "https://app.nirvyalabs.com"
}/login`;

const NAV_LINKS = [
  { href: "/#mission", label: "Mission" },
  { href: "/#open-source", label: "Open Source" },
  { href: "/#contact", label: "Contact" }
];

export const PRODUCT_LINKS = [
  {
    href: "/product/clinical",
    label: "Clinical Platform",
    desc: "AI notes, e-prescriptions, scheduling"
  },
  {
    href: "/product/connect",
    label: "Patient Connect",
    desc: "WhatsApp booking, reminders, records"
  },
  {
    href: "/product/exchange",
    label: "Health Exchange",
    desc: "ABDM, FHIR R4, consent management"
  }
];

/* ---- count-up stat (animates once when scrolled into view) ---- */
function CountUp({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(() => {
    const match = value.match(/^([\d.]+)(.*)$/);
    return match ? `0${match[2]}` : value;
  });

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) {
      return;
    }
    const match = value.match(/^([\d.]+)(.*)$/);
    if (!match) {
      return;
    }
    const target = parseFloat(match[1]);
    const suffix = match[2];
    const decimals = match[1].includes(".") ? 1 : 0;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) {
          return;
        }
        observer.disconnect();
        const start = performance.now();
        const duration = 1200;
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          setDisplay(`${(target * eased).toFixed(decimals)}${suffix}`);
          if (t < 1) {
            requestAnimationFrame(tick);
          } else {
            setDisplay(value);
          }
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div className="nvl-stat" ref={ref}>
      <strong>{display}</strong>
      <span>{label}</span>
    </div>
  );
}

/* ---- shared marketing nav (used by Landing and /product pages) ---- */
export function MarketingNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={scrolled ? "nvl-nav scrolled" : "nvl-nav"}>
      <div className="nvl-nav-inner">
        <Link className="nvl-brand" href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="nvl-logo-img" src="/nirvya-mark.svg" alt="Nirvya" width={22} height={26} />
          Nirvya Health
        </Link>
        <div className="nvl-nav-links">
          <div
            className="nvl-dropdown-wrap"
            onMouseEnter={() => setProductOpen(true)}
            onMouseLeave={() => setProductOpen(false)}
          >
            <button
              className="nvl-nav-link nvl-dropdown-trigger"
              type="button"
              onClick={() => setProductOpen((open) => !open)}
            >
              Product <ChevronDown size={13} />
            </button>
            {productOpen ? (
              <div className="nvl-dropdown">
                {PRODUCT_LINKS.map((item) => (
                  <Link href={item.href} key={item.href} onClick={() => setProductOpen(false)}>
                    <strong>{item.label}</strong>
                    <span>{item.desc}</span>
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
          {NAV_LINKS.map((link) => (
            <a className="nvl-nav-link" href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <div className="nvl-nav-right">
          <a className="nvl-btn nvl-btn-ghost-dark nvl-btn-sm nvl-signin" href={APP_LOGIN_URL}>
            Sign in <ArrowRight size={14} />
          </a>
          <button
            className="nvl-hamburger"
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      <div className={menuOpen ? "nvl-mobile-menu open" : "nvl-mobile-menu"}>
        {PRODUCT_LINKS.map((item) => (
          <Link href={item.href} key={item.href} onClick={() => setMenuOpen(false)}>
            {item.label}
          </Link>
        ))}
        {NAV_LINKS.map((link) => (
          <a href={link.href} key={link.href} onClick={() => setMenuOpen(false)}>
            {link.label}
          </a>
        ))}
        <a href={APP_LOGIN_URL} onClick={() => setMenuOpen(false)}>
          Sign in →
        </a>
      </div>
    </nav>
  );
}

/* ---- footer (shared) ---- */
export function MarketingFooter() {
  return (
    <footer className="nvl-footer">
      <div className="nvl-footer-cols">
        <div className="nvl-footer-col nvl-footer-brand">
          <strong>Nirvya Labs</strong>
          <p>
            Healthcare infrastructure for the last mile.
            <br />
            Sydney, Australia · Andhra Pradesh, India
          </p>
        </div>
        <div className="nvl-footer-col">
          <h4>Product</h4>
          {PRODUCT_LINKS.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href="/#open-source">Krama Core (OSS)</Link>
        </div>
        <div className="nvl-footer-col">
          <h4>Company</h4>
          <Link href="/#mission">About</Link>
          <Link href="/#mission">Mission</Link>
          <Link href="/#faq">FAQ</Link>
          <Link href="/#contact">Careers</Link>
        </div>
        <div className="nvl-footer-col">
          <h4>Connect</h4>
          <a href="https://github.com/nirvya-labs" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="mailto:rishi@nirvyalabs.com">Email</a>
          <a href="/product/connect">WhatsApp</a>
        </div>
      </div>
      <div className="nvl-footer-bottom">
        © 2026 Nirvya Labs · Apache 2.0 (Krama Core) · Made with purpose
      </div>
    </footer>
  );
}

/* ---- product tabs data ---- */
type ProductTab = {
  id: string;
  tab: string;
  icon: ReactNode;
  title: string;
  description: string;
  benefits: string[];
  href: string;
  visual: ReactNode;
};

const PRODUCT_TABS: ProductTab[] = [
  {
    id: "clinical",
    tab: "Clinical Platform",
    icon: <Stethoscope size={24} />,
    title: "Clinical tools that respect a doctor's time",
    description:
      "AI-powered encounter notes, digital prescriptions with drug interaction checks, and ABHA patient registration — everything ABDM-compliant from day one.",
    benefits: [
      "AI-assisted SOAP notes — save 30+ min/day",
      "Drug interaction checks against Indian Pharmacopoeia",
      "ABHA patient registration in under 2 minutes",
      "Digital prescriptions with QR codes"
    ],
    href: "/product/clinical",
    visual: <MockDashboard />
  },
  {
    id: "connect",
    tab: "Patient Connect",
    icon: <MessageCircle size={24} />,
    title: "Meet patients where they are — on WhatsApp",
    description:
      "550M+ Indians use WhatsApp daily. Instead of asking patients to download an app, we bring healthcare to the messaging platform they already trust.",
    benefits: [
      "Appointment booking in 30 seconds via WhatsApp",
      "Prescription delivery — secure link, OTP verified",
      "24-hour appointment reminders — reduce no-shows by 30%",
      "Telugu, Hindi, English — auto-detected"
    ],
    href: "/product/connect",
    visual: <MockWhatsApp />
  },
  {
    id: "exchange",
    tab: "Health Exchange",
    icon: <Share2 size={24} />,
    title: "ABDM-native health data infrastructure",
    description:
      "Built on FHIR R4 from day one — not bolted on. Every encounter generates a standards-compliant health record that's published to India's national health exchange.",
    benefits: [
      "ABDM Milestones M1, M2, M3 — built into the platform",
      "FHIR R4 OPConsultRecord, PrescriptionRecord bundles",
      "ECDH + AES-256-GCM exchange encryption (in development)",
      "Multi-country adapter architecture (India → Australia → US)"
    ],
    href: "/product/exchange",
    visual: <MockExchange />
  }
];

const COMPLIANCE_BADGES = [
  "ABDM Integrated",
  "DPDP Act Compliant",
  "FHIR R4 Native",
  "ECDH Encryption",
  "Row-Level Security",
  "Tamper-Evident Audit Trail",
  "Data Residency (India)",
  "HIPAA Ready"
];

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: "What types of facilities does Nirvya support?",
    a: "Nirvya supports private clinics (1–3 doctors), mid-size hospitals (50–200 beds), and government Primary Health Centres (PHCs). The platform adapts to each facility type through feature flags — smaller facilities see a simplified interface, while hospitals get full departmental management."
  },
  {
    q: "How does ABDM integration work?",
    a: "Nirvya is ABDM-native from day one. Every patient registration creates or links an ABHA ID. Every signed encounter generates a FHIR R4 bundle that's published to the ABDM Gateway. Consent management is built into the platform. We handle M1 (identity), M2 (record linking), and M3 (data exchange)."
  },
  {
    q: "Do doctors need training to use it?",
    a: "Most doctors are comfortable within 10 minutes. The SOAP note editor works like a document — just type. AI suggestions appear inline as you write. Digital prescriptions are signed with one click. We provide a 2-page quick start guide and a 5-minute video walkthrough."
  },
  {
    q: "How do patients access their records?",
    a: "Through WhatsApp — no app download needed. Patients receive appointment reminders, prescription notifications, and lab result alerts via WhatsApp. They can also view their full health records through a secure web portal (OTP-verified). All messages are in Telugu, Hindi, or English."
  },
  {
    q: "Is patient data secure?",
    a: "Yes. Encrypted ABDM data exchange (ECDH + AES-256-GCM). Facility-level isolation at the database layer — staff at one facility cannot access another facility's data. A tamper-evident audit trail on every data access. Designed for compliance with India's DPDP Act."
  },
  {
    q: "What does it cost?",
    a: "We're currently offering free pilot access to hospitals in Andhra Pradesh. Pricing will be based on facility size — starting at ₹5,000/month for small clinics. Government PHCs will always have a free tier."
  },
  {
    q: "Is the code open source?",
    a: "The underlying SDK (Krama Core) is open source under Apache 2.0. Any developer can use it to build on ABDM. The Nirvya Health platform (dashboard, WhatsApp bot, AI engine) is a managed product built on top of Krama Core."
  }
];

export function Landing() {
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Subtle fade-up reveal via IntersectionObserver (no animation libraries).
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

  const product = PRODUCT_TABS[activeTab];

  return (
    <div className="nvl">
      <MarketingNav />

      {/* ---- 1. Hero ---- */}
      <header className="nvl-hero" id="top">
        <div className="nvl-hero-glow" />
        <div className="nvl-hero-inner">
          <p className="nvl-eyebrow center">Healthcare infrastructure for the last mile</p>
          <h1>Every family deserves health access.</h1>
          <p className="nvl-hero-sub">
            Nirvya digitizes hospitals so patients in rural India never carry paper files again.
            Doctors get AI-powered clinical tools. Patients get everything on WhatsApp.
          </p>
          <div className="nvl-hero-cta">
            <a className="nvl-btn nvl-btn-primary" href="#contact">
              Get started <ArrowRight size={16} />
            </a>
            <a className="nvl-btn nvl-btn-ghost-dark" href="#product">
              See how it works
            </a>
          </div>
          <p className="nvl-hero-meta">Open source · ABDM native · FHIR R4</p>
        </div>
        <div className="nvl-hero-fade" />
      </header>

      {/* ---- 2. The problem ---- */}
      <section className="nvl-section">
        <div className="nvl-narrow animate-on-scroll">
          <p className="nvl-eyebrow">The problem</p>
          <h2 className="nvl-h-section">
            847 million health IDs.
            <br />
            90% never used.
          </h2>
          <div className="nvl-prose">
            <p>
              India built ABHA — a national health identity for every citizen. But the IDs sit
              unused because there&apos;s no modern software connecting hospitals to the system.
            </p>
            <p>
              A farmer in Andhra Pradesh travels hours to a government hospital. She waits six
              hours. Gets a prescription she can&apos;t read. Goes home with no record of what
              happened. Next time, she shows old medicine strips at a medical shop instead of
              seeing a doctor.
            </p>
            <p>
              1.2 million clinics still run on paper. When a patient visits a new doctor, they
              start from zero. No history. No allergies. No medication list. Every visit is a
              blank page.
            </p>
          </div>
          <div className="nvl-stats">
            <CountUp value="1.2M+" label="clinics on paper" />
            <CountUp value="28km" label="average rural trip to a doctor" />
            <CountUp value="90%" label="ABHA IDs unused" />
          </div>
        </div>
      </section>

      {/* ---- 3. The three products (tabbed) ---- */}
      <section className="nvl-section nvl-section-gray" id="product">
        <div className="nvl-container">
          <div className="animate-on-scroll" style={{ textAlign: "center" }}>
            <p className="nvl-eyebrow center">The platform</p>
            <h2 className="nvl-h-section">One platform. Three workflows. Zero friction.</h2>
            <p className="nvl-sub" style={{ margin: "18px auto 0" }}>
              Everything a hospital needs — clinical tools, patient engagement, and health data
              exchange — in one system.
            </p>
          </div>

          <div className="nvl-tabs animate-on-scroll" role="tablist">
            {PRODUCT_TABS.map((item, index) => (
              <button
                className={index === activeTab ? "nvl-tab active" : "nvl-tab"}
                key={item.id}
                role="tab"
                aria-selected={index === activeTab}
                type="button"
                onClick={() => setActiveTab(index)}
              >
                {item.tab}
              </button>
            ))}
          </div>

          <div className="nvl-tab-panel animate-on-scroll" key={product.id}>
            <div className="nvl-tab-text">
              <span className="nvl-tab-icon">{product.icon}</span>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <ul className="nvl-benefits">
                {product.benefits.map((benefit) => (
                  <li key={benefit}>
                    <Check size={15} />
                    {benefit}
                  </li>
                ))}
              </ul>
              <Link className="nvl-text-link" href={product.href}>
                Explore {product.tab} <ArrowRight size={14} />
              </Link>
            </div>
            <div className="nvl-tab-visual">{product.visual}</div>
          </div>
        </div>
      </section>

      {/* ---- 4. Grandmother story ---- */}
      <section className="nvl-section nvl-section-dark" id="mission">
        <div className="nvl-narrower nvl-story animate-on-scroll">
          <span className="nvl-quote-mark">&ldquo;</span>
          <p className="nvl-story-text">
            {`My grandmother never liked going to doctors. She'd walk into a medical shop with old medicine strips and ask for the same thing — even years later, even when they stopped working.

She'd never mention the last doctor. No one ever had the full picture.

She passed away. But I see this pattern in every village, every family, every day across India.`}
          </p>
          <p className="nvl-story-attr">— Rishi Kanajam, Founder</p>
          <p className="nvl-story-tag">Nirvya exists because no family should go through this.</p>
        </div>
      </section>

      {/* ---- 5. How it works ---- */}
      <section className="nvl-section nvl-section-gray">
        <div className="nvl-container">
          <div className="animate-on-scroll">
            <p className="nvl-eyebrow">How it works</p>
            <h2 className="nvl-h-section">Three steps. Ten minutes to learn.</h2>
          </div>
          <div className="nvl-steps animate-on-scroll">
            <div className="nvl-step">
              <div className="nvl-step-num">01</div>
              <h3>Hospital connects to ABDM</h3>
              <p>
                We handle ABHA integration, HFR registration, and compliance. The hospital just
                signs up.
              </p>
              <div className="nvl-step-visual">
                <span className="nvl-pill">🛡 ABDM integrated</span>
              </div>
            </div>
            <div className="nvl-step">
              <div className="nvl-step-num">02</div>
              <h3>Doctors use the dashboard</h3>
              <p>
                Register patients, write AI-assisted encounter notes, sign digital prescriptions.
                Learning curve: 10 minutes.
              </p>
              <div className="nvl-step-visual">
                <div className="nvl-mock-soap">
                  <span>S</span>
                  <span>O</span>
                  <span>A</span>
                  <span>P</span>
                </div>
              </div>
            </div>
            <div className="nvl-step">
              <div className="nvl-step-num">03</div>
              <h3>Patients get WhatsApp access</h3>
              <p>
                Appointments, prescriptions, health records — all through WhatsApp. Zero training.
                Zero downloads.
              </p>
              <div className="nvl-step-visual">
                <span className="nvl-pill">💬 &quot;✅ Booked! Dr. Sharma, 9:30 AM&quot;</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- 6. By the numbers ---- */}
      <section className="nvl-section">
        <div className="nvl-container" style={{ textAlign: "center" }}>
          <div className="animate-on-scroll">
            <p className="nvl-eyebrow center">Impact</p>
            <h2 className="nvl-h-section">Built for scale. Designed for the last mile.</h2>
          </div>
          <div className="nvl-metrics animate-on-scroll">
            <CountUp value="847M" label="ABHA IDs India has created" />
            <CountUp value="28km" label="average rural trip to a doctor" />
            <CountUp value="1.2M+" label="clinics still on paper registers" />
            <CountUp value="90%" label="ABHA IDs sitting unused" />
          </div>
          <p className="nvl-source">Source: National Health Authority · Lancet Regional Health 2025</p>
        </div>
      </section>

      {/* ---- 7. Open source ---- */}
      <section className="nvl-section nvl-section-gray" id="open-source">
        <div className="nvl-narrow animate-on-scroll">
          <p className="nvl-eyebrow">Open source</p>
          <h2 className="nvl-h-section">Powered by Krama Core</h2>
          <p className="nvl-sub">
            The async-native Python SDK for ABDM. Framework-agnostic. FHIR R4 native. Free forever.
          </p>

          <table className="nvl-compare">
            <thead>
              <tr>
                <th />
                <th>Krama Core</th>
                <th>Others</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Framework</td>
                <td>
                  <Check size={14} /> Any (FastAPI, Flask, Django)
                </td>
                <td>Django only</td>
              </tr>
              <tr>
                <td>Async</td>
                <td>
                  <Check size={14} /> Native async/await
                </td>
                <td>Sync + Celery</td>
              </tr>
              <tr>
                <td>FHIR builder</td>
                <td>
                  <Check size={14} /> Complete R4 document bundles
                </td>
                <td>None</td>
              </tr>
              <tr>
                <td>Encryption</td>
                <td>
                  <Check size={14} /> ECDH + AES-GCM (in development)
                </td>
                <td>None</td>
              </tr>
            </tbody>
          </table>

          <div className="nvl-code">
            <pre>
              <span className="tok-kw">from</span> krama.fhir <span className="tok-kw">import</span>{" "}
              <span className="tok-fn">create_op_consult_bundle</span>
              {"\n\n"}
              bundle = <span className="tok-fn">create_op_consult_bundle</span>(
              {"\n"}
              {"    "}patient=<span className="tok-cls">PatientInfo</span>(name=
              <span className="tok-str">&quot;Priya Reddy&quot;</span>, abha_address=
              <span className="tok-str">&quot;priya@abdm&quot;</span>, ...),
              {"\n"}
              {"    "}practitioner=doctor, diagnosis=dx, medications=meds,
              {"\n"})
            </pre>
          </div>
          <div className="nvl-os-cta">
            <a
              className="nvl-btn nvl-btn-ghost"
              href="https://github.com/nirvya-labs/krama-core"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={16} /> View on GitHub <ArrowRight size={14} />
            </a>
            <Link className="nvl-btn nvl-btn-ghost" href="/product/exchange">
              Read documentation <ArrowRight size={14} />
            </Link>
          </div>
          <p className="nvl-os-foot">Apache 2.0 · Contributions welcome · pip install krama-core</p>
        </div>
      </section>

      {/* ---- 8. Compliance ---- */}
      <section className="nvl-section">
        <div className="nvl-container" style={{ textAlign: "center" }}>
          <div className="animate-on-scroll">
            <p className="nvl-eyebrow center">Compliance</p>
            <h2 className="nvl-h-section">Security and standards, built in.</h2>
          </div>
          <div className="nvl-badges animate-on-scroll">
            {COMPLIANCE_BADGES.map((badge) => (
              <span className="nvl-pill" key={badge}>
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ---- 9. Vision ---- */}
      <section className="nvl-section nvl-section-gray">
        <div className="nvl-narrower" style={{ textAlign: "center" }}>
          <div className="animate-on-scroll">
            <p className="nvl-eyebrow center">Vision</p>
            <h2 className="nvl-h-section">India today. The world tomorrow.</h2>
            <p className="nvl-sub" style={{ margin: "18px auto 0" }}>
              Nirvya&apos;s architecture is designed for multi-country expansion from day one.
              Because healthcare fragmentation isn&apos;t just an Indian problem.
            </p>
          </div>
          <div className="nvl-countries animate-on-scroll">
            <div className="nvl-country">
              <span className="flag">🇮🇳</span>
              <div className="ct">
                <strong>India</strong>
                <span>ABDM</span>
              </div>
              <span className="nvl-badge active">Active — building now</span>
            </div>
            <div className="nvl-country">
              <span className="flag">🇦🇺</span>
              <div className="ct">
                <strong>Australia</strong>
                <span>My Health Record</span>
              </div>
              <span className="nvl-badge soon">Phase 2 — 2027</span>
            </div>
            <div className="nvl-country">
              <span className="flag">🇺🇸</span>
              <div className="ct">
                <strong>United States</strong>
                <span>FHIR R4</span>
              </div>
              <span className="nvl-badge soon">Phase 3 — 2028</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---- 10. FAQ ---- */}
      <section className="nvl-section" id="faq">
        <div className="nvl-narrow animate-on-scroll">
          <h2 className="nvl-h-section" style={{ textAlign: "center" }}>
            Frequently asked questions
          </h2>
          <div className="nvl-faq">
            {FAQS.map((item, index) => {
              const open = openFaq === index;
              return (
                <div className={open ? "nvl-faq-item open" : "nvl-faq-item"} key={item.q}>
                  <button type="button" onClick={() => setOpenFaq(open ? null : index)}>
                    {item.q}
                    <span className="nvl-faq-icon">+</span>
                  </button>
                  <div className="nvl-faq-answer">
                    <p>{item.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---- 11. Final CTA ---- */}
      <section className="nvl-section nvl-section-dark nvl-cta" id="contact">
        <div className="nvl-container animate-on-scroll">
          <h2>Healthcare shouldn&apos;t depend on how far you live from a hospital.</h2>
          <p className="nvl-cta-sub">We&apos;re looking for pilot hospitals in Andhra Pradesh.</p>
          <div className="nvl-cta-actions">
            <a className="nvl-btn nvl-btn-primary nvl-btn-lg" href="mailto:rishi@nirvyalabs.com">
              Partner with us <ArrowRight size={16} />
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
