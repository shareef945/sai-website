import { GridFade } from "@/components/GridFade";
import VenturesHero from "./components/VenturesHero";


const Ventures = () => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-[100vh] z-[1] overflow-hidden pointer-events-none">
        <GridFade size="lg" variant="fullScreen" />
      </div>
      <div className="relative z-[2] md:mt-[150px] mt-[15px]">
        <VenturesHero/>
      </div>
    </>
  );
};

export default Ventures;
