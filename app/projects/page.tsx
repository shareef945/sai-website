"use client";
import React, { useState } from "react";
import Image from "next/image";
import { GridBackground } from "@/components/GridBackground";
import { Button } from "@/components/ui/button";
import { projects } from "@/config/projects";
import { ArrowUpRight } from "lucide-react";

type FilterType = "all" | "mobile" | "web";

const Projects = () => {
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    return project.type === filter;
  });

  return (
    <>
      <GridBackground size="lg" />
      <div className="relative px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-24 overflow-auto py-4 mt-12 sm:py-6 lg:py-8">
        <div className="text-center w-full lg:w-1/2 mx-auto">
          <h2 className="font-semibold text-3xl sm:text-4xl text-center lg:text-[60px] text-white">
            Our Projects
          </h2>
          <p className="text-base sm:text-lg text-[#898989] text-center ml-16 lg:w-2/3 pt-2 sm:pt-3 lg:pt-4 pb-6 sm:pb-8 lg:pb-12">
            At SAI Technology, we take pride in delivering innovative and
            impactful projects that drive transformation across industries.
          </p>
        </div>

        <div className="mb-[28px] flex justify-start gap-1">
          {["All", "Mobile App", "Web App"].map((type) => (
            <button
              key={type}
              onClick={() =>
                setFilter(
                  type.toLowerCase().includes("mobile")
                    ? "mobile"
                    : type.toLowerCase().includes("web")
                    ? "web"
                    : "all"
                )
              }
              className={`text-sm transition-colors px-4 py-2 rounded-sm ${
                (type === "All" && filter === "all") ||
                (type === "Mobile App" && filter === "mobile") ||
                (type === "Web App" && filter === "web")
                  ? "text-white bg-[#232323]"
                  : "text-zinc-600 hover:text-zinc-400 bg-[#191919]"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="space-y-4 sm:space-y-6 z-50 lg:space-y-8">
          {filteredProjects.map((project, index) => (
            <div key={project.number}>
              <div className="min-h-[24rem] sm:min-h-[32rem] lg:h-[47rem]">
                {/* Mobile Layout */}
                <div className="flex flex-col lg:hidden h-full">
                  <div className="w-full border-[#ffffff0a] h-full bg-[#191919] border flex flex-col justify-between mb-4">
                    <div className="flex-1 bg-[#191919] p-4 text-2xl sm:text-3xl text-secondary">
                      {project.number}.
                    </div>
                    <div className="h-[20rem] sm:h-[24rem] relative">
                      <Image
                        src={project.imageSrc}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority={true}
                      />
                    </div>
                  </div>
                  <div className="w-full border-[#ffffff0a] h-full bg-[#191919] border">
                    <div className="h-full flex flex-col justify-between p-4 sm:p-5">
                      <h3 className="text-3xl sm:text-4xl text-white/60 font-semibold whitespace-normal">
                        {project.title}
                      </h3>
                      <div className="space-y-3 sm:space-y-4">
                        <p className="text-base sm:text-lg">{project.date}</p>
                        <p className="text-secondary text-base sm:text-lg">
                          {project.body}
                        </p>
                        <div className="flex justify-between">
                          <div className="flex gap-3 flex-wrap">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-4 py-1.5 rounded-sm bg-black/20 backdrop-blur-sm text-gray-300 text-sm font-medium"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <Button
                            asChild
                            variant="outline"
                            size="icon"
                            className="rounded-full  bg-[#E86C3A] hover:bg-[#E86C3A]/90 text-white border-none"
                          >
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ArrowUpRight className="h-[30px] w-[30px]" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden lg:flex flex-row h-full">
                  {index % 2 === 0 ? (
                    <>
                      <div className="w-3/4 border-[#ffffff0a] h-full bg-[#191919] mr-6 border flex flex-col justify-between">
                        <div className="flex-1 bg-[#191919] p-6 text-[40px] text-secondary">
                          {project.number}.
                        </div>
                        <div className="h-[38.125rem] relative">
                          <Image
                            src={project.imageSrc}
                            alt={project.title}
                            fill
                            className="object-cover"
                            priority={true}
                          />
                        </div>
                      </div>
                      <div className="w-1/4 border-[#ffffff0a] h-full bg-[#191919] border">
                        <div className="h-full flex flex-col justify-between p-6">
                          <h3 className="text-[54px] text-white/60 font-semibold whitespace-normal">
                            {project.title}
                          </h3>
                          <div className="space-y-4">
                            <p className="text-lg">{project.date}</p>
                            <p className="text-secondary text-lg">
                              {project.body}
                            </p>
                            <div className="flex justify-between">
                              <div className="flex gap-3 flex-wrap">
                                {project.tags.map((tag) => (
                                  <span
                                    key={tag}
                                    className="px-4 py-1.5 rounded-sm bg-black/20 backdrop-blur-sm text-gray-300 text-sm font-medium"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                              <Button
                                asChild
                                variant="outline"
                                size="icon"
                                className="rounded-full w-[50px] h-[50px] aspect-square bg-[#E86C3A] hover:bg-[#E86C3A]/90 text-white border-none"
                              >
                                <a
                                  href={project.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <ArrowUpRight className="h-[30px] w-[30px]" />
                                </a>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="w-1/4 border-[#ffffff0a] h-full bg-[#191919] border">
                        <div className="h-full flex flex-col justify-between p-6">
                          <h3 className="text-[54px] text-white/60 font-semibold break-all whitespace-normal">
                            {project.title}
                          </h3>
                          <div className="space-y-4">
                            <p className="text-lg">{project.date}</p>
                            <p className="text-secondary text-lg">
                              {project.body}
                            </p>
                            <div className="flex justify-between">
                              <div className="flex gap-3 flex-wrap">
                                {project.tags.map((tag) => (
                                  <span
                                    key={tag}
                                    className="px-4 py-1.5 rounded-sm bg-black/20 backdrop-blur-sm text-gray-300 text-sm font-medium"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                              <Button
                                asChild
                                variant="outline"
                                size="icon"
                                className="rounded-full w-[50px] h-[50px] aspect-square bg-[#E86C3A] hover:bg-[#E86C3A]/90 text-white border-none"
                              >
                                <a
                                  href={project.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <ArrowUpRight className="h-[30px] w-[30px]" />
                                </a>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-3/4 border-[#ffffff0a] h-full bg-[#191919] ml-6 border flex flex-col justify-between">
                        <div className="flex-1 bg-[#191919] p-6 text-[40px] text-secondary">
                          {project.number}.
                        </div>
                        <div className="h-[38.125rem] relative">
                          <Image
                            src={project.imageSrc}
                            alt={project.title}
                            fill
                            className="object-cover"
                            priority={true}
                          />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
