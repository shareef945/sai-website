"use client";

import Image from "next/image";
import { useState } from "react";
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

  return (
    <section className="relative md:mt-12 md:pt-0 pt-12 flex flex-col justify-center items-center min-h-[90vh] px-6 pb-4 md:px-[170px]">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="flex md:block flex-col space-y-6">
            <span className="text-[#A3A3A3] font-medium">
              Imagine - Innovate - Implement
            </span>
            <h1 className="text-white text-2xl md:text-5xl  p-0 font-bold leading-tight">
              Your Trusted Partner in Digital Innovation
            </h1>
            <p className="text-[#898989] text-lg max-w-xl">
              We don’t just build solutions—we build alongside you. From
              strategy to execution, our expertise in digital transformation,
              enterprise software, and data intelligence ensures your business
              is future-ready. With smart, scalable, and secure technology, we
              help you stay ahead in a rapidly evolving digital landscape.”
            </p>
            <div className="hidden md:flex items-center gap-x-6">
              <RequestFormDialog
                services={services}
                isMobile={false}
                text="Let’s Build Together"
              />
            </div>
            <div className="flex justify-center items-center gap-4 md:hidden">
              <RequestFormDialog
                services={services}
                isMobile={true}
                text="Let’s Build Together"
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

        <div className="md:px-[123px] px-0 text-[#898989]">
          <div className="relative overflow-hidden">
            <div
              className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className={`flex items-center ${isHovered ? 'paused' : 'animate-scroll'}`}>
                {[...COMPANY_LOGOS, ...COMPANY_LOGOS].map((logo, i) => (
                  <div
                    key={i}
                    className="h-[74px] flex-shrink-0"
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
                ))}
              </div>
            </div>
          </div>
          <p className="text-center text-[#898989] mt-[22px] text-sm">
            Trusted by fast-growing companies worldwide
          </p>
        </div>
      </div>
      <style jsx>{`
        .animate-scroll {
          animation: scroll-left 20s linear infinite;
        }
        .animate-scroll.paused {
          animation-play-state: paused;
        }
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}