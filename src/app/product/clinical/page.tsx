import type { Metadata } from "next";

import { MockDashboard } from "@/components/landing/mockups";
import { ProductPage } from "@/components/landing/ProductPage";

export const metadata: Metadata = {
  title: "Clinical Workspace — Nirvya Health",
  description:
    "A clinician-reviewed workspace for encounter documentation, prescriptions, patient context and facility workflows."
};

export default function ClinicalProductPage() {
  return (
    <ProductPage
      eyebrow="Clinical workspace"
      title="Structure care at the point where it happens"
      subtitle="A clinician-reviewed workspace for encounter documentation, prescriptions, patient context and the workflows around them."
      heroVisual={<MockDashboard />}
      sections={[
        {
          title: "Clinician-reviewed documentation",
          description:
            "Structure encounter notes without separating documentation from the care journey. Assistance remains reviewable and the clinician remains responsible for the signed record.",
          bullets: [
            "Structured encounter-note workflow",
            "Clinician review before a record is signed",
            "Longitudinal context stays available during the visit",
            "Record provenance remains visible"
          ],
          visual: <MockDashboard />
        },
        {
          title: "Digital prescriptions",
          description:
            "Create a prescription in the same care context, keep the review step explicit, and make the signed result available to the patient workflow.",
          bullets: [
            "Prescription details stay attached to the encounter",
            "Allergy and patient context remain visible",
            "Clinician review before signing",
            "Signed records can continue into patient access"
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
            "Bring identity, allergies, conditions and medication context into one longitudinal view, with country-specific identity handled by the adapter layer.",
          bullets: [
            "ABHA-aware registration in the India context",
            "Allergy banner on every clinical screen",
            "Longitudinal health timeline per patient",
            "Identity and record-linking boundaries stay explicit"
          ],
          visual: (
            <div className="nvl-mock-exchange" aria-hidden="true">
              <div className="nvl-flow">
                <div className="nvl-flow-node">Register</div>
                <div className="nvl-flow-arrow">
                  <span>identity</span>
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
            "Bring appointments, walk-ins and follow-ups into a shared operational view that can connect to patient communication.",
          bullets: [
            "Day and week views for facility teams",
            "Channel-originated appointments in the same queue",
            "Walk-in and follow-up workflows",
            "Reminder flows connected to patient access"
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
