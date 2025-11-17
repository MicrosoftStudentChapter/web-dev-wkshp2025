import type React from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";

export const metadata: Metadata = {
  title: "Anay Gupta | Portfolio",
  description: "Showcasing Anay Gupta's projects, case studies, and web development expertise.",
  generator: "Anay Gupta",
  applicationName: "Anay Gupta Portfolio",
  keywords: [
    "Anay Gupta",
    "Portfolio",
    "Web Developer",
    "React",
    "Next.js",
    "Django",
    "Projects",
    "Case Studies"
  ],
  authors: [{ name: "Anay Gupta", url: "https://anaygupta.xyz" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Geist+Mono:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="dark">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
