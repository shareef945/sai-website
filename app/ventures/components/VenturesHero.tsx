import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function VenturesHero() {
  return (
    <div className="min-h-screen px-4 md:px-[180px] w-full">
      <div className="py-16">
        <div>
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-6">
            Our Ventures
          </h1>

          <p className="text-white text-lg mb-10 leading-relaxed">
            At SAI Technology, we offer reliable and scalable hosting solutions
            tailored to businesses of all sizes. Whether you need a managed CMS
            for your existing website or a complete website + CMS package, we
            have flexible plans to suit your needs. Our hosting is secure,
            high-performing, and backed by professional support to ensure your
            digital presence remains seamless.
          </p>

          <Button className="bg-[#ea5c1c] hover:bg-[#d45318] text-white px-8 py-3 font-medium mb-16 md:mb-32">
            Talk to us
          </Button>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[11px] gap-x-2.5">
            <Link href="https://www.swifttransport.app">
              <div className="border-l-4 border-[#ea5c1c] bg-[#191919] pl-6 py-2  h-[65px]  flex flex-col justify-center">
                <h3 className="text-xl text-white font-semibold mb-2">
                  Swift Transport
                </h3>
              </div>
            </Link>

            {/* <div className="border-l-4 border-[#ea5c1c] bg-[#191919] pl-6 py-2  h-[65px]  flex flex-col justify-center">
              <h3 className="text-xl text-white font-semibold mb-2">SAI Real Estate</h3>
            </div>
             */}
            <Link href="https://www.sairealestate.casa/casa360">
              {" "}
              <div className="border-l-4 border-[#ea5c1c] bg-[#191919] pl-6 py-2  h-[65px]  flex flex-col justify-center">
                <h3 className="text-xl text-white font-semibold mb-2">
                  Casa 360
                </h3>
              </div>
            </Link>

            <Link href="/hosting">
              <div className="border-l-4 border-[#ea5c1c] bg-[#191919] pl-6 py-2  h-[65px]  flex flex-col justify-center">
                <h3 className="text-xl text-white font-semibold mb-2">
                  SAI Cloud
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
