import Hero from "@/components/Hero";
import ServicesComponent from "@/components/ServiceComponent";
import Stats from "@/components/Stats";
import Timeline from "@/components/Timeline";
import Testimonials from "@/components/Testimonials";
import TechStack from "@/components/TechStack";
import { GridFade } from "@/components/GridFade";
import Development from "@/components/Development";
import { GridBackground } from "@/components/GridBackground";

export default function Page() {
  return (
    <>
      {/* Grid container - fixed to viewport only */}
      <div className="fixed top-0 left-0 right-0 h-[100vh] z-[1] overflow-hidden pointer-events-none">
        <GridBackground size="sm" variant="fullScreen" />
      </div>

      {/* Content container */}
      <div className="relative z-20">
        <Hero />
        <ServicesComponent />
        <Stats />
        <Timeline />
        <Testimonials />
        <TechStack />
        <Development/>
      </div>
    </>
  );
}