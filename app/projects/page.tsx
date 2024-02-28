import ProjectCard from "@/components/ui/project-card";
import React from "react";
import { projects } from "@/config/projects";
import Footer from "@/components/ui/footer";
import { dateToComparableNumber } from "@/utils/utils";

const Projects = () => {
  const sortedProjects = [...projects].sort(
    (a, b) => dateToComparableNumber(b.date) - dateToComparableNumber(a.date)
  );

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center py-40 md:px-40 px-10 gap-20">
        {sortedProjects.map((project) => (
          <ProjectCard
            title={project.title}
            key={project.title}
            body={project.body}
            imageSrc={project.imageSrc}
            link={project.link}
            tags={project.tags}
            date={project.date}
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Projects;
