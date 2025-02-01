import { HeroSection } from "@/components/AboutHero";
import CircleBackground  from "@/components/CircleBackground";
import { WhoWeAreSection } from "@/components/WhoWeAre";

export default function Page() {
  return (
    <>
      <CircleBackground />
      <main className="relative z-10">
        <HeroSection />
        <WhoWeAreSection />
      </main>
    </>
  );
}
