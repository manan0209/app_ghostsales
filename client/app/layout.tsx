import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ghostsales Dashboard",
  description:
    "Ghostsales - The ultimate AI-powered CRM designed to automate and supercharge your sales process. Manage leads, engage customers, and drive growth like never before.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
