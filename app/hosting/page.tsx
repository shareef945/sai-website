import { GridFade } from "@/components/GridFade";
import Image from "next/image";
import CMSHostingPlans from "./components/CMS";
import WebsiteCMSHosting from "./components/Website+CMS";
import WhyChooseUs from "./components/why-choose-us";
import HostingHero from "./components/HostingHero";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-[100vh] z-[1] overflow-hidden pointer-events-none">
        <GridFade size="lg" variant="fullScreen" />
      </div>
      <div className="relative z-[2] md:mt-[110px] mt-[65px]">
        <HostingHero/>
        <CMSHostingPlans />
        <WebsiteCMSHosting/>
        <WhyChooseUs/>

      </div>
    </>
  );
};

export default PrivacyPolicy;
