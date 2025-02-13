import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import { Navbar } from "@/components/main-nav";
import React from 'react';
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
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
      <body className={`${inter.className} relative bg-[#111111]`}>
        <div className="relative min-h-screen">
          <div className="relative z-10">
            <Navbar />
          </div>
          <main className="relative z-0">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}