import React from "react";
import CustomerLogos from "./customer-logos";

const Clients = () => {
  return (
    <div className="flex flex-col">
      <section className="h-screen flex">
        <div className="grid grid-cols-2 px-20 py-40 gap-10">
          <div className="flex flex-col gap-10">
            <div className="h-2 bg-[#741f28] w-20"></div>
            <p className="text-5xl font-extralight">
              Leading companies trust us
              <span className="font-bold text-[#741f28]">
                {" "}
                to develop software
              </span>
            </p>
            <p className="font-extralight text-justify">
              We add development capacity to tech teams. Our value isn’t limited
              to building teams but is equally distributed across the project
              lifecycle. We are a custom software development company that
              guarantees the successful delivery of your project.
            </p>
            <p className="text-[#741f28]">See more Information</p>
          </div>
          <div>
            <div className="bg-gray-200 h-full w-full">video</div>
          </div>
        </div>
      </section>
      <div className="px-20 pb-10 flex">
        <div className="flex flex-col gap-10">
          <div className="h-2 bg-[#741f28] w-20"></div>
          <p className="text-3xl font-extralight">
            Meet the people
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
          ]}
        />
      </div>
    </div>
  );
};

export default Clients;
