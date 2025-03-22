"use client";

import React, { useState } from "react";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import { RiSingleQuotesL, RiSingleQuotesR } from "react-icons/ri";

const CustomerReviews = () => {
  const reviews = [
    {
      comment:
        "SAI Technology has demonstrated exceptional adaptability and professionalism in their collaboration with us. They consistently meet heightened demands with commendable resilience and efficiency. Our engagement has been notably productive and gratifying.",
      name: "Ebo Bentsil",
      role: "CEO Lucid Array",
    },
    {
      comment:
        "Your web service is truly exceptional! The intuitive interface makes navigation a breeze, and the array of features available exceeded my expectations. I've been impressed by the reliability and responsiveness of your customer support team whenever I've had questions. Keep up the fantastic work!",
      name: "Edwin Poku",
      role: "CEO Furddle",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevText = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const handleNextText = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="flex h-auto flex-col items-center justify-center py-20 md:h-1/2 md:flex-row">
      <div className="mb-10 hidden w-full justify-center md:mb-0 md:flex md:w-1/5">
        <CiCircleChevLeft
          size="3.5em"
          color="#741f28"
          className="cursor-pointer"
          onClick={handlePrevText}
        />
      </div>
      <div className="flex w-full justify-center">
        <div className="flex w-full flex-col items-center gap-6 py-20 md:w-3/5">
          <div className="h-2 w-20 bg-[#741f28]"></div>
          <p className="text-center text-3xl font-extralight">
            Why customers love
          </p>
          <p className="text-center text-3xl font-bold text-[#741f28]">
            working with us
          </p>
          <div className="flex w-full flex-col md:flex-row">
            <div className="hidden w-full justify-center md:flex md:w-1/5">
              <RiSingleQuotesL color="#741f28" size="4em" />
            </div>
            <p className="px-4 text-center text-lg text-[#898989] md:px-0 md:pt-20">
              {reviews[currentIndex].comment}
            </p>
            <div className="hidden w-full justify-center md:flex md:w-1/5">
              <RiSingleQuotesR color="#741f28" size="4em" />
            </div>
          </div>
          <div className="items-center justify-center pt-10 text-center">
            <p className="text-xl font-bold text-[#741f28] md:text-3xl">
              {reviews[currentIndex].name}
            </p>
            <p className="text-sm font-light text-[#898989] md:text-base">
              {reviews[currentIndex].role}
            </p>
          </div>
        </div>
      </div>
      <div className="mb-10 hidden w-full justify-center md:mb-0 md:flex md:w-1/5">
        <CiCircleChevRight
          size="3.5em"
          color="#741f28"
          className="cursor-pointer"
          onClick={handleNextText}
        />
      </div>
    </section>
  );
};

export default CustomerReviews;
