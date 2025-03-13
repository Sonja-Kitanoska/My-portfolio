"use client";
import { HeaderProps } from "./Header";
import Link from "next/link";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";
import { useThemeContext } from "../contexts/ThemeContext";

const Navbar = ({ pages }: HeaderProps) => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <nav className="flex gap-10 items-center">
      {pages.map((page) => (
        <Link
          className="text-gray-700 hover:text-blue-500 active:text-blue-500"
          href={`#${page.label}`}
          key={page.id}
        >
          {page.label}
        </Link>
      ))}

      {theme === "light" ? (
        <BsToggleOff
          onClick={toggleTheme}
          size={24}
          className="cursor-pointer"
        />
      ) : (
        <BsToggleOn
          onClick={toggleTheme}
          size={24}
          className="cursor-pointer text-black"
        />
      )}
    </nav>
  );
};

export default Navbar;
