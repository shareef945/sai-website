"use client";

import { GridBackground } from "./GridFade";
import { Globe } from "./ui/globe";

export default function OurValues() {
  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2 bg-black relative">
      <GridBackground />

      <div className="flex flex-col justify-center p-8 lg:p-16 ">
        <h2 className="text-4xl font-medium text-white mb-12">Our Values</h2>
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
      <div className="relative lg:min-h-full mt-32 flex items-center justify-center">
        <Globe className="lg:scale-80" />
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
      <div className="flex items-center gap-2">
        <div className="h-4 w-1 bg-[#FB6415]" />
        <h3 className="text-xl font-medium text-white">{title}</h3>
      </div>
      <p className="text-zinc-400 text-sm leading-relaxed pl-6">
        {description}
      </p>
    </div>
  );
}
