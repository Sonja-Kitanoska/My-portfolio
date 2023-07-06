import React from "react";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="w-full mt-12 py-4 fixed z-10 absolute mb-0 bg-black py-0">
      <div className="flex items-center justify-center gap-1.5">
        <p className="text-white">Connect on:</p>
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
    </footer>
  );
};

export default Footer;
