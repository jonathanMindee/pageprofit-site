import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PageProfit — AI Landing Page Rewrite in 48 Hours",
  description:
    "Your landing page is losing you signups. We audit it, rewrite it with AI, and deliver conversion-ready copy in 48 hours for $497.",
  openGraph: {
    title: "PageProfit — AI Landing Page Rewrite in 48 Hours",
    description:
      "We audit your landing page, identify what's costing you signups, and rewrite it in 48 hours flat. $497 one-time.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
