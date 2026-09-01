import type { Metadata } from "next";

import { Landing } from "@/components/landing/Landing";

const SITE_URL = "https://nirvyalabs.com";
const TITLE = "Nirvya Health — Care infrastructure that fits the system around it";
const DESCRIPTION =
  "One connected layer for clinical work, patient access and standards-based health exchange—starting with India’s ABDM.";

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Landing />
    </>
  );
}
