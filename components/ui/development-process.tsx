import React from "react";
import DevProcessCard from "./development-process-cards";
import { items } from "../../config/dev-process";

const DevelopmentProcess = () => {
  return (
    <section className="h-screen flex flex-col py-20">
      <div className="flex flex-col items-center gap-6">
        <div className="h-2 bg-[#741f28] w-20 flex"></div>
        <p className="text-3xl font-extralight text-center">How development</p>
        <p className="font-bold text-[#741f28] text-center text-3xl">
          with SAI works
        </p>
      </div>
      <div>
        <DevProcessCard items={items} />
      </div>
    </section>
  );
};

export default DevelopmentProcess;
