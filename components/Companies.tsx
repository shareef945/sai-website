"use client";

import Image from "next/image";
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

export default function Companies() {
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
    <section className="py-12 bg-[#151515]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden">
          <div
            ref={scrollRef}
            className="flex items-center overflow-x-hidden scroll-smooth [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {[...COMPANY_LOGOS, ...COMPANY_LOGOS, ...COMPANY_LOGOS].map(
              (logo, i) => (
                <div key={i} className="h-16 min-w-[200px] flex-shrink-0 px-4">
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
        <p className="text-center text-[#898989] mt-[22px] text-sm">
          Trusted by fast-growing companies worldwide
        </p>
      </div>
    </section>
  );
}
