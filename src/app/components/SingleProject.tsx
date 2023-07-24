import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// type ProjectType = {
//   title: string;
//   body1: string;
//   body2?: string;
//   image: object;
//   links: { text: string; url: string }[];
// };

const SingleProject = ({ project, i }) => {
  return (
    <article
      key={i}
      className="flex w-screen rounded-lg border border-solid border-black bg-zinc-300 shadow-black shadow-xl p-9 bg-smokey"
    >
      <div className=" flex items-center justify-center w-1/2 ">
        <Image
          priority
          className="w-full object-contain object-center h-48 w-96"
          src={project.image}
          alt="photo of the project"
          width={200}
          height={300}
        />
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center">
        <h2 className="text-xl font-semibold self-start mb-2">
          {project.title}
        </h2>
        <p>{project.body1}</p>

        <div className="flex gap-2 self-start">
          <button className="rounded-lg" type="button">
            <Link href="https://github.com/Sonja-Kitanoska" target="_blank">
              Source code
            </Link>
          </button>
          <button>
            <Link href="https://github.com/Sonja-Kitanoska" target="_blank">
              Visit the site
            </Link>
          </button>
        </div>
      </div>
    </article>
  );
};

export default SingleProject;
