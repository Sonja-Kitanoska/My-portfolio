import React from "react";
import { aboutMeData } from "../data/data";

const About = () => {
  return (
    <main>
      <div className="min-h-screen w-full px-40 mt-20">
        <h1 className="">About Me</h1>
        <p className="mt-3"> {aboutMeData.body}</p>
      </div>
    </main>
  );
};

export default About;
