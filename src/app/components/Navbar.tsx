

import React from "react";
import { HeaderProps } from "./Header";

const Navbar = ({pages}:HeaderProps) => {
   

  return  (
  <nav className="flex gap-10 items-center">

  {pages.map((page) => (
<a
      className="
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
