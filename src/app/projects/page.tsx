"use client";
import React, { useRef } from "react";
import { projects } from "../data/data";

import { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";
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
    // transition: "ease-in",
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
// initial: (direction: number) => {
//   return {
//     x: direction > 0 ? 200 : -200,
//     opacity: 0,
//   };
// },
// animate: {
//   zIndex: 1,
//   x: 0,
//   opacity: 1,
// },
// exit: (direction: number) => {
//   return {
//     zIndex: 0,
//     x: direction < 0 ? 200 : -200,
//     opacity: 0,
//   };

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

// const Projects = () => {
//   const [activeSlideIndex, setActiveSlideIndex] = useState(0);

//   return (
//     <main className="w-full min-h-screen flex flex-col p-12 mt-8 justify-center">
//       <h1 className="text-white text-3xl self-center mb-5 font-black">
//         My Projects
//       </h1>
//       <div>
//         <ReactSimplyCarousel
//           activeSlideIndex={activeSlideIndex}
//           onRequestChange={setActiveSlideIndex}
//           itemsToShow={1}
//           itemsToScroll={1}
//           forwardBtnProps={{
//             //here you can also pass className, or any other button element attributes
//             style: {
//               alignSelf: "center",
//               background: "black",
//               border: "none",
//               borderRadius: "50%",
//               color: "white",
//               cursor: "pointer",
//               fontSize: "20px",
//               height: 30,
//               lineHeight: 1,
//               textAlign: "center",
//               width: 30,
//             },
//             children: <span>{`>`}</span>,
//           }}
//           backwardBtnProps={{
//             //here you can also pass className, or any other button element attributes
//             style: {
//               alignSelf: "center",
//               background: "black",
//               border: "none",
//               borderRadius: "50%",
//               color: "white",
//               cursor: "pointer",
//               fontSize: "20px",
//               height: 30,
//               lineHeight: 1,
//               textAlign: "center",
//               width: 30,
//             },
//             children: <span>{`<`}</span>,
//           }}
//           responsiveProps={[
//             {
//               itemsToShow: 1,
//               itemsToScroll: 1,
//               minWidth: 768,
//             },
//           ]}
//           speed={400}
//           easing="linear"
//         >
//           {projects.map((project) => (
//             <div className="articleSize">
//               <SingleProject project={project}></SingleProject>
//             </div>
//           ))}
//         </ReactSimplyCarousel>
//       </div>
//     </main>
//   );
// };

export default Projects;
