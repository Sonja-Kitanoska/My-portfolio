import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <main className="mt-20 mb-4 darkBlue min-h-screen">
      <div className="flex flex-col md:flex-row md:justify-items-center md:items-center gap-10 mt-36 px-6 sm:px-10 md:mt-48 w-full">
        <div className="w-1/2">
          <Image
            priority
            width={600}
            height={960}
            aria-label={"image of Sonja Kitanoska"}
            alt={"image of sonja-kitanoska"}
            src={"/images/photo-sonja.jpg"}
            className="profileImage"
          />
        </div>

        <div className="flex flex-col items-start gap-1 sm:w-full md:mt-16">
          <div>
            <h1 className="font-black text-3xl orange">Hello,</h1>
            <h1 className="font-black text-3xl orange mt-2">
              I&apos;m Sonja Kitanoska.
            </h1>
          </div>
          <p className="text-smokey text-xl ">
          A full-stack developer based in Stockholm. The best developer on planet Earth. 
          I haven&apos;t been to other planets yet.

          </p>
          <div className="w-1/2 sm:w-1/6 flex mt-2">
            <Link href="mailto:avramoskamkd@gmail.com">
              <button
                type="button"
                className="text-white justify-self-start bg-blue w-full rounded-xl px-4 py-1"
              >
                Email me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
