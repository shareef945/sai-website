"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = () => {
  const path = usePathname();
  const isActive = (href: string) => path === href;

  return (
    <div className="flex flex-col md:flex-row md:gap-6 gap-y-12 md:gap-y-0 w-full justify-center">
      <Link href="/about">
        <p className="text-white text-xl md:text-sm leading-none  md:mb-0 hover:text-[#898989] transition-colors">
          About
        </p>
      </Link>
      <Link href="/projects">
        <p className="text-white text-xl md:text-sm leading-none  md:mb-0 hover:text-[#898989] transition-colors">
          Projects
        </p>
      </Link>
      <Link href="/stories">
        <p className="text-white text-xl md:text-sm leading-none hover:text-[#898989] transition-colors">
          Stories
        </p>
      </Link>
      <Link href="/hosting">
        <p className="text-white text-xl md:text-sm leading-none hover:text-[#898989] transition-colors">
          Hosting
        </p>
      </Link>
    </div>
  );
};

export default Links;
