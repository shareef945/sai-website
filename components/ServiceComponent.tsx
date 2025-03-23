import { services } from "@/config/services";
import AI from "@/components/icons/AI";
import Connect from "@/components/icons/Connect";
import Dashboard from "@/components/icons/Dashboard";
import Laptop from "@/components/icons/Laptop";
import Messages from "@/components/icons/Messages";
import Phone from "@/components/icons/Phone";
import { FaCloud as Cloud } from "react-icons/fa";
import { FaShield as Shield } from "react-icons/fa6";
import { FaChartBar as Chart } from "react-icons/fa";


import React from "react";

// Define the Icon component type with className prop
type IconComponentProps = {
  className?: string;
};

// Map icon names to their components with proper typing
const iconComponents: Record<string, React.ComponentType<IconComponentProps>> = {
  Laptop,
  Phone,
  Cloud,
  Connect,
  Dashboard,
  AI,
  Shield,
  Messages,
  Chart
};

export default function ServicesComponent() {
  return (
    <div className="relative flex flex-col items-center justify-center  bg-[#151515] w-full py-24">
      {/* Gradient Fade at the Top */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#151515] to-transparent pointer-events-none" />

      <h1 className="md:text-[50px] mb-16 text-[30px] font-medium text-center text-white">
        Services we Offer
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 p-4 max-w-[72rem] md:h-[47.5625rem] h-[145.3125rem]">
        {services.map((service: any, index: number) => {
          // Get the corresponding icon component
          const IconComponent = iconComponents[service.icon as keyof typeof iconComponents];
          
          return (
            <div
              key={index}
              className="relative p-6 border border-[#ffffff0a] bg-[#191919] rounded-none overflow-hidden"
            >
              {service.gridBackground && (
                <div className="absolute inset-0">
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage: `
                        repeating-linear-gradient(to right, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1) 1px, transparent 1px, transparent 20px),
                        repeating-linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1) 1px, transparent 1px, transparent 20px)
                      `,
                    }}
                  >
                    <div
                      className="absolute inset-0"
                      style={{
                        background: service.centerGrid
                          ? "radial-gradient(circle at center, rgba(33, 33, 33, 0) 0%, rgba(33, 33, 33, 0.7) 60%, rgba(33, 33, 33, 1) 100%)"
                          : "linear-gradient(to top, rgba(33, 33, 33, 0) 0%, rgba(33, 33, 33, 0.7) 60%, rgba(33, 33, 33, 1) 100%)",
                      }}
                    />
                  </div>
                </div>
              )}
              {service.grid && (
                <div className="absolute inset-0 opacity-20">
                  <div className="grid grid-cols-8 gap-4 p-4">
                    {[...Array(64)].map((_, i) => (
                      <div
                        key={i}
                        className={`h-2 w-2 ${
                          [12, 18, 26, 38, 45].includes(i)
                            ? "bg-orange-500"
                            : "bg-gray-600"
                        } rounded-sm`}
                      />
                    ))}
                  </div>
                </div>
              )}
              {service.concentric && (
                <div className="absolute inset-0 opacity-20">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute inset-0 border border-gray-600 rounded-full"
                      style={{
                        margin: `${i * 20}%`,
                      }}
                    />
                  ))}
                  <div className="absolute left-1/2 top-1/2 w-2 h-2 bg-orange-500 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
                </div>
              )}
              {service.codeSnippet && (
                <div className="absolute inset-0 opacity-10 font-mono text-xs text-[#898989] p-4">
                  {`// Type some code ->
console.log("code goes here");
// ⍺ ε υ τ ∞ ∆

function updateGutters() {
  var gutters = cm.display.gutters,
      specs = cm.options.gutters;
      
  removeChildren(gutters);
  
  for (var i = 0; i < specs.length; ++i) {
    var gutterClass = specs[i];`}
                </div>
              )}
              <div className="relative flex flex-col items-center h-full">
                <div>
                  <h2 className="text-xl font-semibold text-white mb-2 text-left">
                    {service.title}
                  </h2>
                  <p className="text-[#898989] text-sm text-left mb-8">
                    {service.description}
                  </p>
                </div>
                <div className="flex-grow flex items-center justify-center">
                  {IconComponent && (
                    <IconComponent className="w-24 h-24 text-[#808080] [&>path]:stroke-[1.5]" />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}