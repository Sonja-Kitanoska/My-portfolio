import { Dancing_Script } from "next/font/google";
import Link from "next/link";
import React from "react";

type HeaderProps = {
  name: string;
  pages: {
    id: number;
    label: string;
    link: string;
  }[];
};
const dancingScript = Dancing_Script({ subsets: ["latin"], weight: "400" });
const Header = ({ name, pages }: HeaderProps) => {
  return (
    <header className="top-0 right-0 left-0 fixed border border-b-grey shadow-lg bg-white">
      <div className="flex justify-between items-center mx-20 mt-2 mb-2 bg-white z-10">
        <div className="flex flex-col items-center">
          <h1 className="text-xl">{name}</h1>
          <p className={`${dancingScript.className} text-xl -mt-1.5`}>
            Developer
          </p>
        </div>
        <nav className="flex gap-10 px-3 pt-3 justify-items-end">
          {pages.map((page) => (
            <Link
              href={page.link}
              key={page.id}
              className=" hover:underline underline-offset-2 hover:scale-105"
            >
              {page.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
