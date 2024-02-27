import React from "react";
import RecentProjectCard from "./recent-project-card";
import { projects } from "@/config/projects";
import { dateToComparableNumber } from "@/utils/utils";

const RecentProjects = () => {
  const sortedProjects = [...projects]
    .sort(
      (a, b) => dateToComparableNumber(b.date) - dateToComparableNumber(a.date)
    )
    .slice(0, 3);
  return (
    <div className="h-full border-b border-t border-[#741F26] bg-[#BF212E] bg-opacity-5 pb-20">
      <div className="flex flex-col items-center gap-6 py-20">
        <div className="h-2 w-20 bg-[#741f28]"></div>
        <p className="text-center text-3xl font-extralight">Our recent</p>
        <p className="text-center text-3xl font-bold text-[#741f28]">
          Projects
        </p>
      </div>
      {sortedProjects.map((project) => (
        <RecentProjectCard
          key={project.link}
          title={project.title}
          body={project.body}
          link={project.link}
          imageSrc={project.imageSrc}
        />
      ))}
    </div>
  );
};

export default RecentProjects;
