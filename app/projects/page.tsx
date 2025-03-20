"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { GridBackground } from "@/components/GridBackground";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { useProjects } from "@/hooks/use-projects";
import { getDirectusImageUrl } from "@/utils/directus";
import { ProjectsPageError, ProjectsPageLoading } from "@/components/Loading";
import { GridFade } from "@/components/GridFade";

type FilterType = "all" | "mobile" | "web";

const Projects = () => {
  const [filter, setFilter] = useState<FilterType>("all");
  const { projects, isLoading, error } = useProjects();
  const router = useRouter();

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    return project.services?.some((service) =>
      filter === "mobile"
        ? service.toLowerCase().includes("mobile")
        : service.toLowerCase().includes("web")
    );
  });

  // After filtering the projects but before rendering
const sortedProjects = [...filteredProjects].sort((a, b) => {
  return new Date(b.dates).getTime() - new Date(a.dates).getTime();
});

  // Format project number
  const formatProjectNumber = (index: number): string => {
    return (index + 1).toString().padStart(2, "0");
  };

  // Handle card click to navigate to project detail page
  const handleCardClick = (slug: string) => {
    router.push(`/projects/${slug}`);
  };

  if (isLoading) {
    return <ProjectsPageLoading />;
  }
  
  if (error) {
    return <ProjectsPageError error={error} />;
  }

  return (
    <>
      <GridFade size="lg" />
      <div className="relative px-4 font-inter sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-24 overflow-auto py-4 mt-12 sm:py-6 lg:py-8">
        <div className="text-center w-full mx-auto">
          <h2 className="font-semibold text-3xl sm:text-4xl text-center lg:text-[60px] text-white">
            Our Projects
          </h2>
          <p className="text-base sm:text-lg text-[#898989] text-center mx-auto max-w-2xl pt-2 sm:pt-3 lg:pt-4 pb-6 sm:pb-8 lg:pb-12">
            At SAI Technology, we take pride in delivering innovative and
            impactful projects that drive transformation across industries. Here
            are some of our publicly available standout initiatives.
          </p>
        </div>

        {/* Centered filter tabs */}
        <div className="mb-[28px] flex justify-center gap-2">
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
                  ? "text-white bg-[#202020]"
                  : "text-zinc-600 hover:text-zinc-400 bg-[#191919]"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="space-y-4 sm:space-y-6 z-50 lg:space-y-8">
        {sortedProjects.map((project, index) => (
            <div key={project.id}>
              <div className="min-h-[24rem] sm:min-h-[32rem] lg:h-[36rem]">
                {/* Mobile Layout */}
                <div className="flex flex-col border border-[#ffffff0a] lg:hidden h-full">
                  <div
                    className="w-full border-[#ffffff0a] h-full bg-[#191919] border flex flex-col justify-between mb-4 transition-transform duration-300 hover:scale-[1.01] cursor-pointer"
                    onClick={() => handleCardClick(project.slug)}
                  >
                    <div className="flex-1 bg-[#191919] p-4 text-2xl sm:text-3xl text-[#898989]">
                      {formatProjectNumber(index)}.
                    </div>
                    <div className="h-[20rem] sm:h-[24rem] relative">
                      <Image
                        src={
                          getDirectusImageUrl(project.landingMedia) ||
                          "/placeholder.svg"
                        }
                        alt={project.clientName}
                        fill
                        className="object-cover"
                        priority={true}
                      />
                    </div>
                  </div>
                  <div
                    className="w-full border-none h-full bg-[#191919] border transition-transform duration-300 hover:scale-[1.01] cursor-pointer"
                    onClick={() => handleCardClick(project.slug)}
                  >
                    <div className="h-full flex flex-col p-4 sm:p-5 relative">
                      {/* Tags at the top */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.services?.map((tag) => (
                          <span
                            key={tag}
                            className="px-4 py-1.5 rounded-sm bg-[#202020] backdrop-blur-sm text-[#898989] text-sm font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Button in top right of the card - stop propagation to prevent card click */}
                      <div className="absolute top-4 right-4">
                        <Button
                          asChild
                          variant="outline"
                          size="icon"
                          className="rounded-full bg-[#ea5c1c] hover:bg-[#ea5c1c]/90 text-white border-none"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ArrowUpRight className="h-[30px] w-[30px]" />
                          </a>
                        </Button>
                      </div>

                      {/* Client name and description */}
                      <div className="mt-4">
                        <h3 className="text-2xl sm:text-3xl text-white font-semibold mb-3">
                          {project.clientName}
                        </h3>
                        <p className="text-[#898989] text-sm sm:text-base">
                          {project.shortDescription}
                        </p>
                        <p className="text-[#898989] text-sm sm:text-base mt-3">
                          {new Date(project.dates).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden lg:flex flex-row h-full max-w-[1127px] mx-auto group">
                  {index % 2 === 0 ? (
                    <>
                      <div
                        className="w-4/5 border border-[#ffffff0a] h-full bg-[#191919] mr-6  flex flex-col justify-between transition-transform duration-300 group-hover:scale-[1.01] cursor-pointer"
                        onClick={() => handleCardClick(project.slug)}
                      >
                        <div className="flex-1 bg-[#191919] p-6 text-[40px] text-[#898989]">
                          {formatProjectNumber(index)}.
                        </div>
                        <div className="h-[38.125rem] relative">
                          <Image
                            src={
                              getDirectusImageUrl(project.landingMedia) ||
                              "/placeholder.svg"
                            }
                            alt={project.clientName}
                            fill
                            className="object-cover"
                            priority={true}
                          />
                        </div>
                      </div>
                      <div
                        className="w-2/5  h-full bg-[#191919] border border-[#ffffff0a] relative transition-transform duration-300 group-hover:scale-[1.01] cursor-pointer"
                        onClick={() => handleCardClick(project.slug)}
                      >
                        <div className="h-full flex flex-col p-6">
                          {/* Tags at the top */}
                          <div className="flex flex-wrap gap-2 mb-auto">
                            {project.services?.map((tag) => (
                              <span
                                key={tag}
                                className="px-4 py-1.5 rounded-sm bg-[#202020] backdrop-blur-sm text-[#898989] text-sm font-medium"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Button inside the card - stop propagation to prevent card click */}
                          <div className="absolute top-6 right-6">
                            <Button
                              asChild
                              variant="outline"
                              size="icon"
                              className="rounded-full w-[50px] h-[50px] aspect-square bg-[#ea5c1c] hover:bg-[#ea5c1c]/90 text-white border-none transition-transform duration-300 hover:scale-110"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ArrowUpRight className="h-[30px] w-[30px]" />
                              </a>
                            </Button>
                          </div>

                          {/* Client name and description at the bottom */}
                          <div className="mt-auto">
                            <h3 className="text-base uppercase text-white font-normal mb-4">
                              {project.clientName}
                            </h3>
                            <p className="text-[#898989] text-sm">
                              {project.shortDescription}
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div
                        className="w-2/5 border border-[#ffffff0a] h-full font-inter bg-[#191919]  relative transition-transform duration-300 group-hover:scale-[1.01] cursor-pointer"
                        onClick={() => handleCardClick(project.slug)}
                      >
                        <div className="h-full flex flex-col p-6">
                          {/* Tags at the top */}
                          <div className="flex flex-wrap gap-2 mb-auto">
                            {project.services?.map((tag) => (
                              <span
                                key={tag}
                                className="px-4 py-1.5 rounded-sm bg-[#202020] backdrop-blur-sm text-[#898989] text-sm font-medium"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Button inside the card - stop propagation to prevent card click */}
                          <div className="absolute top-6 right-6">
                            <Button
                              asChild
                              variant="outline"
                              size="icon"
                              className="rounded-full w-[50px] h-[50px] aspect-square bg-[#ea5c1c] hover:bg-[#ea5c1c]/90 text-white border-none transition-transform duration-300 hover:scale-110"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ArrowUpRight className="h-[30px] w-[30px]" />
                              </a>
                            </Button>
                          </div>

                          {/* Client name and description at the bottom */}
                          <div className="mt-auto">
                            <h3 className="text-base text-white uppercase font-semibold mb-4">
                              {project.clientName}
                            </h3>
                            <p className="text-[#898989] text-sm">
                              {project.shortDescription}
                            </p>
                            <p className="text-[#898989] text-base mt-4">
                              {new Date(project.dates).toLocaleDateString(
                                "en-US",
                                { year: "numeric", month: "long" }
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="w-4/5 border border-[#ffffff0a] h-full bg-[#191919] ml-6  flex flex-col justify-between transition-transform duration-300 group-hover:scale-[1.01] cursor-pointer"
                        onClick={() => handleCardClick(project.slug)}
                      >
                        <div className="flex-1 bg-[#191919] p-6 text-[40px] text-[#898989]">
                          {formatProjectNumber(index)}.
                        </div>
                        <div className="h-[38.125rem] relative">
                          <Image
                            src={
                              getDirectusImageUrl(project.landingMedia) ||
                              "/placeholder.svg"
                            }
                            alt={project.clientName}
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
