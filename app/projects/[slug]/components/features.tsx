import React from "react";
import { getDirectusImageUrl } from "@/utils/directus";

const ProjectFeatures: React.FC<any> = ({ project }) => {
  return (
    <div className="w-full text-white">
      <div className="w-full  md:px-[180px] py-16 md:py-24">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Key Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-[21px]">
          {/* First row - first item with flex row layout */}
          <div className="md:col-span-8 bg-neutral-900 p-6 rounded-lg min-h-[300px]">
            <div className="h-full flex flex-col md:flex-row items-center">
              <div className="flex-1">
                <h3 className="text-base font-semibold mb-2">
                  Unified Dashboard
                </h3>
                <p className="text-[#898989] text-sm">
                  A centralized interface for ticket booking, tracking, and
                  fleet management.
                </p>
              </div>
              <div className="flex-1">
                {project.feature1Img && (
                  <img
                    src={getDirectusImageUrl(project.feature1Img)}
                    alt="Unified Dashboard"
                    className="w-full h-auto"
                  />
                )}
              </div>
            </div>
          </div>

          {/* First row - second item */}
          <div className="md:col-span-4 bg-neutral-900 rounded-lg min-h-[300px] overflow-hidden">
            <div className="p-6 pb-0">
              <h3 className="text-base font-semibold mb-2">
                Quick Ticket Purchase
              </h3>
              <p className="text-[#898989] text-sm">
                Integrated one-click ticketing with secure payment options.
              </p>
            </div>
            <div className="mt-4">
              {project.feature2Img && (
                <img
                  src={getDirectusImageUrl(project.feature2Img)}
                  alt="Quick Ticket Purchase"
                  className="w-full h-[218px] object-cover"
                />
              )}
            </div>
          </div>

          {/* Bottom row */}
          <div className="md:col-span-4 bg-neutral-900 rounded-lg overflow-hidden">
            <div className="p-6 pb-0">
              <h3 className="text-base font-semibold mb-2">
                Real-Time Tracking
              </h3>
              <p className="text-[#898989] text-sm">
                Interactive maps displaying vehicle locations and estimated
                arrival times.
              </p>
            </div>
            <div className="mt-4">
              {project.feature3Img && (
                <img
                  src={getDirectusImageUrl(project.feature3Img)}
                  alt="Real-Time Tracking"
                  className="md:w-[369px] w-full h-[218px] object-cover"
                />
              )}
            </div>
          </div>

          <div className="md:col-span-4 bg-neutral-900 rounded-lg overflow-hidden">
            <div className="p-6 pb-0">
              <h3 className="text-base font-semibold mb-2">
                Customizable Tools
              </h3>
              <p className="text-[#898989] text-sm">
                Vehicle scheduling, maintenance tracking, and logistics planning
                tailored to operator needs.
              </p>
            </div>
            <div className="mt-4">
              {project.feature4Img && (
                <img
                  src={getDirectusImageUrl(project.feature4Img)}
                  alt="Customizable Tools"
                  className="md:w-[369px] w-full h-[218px] object-cover"
                />
              )}
            </div>
          </div>

          <div className="md:col-span-4 bg-neutral-900 rounded-lg overflow-hidden">
            <div className="p-6 pb-0">
              <h3 className="text-base font-semibold mb-2">
                Multi-Language Support
              </h3>
              <p className="text-[#898989] text-sm">
                Accessible to diverse user bases with support for multiple
                languages.
              </p>
            </div>
            <div className="mt-4">
              {project.feature5Img && (
                <img
                  src={getDirectusImageUrl(project.feature5Img)}
                  alt="Multi-Language Support"
                  className="md:w-[369px] w-full h-[218px] object-cover"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectFeatures;
