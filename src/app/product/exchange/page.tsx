import type { Metadata } from "next";

import { MockExchange } from "@/components/landing/mockups";
import { ProductPage } from "@/components/landing/ProductPage";

export const metadata: Metadata = {
  title: "Health Exchange — Nirvya Health",
  description:
    "Standards-based health record generation, consent boundaries and a country-adapter architecture, starting with India’s ABDM."
};

export default function ExchangeProductPage() {
  return (
    <ProductPage
      eyebrow="Health Exchange"
      title="Translate care into records a health system can use"
      subtitle="A standards-led exchange layer for record generation, consent boundaries and country-specific national adapters—starting with India’s ABDM."
      ctaLabel="Request a technical pilot"
      sections={[
        {
          title: "FHIR-oriented record generation",
          description:
            "Krama Core provides an open Python foundation for producing structured health-record bundles from clinical context. Current interfaces and support are documented in the repository.",
          bullets: [
            "FHIR-oriented document-bundle foundation",
            "Patient, practitioner and clinical context kept together",
            "Inspectable implementation rather than opaque payloads",
            "Apache 2.0 licensed Krama Core"
          ],
          visual: <MockExchange />
        },
        {
          title: "ABDM integration",
          description:
            "The India adapter is designed around ABDM’s identity, care-context linking and consented exchange responsibilities.",
          bullets: [
            "Identity and ABHA-aware registration context",
            "Care-context and record-linking workflows",
            "Consent-aware exchange architecture",
            "Sandbox-first implementation discipline"
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
            "Consent, facility boundaries and auditability are treated as part of the exchange route—not as a disclaimer added after the workflow.",
          bullets: [
            "Consent state remains visible in the workflow",
            "Audit events attach to record movement",
            "Facility boundaries shape data access",
            "Security controls documented by implementation stage"
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
            "The shared core separates clinical and patient workflows from the rules of a national exchange. India is the active product focus; Australia and the United States are architecture contexts, not launch commitments.",
          bullets: [
            "Country adapter layer — swap the exchange, keep the product",
            "India · ABDM — active product focus",
            "Australia · My Health Record — system context",
            "United States · interoperable networks — system context"
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
