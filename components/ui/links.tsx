'use client'
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = () => {
  const path = usePathname();

  const isActive = (href: string) => path === href;

  return (
    <div className="md:flex md:gap-6 w-full justify-center">
      <Link href="/">
        <p
          className={`${
            isActive("/")
              ? "text-[#741F26] font-bold text-center"
              : "text-center  text-gray-500 font-light"
          } text-2xl md:text-lg mb-4 md:mb-0`} // Added mb-4 for mobile and md:mb-0 to reset on medium screens
        >
          Home
        </p>
      </Link>
      <Link href="/projects">
        <p
          className={`${
            isActive("/projects")
              ? "text-[#741F26] font-bold text-center"
              : "text-center text-gray-500 font-light" 
          } text-2xl md:text-lg`}
        >
          Projects
        </p>
      </Link>
    </div>
  );
};

export default Links;