"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Links = () => {
  const path = usePathname()
  const isActive = (href: string) => path === href

  return (
    <div className="flex flex-col md:flex-row md:gap-6 gap-y-12 md:gap-y-0 w-full justify-center">
      <Link href="/about">
        <p className="text-[#898989] font-normal md:text-base text-[26px] md:text-[16px] leading-none mb-4 md:mb-0 hover:text-gray-400 transition-colors">
          About
        </p>
      </Link>
      <Link href="/projects">
        <p className="text-[#898989] font-normal md:text-base text-[26px] md:text-[16px] leading-none mb-4 md:mb-0 hover:text-gray-400 transition-colors">
          Projects
        </p>
      </Link>
      <Link href="/stories">
        <p className="text-[#898989] font-normal md:text-base text-[26px] md:text-[16px] leading-none hover:text-gray-400 transition-colors">
          Stories
        </p>
      </Link>
      <Link href="/hosting">
        <p className="text-[#898989] font-normal md:text-base text-[26px] md:text-[16px] leading-none hover:text-gray-400 transition-colors">
          Hosting
        </p>
      </Link>
    </div>
  )
}

export default Links

