import React from "react";
import { aboutMeData } from "../data/data";
import Tools from "../components/Tools";

const About = () => {
  return (
    <main className="px-40 flex flex-col min-h-screen">
      <div className=" w-full mb-10 mt-32">
        <h1 className="text-3xl font-black text-white">About Me</h1>
        <p className="mt-3 text-smokey"> {aboutMeData.body}</p>
        <p className="mt-3 text-smokey"> {aboutMeData.body1}</p>
      </div>
      <Tools />
    </main>
  );
};

export default About;
