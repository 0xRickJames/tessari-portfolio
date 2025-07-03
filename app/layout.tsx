import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rick Tessari - Web Developer & Blockchain Engineer",
  description:
    "Portfolio of Rick Tessari, a passionate web developer and blockchain engineer specializing in modern web applications and decentralized technology.",
  keywords: [
    "web developer",
    "blockchain",
    "Next.js",
    "TypeScript",
    "Solana",
    "Ethereum",
    "Discord bot",
  ],
  authors: [{ name: "Rick Tessari" }],
  creator: "Rick Tessari",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/icon.svg", sizes: "any", type: "image/svg+xml" },
    ],
    apple: [{ url: "/icon.svg", sizes: "180x180", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "Rick Tessari - Web Developer & Blockchain Engineer",
    description: "Portfolio showcasing web development and blockchain projects",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rick Tessari - Web Developer & Blockchain Engineer",
    description: "Portfolio showcasing web development and blockchain projects",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
