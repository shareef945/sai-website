import { HeroSection } from "@/components/AboutHero";
import CircleBackground from "@/components/CircleBackground";
import { GridBackground } from "@/components/GridBackground";
import OurValues from "@/components/OurValues";
import WhyChoose from "@/components/ui/why-choose";
import WhatWeDo from "@/components/what-we-do";
import { WhoWeAreSection } from "@/components/WhoWeAre";
import TeamSection from "./components/team";

export default function Page() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-[100vh] z-[1] overflow-hidden pointer-events-none">
        <GridBackground size="lg" variant="fullScreen" />
      </div>
      <div className="relative z-20">
        <HeroSection />
        <WhoWeAreSection />
        <OurValues />
        <WhatWeDo />
        <TeamSection/>
        <WhyChoose />
      </div>
    </>
  );
}
