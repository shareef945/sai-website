"use client";
import React, { useState } from "react";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import { services } from "@/config/services";
import ServiceCard from "./service-card";

const Services = () => {
  const [position, setPosition] = useState(2);

  const scrollLeft = () => {
    setPosition((prevPosition) => Math.max(prevPosition - 1, 0));
  };

  const scrollRight = () => {
    setPosition((prevPosition) =>
      Math.min(prevPosition + 1, services.length - 1)
    );
  };

  return (
    <section
      className="h-[650px] bg-[#BF212E] bg-opacity-5 border-t border-b border-[#741F26] flex flex-col items-center py-8 gap-12"
      id="services"
    >
      <p className="text-3xl text-[#741F26] font-bold">Services we offer</p>
      <div className="flex overflow-hidden max-w-full">
        <div className="flex">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              headerColor={position === index ? "#741F26" : "black"}
              isSelected={position === index}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-between w-full px-8">
        <CiCircleChevLeft
          size="2.5em"
          className="cursor-pointer"
          onClick={scrollLeft}
        />
        <CiCircleChevRight
          size="2.5em"
          className="cursor-pointer"
          onClick={scrollRight}
        />
      </div>
    </section>
  );
};

export default Services;
