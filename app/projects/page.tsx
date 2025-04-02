"use client";
import { useState, useEffect } from "react";
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
import { motion } from "framer-motion";

type FilterType = "all" | "mobile" | "web";

const Projects = () => {
  const [filter, setFilter] = useState<FilterType>("all");
  const { projects, isLoading, error } = useProjects();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  // Set isClient to true once component mounts to avoid hydration issues
  useEffect(() => {
    setIsClient(true);
  }, []);

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

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  // Only render animations on client-side to avoid hydration issues
  if (!isClient) {
    return <ProjectsPageLoading />;
  }

  return (
    <>
      <GridFade size="lg" />
      <div className="relative px-4 font-inter sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-24 overflow-auto py-4 mt-12 sm:py-6 lg:py-8">
        <motion.div 
          className="text-center w-full mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-semibold text-3xl sm:text-4xl text-center lg:text-[60px] text-white">
            Our Projects
          </h2>
          <p className="text-base sm:text-lg text-[#898989] text-center mx-auto max-w-2xl pt-2 sm:pt-3 lg:pt-4 pb-6 sm:pb-8 lg:pb-12">
            At SAI Technology, we take pride in delivering innovative and
            impactful projects that drive transformation across industries. Here
            are some of our publicly available standout initiatives.
          </p>
        </motion.div>

        {/* Centered filter tabs */}
        <motion.div 
          className="mb-[28px] flex justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          {["All", "Mobile App", "Web App"].map((type) => (
            <motion.button
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
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {type}
            </motion.button>
          ))}
        </motion.div>

        <motion.div 
          className="space-y-4 sm:space-y-6 z-50 lg:space-y-8"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {sortedProjects.map((project, index) => (
            <motion.div 
              key={project.id}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="min-h-[24rem] sm:min-h-[32rem] lg:h-[36rem]">
                {/* Mobile Layout */}
                <div className="flex flex-col border border-[#ffffff0a] lg:hidden h-full">
                  <motion.div
                    className="w-full border-[#ffffff0a] h-full bg-[#191919] border flex flex-col justify-between mb-4 hover:scale-[1.01] cursor-pointer"
                    onClick={() => handleCardClick(project.slug)}
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex-1 bg-[#191919] p-4 text-2xl sm:text-3xl text-[#898989]">
                      {formatProjectNumber(index)}.
                    </div>
                    <div className="h-[20rem] sm:h-[24rem] relative overflow-hidden">
                      <motion.div 
                        className="w-full h-full"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                      >
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
                      </motion.div>
                    </div>
                  </motion.div>
                  <motion.div
                    className="w-full border-none h-full bg-[#191919] border hover:scale-[1.01] cursor-pointer"
                    onClick={() => handleCardClick(project.slug)}
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="h-full flex flex-col p-4 sm:p-5 relative">
                      {/* Tags at the top */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.services?.map((tag, tagIndex) => (
                          <motion.span
                            key={tag}
                            className="px-4 py-1.5 rounded-sm bg-[#202020] backdrop-blur-sm text-[#898989] text-sm font-medium"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * tagIndex, duration: 0.3 }}
                          >
                            {tag}
                          </motion.span>
                        ))}
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
                  </motion.div>
                </div>

                {/* Desktop Layout */}
                <motion.div 
                  className="hidden lg:flex flex-row h-full max-w-[1127px] mx-auto group"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {index % 2 === 0 ? (
                    <>
                      <motion.div
                        className="w-4/5 border border-[#ffffff0a] h-full bg-[#191919] mr-6 flex flex-col justify-between cursor-pointer"
                        onClick={() => handleCardClick(project.slug)}
                        whileHover={{ y: -8, boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.2)" }}
                        transition={{ duration: 0.4 }}
                      >
                        <div className="flex-1 bg-[#191919] p-6 text-[40px] text-[#898989]">
                          {formatProjectNumber(index)}.
                        </div>
                        <div className="h-[38.125rem] relative overflow-hidden">
                          <motion.div
                            className="w-full h-full"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.7 }}
                          >
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
                          </motion.div>
                        </div>
                      </motion.div>
                      <motion.div
                        className="w-2/5 h-full bg-[#191919] border border-[#ffffff0a] relative cursor-pointer"
                        onClick={() => handleCardClick(project.slug)}
                        whileHover={{ y: -8, boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.2)" }}
                        transition={{ duration: 0.4 }}
                      >
                        <div className="h-full flex flex-col p-6">
                          {/* Top section with tags and button */}
                          <div className="flex justify-between items-start mb-auto">
                            {/* Tags container */}
                            <div className="flex flex-wrap gap-2">
                              {project.services?.map((tag, tagIndex) => (
                                <motion.span
                                  key={tag}
                                  className="px-4 py-1.5 rounded-sm bg-[#202020] backdrop-blur-sm text-[#898989] text-sm font-medium"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.1 * tagIndex, duration: 0.3 }}
                                >
                                  {tag}
                                </motion.span>
                              ))}
                            </div>

                            {/* Button */}
                            <motion.div
                              whileHover={{ rotate: 15, scale: 1.2 }}
                              transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                            >
                              <Button
                                asChild
                                variant="outline"
                                size="icon"
                                className="rounded-full w-[50px] h-[50px] aspect-square bg-[#ea5c1c] hover:bg-[#ea5c1c]/90 text-white border-none"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <Link
                                  href={project.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <ArrowUpRight className="h-[30px] w-[30px]" />
                                </Link>
                              </Button>
                            </motion.div>
                          </div>

                          {/* Client name and description at the bottom */}
                          <div>
                            <h3 className="text-base uppercase text-white font-normal mb-4">
                              {project.clientName}
                            </h3>
                            <p className="text-[#898989] text-sm">
                              {project.shortDescription}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </>
                  ) : (
                    <>
                      <motion.div
                        className="w-2/5 border border-[#ffffff0a] h-full font-inter bg-[#191919] relative cursor-pointer"
                        onClick={() => handleCardClick(project.slug)}
                        whileHover={{ y: -8, boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.2)" }}
                        transition={{ duration: 0.4 }}
                      >
                        <div className="h-full flex flex-col p-6">
                          {/* Top section with tags and button */}
                          <div className="flex flex-wrap gap-2 mb-auto">
                            {/* Tags container */}
                            <div className="flex flex-wrap gap-2 max-w-[calc(100%-60px)]">
                              {project.services?.map((tag, tagIndex) => (
                                <motion.span
                                  key={tag}
                                  className="px-4 py-1.5 rounded-sm bg-[#202020] backdrop-blur-sm text-[#898989] text-sm font-medium"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.1 * tagIndex, duration: 0.3 }}
                                >
                                  {tag}
                                </motion.span>
                              ))}
                            </div>
                          </div>

                          {/* Button in top right */}
                          <div className="absolute top-6 right-6">
                            <motion.div
                              whileHover={{ rotate: 15, scale: 1.2 }}
                              transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                            >
                              <Button
                                asChild
                                variant="outline"
                                size="icon"
                                className="rounded-full w-[50px] h-[50px] aspect-square bg-[#ea5c1c] hover:bg-[#ea5c1c]/90 text-white border-none"
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
                            </motion.div>
                          </div>

                          {/* Client name and description at the bottom */}
                          <div className="mt-auto">
                            <h3 className="text-base text-white uppercase font-semibold mb-4">
                              {project.clientName}
                            </h3>
                            <p className="text-[#898989] text-sm mb-2">
                              {project.shortDescription}
                            </p>
                            <p className="text-[#898989] text-sm">
                              {new Date(project.dates).toLocaleDateString(
                                "en-US",
                                { year: "numeric", month: "long" }
                              )}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                      <motion.div
                        className="w-4/5 border border-[#ffffff0a] h-full bg-[#191919] ml-6 flex flex-col justify-between cursor-pointer"
                        onClick={() => handleCardClick(project.slug)}
                        whileHover={{ y: -8, boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.2)" }}
                        transition={{ duration: 0.4 }}
                      >
                        <div className="flex-1 bg-[#191919] p-6 text-[40px] text-[#898989]">
                          {formatProjectNumber(index)}.
                        </div>
                        <div className="h-[38.125rem] relative overflow-hidden">
                          <motion.div
                            className="w-full h-full"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.7 }}
                          >
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
                          </motion.div>
                        </div>
                      </motion.div>
                    </>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Projects;