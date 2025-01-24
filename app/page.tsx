import Image from "next/image";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/service-card";
import { services } from "@/config/services";
import MailtoLink from "@/components/ui/mailto";
import Hero from "@/components/Hero";

export default function Page() {
  return (
    <>
      <Hero />
   
      {/* Logos Section */}
      <section className="py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-4 lg:grid-cols-8 gap-8 items-center opacity-70">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-8">
                <div className="w-full h-full bg-gray-500/30 rounded" />
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 mt-6 text-sm">
            Trusted by fast-growing companies worldwide
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-white text-4xl font-bold text-center mb-16">
            Services we offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
