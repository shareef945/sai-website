import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/main-nav";

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.className} ${inter.variable} relative bg-[#111111]`}
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