import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin, PhoneIcon as WhatsApp, X } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full  h-[40.75rem] md:h-[32.5625rem] bg-[#151515] z-10 relative">
      <div className="flex flex-col-reverse md:flex-row  md:min-h-[32.5625rem]">
        {/* Logo Section - 60% width */}
        <div className="w-full md:w-[60%] relative flex items-end h-[20.125rem] md:h-auto">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(#333 1px, transparent 1px),
                             linear-gradient(90deg, #333 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
            }}
          />
          {/* Logo */}
          <div className="relative z-20 w-full pb-8">
            <Image
              width={616.6}
              height={118}
              src="/sai-footer.svg"
              alt="SAI Technology Logo"
              className="brightness-50 w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Right Content Section - 40% width */}
        <div className="w-full md:w-[40%] p-8 h- flex flex-col justify-between">
          <div className="space-y-8">
            {/* Links */}
            <nav className="flex flex-col space-y-2">
              <Link href="#" className="text-white hover:text-gray-300 transition-colors text-sm">
                Ventures
              </Link>
              <Link href="/privacy" className="text-white hover:text-gray-300 transition-colors text-sm">
                Data Privacy & Security Policy
              </Link>
              <Link href="/certifications" className="text-white hover:text-gray-300 transition-colors text-sm">
                Compliance & Certifications
              </Link>
            </nav>
          </div>

          <div className="flex flex-col gap-y-10">
            <Link
              href="mailto:info@saitechnology.co"
              className="text-white hover:text-gray-300 transition-colors text-sm block"
            >
              info@saitechnology.co
            </Link>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <Link href="#" className="text-white hover:text-gray-300 transition-colors">
                <X className="h-[2.125rem] w-[2.125rem]" />
                <span className="sr-only">X (Twitter)</span>
              </Link>
              <Link href="#" className="text-white hover:text-gray-300 transition-colors">
                <Instagram className="h-[2.125rem] w-[2.125rem]" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-white hover:text-gray-300 transition-colors">
                <Linkedin className="h-[2.125rem] w-[2.125rem]" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-white hover:text-gray-300 transition-colors">
                <WhatsApp className="h-[2.125rem] w-[2.125rem]" />
                <span className="sr-only">WhatsApp</span>
              </Link>
            </div>
            <p className="text-white/70 text-xs">2025 All rights reserved. Powered by SAI Technology ®</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

