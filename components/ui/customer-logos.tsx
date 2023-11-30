'use client'
//TODO: fix autoscroll

import React, { useEffect, useRef } from "react";
import Image from "next/image";

interface CustomerLogosProps {
  imagePaths: string[];
}

const CustomerLogos: React.FC<CustomerLogosProps> = ({ imagePaths }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>();

  const scrollCarousel = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 3, behavior: "smooth" });
      requestRef.current = requestAnimationFrame(scrollCarousel);
    }
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(scrollCarousel);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return (
    <>
      <div ref={carouselRef} className="flex overflow-x-auto whitespace-nowrap gap-20 items-center hide-scrollbar">
        {imagePaths.map((imagePath, index) => (
          <Image
            key={index}
            src={imagePath}
            width={80}
            height={80}
            alt={`Customer logo ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
};

export default CustomerLogos;