import Link from "next/link";
import React from "react";
import Image from "next/image";

import type { ProjectType } from "../../app/projects/page";

const SingleProject: React.FC<ProjectType> = (project) => {
  const { id, title, body1, body2, image, links } = project;
  return (
    <article
      className="flex flex-col md:flex md:flex-row rounded-lg border border-solid border-black bg-zinc-300 shadow-black shadow-xl p-9
   "
    >
      <div className="md:flex md:items-center md:justify-center md:w-1/2">
        <Image
          priority
          className="w-full object-contain object-center h-48 w-96  "
          src={image}
          alt="photo of the project"
          width={200}
          height={300}
        />
      </div>
      <div className="flex mt-8 flex-col p-1 md:w-1/2">
        <h2 className=" text-2xl font-semibold mb-2"> {title}</h2>
        <p className="">{body1}</p>
        <p className=" mt-1 ">
          <span className="font-semibold ">Technologies used: </span>
          {body2}
        </p>

        <div className="flex gap-2 self-start mt-3">
          {links.map((link) => (
            <div key={Math.random()}>
              <Link href={link.url} target="_blank">
                <button
                  type="button"
                  className="rounded-xl bg-blue text-white font-semibold p-1 px-4 py-1 -mt-1"
                >
                  {link.text}
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default SingleProject;
