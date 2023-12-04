import React from "react";
import CustomerLogos from "./customer-logos";
import Image from "next/image";

const Clients = () => {
  return (
    <div className="flex flex-col">
      <section className="flex flex-col md:flex-row md:h-screen">
        <div className="flex flex-col px-4 md:px-20 py-10 md:py-40 md:gap-10 w-full md:grid md:grid-cols-2">
          <div className="flex flex-col gap-10 mb-4 md:mb-0">
            <div className="h-2 bg-[#741f28] w-20"></div>
            <p className="text-3xl md:text-5xl font-extralight">
              Leading companies trust us
              <span className="font-bold text-[#741f28]"> to develop software</span>
            </p>
            <p className="font-extralight text-justify">
              We add development capacity to tech teams. Our value isn’t limited
              to building teams but is equally distributed across the project
              lifecycle. We are a custom software development company that
              guarantees the successful delivery of your project.
            </p>
            <p className="text-[#741f28]">See more Information</p>
          </div>
          <div className="w-full h-64 md:h-full relative">
            <Image
              src="/trust.jpg"
              alt="image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
      <div className="px-4 md:px-20 pb-10 flex">
        <div className="flex flex-col gap-10">
          <div className="h-2 bg-[#741f28] w-20"></div>
          <p className="text-3xl font-extralight">
            Meet the people{" "}
            <span className="font-bold text-[#741f28]">
              we&apos;ve worked with
            </span>
          </p>
        </div>
      </div>
      <div className="h-[200px] bg-[#BF212E] bg-opacity-5 border-t border-b border-[#741F26] flex items-center py-8 gap-12 overflow-x-auto justify-center">
        <CustomerLogos
          imagePaths={[
            "/customer-logos/boxbites.png",
            "/customer-logos/drigano.png",
            "/customer-logos/furddle.png",
            "/customer-logos/mastercard.png",
            "/customer-logos/munchies.png",
            "/customer-logos/sensory-play.png",
            "/customer-logos/softtribe.png",
            "/customer-logos/lucidarray.png",
          ]}
        />
      </div>
    </div>
  );
};

export default Clients;