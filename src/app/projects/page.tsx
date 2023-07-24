"use client";
import React, { useRef } from "react";
import { projects } from "../data/data";

import { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";
import SingleProject from "../components/SingleProject";
import styles from "./Projects.module.css";
import { AnimatePresence, motion } from "framer-motion";

// type ProjectType = {
//   title: string;
//   body1: string;
//   body2: string;
//   image: object;
//   links: { text: string; url: string }[];
// }[];

const Projects = () => {
  const [index, setIndex] = useState(0);
  const [project, setProject] = useState(projects[0]);

  const prevStep = () => {
    if (index === 0) {
      setIndex(projects.length - 1);
      setProject(projects[projects.length - 1]);
      return;
    }
    setIndex(index - 1);
    setProject(projects[index - 1]);
  };
  const nextStep = () => {
    if (index === projects.length - 1) {
      setIndex(0);
      setProject(projects[0]);
      return;
    }
    setIndex(index + 1);
    setProject(projects[index + 1]);
  };

  return (
    <motion.main className="w-full min-h-screen flex flex-col p-12 mt-8 justify-center">
      {" "}
      <h1 className="text-white text-3xl self-center mb-5 font-black">
        My Projects{" "}
      </h1>
      <motion.div className="flex min-w-full overflow-hidden relative w-full">
        <motion.div className="w-full h-full">
          <SingleProject project={project} i={index}></SingleProject>
          <button
            onClick={() => {
              prevStep();
            }}
            className="absolute cursor-pointer top-1/2 left-2 -translate-y-1/2"
          >
            ⬅️
          </button>
          <button
            onClick={() => nextStep()}
            className="absolute cursor-pointer top-1/2 right-2 -translate-y-1/2"
          >
            ➡️
          </button>
        </motion.div>
      </motion.div>
    </motion.main>
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
