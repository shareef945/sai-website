"use client"
import ProjectCard from "@/components/ui/project-card";
import React, { useState } from "react";
import { projects } from "@/config/projects";
import { GridBackground } from "@/components/GridBackground";




type FilterType = "all" | "mobile" | "web"

const Projects = () => {
  const [filter, setFilter] = useState<FilterType>("all")

  const filteredProjects = projects.filter((project:any) => {
    if (filter === "all") return true
    return project.type === filter
  })

  return (
    <>
      <GridBackground size="md"/>
      <div className="relative container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-[4.375rem] font-bold text-white">Our Projects</h2>
          <p className="mx-auto max-w-2xl text-lg text-zinc-400">
            At SAI Technology, we take pride in delivering innovative and impactful projects that drive transformation
            across industries. Here are some of our standout initiatives:
          </p>
        </div>

        <div className="mb-12 flex justify-center gap-8">
          {["All", "Mobile App", "Web App"].map((type) => (
            <button
              key={type}
              onClick={() =>
                setFilter(
                  type.toLowerCase().includes("mobile") ? "mobile" : type.toLowerCase().includes("web") ? "web" : "all",
                )
              }
              className={`text-sm transition-colors ${
                (type === "All" && filter === "all") ||
                (type === "Mobile App" && filter === "mobile") ||
                (type === "Web App" && filter === "web")
                  ? "text-white"
                  : "text-zinc-600 hover:text-zinc-400"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="grid justify-center items-center mx-auto gap-[1.3125rem] md:grid-cols-1 ">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Projects;
