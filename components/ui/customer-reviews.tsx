import React from "react";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import { RiSingleQuotesL, RiSingleQuotesR } from "react-icons/ri";

const CustomerReviews = () => {
  return (
    <section className="flex h-screen items-center py-20 justify-center">
      <div className="flex w-1/5 justify-center">
        <CiCircleChevLeft
          size="3.5em"
          color="#741f28"
          className="cursor-pointer"
          // onClick={scrollRight}
        />
      </div>
      <div className="flex w-full justify-center h-screen">
        <div className="flex flex-col w-full items-center gap-6 py-20">
          <div className="h-2 bg-[#741f28] w-20 flex"></div>
          <p className="text-3xl font-extralight text-center">
            Why customers love
          </p>
          <p className="font-bold text-[#741f28] text-center text-3xl">
            {" "}
            working with us
          </p>
          <div className="flex w-full ">
            <div className="w-1/5 flex justify-center">
              <RiSingleQuotesL color="#741f28" size="4em" />
            </div>
            <p className="flex justify-center align-middle w-full items-center pt-20 text-center text-lg text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
            <div className="w-1/5 flex justify-center">
              <RiSingleQuotesR color="#741f28" size="4em" />
            </div>
          </div>
          <div className="pt-40">customer images</div>
        </div>
      </div>
      <div className="flex w-1/5 justify-center">
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
