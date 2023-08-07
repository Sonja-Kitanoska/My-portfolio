import React from "react";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="w-screen py-4 z-20 absolute mt-4 mb-0 bg-zinc-300 font-size ">
      <div className="flex flex-col items-center justify-center gap-1.5 w-full">
        <p className="fontSize">Connect on:</p>
        <div className="flex -mt-2">
          <a href="https://github.com/Sonja-Kitanoska" target="_blank">
            <BsGithub className="icons" />
          </a>
          <a
            href="https://www.linkedin.com/in/sonja-kitanoska-986ba8a8/"
            target="_blank"
          >
            <BsLinkedin className="icons" />
          </a>
          <a
            href="https://instagram.com/avramoskamkd?igshid=MmIzYWVlNDQ5Yg=="
            target="_blank"
          >
            <BsInstagram className="icons" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
