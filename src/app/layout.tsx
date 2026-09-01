import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nirvyalabs.com"),
  title: "Nirvya Health — Connected care infrastructure",
  description:
    "A connected layer for clinical work, patient access and standards-based health exchange—starting with India’s ABDM."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
