import type { Metadata } from "next";

import { MockDashboard } from "@/components/landing/mockups";
import { ProductPage } from "@/components/landing/ProductPage";

export const metadata: Metadata = {
  title: "Clinical Platform — Nirvya Health",
  description:
    "AI-assisted SOAP notes, digital prescriptions with drug interaction checks, ABHA registration, and scheduling — ABDM-compliant clinical tools for Indian hospitals."
};

export default function ClinicalProductPage() {
  return (
    <ProductPage
      eyebrow="Clinical Platform"
      title="Clinical tools that respect a doctor's time"
      subtitle="AI-powered documentation, safe digital prescriptions, and patient management — everything a clinician needs, nothing they don't."
      heroVisual={<MockDashboard />}
      sections={[
        {
          title: "AI documentation",
          description:
            "Write encounter notes the way you think. AI suggestions appear inline as you type — accept them with a click, ignore them freely. Every suggestion is review-gated and audit-logged.",
          bullets: [
            "Real-time AI-assisted SOAP note drafting",
            "ICD-10 / SNOMED coding suggestions inline",
            "Doctor accepts or rejects — AI never signs",
            "Full audit trail of every AI suggestion"
          ],
          visual: <MockDashboard />
        },
        {
          title: "Digital prescriptions",
          description:
            "Prescriptions checked against interactions and allergies before they're signed, delivered to the patient's WhatsApp the moment they are.",
          bullets: [
            "Drug interaction checks before signing",
            "Allergy cross-check against the patient record",
            "QR-coded prescriptions for pharmacy verification",
            "Instant WhatsApp delivery to the patient"
          ],
          visual: (
            <div className="nvl-mock-dash" aria-hidden="true">
              <div className="nvl-mock-rail">
                <i />
                <i className="active" />
                <i />
                <i />
              </div>
              <div className="nvl-mock-body">
                <div className="nvl-mock-lines">
                  <i className="w90" />
                  <i className="w70" />
                  <i className="w90" />
                  <i className="w50" />
                </div>
                <div className="nvl-mock-aipill">✓ Interaction check passed — 3 medications</div>
                <div className="nvl-mock-foot">
                  <span className="nvl-mock-sign">Sign prescription</span>
                </div>
              </div>
            </div>
          )
        },
        {
          title: "Patient management",
          description:
            "Register a patient and link their ABHA in under two minutes. Allergies, chronic conditions, and medication history follow the patient to every encounter.",
          bullets: [
            "ABHA creation and linking built into registration",
            "Allergy banner on every clinical screen",
            "Longitudinal health timeline per patient",
            "Duplicate detection at intake"
          ],
          visual: (
            <div className="nvl-mock-exchange" aria-hidden="true">
              <div className="nvl-flow">
                <div className="nvl-flow-node">Register</div>
                <div className="nvl-flow-arrow">
                  <span>&lt; 2 min</span>
                </div>
                <div className="nvl-flow-node accent">ABHA linked</div>
                <div className="nvl-flow-arrow">
                  <span>every visit</span>
                </div>
                <div className="nvl-flow-node">Timeline</div>
              </div>
            </div>
          )
        },
        {
          title: "Scheduling",
          description:
            "A calm day view of who's next. Walk-ins, WhatsApp bookings, and follow-ups land in one queue with reminders handled automatically.",
          bullets: [
            "Day and week views with live status",
            "WhatsApp-booked appointments appear automatically",
            "Walk-in registration in seconds",
            "Automatic 24-hour reminders cut no-shows"
          ],
          visual: (
            <div className="nvl-mock-dash" aria-hidden="true">
              <div className="nvl-mock-rail">
                <i />
                <i />
                <i className="active" />
                <i />
              </div>
              <div className="nvl-mock-body">
                <div className="nvl-mock-lines">
                  <i className="w50" />
                  <i className="w90" />
                  <i className="w70" />
                  <i className="w90" />
                  <i className="w50" />
                </div>
                <div className="nvl-mock-aipill">Next: Priya Reddy · 10:30 AM · Follow-up</div>
              </div>
            </div>
          )
        }
      ]}
    />
  );
}
