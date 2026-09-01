import type { Metadata } from "next";

import { Landing } from "@/components/landing/Landing";

const SITE_URL = "https://nirvyalabs.com";
const TITLE = "Nirvya Health — Healthcare Infrastructure for the Last Mile";
const DESCRIPTION =
  "AI clinical platform for Indian hospitals. Doctors get web dashboards. Patients get WhatsApp. ABDM native. Open source.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Nirvya Health",
    title: TITLE,
    description: DESCRIPTION
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION
  }
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nirvya Labs",
  url: SITE_URL,
  description: DESCRIPTION,
  email: "rishi@nirvyalabs.com",
  founder: { "@type": "Person", name: "Rishi Kanajam" },
  location: [
    { "@type": "Place", name: "Sydney, Australia" },
    { "@type": "Place", name: "Andhra Pradesh, India" }
  ],
  sameAs: ["https://github.com/nirvya-labs"]
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        // Organization structured data for search engines.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Landing />
    </>
  );
}
