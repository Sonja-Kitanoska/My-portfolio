"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Tools from "./components/Tools";
import { aboutMeData } from "./data/data";
import ProjectCardList from "./components/ProjectCardList";
import { Button } from "@mui/material";
import { Dancing_Script } from "next/font/google";
import { useThemeContext } from "./contexts/ThemeContext";
import { useEffect } from "react";

const dancingScript = Dancing_Script({ subsets: ["latin"], weight: "400" });

const Home = () => {
  useEffect(() => {
    document.title = "Sonja's Portfolio";
  }, []);

  const { theme } = useThemeContext();
  return (
    <>
      <Head>
        <title>Sonja&apos;s Portfolio</title>
        <meta
          name="description"
          content="A portfolio to showcase my technical skills"
        />
        <meta name="keywords" content="portfolio, next.js, react, website" />
        <meta name="author" content="Sonja Kitanoska" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <section
        id="Home"
        className="scroll-mt-52 px-6 flex flex-col md:flex-row gap-10 md:gap-20 md:justify-center md:items-center p-2 md:px-16 mb-12 md:mb-48 lg:mb-56 lg:pt-16 "
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
                variant={theme === "light" ? "outlined" : "contained"}
                sx={{
                  minWidth: ["110px"],
                  fontSize: "14px",
                  fontWeight: "semibold"
                }}
                className={`transition-all duration-300 ease-in-out ${
                  theme === "dark"
                    ? "bg-blue-500 text-white border-blue-500 hover:bg-blue-600"
                    : "border-blue-500 text-blue-500 hover:border-blue-600 hover:bg-blue-500 hover:text-white"
                }`}
              >
                Email me
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section
        id="About"
        className="scroll-mt-28 md:p-32 md:px-16 p-8 mb-6 md:mb-20 bg-blue-200/30 md:mt-48 lg:mt-72"
      >
        <h1 className="text-3xl">About Me</h1>
        <p className="mt-3 md:text-lg"> {aboutMeData.body}</p>
        <p className="mt-3 mb-12 md:text-lg"> {aboutMeData.body1}</p>
        <Tools />
      </section>

      <section id="Projects" className="scroll-mt-32 px-6 md:px-16 text-center">
        <h1 className="text-3xl my-10 mb-10">My Projects</h1>
        <ProjectCardList />
      </section>
    </>
  );
};

export default Home;
