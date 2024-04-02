import { Dancing_Script } from "next/font/google";

import React from "react";
import Navbar from "./Navbar";

export type HeaderProps = {
  name?: string;
  pages: {
    id: number;
    label: string;
    link: string;
  }[];
};
const dancingScript = Dancing_Script({ subsets: ["latin"], weight: "400" });

const Header = ({ name, pages }: HeaderProps) => {
  return (
    <header className="md:h-24 h-20 w-full z-10 bg-white/95 fixed top-0 flex items-center">
      <div className="flex items-center md:justify-between fixed w-full px-24 flex-col md:flex-row gap-1">
        <h1
          className={`${dancingScript.className}  lg:text-3xl text-2xl text-[#1976D2]`}
        >
          My Portfolio
        </h1>

        <Navbar pages={pages} />
      </div>
    </header>
  );
};

export default Header;
