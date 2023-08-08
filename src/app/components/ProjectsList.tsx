"use client";
import { projects } from "../../app/data/data";
import SingleProject from "./SingleProject";

type ProjectType = {
  title: string;
  body1: string;
  body2: string;
  image: object;
  links: { text: string; url: string }[];
};

export const ProjectsList = () => {
  return (
    <>
      {projects.map((project) => (
        <SingleProject key={Math.random()} {...project}></SingleProject>
      ))}{" "}
    </>
  );
};
