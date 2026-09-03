import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Header } from "@/components/marketing/header";
import { Footer } from "@/components/marketing/footer";
import { AiConcierge } from "@/components/marketing/ai-concierge";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Aderiqo — AI-Powered B2B Sales Platform",
    template: "%s",
  },
  description:
    "Aderiqo is an AI-powered B2B sales platform built and operated by ArdenzaTech. Bring companies, contacts, pipeline, tasks, calendar, email, prospecting and revenue intelligence together in one connected workspace.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48 256x256" },
      { url: "/favicon.png", type: "image/png", sizes: "256x256" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    siteName: "Aderiqo",
    type: "website",
    images: [{ url: "/og.png", width: 1254, height: 1254, alt: "Aderiqo — AI-powered CRM" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white text-ink">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:rounded-md focus:bg-electric focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <AiConcierge />
      </body>
    </html>
  );
}