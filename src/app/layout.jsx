"use client";
import { Zain } from "next/font/google";
import "@/src/app/globals.scss";

const zain = Zain({ subsets: ["latin"], variable: "--font-zain", weight: ["200", "300", "400", "700", "800", "900"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Indian Atlas — A public dataset of Indian states and their cities in multiple formats (JSON, CSV, SQL).</title>
        <meta name="description" content="A public dataset of Indian states and their cities in multiple formats (JSON, CSV, SQL). Useful for developers, open data projects, and location-based applications." />
      </head>
      <body className={`${zain.variable} antialiased`}>{children}</body>
    </html>
  );
}
