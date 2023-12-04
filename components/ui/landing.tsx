import React from "react";
import { Button } from "./button";
import Image from "next/image";
import brain from "../../public/brain.png";

const Landing = () => {
  return (
    <main className="flex h-screen items-center px-4 md:px-20" id="home">
      <div className="flex flex-col md:flex-row gap-4 w-full">
        <div className="flex flex-col gap-10 py-4">
          <p className="text-3xl md:text-5xl font-extralight">
            We <span className="font-bold text-[#741f28]">design</span> and
            <span className="font-bold text-[#741f28]"> build</span> solutions
          </p>
          <p className="text-base md:text-lg font-light text-gray-500">
            Accelerate your digital transformation and stay ahead of the
            competition with our proven expertise in delivering cutting-edge
            solutions for a wide range of industries.
          </p>
          <Button className="w-max">Submit a request</Button>
        </div>
        <div className="flex justify-center md:justify-start">
          <Image src={brain} width={850} height={850} alt="picture of brain" />
        </div>
      </div>
    </main>
  );
};

export default Landing;