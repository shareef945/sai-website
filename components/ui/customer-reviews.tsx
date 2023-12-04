import React from "react";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import { RiSingleQuotesL, RiSingleQuotesR } from "react-icons/ri";

const CustomerReviews = () => {
  return (
    <section className="flex flex-col md:flex-row h-auto md:h-1/2 items-center py-20 justify-center">
      <div className="hidden md:flex w-full md:w-1/5 justify-center mb-10 md:mb-0">
        <CiCircleChevLeft
          size="3.5em"
          color="#741f28"
          className="cursor-pointer"
          // onClick={scrollLeft}
        />
      </div>
      <div className="flex w-full justify-center">
        <div className="flex flex-col w-full md:w-3/5 items-center gap-6 py-20">
          <div className="h-2 bg-[#741f28] w-20"></div>
          <p className="text-3xl font-extralight text-center">
            Why customers love
          </p>
          <p className="font-bold text-[#741f28] text-center text-3xl">
            working with us
          </p>
          <div className="flex w-full flex-col md:flex-row">
          <div className="w-full md:w-1/5 md:flex justify-center hidden">
              <RiSingleQuotesL color="#741f28" size="4em" />
            </div>
            <p className="text-center text-lg text-gray-500 px-4 md:px-0 md:pt-20">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
         
              consequat.
            </p>
            <div className="w-full md:w-1/5 md:flex justify-center hidden">
              <RiSingleQuotesR color="#741f28" size="4em" />
            </div>
          </div>
          <div className="pt-10 items-center justify-center text-center">
            <p className=" text-xl md:text-3xl font-bold text-[#741f28]">Shareef Ali</p>
            <p className="text-sm md:text-base text-gray-500 font-light">CEO SAI Technology</p>
          </div>
        </div>
      </div>
      <div className="hidden md:flex w-full md:w-1/5 justify-center mb-10 md:mb-0">
        <CiCircleChevRight
          size="3.5em"
          color="#741f28"
          className="cursor-pointer"
          // onClick={scrollRight}
        />
      </div>
    </section>
  );
};

export default CustomerReviews;