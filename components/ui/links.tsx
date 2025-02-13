"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = () => {
  const path = usePathname();

  const isActive = (href: string) => path === href;

  return (
    <div className="md:flex md:gap-6 w-full justify-center">
      <Link href="/about">
        <p className="text-gray-500 font-semibold text-base leading-none mb-4 md:mb-0">
          About
        </p>
      </Link>
      <Link href="/projects">
        <p className="text-gray-500 font-semibold text-base leading-none">
          Projects
        </p>
      </Link>
      <Link href="/stories">
        <p className="text-gray-500 font-semibold text-base leading-none mb-4 md:mb-0">
          Stories
        </p>
      </Link>
    </div>
  );
};

export default Links;
