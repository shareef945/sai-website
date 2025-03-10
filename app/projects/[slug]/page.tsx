"use client";

import React, { use } from "react";
import { notFound } from "next/navigation";
import { GridBackground } from "@/components/GridBackground";
import { useProjects } from "@/hooks/use-projects";
import ProjectHeader from "./components/header";
import ProjectHero from "./components/hero";
import ProjectChallenges from "./components/challenges";
import ProjectFeatures from "./components/features";
import ProjectResults from "./components/results";
import ProjectTestimonial from "./components/testimonial";
import ProjectCTA from "./components/cta";
import ProjectGrid from "./components/grid";

// Define the shape of the resolved params object
interface Params {
  slug: string;
}

interface PageProps {
  params: Params | Promise<Params>;
}

export default function ProjectPage({ params }: PageProps) {
  // Check if params is a Promise and unwrap it if needed
  const resolvedParams = params instanceof Promise ? use(params) : params;
  const { project, isLoading, error } = useProjects(resolvedParams.slug);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#ea5c1c]"></div>
      </div>
    );
  }

  if (error || !project) {
    return notFound();
  }

  // Format the project date
  const formattedDate = new Date(project.dates).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });

  return (
    <>
      <GridBackground size="lg" />
      <div className="relative z-20">
      <ProjectHeader project={project} />
      <ProjectHero project={project} />
      <ProjectCTA project={project} />
      <ProjectChallenges project={project} />
      <ProjectFeatures project={project} />
      <ProjectGrid project={project} />

      <ProjectResults project={project} />
      <ProjectTestimonial project={project} />
      </div>
    </>
  );
}