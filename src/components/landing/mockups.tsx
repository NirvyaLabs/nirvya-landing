"use client";

/**
 * CSS-only product mockups shared by the landing page and /product/* pages.
 * No images, no external assets — divs, borders, and the landing.css classes.
 */
import { Sparkles } from "lucide-react";

export function MockDashboard() {
  return (
    <div className="nvl-mock-dash" aria-hidden="true">
      <div className="nvl-mock-rail">
        <i className="active" />
        <i />
        <i />
        <i />
        <i />
      </div>
      <div className="nvl-mock-body">
        <div className="nvl-mock-soap">
          <span>S</span>
          <span>O</span>
          <span>A</span>
          <span>P</span>
        </div>
        <div className="nvl-mock-lines">
          <i className="w90" />
          <i className="w70" />
          <i className="w50" />
        </div>
        <div className="nvl-mock-aipill">
          <Sparkles size={11} /> AI suggest · postural symptoms?
        </div>
        <div className="nvl-mock-foot">
          <span className="nvl-mock-sign">Sign &amp; publish</span>
        </div>
      </div>
    </div>
  );
}

export function MockWhatsApp() {
  return (
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
          Welcome to Gudivada Hospital 🏥 Reply 1 to book an appointment.
          <small>9:24 AM</small>
        </div>
        <div className="nvl-wa-bubble user">
          1<small>9:24 AM</small>
        </div>
        <div className="nvl-wa-bubble bot">
          ✅ Booked! Dr. Sharma, May 15, 9:30 AM. We&apos;ll remind you the day before.
          <small>9:24 AM</small>
        </div>
      </div>
    </div>
  );
}

export function MockExchange() {
  return (
    <div className="nvl-mock-exchange" aria-hidden="true">
      <div className="nvl-flow">
        <div className="nvl-flow-node">Hospital</div>
        <div className="nvl-flow-arrow">
          <span>FHIR R4 bundle</span>
        </div>
        <div className="nvl-flow-node accent">ABDM Gateway</div>
        <div className="nvl-flow-arrow">
          <span>consented access</span>
        </div>
        <div className="nvl-flow-node">Patient</div>
      </div>
      <div className="nvl-mini-code">
        <pre>
          <span className="tok-kw">from</span> krama.fhir <span className="tok-kw">import</span>{" "}
          <span className="tok-fn">create_op_consult_bundle</span>
          {"\n"}
          bundle = <span className="tok-fn">create_op_consult_bundle</span>(patient, doctor, dx)
        </pre>
      </div>
    </div>
  );
}
