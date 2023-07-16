import Link from "next/link";
import React from "react";
import Image from "next/image";

// type ProjectType = {
//   title: string;
//   body1: string;
//   body2?: string;
//   image: object;
//   links: { text: string; url: string }[];
// };

const SingleProject = ({ project }) => {
  return (
    <article className="flex w-full rounded-lg border border-solid border-black bg-white shadow-black shadow-xl p-9">
      <div className=" flex items-center justify-center w-1/2 ">
        <Image
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
