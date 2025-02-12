import { HeroSection } from "@/components/AboutHero";
import CircleBackground  from "@/components/CircleBackground";
import OurValues  from "@/components/OurValues";
import WhyChoose from "@/components/ui/why-choose";
import WhatWeDo from "@/components/what-we-do";
import { WhoWeAreSection } from "@/components/WhoWeAre";

export default function Page() {
  return (
    <>
      <CircleBackground />
      <main className="relative z-10">
        <HeroSection />
        <WhoWeAreSection />
        <OurValues/>
        <WhatWeDo/>
        <WhyChoose/>

      </main>
    </>
  );
}
