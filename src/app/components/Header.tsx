import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <div className="flex justify-between">
        <div className="justify-items-start">
          <h1>Sonja Kitanoska</h1>
          <p className="text-xs">Developer</p>
        </div>
        <nav className="flex gap-3 px-3 pt-3 justify-items-end">
          <Link
            href="/"
            className=" hover:underline underline-offset-2 hover:scale-105"
          >
            Home
          </Link>
          <Link
            href="/about"
            className=" hover:underline underline-offset-2 hover:scale-105"
          >
            About
          </Link>
          <Link
            href="projects"
            className=" hover:underline underline-offset-2 hover:scale-105"
          >
            Projects
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
