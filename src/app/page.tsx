import Image from "next/image";
import Link from "next/link";
import Tools from "./components/Tools";
import { aboutMeData } from "./data/data";
import ProjectCardList from "./components/ProjectCardList";
import { Button } from "@mui/material";

const Home = () => {
  return (
    <div className="w-full min-h-screen mx-auto">

      <section id="Home" className="scroll-mt-56 flex flex-col md:flex-row gap-20 md:justify-center md:items-center px-10 md:px-24 mb-6 md:mb-20">
        <div className="">
          <Image
            priority
            width={300}
            height={300}
            aria-label={"image of Sonja Kitanoska"}
            alt={"image of sonja-kitanoska"}
            src={"/images/photo-sonja.jpg"}
            className="profileImage"
          />
        </div>

        <div className="flex flex-col items-start gap-2 md:mt-16 md:w-1/2">
          <div>
            <h1 className=" text-3xl">Hello, I&apos;m </h1>
            <h1 className="font-black text-3xl orange mt-2">
          Sonja Kitanoska.
            </h1>
          </div>
          <p className="md:text-xl ">
          A full-stack developer based in Stockholm.  
          I love working with JavaScript and TypeScript, focusing on both frontend and backend development. 
          I enjoy creating efficient and user-friendly applications that make a difference.
          </p>

          <div className="w-1/2 sm:w-1/6 flex mt-2">
            <Link href="mailto:avramoskamkd@gmail.com">
              <Button
                variant="outlined"
                sx={{width:['110px']}}
                className="w-12"
              >
                Email me
              </Button>
            </Link>
          </div>

        </div>
      </section>


 {/* about me */}

      <section id="About" className="scroll-mt-24 p-10 md:p-24 md:mb-24 mb-6 bg-blue-200">
        <h1 className="text-3xl font-black">About Me</h1>
        <p className="mt-3"> {aboutMeData.body}</p>
        <p className="mt-3 mb-4"> {aboutMeData.body1}</p>
        <Tools />
      </section>



   <section id="Projects" className="scroll-mt-24 px-4 p-10">
    <ProjectCardList/>
    </section>



    </div>
  );
};

export default Home;
