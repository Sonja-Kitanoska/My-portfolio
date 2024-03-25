import React from "react";
import { projects } from "../data/data";
import ProjectCard from "./ProjectCard";



const ProjectsCardList = () => {
  return (<div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center justify-around gap-10 p-2 max-w-[1150px] mx-auto">
  {projects.map((project) => (
    <ProjectCard key={Math.random()} {...project}></ProjectCard>
  ))}{" "}
</div>)
  
};

export default ProjectsCardList;
