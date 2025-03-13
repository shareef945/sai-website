import React from "react";
import Image from "next/image";

export default function TeamSection() {
  return (
    <div className=" min-h-screen w-full relative">
      {/* Grid background */}
      <div className="absolute inset-0 grid grid-cols-6 pointer-events-none">
        {[...Array(7)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="h-full w-px bg-[#222222]"
            style={{ left: `${(i / 6) * 100}%` }}
          />
        ))}
        {[...Array(7)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="w-full h-px bg-[#222222]"
            style={{ top: `${(i / 6) * 100}%` }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 relative">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-[#ffffff] text-3xl sm:text-4xl md:text-5xl font-normal mb-4">
            The team behind it
          </h2>
          <div className="w-16 h-0.5 bg-red-500 mx-auto"></div>
        </div>

        {/* Team members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Team member 1 - using the original image from your code */}
          <div className="flex flex-col">
            <div className="mb-4 sm:mb-6">
              <Image
                src="/team-member.png"
                alt="Team member"
                width={400}
                height={400}
                className="w-full"
              />
            </div>
            <h3 className="text-[#ffffff] text-xl font-medium">Innovation</h3>
            <p className="text-[#d9d9d9] text-sm">Design Lead</p>
          </div>

          {/* Team member 2 - using the original image from your code */}
          <div className="flex flex-col">
            <div className="mb-4 sm:mb-6">
              <Image
                src="/team-member.png"
                alt="Team member"
                width={400}
                height={400}
                className="w-full"
              />
            </div>
            <h3 className="text-[#ffffff] text-xl font-medium">Innovation</h3>
            <p className="text-[#d9d9d9] text-sm">Design Lead</p>
          </div>

          {/* Team member 3 - using the original image from your code */}
          <div className="flex flex-col sm:col-span-2 md:col-span-1">
            <div className="mb-4 sm:mb-6">
              <Image
                src="/team-member.png"
                alt="Team member"
                width={400}
                height={400}
                className="w-full"
              />
            </div>
            <h3 className="text-[#ffffff] text-xl font-medium">Innovation</h3>
            <p className="text-[#d9d9d9] text-sm">Design Lead</p>
          </div>
        </div>
      </div>
    </div>
  );
}