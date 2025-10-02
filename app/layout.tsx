import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Overabove™ AI Auditor - Data-Driven Marketing",
  description: "Comprehensive AI readiness audits for modern brands by Overabove, LLC. Analyze your brand clarity, GEO readiness, and get actionable insights to dominate the AI-powered marketing landscape.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
