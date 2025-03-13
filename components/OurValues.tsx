"use client";

import { GridBackground } from "./GridBackground";
import { Globe } from "./ui/globe";

export default function OurValues() {
  return (
    <div className="min-h-screen lg:grid lg:grid-cols-2">
      <div className="flex flex-col justify-center p-8 lg:p-16">
        {/* Title - stays at top for both mobile and desktop */}
        <h2 className="text-4xl font-medium text-white mb-8 text-center lg:text-left">Our Values</h2>
        
        {/* Globe on mobile only - between title and values */}
        <div className="block lg:hidden mx-auto mb-12">
          <div className="relative w-[371px] h-[371px] mx-auto">
            <Globe />
          </div>
        </div>
        
        {/* Values list */}
        <div className="space-y-8">
          <ValueItem
            title="Innovation"
            description="We believe in the power of creativity and exploration to drive meaningful change."
          />
          <ValueItem
            title="Integrity"
            description="We uphold the highest standards of honesty and transparency in all our endeavors."
          />
          <ValueItem
            title="Collaboration"
            description="We thrive on partnerships, both within our team and with our clients, to achieve excellence together."
          />
          <ValueItem
            title="Sustainability"
            description="We are dedicated to creating solutions that benefit the planet and future generations."
          />
        </div>
      </div>
      
      {/* Desktop Globe - only shows on desktop */}
      <div className="hidden lg:flex items-center justify-center">
        <div className="relative w-[757px] h-[757px]">
          <Globe className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}

function ValueItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 md:justify-start justify-center">
        <div className="hidden md:block h-4 w-1 bg-[#FB6415]" />
        <h3 className="text-xl font-medium text-white">{title}</h3>
      </div>
      <p className="text-zinc-400 text-sm leading-relaxed md:pl-6 text-center md:text-left">
        {description}
      </p>
    </div>
  );
}