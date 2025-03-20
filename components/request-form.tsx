"use client";
import { Button } from "@/components/ui/button";
import { XIcon } from "lucide-react";

export const RequestForm = () => {
  return (
    <div className="w-full flex flex-col bg-[#151515] text-white">
      <div className="flex justify-between items-start p-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">
          Let&apos;s bring your vision to Life.
        </h2>
        <button className="z-20">
          <XIcon className="w-6 h-6" />
        </button>
      </div>

      <div className="space-y-6 px-4 pb-6">
        <div>
          <label className="block text-[#898989] text-sm mb-2">
            First Name
          </label>
          <input
            type="text"
            className="w-full bg-transparent border-b-2 border-[#ea5c1c] pb-2 focus:outline-none text-white"
          />
        </div>

        <div>
          <label className="block text-[#898989] text-sm mb-2">Last Name</label>
          <input
            type="text"
            className="w-full bg-transparent border-b-2 border-[#ea5c1c] pb-2 focus:outline-none text-white"
          />
        </div>

        <div>
          <label className="block text-[#898989] text-sm mb-2">
            Email Address
          </label>
          <input
            type="email"
            className="w-full bg-transparent border-b-2 border-[#ea5c1c] pb-2 focus:outline-none text-white"
          />
        </div>

        <div>
          <label className="block text-[#898989] text-sm mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            className="w-full bg-transparent border-b-2 border-[#ea5c1c] pb-2 focus:outline-none text-white"
          />
        </div>

        <div>
          <label className="block text-[#898989] text-sm mb-2">Service</label>
          <div className="relative">
            <select className="w-full bg-transparent border-b-2 border-[#ea5c1c] pb-2 focus:outline-none appearance-none text-[#898989]">
              <option>Please select service</option>
            </select>
            <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6L8 10L12 6"
                  stroke="#898989"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-[#898989] text-sm mb-2">Budget</label>
          <div className="relative">
            <select className="w-full bg-transparent border-b-2 border-[#ea5c1c] pb-2 focus:outline-none appearance-none text-[#898989]">
              <option>Please select budget</option>
            </select>
            <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6L8 10L12 6"
                  stroke="#898989"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="pt-6">
          <Button className="bg-[#ea5c1c] hover:bg-[#ea5c1c]/90 text-white px-6 py-3 rounded-none w-full h-auto">
            Submit a request
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RequestForm;
