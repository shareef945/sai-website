"use client";
import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Links from "./ui/links";
import Image from "next/image";
import sailogo from "../public/small-logo.png";
import Link from "next/link";
import MailtoLink from "./ui/mailto";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null); 

  useEffect(() => {
    const closeMenu = (event: any) => {
      if (
        isMenuOpen &&
        navRef.current &&
        !navRef.current.contains(event.target)
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
      className="fixed top-0 left-0 right-0 flex w-full justify-between h-[80px] px-4 items-center shadow-md bg-white z-50"
    >
      <div className="flex items-center">
        <Link href={"/"}>
          <p>
            <Image src={sailogo} width={50} height={50} alt="Sai logo" />
          </p>
        </Link>
      </div>

      <div className="md:hidden">
    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
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

      <div className="hidden md:flex items-center gap-6">
        <Links />
        <Button><MailtoLink /></Button>
      </div>

      <div
        className={`absolute top-full left-0 gap-4 right-0 bg-white shadow-md z-40 md:hidden ${
          isMenuOpen ? "flex" : "hidden"
        } flex-col items-center py-8`}
      >
        <Links />
        <Button className="text-2xl md:text-lg font-light"><MailtoLink /></Button>
      </div>
    </nav>
  );
};
