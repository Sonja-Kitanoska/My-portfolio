import React from "react";
import { HeaderProps } from "./Header";
import Link from "next/link";

const Navbar = ({ pages }: HeaderProps) => {
  return (
    <nav className="flex gap-10 items-center">
      {pages.map((page) => (
        <Link
          className="
      "
          href={`#${page.label}`}
          key={page.id}
        >
          {page.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
