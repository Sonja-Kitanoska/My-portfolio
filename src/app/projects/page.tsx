"use client";
import React from "react";
import { projects } from "../data/data";

import { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";
import SingleProject from "../components/SingleProject";
import styles from "./Projects.module.css";

// type ProjectType = {
//   title: string;
//   body1: string;
//   body2: string;
//   image: object;
//   links: { text: string; url: string }[];
// }[];

const Projects = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  return (
    <main className="w-full min-h-screen flex flex-col p-12 mt-8 justify-center">
      <h1 className="text-2xl  self-center">My Projects</h1>

      <div>
        <ReactSimplyCarousel
          activeSlideIndex={activeSlideIndex}
          onRequestChange={setActiveSlideIndex}
          itemsToShow={1}
          itemsToScroll={1}
          forwardBtnProps={{
            //here you can also pass className, or any other button element attributes
            style: {
              alignSelf: "center",
              background: "black",
              border: "none",
              borderRadius: "50%",
              color: "white",
              cursor: "pointer",
              fontSize: "20px",
              height: 30,
              lineHeight: 1,
              textAlign: "center",
              width: 30,
            },
            children: <span>{`>`}</span>,
          }}
          backwardBtnProps={{
            //here you can also pass className, or any other button element attributes
            style: {
              alignSelf: "center",
              background: "black",
              border: "none",
              borderRadius: "50%",
              color: "white",
              cursor: "pointer",
              fontSize: "20px",
              height: 30,
              lineHeight: 1,
              textAlign: "center",
              width: 30,
            },
            children: <span>{`<`}</span>,
          }}
          responsiveProps={[
            {
              itemsToShow: 1,
              itemsToScroll: 1,
              minWidth: 768,
            },
          ]}
          speed={400}
          easing="linear"
        >
          {projects.map((project) => (
            <div className="flex w-96 h-96">
              <SingleProject project={project}></SingleProject>
            </div>
          ))}
        </ReactSimplyCarousel>
      </div>
    </main>
  );
};

export default Projects;
