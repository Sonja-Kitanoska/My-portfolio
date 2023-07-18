import Image from "next/image";

const Home = () => {
  return (
    <main className="min-h-screen mt-20 bg-gray p-10">
      <div className="flex justify-around mx-20  items-center w-10/12 gap-10 mt-15 mb-30 p-8 ">
        <div className="w-1/2 flex justify-around">
          <Image
            width={600}
            height={960}
            aria-label={"image of sonja-kitanoska"}
            alt={"image of sonja-kitanoska"}
            src={"/images/photo-sonja.jpg"}
            className="profileImage"
          />
        </div>

        <div className="flex flex-col gap-3 w-1/2 sm:w-full">
          <h1 className="font-black text-3xl text-white">
            Hello, I'm Sonja Kitanoska.
          </h1>
          <p className="text-smokey">
            A full-stack developer based in Stockholm. The best developer on the
            planet Earth. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Quasi vero necessitatibus eaque et magni. Nesciunt repellendus
            quisquam recusandae aliquam voluptatum eum facere autem eius.
            Facilis, cum sed? Consectetur, facere hic.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Home;
