import Hero from "@/components/Hero";
import Companies from "@/components/Companies";
import ServicesComponent from "@/components/ServiceComponent";
import Stats from "@/components/Stats";
import Timeline  from "@/components/Timeline";
import Testimonials from "@/components/Testimonials";
import TechStack from "@/components/TechStack";
import { GridBackground } from "@/components/GridBackground";

export default function Page() {
  return (
    <>
    <GridBackground/>
      <Hero />
      <Companies />
      <ServicesComponent />
      <Stats/>
      <Timeline/>
      <Testimonials/>
      {/* <TechStack/> */}
    </>
  );
}
