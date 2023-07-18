import React from "react";
import { aboutMeData } from "../data/data";

const About = () => {
  return (
    <main>
      <div className="min-h-screen w-full py-20 px-40 mt-20">
        <h1 className="text-3xl font-black text-white">About Me</h1>
        <p className="mt-3 text-smokey"> {aboutMeData.body}</p>
      </div>
    </main>
  );
};

export default About;
