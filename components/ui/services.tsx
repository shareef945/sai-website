"use client";
import React, { useState, useRef, useEffect } from "react";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import { services } from "@/config/services";
import ServiceCard from "./service-card";

const Services = () => {
  const [position, setPosition] = useState(2);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scrollLeft = () => {
    setPosition((prevPosition) => Math.max(prevPosition - 1, 0));
  };

  const scrollRight = () => {
    setPosition((prevPosition) =>
      Math.min(prevPosition + 1, services.length - 1)
    );
  };
  useEffect(() => {
    if (containerRef.current && cardRefs.current[position]) {
      const cardWidth = cardRefs.current[position]!.offsetWidth;
      const newScrollPosition =
        position * cardWidth -
        containerRef.current.offsetWidth / 2 +
        cardWidth / 2;
      containerRef.current.scrollLeft = newScrollPosition;
    }
  }, [position]);

  return (
    <section
      className="h-[650px] bg-[#BF212E] bg-opacity-5 border-t border-b border-[#741F26] flex flex-col items-center py-8 gap-12 overflow-x-auto"
      id="services"
    >
      <p className="text-2xl md:text-3xl text-[#741F26] font-bold">Services we offer</p>
      <div className="flex overflow-hidden max-w-full" ref={containerRef}>
        <div className="flex">
          {services.map((service, index) => (
            <div ref={(el) => (cardRefs.current[index] = el)} key={index}>
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                headerColor={position === index ? "#741F26" : "black"}
                isSelected={position === index}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between w-full px-8">
        <CiCircleChevLeft
          size="2.5em"
          className="cursor-pointer"
          onClick={scrollLeft}
          color="#741f28"
        />
        <CiCircleChevRight
          size="2.5em"
          className="cursor-pointer"
          onClick={scrollRight}
          color="#741f28"
        />
      </div>
    </section>
  );
};

export default Services;
