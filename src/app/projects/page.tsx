"use client";
import React from "react";
import { projects } from "../data/data";

import { useState } from "react";
import SingleProject from "../components/SingleProject";

import { AnimatePresence, motion } from "framer-motion";
import { StaticImageData } from "next/image";

export type ProjectType = {
  id: number;
  title: string;
  body1: string;
  body2: string;
  image: StaticImageData;
  links: { text: string; url: string }[];
};

const variants = {
  initial: (direction: number) => {
    return {
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    };
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    },
  },
  exit: (direction: number) => {
    return {
      x: direction > 0 ? -200 : 200,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    };
  },
};

const Projects = () => {
  const [index, setIndex] = useState(0);
  const [project, setProject] = useState<ProjectType>(projects[0]);
  const [direction, setDirection] = useState(0);

  const prevStep = () => {
    setDirection(1);
    if (index === 0) {
      setIndex(projects.length - 1);
      setProject(projects[projects.length - 1]);
      return;
    }
    setIndex(index - 1);
    setProject(projects[index - 1]);
  };
  const nextStep = () => {
    setDirection(-1);
    if (index === projects.length - 1) {
      setIndex(0);
      setProject(projects[0]);
      return;
    }
    setIndex(index + 1);
    setProject(projects[index + 1]);
  };

  return (
    <main className="min-h-screen justify-center align-items-center p-6 md:p-14">
      <h1 className=" text-white text-3xl self-center text-center mt-32 mb-2 font-black">
        My Projects{" "}
      </h1>
      <div className="w-full min-h-screen relative flex align-items-center justify-items-center mt-2">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            animate="animate"
            initial="initial"
            exit="exit"
            className="absolute top-0 left-0 right-0 bottom-0 h-screen"
          >
            <SingleProject {...project}></SingleProject>
          </motion.div>
        </AnimatePresence>
        <button
          onClick={() => {
            prevStep();
          }}
          className="button absolute -left-4 top-0  -scale-x-100 bg-blue"
        >
          ‣
        </button>
        <button
          onClick={() => {
            nextStep();
          }}
          className="button top-0 -right-4 bg-blue"
        >
          ‣
        </button>
      </div>
    </main>
  );
};

export default Projects;
