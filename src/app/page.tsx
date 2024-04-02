import Image from "next/image";
import Link from "next/link";
import Tools from "./components/Tools";
import { aboutMeData } from "./data/data";
import ProjectCardList from "./components/ProjectCardList";
import { Button } from "@mui/material";
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({ subsets: ["latin"], weight: "400" });

const Home = () => {
  return (
    <>
      <section
        id="Home"
        className="scroll-mt-52 px-6 flex flex-col md:flex-row gap-10 md:gap-20 md:justify-center md:items-center p-2 md:px-16 mb-12 md:mb-48 lg:mb-56 lg:pt-16"
      >
        <div className="w-48 h-48 md:w-56 md:h-56 lg:w-[300px] lg:h-[300px] self-center">
          <Image
            priority
            width={150}
            height={150}
            aria-label={"image of Sonja Kitanoska"}
            alt={"image of sonja-kitanoska"}
            src={"/images/photo-sonja.jpg"}
            className="profileImage"
          />
        </div>

        <div className="flex flex-col items-start gap-2 md:mt-16 md:w-1/2">
          <div>
            <h1 className=" text-3xl">Hello, I&apos;m </h1>
            <h1
              className={`${dancingScript.className} text-5xl text-[#1976D2]`}
            >
              Sonja Kitanoska
            </h1>
          </div>
          <p className="">
            A full-stack developer based in Stockholm. I love working with
            JavaScript and TypeScript, focusing on both frontend and backend
            development. I enjoy creating efficient and user-friendly
            applications.
          </p>

          <div className="w-1/2 sm:w-1/6 flex mt-2">
            <Link href="mailto:avramoskamkd@gmail.com">
              <Button
                variant="outlined"
                sx={{ width: ["110px"] }}
                className="w-12"
              >
                Email me
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section
        id="About"
        className="scroll-mt-28 p-6 md:p-20 md:mb-24 mb-6 bg-blue-200/30 md:mt-28"
      >
        <h1 className="text-3xl">About Me</h1>
        <p className="mt-3"> {aboutMeData.body}</p>
        <p className="mt-3 mb-12"> {aboutMeData.body1}</p>
        <Tools />
      </section>

      <section id="Projects" className="scroll-mt-32 px-6 md:px-20 text-center">
        <h1 className="text-3xl my-10">My Projects</h1>
        <ProjectCardList />
      </section>
    </>
  );
};

export default Home;
