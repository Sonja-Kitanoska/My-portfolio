import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="w-screen py-4 z-20 absolute font-size">
      <div className="flex flex-col items-center justify-center gap-1.5 w-full">
        <div className="flex -mt-2 text-[#1976D2]">
          <a href="https://github.com/Sonja-Kitanoska" target="_blank">
            <BsGithub className="icons" />
          </a>
          <a
            href="https://www.linkedin.com/in/sonja-kitanoska-986ba8a8/"
            target="_blank"
          >
            <BsLinkedin className="icons" />
          </a>
       
        </div>
      </div>
    </footer>
  );
};

export default Footer;
