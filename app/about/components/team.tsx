import React from "react";
import Image from "next/image";

export default function TeamSection() {
  return (
    <div className=" min-h-screen w-full mx-auto relative">
      {/* Grid background */}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 relative">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-[#ffffff] text-3xl sm:text-4xl md:text-5xl font-normal mb-4">
            The team behind it
          </h2>
          <div className="w-16 h-0.5 bg-[#ea5c1c] mx-auto"></div>
        </div>

        {/* Team members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
  {/* Team member 1 */}
  <div className="flex flex-col">
    <div className="mb-4 sm:mb-6 aspect-[9/16] overflow-hidden  relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800/30 to-gray-900/70 z-10"></div>
      <Image
        src="/people/shareef.JPG"
        alt="Shareef Ali"
        fill
        className="absolute inset-0 object-cover"
      />
    </div>
    <h3 className="text-[#ffffff] text-xl font-medium">Shareef Ali</h3>
    <p className="text-[#d9d9d9] text-sm">Chief Executive Officer</p>
  </div>

  {/* Team member 2 */}
  <div className="flex flex-col">
    <div className="mb-4 sm:mb-6 aspect-[9/16] overflow-hidden  relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800/30 to-gray-900/70 z-10"></div>
      <Image
        src="/people/sarah.jpg"
        alt="Sarah Korteily"
        fill
        className="absolute inset-0 object-cover"
      />
    </div>
    <h3 className="text-[#ffffff] text-xl font-medium">Sarah Korteily</h3>
    <p className="text-[#d9d9d9] text-sm">Project Manager</p>
  </div>

  {/* Team member 3 */}
  <div className="flex flex-col sm:col-span-2 md:col-span-1">
    <div className="mb-4 sm:mb-6 aspect-[9/16] overflow-hidden  relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800/30 to-gray-900/70 z-10"></div>
      <Image
        src="/people/dzobo.jpg"
        alt="Ebenezer Dzobo"
        fill
        className="absolute inset-0 object-cover"
      />
    </div>
    <h3 className="text-[#ffffff] text-xl font-medium">Ebenezer Dzobo</h3>
    <p className="text-[#d9d9d9] text-sm">Cybersecurity Lead</p>
  </div>
</div>
      </div>
    </div>
  );
}