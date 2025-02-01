"use client";

import { Inter } from 'next/font/google';
import "./globals.css";
import { Navbar } from "@/components/main-nav";
import { usePathname } from "next/navigation";
import React from 'react'; // Added import for React

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <html lang="en">
      <body className={`${inter.className} relative bg-[#111111]`}>
        <div className="relative min-h-screen">
          <div className="relative">
            {/* Background slot - controlled by each page */}
            <div className="absolute top-0 left-0 right-0 h-screen z-0 pointer-events-none">
              {children}
            </div>
            <div className="relative z-10">
              <Navbar />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
