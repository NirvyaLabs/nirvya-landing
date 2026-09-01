import type { Metadata } from "next";

import { MockExchange } from "@/components/landing/mockups";
import { ProductPage } from "@/components/landing/ProductPage";

export const metadata: Metadata = {
  title: "Health Exchange — Nirvya Health",
  description:
    "ABDM-native health data infrastructure: FHIR R4 bundles, HIP/HIU integration, consent management, and a multi-country adapter architecture."
};

export default function ExchangeProductPage() {
  return (
    <ProductPage
      eyebrow="Health Exchange"
      title="ABDM-native health data infrastructure"
      subtitle="Built on FHIR R4 from day one — not bolted on. Every encounter becomes a standards-compliant record on India's national health exchange."
      ctaLabel="Talk to engineering"
      sections={[
        {
          title: "FHIR R4, generated correctly",
          description:
            "Signing an encounter produces a complete OPConsultRecord or PrescriptionRecord document bundle via Krama Core — patient, practitioner, condition, and medication resources included.",
          bullets: [
            "OPConsultRecord, PrescriptionRecord, DischargeSummary builders",
            "SNOMED CT and ABDM coding systems built in",
            "Validated document bundles, not hand-rolled JSON",
            "Open source: pip install krama-core"
          ],
          visual: <MockExchange />
        },
        {
          title: "ABDM integration",
          description:
            "The three ABDM milestones are product features, not integration projects: identity (M1), record linking (M2), and data exchange (M3).",
          bullets: [
            "M1 — ABHA creation and verification at registration",
            "M2 — care contexts linked on every signed encounter",
            "M3 — HIP/HIU data exchange via the ABDM Gateway",
            "Sandbox-first: test against dev.abdm.gov.in before go-live"
          ],
          visual: (
            <div className="nvl-mock-exchange" aria-hidden="true">
              <div className="nvl-flow">
                <div className="nvl-flow-node">M1 Identity</div>
                <div className="nvl-flow-arrow" />
                <div className="nvl-flow-node">M2 Linking</div>
                <div className="nvl-flow-arrow" />
                <div className="nvl-flow-node accent">M3 Exchange</div>
              </div>
            </div>
          )
        },
        {
          title: "Consent and security",
          description:
            "Patient consent artefacts gate every record share. Facility-level isolation, tamper-evident audit trails, and encrypted exchange keep health data where it belongs.",
          bullets: [
            "ABDM consent artefact lifecycle management",
            "Tamper-evident, hash-chained audit trail",
            "Facility-level data isolation in the database",
            "ECDH + AES-256-GCM exchange encryption (in development)"
          ],
          visual: (
            <div className="nvl-mock-exchange" aria-hidden="true">
              <div className="nvl-flow">
                <div className="nvl-flow-node">Request</div>
                <div className="nvl-flow-arrow">
                  <span>patient consent</span>
                </div>
                <div className="nvl-flow-node accent">Granted</div>
                <div className="nvl-flow-arrow">
                  <span>audited</span>
                </div>
                <div className="nvl-flow-node">Shared</div>
              </div>
            </div>
          )
        },
        {
          title: "Multi-country by design",
          description:
            "The schema and adapter architecture were designed for more than one health system. India's ABDM is the first adapter — Australia's My Health Record and US FHIR R4 follow.",
          bullets: [
            "Country adapter layer — swap the exchange, keep the product",
            "🇮🇳 India · ABDM — active",
            "🇦🇺 Australia · My Health Record — phase 2 (2027)",
            "🇺🇸 United States · FHIR R4 — phase 3 (2028)"
          ],
          visual: (
            <div className="nvl-mock-exchange" aria-hidden="true">
              <div className="nvl-flow">
                <div className="nvl-flow-node accent">Nirvya core</div>
                <div className="nvl-flow-arrow">
                  <span>adapters</span>
                </div>
                <div className="nvl-flow-node">ABDM · MHR · FHIR-US</div>
              </div>
              <div className="nvl-mini-code">
                <pre>
                  <span className="tok-kw">from</span> krama.fhir{" "}
                  <span className="tok-kw">import</span>{" "}
                  <span className="tok-fn">create_prescription_bundle</span>
                  {"\n"}
                  bundle = <span className="tok-fn">create_prescription_bundle</span>(patient,
                  doctor, meds)
                </pre>
              </div>
            </div>
          )
        }
      ]}
      heroVisual={<MockExchange />}
    />
  );
}
