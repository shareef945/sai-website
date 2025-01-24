"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/main-nav";
import { usePathname } from "next/navigation";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

// export const metadata: Metadata = {
//   title: "SAI Technology",
//   description:
//     "Advance your digital edge with our industry-wide innovative solutions.",
// };

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
            {/* Grid Background - only shown on home page */}
            {isHomePage && (
              <div
                className="absolute top-0 left-0 right-0 h-screen z-0 pointer-events-none"
                style={{
                  backgroundImage: `
                    repeating-linear-gradient(to right, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05) 1px, transparent 1px, transparent 30px),
                    repeating-linear-gradient(to bottom, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05) 1px, transparent 1px, transparent 30px)
                  `,
                }}
              >
                {/* Gradient overlay fading from top-left to bottom-right */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to bottom right, rgba(17, 17, 17, 0) 0%, rgba(17, 17, 17, 0.8) 60%, rgba(17, 17, 17, 1) 100%)",
                  }}
                />
              </div>
            )}
            <div className="relative z-10">
              <Navbar />
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
