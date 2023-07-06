import Link from "next/link";
import React from "react";
import Image from "next/image";

const Projects = () => {
  return (
    <main className="w-full min-h-screen flex flex-col p-12">
      <h1>My Projects</h1>
      <article className="flex w-full rounded-lg border border-solid border-black bg-white shadow-black shadow-xl p-9">
        <div className=" flex items-center justify-center w-1/2 ">
          <Image
            className="w-full object-contain object-center h-48 w-96"
            src={"/images/photo-sonja.jpg"}
            alt="photo of the project"
            width={200}
            height={300}
          />
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center">
          <h2 className="font-semibold">React Project</h2>
          <p>
            Short description of the project Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Debitis impedit architecto iure ullam
            aliquid blanditiis, enim eligendi qui animi sed provident autem
            assumenda soluta, officiis odit, cupiditate necessitatibus?
            Architecto, repellat!
          </p>

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
    </main>
    //   <main className="w-full flex flex-row items-center justify-center min-h-screen">
    //     <div>
    //       <article>
    //         <Link href="" target="_blank">
    //         <Image src="" alt="" className="w-full h-auto/>
    //         </Link>
    //         <div>
    //         <span>{type}</span>
    //         <Link href="" target="_blank">
    //         <Image src="" alt="" className="w-full h-auto/>
    //         <h2>{title}</h2>
    //         </Link>
    //         <p>{summary}</p>
    //         <div> <Link href={lin}></Link>
    //         </div>
    //         </div>
    // </article>
    //       <article>Project one</article>
    //       <article>Project one</article>
    //     </div>
    //   </main>
  );
};

export default Projects;
