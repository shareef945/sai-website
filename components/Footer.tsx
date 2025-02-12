import Link from "next/link"
import Image from "next/image"
import { Twitter, Instagram, Linkedin, PhoneIcon as WhatsApp} from "lucide-react"
import { X } from "./icons/X(twitter)"
import { GridBackground } from "./grid-background"


export default function Footer() {
  return (
    <footer className="w-full bg-black relative">
      {/* Grid Background */}
      {/* <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(#333 1px, transparent 1px),
                           linear-gradient(90deg, #333 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      /> */}

      <div className="container mx-auto px-4 py-12 relative">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Logo */}
          <div className="relative w-48">
            <GridBackground/>

            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-07%20at%208.27.36%E2%80%AFAM-xCq1PN0H7DiJLwDlvzqqkyrLne5OB5.png"
              alt="SAI Technology Logo"
              width={200}
              height={50}
              className="brightness-50"
            />
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            {/* Links */}
            <nav className="flex flex-col space-y-2">
              <Link href="#" className="text-white hover:text-gray-300 transition-colors text-sm">
                Ventures
              </Link>
              <Link href="/privacy" className="text-white hover:text-gray-300 transition-colors text-sm">
                Data Privacy & Security Policy
              </Link>
              <Link href="certifications" className="text-white hover:text-gray-300 transition-colors text-sm">
                Compliance & Certifications
              </Link>
            </nav>

            {/* Email */}
            <Link
              href="mailto:info@saitechnology.co"
              className="text-white hover:text-gray-300 transition-colors text-sm block"
            >
              info@saitechnology.co
            </Link>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <Link href="#" className="text-white hover:text-gray-300 transition-colors">
              <X/>
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-white hover:text-gray-300 transition-colors">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-white hover:text-gray-300 transition-colors">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-white hover:text-gray-300 transition-colors">
                <WhatsApp className="w-5 h-5" />
                <span className="sr-only">WhatsApp</span>
              </Link>
            </div>

            {/* Copyright */}
            <p className="text-white/70 text-xs">2023 All rights reserved. Powered by SAI Technology ®</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

