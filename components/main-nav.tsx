"use client";
import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Links from "./ui/links";
import Image from "next/image";
import Link from "next/link";
import MailtoLink from "./ui/mailto";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

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
      className="h-[80px] top-0 left-0 right-0 flex w-full justify-between bg-transparent px-6 py-4 relative z-20"
    >
      <div className="flex items-center">
        <Link href={"/"}>
          <Image src="/logo.svg" alt="SAT Logo" width={100} height={50} />
        </Link>
      </div>

      <div className="md:hidden">
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
      </div>

      <div className="hidden md:flex items-center gap-8">
        <Links />
        <Dialog>
          <DialogTrigger>
            <Button
              variant="destructive"
              className="bg-[#E65722] hover:bg-[#E65722]/90 rounded-none"
            >Submit a Request</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle></DialogTitle>
          </DialogContent>
        </Dialog>
      </div>

      <div
        className={`absolute top-full left-0 right-0 bg-[#111111] z-50 md:hidden ${
          isMenuOpen ? "flex" : "hidden"
        } flex-col items-center py-8 gap-8`}
      >
        <Links />
        <Button
          variant="destructive"
          className="bg-[#E65722] hover:bg-[#E65722]/90 rounded-none"
        >
          <MailtoLink />
        </Button>
      </div>
    </nav>
  );
};
