"use client";
import { Button } from "@/components/ui/button";
import MailtoLink from "./ui/mailto";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "./ui/dialog";
import { useEffect, useRef, useState } from "react";
import RequestForm from "./request-form";

const COMPANY_LOGOS = [
  "/comp1.svg",
  "/comp2.svg",
  "/comp3.svg",
  "/comp4.svg",
  "/comp5.svg",
  "/comp6.svg",
  "/comp7.svg",
  "/comp8.svg",
] as const;
export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollInterval: NodeJS.Timeout;

    const startScroll = () => {
      scrollInterval = setInterval(() => {
        if (!isHovered && scrollContainer) {
          scrollContainer.scrollLeft += 1;

          // Reset scroll position when reaching the end
          if (
            scrollContainer.scrollLeft >=
            (scrollContainer.scrollWidth - scrollContainer.clientWidth) / 2
          ) {
            scrollContainer.scrollLeft = 0;
          }
        }
      }, 20);
    };

    startScroll();

    return () => {
      if (scrollInterval) {
        clearInterval(scrollInterval);
      }
    };
  }, [isHovered]);

  return (
    <section className="relative md:mt-12 mt-[10rem] md:pt-0 flex flex-col justify-center items-center h-[90vh] px-6 pt-20 pb-4 md:px-[170px]">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 ">
          <div className="flex md:block flex-col space-y-6">
            <h1 className="text-white text-5xl lg:text-[4.375rem] font-bold leading-tight">
              We design and build solutions
            </h1>
            <p className="text-[#898989] text-lg max-w-xl">
              Accelerate your digital transformation and stay ahead of the
              competition with our proven expertise in delivering cutting-edge
              solutions for a wide range of industries.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="destructive"
                  size="sm"
                  className="bg-[#E65722] flex mt-6 items-center justify-center hover:bg-[#E65722]/90 w-[183px] py-5 md:hidden mx-auto"
                >
                  Submit a request
                </Button>
              </DialogTrigger>
              <DialogContent className="p-0 border-[6px]  border-[#ffffff0a] flex items-center justify-center bg-[#151515] mx-auto max-w-[92vw]  w-full my-auto h-auto">
                <RequestForm />
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger>
                <Button
                  variant="destructive"
                  className="bg-[#E65722] hover:bg-[#E65722]/90 hidden md:block"
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
          <div className="relative h-[515px]">
            <Image
              src="/hero-art.svg"
              alt="Decorative spiral"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div className="  px-6 md:px-[123px] text-[#898989]">
          <div className="relative overflow-hidden">
            <div
              ref={scrollRef}
              className="flex items-center overflow-x-hidden scroll-smooth [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {[...COMPANY_LOGOS, ...COMPANY_LOGOS, ...COMPANY_LOGOS].map(
                (logo, i) => (
                  <div
                    key={i}
                    className="h-[74px] flex-shrink-0 px-0"
                    style={{ maxWidth: "110px" }}
                  >
                    <Image
                      src={logo}
                      alt={`Company Logo ${i + 1}`}
                      width={110}
                      height={100}
                      className="w-full h-full object-contain"
                      style={{
                        maxWidth: "110px",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                )
              )}
            </div>
          </div>
          <p className="text-center text-gray-300 mt-[22px] text-sm">
            Trusted by fast-growing companies worldwide
          </p>
        </div>
      </div>
    </section>
  );
}
