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

const Header = ({ name, pages}: HeaderProps) => {
  return (
    <header className="md:h-24 h-28 w-full z-10 bg-white/70 fixed top-0 flex items-center shadow">
      <div className="flex items-center md:justify-between fixed w-full px-24 flex-col md:flex-row">
          <h1 className=" md:text-lg lg:text-xl font-bold text-sky-900 ">
            {name}
          </h1>
      
       <Navbar pages={pages}/>
      </div>
    </header>
  );
};

export default Header;
