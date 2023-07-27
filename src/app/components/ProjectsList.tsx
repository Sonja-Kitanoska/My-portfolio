"use client";
import { projects } from "../../app/data/data";
import SingleProject from "./SingleProject";
import { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";

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
        <SingleProject {...project}></SingleProject>
      ))}{" "}
    </>
  );
};
