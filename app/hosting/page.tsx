"use client"
import { GridFade } from "@/components/GridFade";
import WhyChooseUs from "./components/why-choose-us";
import HostingHero from "./components/HostingHero";
import { motion } from "framer-motion";
import WebsiteCMSHosting from "./components/WebsiteCMS";

function HostingPage() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-[100vh] z-[1] overflow-hidden pointer-events-none">
        <GridFade size="lg" variant="fullScreen" />
      </div>
      <motion.div
        className="relative z-[2] md:mt-[110px] mt-[65px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <HostingHero />
        <WebsiteCMSHosting />
        <WhyChooseUs />
      </motion.div>
    </>
  );
}

export default HostingPage;