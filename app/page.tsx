import Hero from "@/components/Hero";
import ServicesComponent from "@/components/ServiceComponent";
import Stats from "@/components/Stats";
import Timeline from "@/components/Timeline";
import Testimonials from "@/components/Testimonials";
import TechStack from "@/components/TechStack";
import { GridFade } from "@/components/GridFade";
import Development from "@/components/Development";



export default function Page() {
  return (
    <>
      {/* Grid container */}
      <div className="fixed top-0 left-0 right-0 h-[100vh] z-[1] overflow-hidden">
        <GridFade size="sm" variant="viewport" />
      </div>

      {/* Content container */}
      <div className="relative z-[2]">
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