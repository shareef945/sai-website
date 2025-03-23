"use client";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Links from "./ui/links";
import Image from "next/image";
import Link from "next/link";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import RequestForm from "./request-form";
import RequestFormDialog from "./ui/request-dialog";
import { services } from "@/config/services";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const COMMON_STYLES = {
    nav: (isScrolled: boolean) =>
      `fixed top-0 z-50 w-full transition-all duration-300 py-2 px-2 ${
        isScrolled ? "bg-[#151515] border-[#898989]" : "bg-transparent"
      }`,
    container: "flex h-16 w-full items-center justify-between px-6",
    logo: "flex items-center gap-4",
    logoText: "text-white font-semibold text-[12px] md:text-base ",
    mobileButton: "lg:hidden text-white",
    desktopNav: "hidden lg:flex lg:items-center lg:gap-8",
    link: "flex w-full items-center text-secondary md:text-white text-xl md:text-sm font-semibold hover:text-[#898989] transition-colors",
  };

  useEffect(() => {
    const closeMenu = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", closeMenu);

    return () => {
      document.removeEventListener("mousedown", closeMenu);
    };
  }, [isMenuOpen]);

  return (
    <nav
      ref={navRef}
      className="h-[10vh] top-0 left-0 right-0 flex w-full justify-between bg-transparent px-6 py-4 relative z-20"
    >
      <div className="flex items-center gap-x-2 justify-center">
        <Link href="/" className={COMMON_STYLES.logo} prefetch={false}>
          <Image
            src="/logos/sai-main.png"
            width={50}
            alt="logo"
            height={50}
            priority
          />
          <p className={COMMON_STYLES.logoText}>TECHNOLOGY</p>
        </Link>
      </div>

      {/* Desktop navigation */}
      <div className="hidden md:flex items-center gap-x-6">
        <Links />
        <RequestFormDialog services={services} isMobile={false} text="Submit a request" />
      </div>

      {/* Mobile navigation */}
      <div className="flex items-center gap-4 md:hidden">
        <RequestFormDialog services={services} isMobile={true} text="Submit a request" />

        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-full bg-[#111111] border-none p-8 flex flex-col justify-between"
          >
            <div className="flex flex-col mt-[6rem] items-start gap-y-12">
              <Links />
            </div>
            <div className="flex flex-col gap-y-6">
              <Link
                href="/ventures"
                className="text-[#898989] text-[14px] hover:text-[#898989] transition-colors underline underline-offset-4"
              >
                Ventures
              </Link>
              <Link
                href="/privacy"
                className="text-[#898989] text-[14px] hover:text-[#898989] transition-colors underline underline-offset-4"
              >
                Data Privacy & Security Policy
              </Link>
              <Link
                href="/compliance"
                className="text-[#898989] text-[14px] hover:text-[#898989] transition-colors underline underline-offset-4"
              >
                Compliance & Certifications
              </Link>
              <Link
                href="mailto:info@saitechnology.co"
                className="text-[#898989] text-[14px] hover:text-[#898989] transition-colors underline underline-offset-4"
              >
                info@saitechnology.co
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
