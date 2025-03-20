import React from "react";
import Image from "next/image";

export default function ClientsAndPartners() {
  // These logo paths should match your actual file structure
  const partners = [
    { name: "Partner 1", logo: "/comp1.svg" },
    { name: "Partner 2", logo: "/comp2.svg" },
    { name: "Partner 3", logo: "/comp3.svg" },
    { name: "Partner 4", logo: "/comp4.svg" },
    { name: "Partner 5", logo: "/comp5.svg" },
    { name: "Partner 6", logo: "/comp6.svg" },
    { name: "Partner 7", logo: "/comp7.svg" },
    { name: "Partner 8", logo: "/comp8.svg" },
  ];

  return (
    <div className=" text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-32">
          <h2 className="text-4xl font-medium mb-8">
            Why Choose SAI Technology?
          </h2>
          <div className="space-y-6 text-zinc-400">
            <p>
              With a focus on innovation and a commitment to excellence, we
              deliver scalable and sustainable solutions that drive success. Our
              team of experts works tirelessly to stay ahead of the curve,
              ensuring that our clients benefit from the latest advancements in
              technology.
            </p>
            <p>
              Join us on this journey to transform the future, one breakthrough
              at a time. At SAI Technology, we don&#39;t just adapt to change—we
              lead it.
            </p>
          </div>
        </div>
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal text-center mt-[20rem] mb-12 md:mb-16">
          Our Clients and Partners
        </h2>

        {/* Desktop Layout (hidden on small screens) */}
        <div className="hidden md:block max-w-5xl mx-auto">
          <div className="flex flex-col items-center gap-12">
            {/* Top row - 5 logos */}
            <div className="flex justify-center gap-12 w-full">
              {partners.slice(0, 5).map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={160}
                    height={80}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Bottom row - 3 logos centered */}
            <div className="flex justify-center gap-12">
              {partners.slice(5, 8).map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={120}
                    height={60}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout (hidden on medium and larger screens) */}
        <div className="md:hidden max-w-sm mx-auto">
          <div className="flex flex-col items-center gap-8">
            {/* First row - 3 logos */}
            <div className="flex justify-center gap-8 w-full">
              {partners.slice(0, 3).map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={80}
                    height={40}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Second row - 3 logos */}
            <div className="flex justify-center gap-8 w-full">
              {partners.slice(3, 6).map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={80}
                    height={40}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Third row - 2 logos centered */}
            <div className="flex justify-center gap-8">
              {partners.slice(6, 8).map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={80}
                    height={40}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
