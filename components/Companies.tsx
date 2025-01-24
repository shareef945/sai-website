"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

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
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev + 1) % (COMPANY_LOGOS.length * 158)); // Use actual logo width
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden">
          <div
            className="relative flex items-center gap-0 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] transition-transform duration-50"
            style={{
              transform: `translateX(-${position}px)`,
            }}
          >
            {[...COMPANY_LOGOS, ...COMPANY_LOGOS].map((logo, i) => (
              <div key={i} className="h-16 min-w-[250px] flex-shrink-0">
                <Image
                  src={logo}
                  alt={`Company Logo ${i + 1}`}
                  width={500}
                  height={200}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        <p className="text-center text-gray-400 mt-6 text-sm">
          Trusted by fast-growing companies worldwide
        </p>
      </div>
    </section>
  );
}
