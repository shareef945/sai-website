import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/main-nav";
import Script from "next/script";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"], // Ensures proper language support
  weight: ["300", "400", "500", "600", "700"], // Include desired font weights
  variable: "--font-space-grotesk", // Define a CSS variable
});

const inter = Inter({
  subsets: ["latin"], // Ensures proper language support
  weight: ["400", "500", "600", "700"], // Include desired font weights
  variable: "--font-inter", // Define a CSS variable
});

export const metadata: Metadata = {
  title: "SAI Technology",
  description:
    "Advance your digital edge with our industry-wide innovative solutions.",
  icons: {
    icon: [
      {
        url: "/sai-main.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/sai-main.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: "SAI Technology",
    description:
      "Advance your digital edge with our industry-wide innovative solutions.",
    images: [
      {
        url: "/site-preview.png",
        width: 1200,
        height: 630,
        alt: "SAI Real Estate Preview",
      },
    ],
    locale: "en_US",
    type: "website",
    siteName: "SAI Real Estate",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          defer
          src="https://umami.saitechnology.co/script.js"
          data-website-id="15eacf53-eac1-458b-9c26-bcd1e3885a60"
        />
      </head>
      <body
        className={`${spaceGrotesk.className} ${inter.variable} relative bg-[#151515]`}
      >
        <div className="min-h-screen">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
