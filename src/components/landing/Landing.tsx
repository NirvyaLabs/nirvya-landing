"use client";

import { ArrowRight, ChevronDown, ExternalLink, Github, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { MockDashboard, MockExchange, MockWhatsApp } from "./mockups";
import "./landing.css";

export const APP_LOGIN_URL = `${process.env.NEXT_PUBLIC_APP_URL ?? "https://app.nirvyalabs.com"}/login`;

const PILOT_URL =
  "mailto:rishi@nirvyalabs.com?subject=Nirvya%20pilot%20request&body=Organisation%3A%0ACountry%3A%0AFacilities%20or%20care%20settings%3A%0AWhat%20should%20the%20pilot%20prove%3F%0A";

const PRODUCT_LINKS = [
  { href: "/product/clinical", label: "Clinical workspace", desc: "Care delivery at the source" },
  { href: "/product/connect", label: "Patient connect", desc: "Accessible records and follow-up" },
  { href: "/product/exchange", label: "Health exchange", desc: "Standards and national adapters" }
];

const COUNTRY_DATA = {
  india: {
    code: "IN",
    name: "India",
    system: "ABDM",
    status: "Active product focus",
    statement: "National-scale digital rails now need to become routine care workflows.",
    metrics: [
      ["96.43 crore", "ABHA health IDs"],
      ["110+ crore", "linked health records"],
      ["5.47 lakh+", "registered health facilities"]
    ],
    sourceLabel: "Government of India · 12 Aug 2026",
    sourceUrl: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2298390&lang=2&reg=48",
    nirvya: "Nirvya is building ABDM-aware clinical, patient and exchange workflows for this operating context."
  },
  australia: {
    code: "AU",
    name: "Australia",
    system: "My Health Record",
    status: "Architecture context",
    statement: "The national record is mature; participation still varies across care settings.",
    metrics: [
      ["25M+", "My Health Records"],
      ["2.4B+", "documents uploaded"],
      ["21%", "aged-care organisations used it"]
    ],
    sourceLabel: "Australian Digital Health Agency · Jul 2026",
    sourceUrl: "https://www.digitalhealth.gov.au/initiatives-and-programs/my-health-record/statistics",
    nirvya: "Australia informs Nirvya’s adapter design. This is product direction, not a deployment or certification claim."
  },
  us: {
    code: "US",
    name: "United States",
    system: "Interoperable exchange",
    status: "Architecture context",
    statement: "Exchange is widespread, but routine point-of-care use remains uneven.",
    metrics: [
      ["70%", "hospitals used all four exchange domains at least sometimes"],
      ["43%", "did so routinely"],
      ["42%", "routinely used external data at point of care"]
    ],
    sourceLabel: "ASTP/ONC · 2023 hospital data",
    sourceUrl: "https://healthit.gov/data/data-briefs/interoperable-exchange-patient-health-information-among-us-hospitals-2023/",
    nirvya: "The U.S. context tests a standards-led core across fragmented networks. It is not a market-availability claim."
  }
} as const;

type CountryKey = keyof typeof COUNTRY_DATA;

export function MarketingNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);

  return (
    <nav className="nvl-nav" aria-label="Primary">
      <div className="nvl-nav-inner">
        <Link className="nvl-brand" href="/" aria-label="Nirvya Health home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/nirvya-mark.svg" alt="" width="21" height="24" />
          <span>Nirvya Health</span>
        </Link>

        <div className="nvl-nav-links">
          <div className="nvl-dropdown-wrap">
            <button
              className="nvl-nav-link"
              type="button"
              aria-expanded={productOpen}
              onClick={() => setProductOpen((open) => !open)}
            >
              Platform <ChevronDown size={13} aria-hidden="true" />
            </button>
            {productOpen ? (
              <div className="nvl-dropdown">
                {PRODUCT_LINKS.map((item) => (
                  <Link href={item.href} key={item.href} onClick={() => setProductOpen(false)}>
                    <strong>{item.label}</strong><span>{item.desc}</span>
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
          <Link className="nvl-nav-link" href="/#countries">Countries</Link>
          <Link className="nvl-nav-link" href="/#open-infrastructure">Open source</Link>
        </div>

        <div className="nvl-nav-actions">
          <a className="nvl-signin" href={APP_LOGIN_URL}>Sign in</a>
          <a className="nvl-btn nvl-btn-dark nvl-btn-small" href={PILOT_URL}>Request a pilot</a>
          <button
            className="nvl-menu-button"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>
      {menuOpen ? (
        <div className="nvl-mobile-menu">
          {PRODUCT_LINKS.map((item) => <Link href={item.href} key={item.href} onClick={() => setMenuOpen(false)}>{item.label}</Link>)}
          <Link href="/#countries" onClick={() => setMenuOpen(false)}>Countries</Link>
          <Link href="/#open-infrastructure" onClick={() => setMenuOpen(false)}>Open source</Link>
          <a href={PILOT_URL} onClick={() => setMenuOpen(false)}>Request a pilot</a>
          <a href={APP_LOGIN_URL} onClick={() => setMenuOpen(false)}>Sign in</a>
        </div>
      ) : null}
    </nav>
  );
}

export function MarketingFooter() {
  return (
    <footer className="nvl-footer" id="company">
      <div className="nvl-footer-line">
        <span>© 2026 Nirvya Labs</span>
        <span>Sydney, Australia · Andhra Pradesh, India</span>
        <span>Krama Core · Apache 2.0</span>
        <a href="mailto:rishi@nirvyalabs.com">Contact</a>
      </div>
    </footer>
  );
}

function CountryEvidence() {
  const [country, setCountry] = useState<CountryKey>("india");
  const data = COUNTRY_DATA[country];

  return (
    <section className="nvl-country-section" id="countries">
      <div className="nvl-container">
        <div className="nvl-section-head nvl-section-head-split">
          <h2>The continuity gap changes by country.</h2>
          <p>We use official data to understand the operating context, then adapt the exchange layer without rewriting the care product.</p>
        </div>

        <div className="nvl-country-layout">
          <div className="nvl-country-switcher" aria-label="Choose a country">
            {(Object.keys(COUNTRY_DATA) as CountryKey[]).map((key) => (
              <button
                key={key}
                type="button"
                aria-pressed={country === key}
                className={country === key ? "is-active" : ""}
                onClick={() => setCountry(key)}
              >
                <span>{COUNTRY_DATA[key].code}</span>
                <span><strong>{COUNTRY_DATA[key].name}</strong><small>{COUNTRY_DATA[key].system}</small></span>
              </button>
            ))}
          </div>

          <div className="nvl-country-panel" key={country}>
            <div className="nvl-country-intro">
              <span className="nvl-status"><i />{data.status}</span>
              <h3>{data.statement}</h3>
              <p>{data.nirvya}</p>
            </div>
            <div className="nvl-spec-sheet">
              {data.metrics.map(([value, label]) => (
                <div key={label}><strong>{value}</strong><span>{label}</span></div>
              ))}
              <a href={data.sourceUrl} target="_blank" rel="noreferrer">
                {data.sourceLabel} <ExternalLink size={13} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Landing() {
  return (
    <div className="nvl">
      <MarketingNav />
      <main>
        <header className="nvl-hero" id="top">
          <div className="nvl-container nvl-hero-grid">
            <div className="nvl-hero-copy">
              <span className="nvl-kicker"><i /> Built for connected care</span>
              <h1>One system for every care handoff.</h1>
              <p>Clinical work, patient access and standards-based exchange in one connected layer—starting with India’s ABDM.</p>
              <div className="nvl-hero-actions">
                <a className="nvl-btn nvl-btn-accent" href={PILOT_URL}>Request a pilot <ArrowRight size={16} aria-hidden="true" /></a>
                <a className="nvl-link-on-dark" href="#platform">Explore the platform</a>
              </div>
              <div className="nvl-hero-note"><span>India · active focus</span><span>Australia + U.S. · architecture contexts</span></div>
            </div>

            <div className="nvl-hero-visual" aria-label="Nirvya clinical workspace preview">
              <div className="nvl-visual-meta"><span>Clinical workspace</span><span><i /> Encounter active</span></div>
              <MockDashboard />
              <div className="nvl-visual-foot"><span>Clinician-reviewed</span><span>Patient-linked</span><span>Exchange-ready</span></div>
            </div>
          </div>
        </header>

        <section className="nvl-evidence-rail" aria-label="Country evidence summary">
          <div className="nvl-container nvl-evidence-grid">
            <a href={COUNTRY_DATA.india.sourceUrl} target="_blank" rel="noreferrer"><span>India</span><strong>96.43 crore</strong><small>ABHA IDs · Aug 2026</small></a>
            <a href={COUNTRY_DATA.australia.sourceUrl} target="_blank" rel="noreferrer"><span>Australia</span><strong>2.4B+</strong><small>documents · Jul 2026</small></a>
            <a href={COUNTRY_DATA.us.sourceUrl} target="_blank" rel="noreferrer"><span>United States</span><strong>43%</strong><small>hospitals routinely interoperable · 2023</small></a>
            <p>Digital rails are growing. The work now is making continuity routine at the point of care.</p>
          </div>
        </section>

        <section className="nvl-platform" id="platform">
          <div className="nvl-container nvl-sticky-stack">
            <div className="nvl-pane-sticky">
              <span className="nvl-index">01 / Platform</span>
              <h2>Three responsibilities. One care journey.</h2>
              <p>Nirvya connects what happens inside a facility to what the patient can access and what the health system can exchange.</p>
            </div>
            <div className="nvl-pane-scroll">
              <article className="nvl-feature-block">
                <div className="nvl-feature-copy"><span>01</span><h3>Clinical workspace</h3><p>Structure encounters, prescriptions and facility workflows where care begins.</p><Link href="/product/clinical">Explore clinical workspace <ArrowRight size={14} /></Link></div>
                <div className="nvl-feature-visual"><MockDashboard /></div>
              </article>
              <article className="nvl-feature-block">
                <div className="nvl-feature-copy"><span>02</span><h3>Patient connect</h3><p>Return appointments, prescriptions and records through accessible digital channels.</p><Link href="/product/connect">Explore patient connect <ArrowRight size={14} /></Link></div>
                <div className="nvl-feature-visual"><MockWhatsApp /></div>
              </article>
              <article className="nvl-feature-block">
                <div className="nvl-feature-copy"><span>03</span><h3>Health exchange</h3><p>Turn signed care events into consent-aware, standards-based records.</p><Link href="/product/exchange">Explore health exchange <ArrowRight size={14} /></Link></div>
                <div className="nvl-feature-visual"><MockExchange /></div>
              </article>
            </div>
          </div>
        </section>

        <CountryEvidence />

        <section className="nvl-pilot" id="pilot">
          <div className="nvl-container nvl-pilot-grid">
            <div className="nvl-pilot-lead">
              <span className="nvl-index">02 / Pilot</span>
              <h2>Start with one care journey.</h2>
              <p>A useful pilot has a bounded workflow, named responsibilities and evidence agreed before implementation begins.</p>
              <a className="nvl-btn nvl-btn-dark" href={PILOT_URL}>Define a pilot <ArrowRight size={16} /></a>
            </div>
            <ol className="nvl-steps">
              <li><span>1.0</span><div><h3>Scope.</h3><p>Name the facility, patient path, participants and decision boundary.</p></div></li>
              <li><span>2.0</span><div><h3>Connect.</h3><p>Configure the minimum clinical, patient and exchange modules required.</p></div></li>
              <li><span>3.0</span><div><h3>Measure.</h3><p>Review the agreed operational evidence before deciding what should expand.</p></div></li>
            </ol>
          </div>
        </section>

        <section className="nvl-open" id="open-infrastructure">
          <div className="nvl-container nvl-open-grid">
            <div>
              <span className="nvl-index">03 / Open infrastructure</span>
              <h2>Inspect the layer that makes records portable.</h2>
              <p>Krama Core is Nirvya’s Apache 2.0 licensed Python foundation for standards-based health records and ABDM-oriented integrations.</p>
              <div className="nvl-open-actions">
                <a className="nvl-btn nvl-btn-outline" href="https://github.com/nirvya-labs" target="_blank" rel="noreferrer"><Github size={16} /> View on GitHub</a>
                <Link href="/product/exchange">Exchange architecture <ArrowRight size={14} /></Link>
              </div>
            </div>
            <div className="nvl-code-ledger" aria-label="Krama Core example">
              <div><span>KRAMA CORE</span><span>APACHE 2.0</span></div>
              <pre><code><span>from</span> krama.fhir <span>import</span>{"\n"}  create_op_consult_bundle{"\n\n"}bundle = create_op_consult_bundle({"\n"}  patient, practitioner, diagnosis{"\n"})</code></pre>
              <small>Illustrative shape. See the repository for current interfaces.</small>
            </div>
          </div>
        </section>

        <section className="nvl-close" id="contact">
          <div className="nvl-container nvl-close-grid">
            <div><span className="nvl-kicker"><i /> A clear place to begin</span><h2>Make the next handoff work.</h2></div>
            <div><p>Tell us which care journey your facility or health system needs to improve.</p><a className="nvl-btn nvl-btn-accent" href={PILOT_URL}>Request a pilot <ArrowRight size={16} /></a></div>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </div>
  );
}
