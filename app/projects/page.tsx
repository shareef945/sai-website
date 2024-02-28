import ProjectCard from "@/components/ui/project-card";
import React from "react";
import { projects } from "@/config/projects";
import Footer from "@/components/ui/footer";

const Projects = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center py-40 md:px-40 px-10 gap-20">
        {projects.map((project) => (
          <ProjectCard
            title={project.title}
            key={project.title}
            body={project.body}
            imageSrc={project.imageSrc}
            link={project.link}
            tags={project.tags}
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Projects;
