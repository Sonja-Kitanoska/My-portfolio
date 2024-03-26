
import Link from "next/link";
import React from "react";
import { HeaderProps } from "./Header";

const Navbar = ({pages}:HeaderProps) => {
   

  return  (
  <nav className="flex md:gap-10 flex-col md:flex-row items-center">

  {pages.map((page) => (
<a
      className="text-sky-900
      "
      href={`#${page.label}`}
      key={page.id}
 
      
    >
      {page.label}
      </a>
  ))}
  
</nav>
  )
};

export default Navbar;
