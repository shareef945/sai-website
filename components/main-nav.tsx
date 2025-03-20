"use client";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Links from "./ui/links";
import Image from "next/image";
import Link from "next/link";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import RequestForm from "./request-form";

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
    logoText: "text-white font-semibold ",
    mobileButton: "lg:hidden text-white",
    desktopNav: "hidden lg:flex lg:items-center lg:gap-8",
    link: "flex w-full items-center text-secondary md:text-white text-xl md:text-sm font-semibold hover:text-gray-300 transition-colors",
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
        <Dialog>
          <DialogTrigger>
            <Button
              variant="destructive"
              className="bg-[#E65722] hover:bg-[#E65722]/90"
            >
              Submit a Request
            </Button>
          </DialogTrigger>
          <DialogContent className="p-0 rounded-none max-w-[971px] h-full max-h-[647px] w-full flex overflow-hidden bg-[#151515] text-white border-[#ffffff0a] border-[6px]">
            <div className="w-full flex">
              {/* Left side with heading and grid background */}
              <div
                className="w-1/2 relative flex items-center px-16 py-24"
                style={{
                  backgroundImage: `
                linear-gradient(to bottom right, rgba(234, 92, 28, 0.3), rgba(21, 21, 21, 0.9)), 
                url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='18' height='18' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 40 0 L 0 0 0 40' fill='none' stroke='%23333' strokeWidth='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='%23151515'/%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")
              `,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <h1 className="text-6xl font-bold --font-inter leading-tight">
                  Let&#39;s bring
                  <br />
                  your vision
                  <br />
                  to Life.
                </h1>
              </div>

              {/* Right side with form */}
              <div className="w-1/2 p-6 relative">
                <h2 className="text-[20px] font-medium mb-10">
                  Start a project
                </h2>

                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="flex-1">
                      <label className="block text-sm text-[#898989] mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full bg-transparent border-b-2 border-[#ea5c1c] pb-2 focus:outline-none"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm text-[#898989] mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full bg-transparent border-b-2 border-[#ea5c1c] pb-2 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-[#898989] mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full bg-transparent border-b-2 border-[#ea5c1c] pb-2 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-[#898989] mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full bg-transparent border-b-2 border-[#ea5c1c] pb-2 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-[#898989] mb-2">
                      Service
                    </label>
                    <div className="relative">
                      <select className="w-full text-base bg-transparent border-b-2 border-[#ea5c1c] pb-2 focus:outline-none appearance-none text-[#898989]">
                        <option>Please select service</option>
                      </select>
                      <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4 6L8 10L12 6"
                            stroke="#898989"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#898989] text-sm mb-2">
                      Budget
                    </label>
                    <div className="relative">
                      <select className="w-full text-base bg-transparent border-b-2 border-[#ea5c1c] pb-2 focus:outline-none appearance-none text-[#898989]">
                        <option className="text-base">
                          Please select budget
                        </option>
                      </select>
                      <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4 6L8 10L12 6"
                            stroke="#898989"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 pb-4 flex justify-end">
                    <Button className="bg-[#ea5c1c] hover:bg-[#ea5c1c]/90 text-white w-[183px] h-[43px] px-[25px] py-[17px] rounded-none">
                      Submit a request
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Mobile navigation */}
      <div className="flex items-center gap-4 md:hidden">
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="destructive"
              size="sm"
              className="bg-[#E65722] hover:bg-[#E65722]/90"
            >
              Submit a request
            </Button>
          </DialogTrigger>
          <DialogContent className="p-0 border-[6px]  border-[#ffffff0a] flex items-center justify-center bg-[#151515] mx-auto max-w-[92vw]  w-full my-auto h-auto">
            <RequestForm />
          </DialogContent>
        </Dialog>
        
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
                className="text-gray-500 text-[14px] hover:text-[#898989] transition-colors underline underline-offset-4"
              >
                Ventures
              </Link>
              <Link
                href="/privacy"
                className="text-gray-500 text-[14px] hover:text-[#898989] transition-colors underline underline-offset-4"
              >
                Data Privacy & Security Policy
              </Link>
              <Link
                href="/compliance"
                className="text-gray-500 text-[14px] hover:text-[#898989] transition-colors underline underline-offset-4"
              >
                Compliance & Certifications
              </Link>
              <Link
                href="mailto:info@saitechnology.co"
                className="text-gray-500 text-[14px] hover:text-[#898989] transition-colors underline underline-offset-4"
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