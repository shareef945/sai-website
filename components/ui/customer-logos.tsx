"use client";
//TODO: fix autoscroll

import React from "react";
import Image from "next/image";

interface CustomerLogosProps {
  imagePaths: string[];
}

const CustomerLogos: React.FC<CustomerLogosProps> = ({ imagePaths }) => {
  return (
    <div className="flex overflow-x-auto whitespace-nowrap gap-20 px-2 items-center hide-scrollbar">
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
  );
};

export default CustomerLogos;
