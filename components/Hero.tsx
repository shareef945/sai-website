"use client";
import { Button } from "@/components/ui/button";
import MailtoLink from "./ui/mailto";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "./ui/dialog";
import { useEffect, useRef, useState } from "react";

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
          if (scrollContainer.scrollLeft >= (scrollContainer.scrollWidth - scrollContainer.clientWidth) / 2) {
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
    <section className="relative flex flex-col justify-center items-center h-[90vh] px-6 pt-20 pb-10">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h1 className="text-white text-5xl lg:text-[4.375rem] font-bold leading-tight">
              We design and build solutions
            </h1>
            <p className="text-gray-300 text-lg max-w-xl">
              Accelerate your digital transformation and stay ahead of the
              competition with our proven expertise in delivering cutting-edge
              solutions for a wide range of industries.
            </p>
            <Dialog>
              <DialogTrigger>
                <Button
                  variant="destructive"
                  className="bg-[#E65722] z-50 hover:bg-[#E65722]/90 "
                >
                  Submit a Request
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogTitle></DialogTitle>
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

        <div className="max-w-7xl mx-auto px-6 text-white/60">
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
                    className="h-16 min-w-[200px] flex-shrink-0 px-4"
                  >
                    <Image
                      src={logo}
                      alt={`Company Logo ${i + 1}`}
                      width={500}
                      height={200}
                      className="w-full h-full object-contain"
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
