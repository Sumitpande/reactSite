import React from "react";
import { PROJECTS as projects } from "../shared/projects";
import ProjectCard from "./Card";

function ProjectsView() {
  return (
    <div class="bg-white dark:bg-gray-800 ">
      <div class="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h4 class="font-extrabold text-black dark:text-white sm:text-4xl">
          <span class="hover:underline hover:underline-offset-[16px] block ">
            Projects
          </span>
        </h4>
      </div>
      <div className="flex flex-wrap p-3 justify-evenly dark:bg-gray-800">
        {projects.map(project => {
          return <ProjectCard project={project} />;
        })}
      </div>
    </div>
  );
}

export default ProjectsView;