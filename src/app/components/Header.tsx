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
    <header className="top-0 right-0 left-0 absolute z-20 border-b-2">
      <div className="flex justify-between items-center mx-20 mt-2 mb-2">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl text-blue tracking-tight">{name}</h1>
          <p
            className={`${dancingScript.className} text-xl text-smokey -mt-1.5`}
          >
            Developer
          </p>
        </div>
        <nav className="flex gap-10 px-3 pt-3 justify-items-end">
          {pages.map((page) => (
            <div className="">
              <Link
                className="bg-blue rounded-xl text-white font-medium px-4 py-1 hover:bg-zinc-200 hover:text-black hover:font-medium focus:bg-zinc-200 focus:font-medium focus:text-black active:bg-zinc-200 active:text-black active:font-medium
              "
                href={page.link}
                key={page.id}
                // className=" px-4 py-1 hover:bg-white hover:text-blue-600 hover:rounded-full active:bg-blue-200 active:text-blue-600 focus:bg-white focus:rounded-full
                // focus:text-blue-600"

                // " hover:underline underline-offset-2 hover:scale-105 font-medium"
              >
                {page.label}
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
