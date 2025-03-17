"use client"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import Links from "./ui/links"
import Image from "next/image"
import Link from "next/link"
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)
  const COMMON_STYLES = {
    nav: (isScrolled: boolean) =>
      `fixed top-0 z-50 w-full transition-all duration-300 py-2 px-2 ${
        isScrolled ? "bg-[#151515] border-[#898989]" : "bg-transparent"
      }`,
    container: "flex h-16 w-full items-center justify-between px-6",
    logo: "flex items-center gap-4",
    logoText: "text-white font-semibold ",
    mobileButton: "lg:hidden text-white", // Changed from text-black to text-white
    desktopNav: "hidden lg:flex lg:items-center lg:gap-8",
    link: "flex w-full items-center text-secondary md:text-white text-xl md:text-sm font-semibold hover:text-gray-300 transition-colors", // Added hover effect
  }

  useEffect(() => {
    const closeMenu = (event: MouseEvent) => {
      if (isMenuOpen && navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", closeMenu)

    return () => {
      document.removeEventListener("mousedown", closeMenu)
    }
  }, [isMenuOpen])

  return (
    <nav
      ref={navRef}
      className="h-[10vh] top-0 left-0 right-0 flex w-full justify-between bg-transparent px-6 py-4 relative z-20"
    >
      <div className="flex items-center gap-x-2 justify-center">
        <Link href="/" className={COMMON_STYLES.logo} prefetch={false}>
          <Image src="/logos/sai-main.png" width={50} alt="logo" height={50} priority />
          <p className={COMMON_STYLES.logoText} >TECHNOLOGY</p>
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-8">
        <Links />
        <Dialog>
          <DialogTrigger>
            <Button variant="destructive" className="bg-[#E65722] hover:bg-[#E65722]/90 ">
              Submit a Request
            </Button>
          </DialogTrigger>
          <DialogContent className="p-0 gap-0 border-none bg-[#1C1C1C] max-w-[800px]">
            <div className="grid lg:grid-cols-2">
              {/* Left side */}
              <div className="relative hidden lg:block bg-gradient-to-b from-transparent to-[#1a1a1a]">
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h30v30H0V0zm1 1h28v28H1V1z' fill='%23FFFFFF' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                    backgroundSize: "30px 30px",
                  }}
                />
                <div className="relative h-full flex items-center p-12">
                  <h2 className="text-white text-5xl font-medium leading-tight">
                    Let&apos;s bring
                    <br />
                    your vision
                    <br />
                    to Life.
                  </h2>
                </div>
              </div>

              {/* Right side */}
              <div className="p-8">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-white text-xl font-normal">Start a project</h2>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      placeholder="First Name"
                      className="bg-transparent border-b border-[#D35F39] pb-2 text-white placeholder:text-gray-500 focus:outline-none w-full"
                    />
                    <input
                      placeholder="Last Name"
                      className="bg-transparent border-b border-[#D35F39] pb-2 text-white placeholder:text-gray-500 focus:outline-none w-full"
                    />
                  </div>

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="bg-transparent border-b border-[#D35F39] pb-2 text-white placeholder:text-gray-500 focus:outline-none w-full"
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="bg-transparent border-b border-[#D35F39] pb-2 text-white placeholder:text-gray-500 focus:outline-none w-full"
                  />

                  <div className="space-y-6">
                    <Select>
                      <SelectTrigger className="bg-transparent border-0 border-b border-[#D35F39]  pb-2 text-gray-500 focus:ring-0 [&>span]:text-left">
                        <SelectValue placeholder="Please select service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="web">Web Development</SelectItem>
                        <SelectItem value="mobile">Mobile Development</SelectItem>
                        <SelectItem value="design">Design</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select>
                      <SelectTrigger className="bg-transparent border-0 border-b border-[#D35F39]  pb-2 text-gray-500 focus:ring-0 [&>span]:text-left">
                        <SelectValue placeholder="Please select service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5k">$5,000 - $10,000</SelectItem>
                        <SelectItem value="10k">$10,000 - $25,000</SelectItem>
                        <SelectItem value="25k">$25,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#D35F39] text-white py-2 px-4 rounded hover:bg-[#D35F39]/90 transition-colors"
                  >
                    Submit a request
                  </button>
                </form>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex items-center gap-4 md:hidden">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="destructive" size="sm" className="bg-[#E65722] hover:bg-[#E65722]/90">
              Submit a Request
            </Button>
          </DialogTrigger>
          <DialogContent className="p-0 gap-0 border-none bg-[#1C1C1C] max-w-[800px]">
            <div className="grid lg:grid-cols-2">
              {/* Left side */}
              <div className="relative hidden lg:block bg-gradient-to-b from-transparent to-[#1a1a1a]">
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h30v30H0V0zm1 1h28v28H1V1z' fill='%23FFFFFF' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                    backgroundSize: "30px 30px",
                  }}
                />
                <div className="relative h-full flex items-center p-12">
                  <h2 className="text-white text-5xl font-medium leading-tight">
                    Let&apos;s bring
                    <br />
                    your vision
                    <br />
                    to Life.
                  </h2>
                </div>
              </div>

              {/* Right side */}
              <div className="p-8">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-white text-xl font-normal">Start a project</h2>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      placeholder="First Name"
                      className="bg-transparent border-b border-[#D35F39] pb-2 text-white placeholder:text-gray-500 focus:outline-none w-full"
                    />
                    <input
                      placeholder="Last Name"
                      className="bg-transparent border-b border-[#D35F39] pb-2 text-white placeholder:text-gray-500 focus:outline-none w-full"
                    />
                  </div>

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="bg-transparent border-b border-[#D35F39] pb-2 text-white placeholder:text-gray-500 focus:outline-none w-full"
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="bg-transparent border-b border-[#D35F39] pb-2 text-white placeholder:text-gray-500 focus:outline-none w-full"
                  />

                  <div className="space-y-6">
                    <Select>
                      <SelectTrigger className="bg-transparent border-0 border-b border-[#D35F39]  pb-2 text-gray-500 focus:ring-0 [&>span]:text-left">
                        <SelectValue placeholder="Please select service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="web">Web Development</SelectItem>
                        <SelectItem value="mobile">Mobile Development</SelectItem>
                        <SelectItem value="design">Design</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select>
                      <SelectTrigger className="bg-transparent border-0 border-b border-[#D35F39]  pb-2 text-gray-500 focus:ring-0 [&>span]:text-left">
                        <SelectValue placeholder="Please select service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5k">$5,000 - $10,000</SelectItem>
                        <SelectItem value="10k">$10,000 - $25,000</SelectItem>
                        <SelectItem value="25k">$25,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#D35F39] text-white py-2 px-4 rounded hover:bg-[#D35F39]/90 transition-colors"
                  >
                    Submit a request
                  </button>
                </form>
              </div>
            </div>
          </DialogContent>
        </Dialog>
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-full bg-[#111111] border-none p-8 flex flex-col justify-between">
            <div className="flex flex-col mt-[6rem] items-start gap-y-12">
              <Links />
            </div>
            <div className="flex flex-col gap-y-6">
              <Link
                href="/ventures"
                className="text-gray-500 text-[14px] hover:text-gray-400 transition-colors underline underline-offset-4"
              >
                Ventures
              </Link>
              <Link
                href="/privacy"
                className="text-gray-500 text-[14px] hover:text-gray-400 transition-colors underline underline-offset-4"
              >
                Data Privacy & Security Policy
              </Link>
              <Link
                href="/compliance"
                className="text-gray-500 text-[14px] hover:text-gray-400 transition-colors underline underline-offset-4"
              >
                Compliance & Certifications
              </Link>
              <Link
                href="mailto:info@saitechnology.co"
                className="text-gray-500 text-[14px] hover:text-gray-400 transition-colors underline underline-offset-4"
              >
                info@saitechnology.co
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}

