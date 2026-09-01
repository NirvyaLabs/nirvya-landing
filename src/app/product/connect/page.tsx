import type { Metadata } from "next";

import { MockWhatsApp } from "@/components/landing/mockups";
import { ProductPage } from "@/components/landing/ProductPage";

export const metadata: Metadata = {
  title: "Patient Connect — Nirvya Health",
  description:
    "WhatsApp appointment booking, prescription delivery, health records, and reminders — in Telugu, Hindi, and English. No app download needed."
};

export default function ConnectProductPage() {
  return (
    <ProductPage
      eyebrow="Patient Connect"
      title="Meet patients where they are — on WhatsApp"
      subtitle="550M+ Indians use WhatsApp daily. No app downloads, no logins to remember — healthcare on the platform patients already trust."
      heroVisual={<MockWhatsApp />}
      sections={[
        {
          title: "Appointment booking",
          description:
            "A patient sends one message and books a slot in about 30 seconds. The appointment appears instantly on the doctor's schedule.",
          bullets: [
            "Guided booking flow — reply with a number, done",
            "Live slot availability from the facility calendar",
            "Instant confirmation with doctor, date, and time",
            "Works on any phone that runs WhatsApp"
          ],
          visual: <MockWhatsApp />
        },
        {
          title: "Prescription delivery",
          description:
            "The moment a doctor signs, the patient gets a secure link on WhatsApp. OTP-verified, so prescriptions stay private even on shared family phones.",
          bullets: [
            "Delivered seconds after the doctor signs",
            "OTP-verified secure links — no open PDFs",
            "Pharmacy-scannable QR codes",
            "Re-send anytime from the clinic dashboard"
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
            "Patients can open their full health timeline — visits, prescriptions, lab results — through a secure web portal. No installs, OTP-verified.",
          bullets: [
            "Complete visit history in one place",
            "Lab results with plain-language summaries",
            "Share records with any doctor via ABDM consent",
            "Works in the phone browser — zero installs"
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
          title: "Multilingual by default",
          description:
            "Telugu, Hindi, and English — auto-detected from the patient's first message. Reminders and results arrive in the language the family actually reads.",
          bullets: [
            "Telugu, Hindi, English out of the box",
            "Auto-detected from the patient's messages",
            "Clinically-reviewed message templates",
            "More languages as we expand states"
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
