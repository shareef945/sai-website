import {
  Monitor,
  Smartphone,
  Database,
  Target,
  Cpu,
  MessageSquare,
} from "lucide-react";
import Laptop from "./icons/Laptop";
import Phone from "./icons/Phone";
import Connect from "./icons/Connect";
import React from "react";
import Dashboard from "./icons/Dashboard";

export default function ServicesComponent() {
  const services = [
    {
      title: "Web Design & Development",
      description:
        "Crafting visually stunning and user-friendly websites tailored to your brand's needs.",
      icon: Laptop,
      gridBackground: true,
    },
    {
      title: "Mobile App Development",
      description:
        "Creating intuitive and impactful mobile applications for iOS and Android platforms.",
      icon: Phone,
      codeSnippet: true,
    },
    {
      title: "API Development and Integration",
      description:
        "Developing scalable and secure APIs to extend the functionality of your digital products.",
      icon: Connect,
      gridBackground: true,
      centerGrid: true,
    },
    {
      title: "Software Testing and Quality Assurance",
      description:
        "Ensuring the highest quality software with comprehensive testing services.",
      icon: Dashboard,
      concentric: true,
    },
    {
      title: "Robotic Process Automation (RPA)",
      description:
        "Creating intuitive and impactful mobile applications for iOS and Android platforms.",
      icon: Cpu,
      grid: true,
      gridBackground: true,
    },
    {
      title: "IT Consulting",
      description:
        "Providing expert IT consulting to optimize your technology strategy.",
      icon: MessageSquare,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center mt-[7.875rem] bg-[#151515] w-full py-24 ">
      <h1 className="md:text-[50px] text-[30px] font-medium text-center text-white">
        Services we Offer
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 p-4 max-w-[72rem] md:h-[47.5625rem] h-[145.3125rem]  ">
        {services.map((service: any, index: number) => (
          <div
            key={index}
            className="relative p-6 bg-[#191919] rounded-lg overflow-hidden"
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
              <div className="absolute inset-0 opacity-10 font-mono text-xs text-gray-500 p-4">
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
                <p className="text-gray-400 text-sm text-left mb-8">
                  {service.description}
                </p>
              </div>
              <div className="flex-grow flex items-center justify-center">
                <service.icon className="w-24 h-24 text-gray-400 [&>path]:stroke-[1.5] [&>*]:stroke-orange-500" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
