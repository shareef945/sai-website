import { HeroSection } from "@/components/AboutHero";
import CircleBackground  from "@/components/CircleBackground";
import { OurValues } from "@/components/OurValues";
import { WhoWeAreSection } from "@/components/WhoWeAre";

export default function Page() {
  return (
    <>
      <CircleBackground />
      <main className="relative z-10">
        <HeroSection />
        <WhoWeAreSection />
        <OurValues/>

      </main>
    </>
  );
}
