import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

import type { ProjectType } from "../../app/projects/page";

const SingleProject: React.FC<ProjectType> = (project) => {
  const { id, title, body1, image, links } = project;
  return (
    <article
      key={project.id}
      className="flex w-full rounded-lg border border-solid border-black bg-zinc-300 shadow-black shadow-xl p-9
   "
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

        <div className="flex gap-2 self-start mt-3">
          <Link href="https://github.com/Sonja-Kitanoska" target="_blank">
            <button
              type="button"
              className="rounded-full bg-blue text-white font-semibold p-1 px-4 py-1 mt-1"
            >
              Source code
            </button>
          </Link>

          <Link href="https://github.com/Sonja-Kitanoska" target="_blank">
            <button
              type="button"
              className="rounded-full bg-blue text-white font-semibold p-1 px-4 py-1 mt-1"
            >
              Visit the site
            </button>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default SingleProject;
