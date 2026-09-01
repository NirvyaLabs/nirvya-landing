import type { Metadata } from "next";

import { MockWhatsApp } from "@/components/landing/mockups";
import { ProductPage } from "@/components/landing/ProductPage";

export const metadata: Metadata = {
  title: "Patient Connect — Nirvya Health",
  description:
    "Patient access for appointments, prescriptions, records and follow-up through familiar digital channels."
};

export default function ConnectProductPage() {
  return (
    <ProductPage
      eyebrow="Patient Connect"
      title="Make the next care step easy to reach"
      subtitle="Connect appointments, prescriptions, records and follow-up to the digital channels patients already use."
      heroVisual={<MockWhatsApp />}
      sections={[
        {
          title: "Appointment booking",
          description:
            "Guide a patient from a familiar channel into the facility’s available appointment workflow, then return a clear confirmation.",
          bullets: [
            "Guided, low-friction booking flow",
            "Availability connected to the facility calendar",
            "Confirmation with doctor, date and time",
            "No separate app required for a messaging flow"
          ],
          visual: <MockWhatsApp />
        },
        {
          title: "Prescription delivery",
          description:
            "Return a clinician-signed prescription through a secure patient-access path, including a verification step where the channel requires it.",
          bullets: [
            "Delivery begins from a signed clinical record",
            "Secure-link and verification pattern",
            "Access designed for shared-device realities",
            "Facility-controlled re-delivery workflow"
          ],
          visual: (
            <div className="nvl-wa" aria-hidden="true">
              <div className="nvl-wa-header">
                <span className="nvl-wa-ava">🏥</span>
                <div>
                  <strong>Nirvya Health</strong>
                  <span>online</span>
                </div>
              </div>
              <div className="nvl-wa-body">
                <div className="nvl-wa-bubble bot">
                  💊 Your prescription from Dr. Sharma is ready. View securely:
                  nirvya.in/rx/a8f2… <small>11:02 AM</small>
                </div>
                <div className="nvl-wa-bubble bot">
                  Enter the OTP sent to this number to open it. <small>11:02 AM</small>
                </div>
              </div>
            </div>
          )
        },
        {
          title: "Health records",
          description:
            "Give patients a usable view of the records a facility has made available, without separating access from consent and verification.",
          bullets: [
            "Visits, prescriptions and results in one timeline",
            "Secure browser-based access",
            "Consent-aware sharing in supported systems",
            "Patient access remains connected to the source record"
          ],
          visual: (
            <div className="nvl-mock-exchange" aria-hidden="true">
              <div className="nvl-flow">
                <div className="nvl-flow-node">WhatsApp</div>
                <div className="nvl-flow-arrow">
                  <span>secure link</span>
                </div>
                <div className="nvl-flow-node accent">OTP verify</div>
                <div className="nvl-flow-arrow">
                  <span>opens</span>
                </div>
                <div className="nvl-flow-node">Health timeline</div>
              </div>
            </div>
          )
        },
        {
          title: "Language and channel adaptation",
          description:
            "Patient communication should adapt to local language and channel patterns rather than forcing one global interaction model.",
          bullets: [
            "Localized message templates",
            "Explicit language preference",
            "Clinically reviewed communication content",
            "Country and facility configuration"
          ],
          visual: (
            <div className="nvl-wa" aria-hidden="true">
              <div className="nvl-wa-header">
                <span className="nvl-wa-ava">🏥</span>
                <div>
                  <strong>Nirvya Health</strong>
                  <span>online</span>
                </div>
              </div>
              <div className="nvl-wa-body">
                <div className="nvl-wa-bubble bot">
                  నమస్కారం! మీ అపాయింట్‌మెంట్ రేపు ఉదయం 9:30కి డా. శర్మతో ఉంది. <small>6:00 PM</small>
                </div>
                <div className="nvl-wa-bubble user">
                  ధన్యవాదాలు 🙏 <small>6:04 PM</small>
                </div>
              </div>
            </div>
          )
        }
      ]}
    />
  );
}
