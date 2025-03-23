"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import RequestFormDialog from "./ui/request-dialog";
import { services } from "@/config/services";

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
    <section className="relative md:mt-12  md:pt-0 pt-12 flex flex-col justify-center items-center min-h-[90vh] px-6 pb-4 md:px-[170px]">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 ">
          <div className="flex md:block flex-col space-y-6">
            <span className="text-[#A3A3A3] font-medium">
              Your Strategic Technology Partner
            </span>
            <h1 className="text-white text-2xl md:text-5xl  p-0 font-bold leading-tight">
              Your Trusted Partner in Digital Innovation
            </h1>
            <p className="text-[#898989] text-lg max-w-xl">
              We work alongside you, not just for you. From strategy to
              execution, we create smart, scalable, and secure solutions that
              empower your business. Our expertise spans digital transformation,
              enterprise software, data intelligence, and more—so you can
              navigate the future with confidence.
            </p>
            <div className="hidden md:flex items-center gap-x-6">
              <RequestFormDialog
                services={services}
                isMobile={false}
                text="Submit a request"
              />
            </div>
            <div className="flex justify-center items-center gap-4 md:hidden">
              <RequestFormDialog
                services={services}
                isMobile={true}
                text="Submit a request"
              />
            </div>
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

        <div className=" md:px-[123px] px-0 text-[#898989]">
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
          <p className="text-center text-[#898989] mt-[22px] text-sm">
            Trusted by fast-growing companies worldwide
          </p>
        </div>
      </div>
    </section>
  );
}
