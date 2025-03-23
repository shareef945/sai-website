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
import { GridFade } from "@/components/GridFade";
import { ProjectDetailError, ProjectDetailLoading } from "@/components/Loading";
import ProjectTechnologies from "./components/technologies";

interface Params {
  slug: string;
}
interface PageProps {
  params: Promise<Params>;
}

export default function ProjectPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const { project, isLoading, error } = useProjects(resolvedParams.slug);

  if (isLoading) {
    return <ProjectDetailLoading />;
  }

  if (error || !project) {
    return <ProjectDetailError />;
  }
  return (
    <>
      <GridFade size="lg" variant="viewport" />
      <div className="relative z-20">
        <ProjectHeader project={project} />
        <ProjectHero project={project} />
        <ProjectCTA project={project} />
        <ProjectChallenges project={project} />
        <ProjectFeatures project={project} />
        <ProjectGrid project={project} />
        <ProjectResults project={project} />
        <ProjectTechnologies project={project} />
        <ProjectTestimonial project={project} />
      </div>
    </>
  );
}
