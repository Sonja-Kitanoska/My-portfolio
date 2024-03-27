import React from "react";
import Image from "next/image";

const Tools = () => {
  return (
    <div className="flex flex-col">
      <h2 className="text-2xl mb-5">
        Languages and tools:{" "}
      </h2>
      <div className="flex justify-center md:justify-start items-center content-center gap-1 md:w-8/12">
        <div className="">
          <Image
            src="/logos/javascript-icon.png"
            width={120}
            height={120}
            alt="javaScript icon"
            className="object-contain h-8 md:w-12 md:h-12"
          />
        </div>
        <div>
          <Image
            src="/logos/typescript-icon.png"
            width={160}
            height={160}
            alt="typeScript icon"
            className="object-contain h-8 md:w-12 md:h-12"
          />
        </div>
        <div >
          <Image
            src="/logos/node-icon.png"
            width={120}
            height={120}
            alt="node icon"
            className="h-8 object-contain md:w-12 md:h-12"
          />
        </div>
        <div>
          <Image
            src="/logos/express-icon.png"
            width={120}
            height={120}
            alt="express icon"
            className="h-10 object-contain md:w-12 md:h-12"
          />
        </div>
        <div>
          <Image
            src="/logos/mongodb-icon.png"
            width={120}
            height={120}
            alt="mongodb icon"
            className="h-10 object-contain md:w-12 md:h-12"
          />
        </div>
        <div>
          <Image
            src="/logos/tailwind-icon.png"
            width={120}
            height={120}
            alt="tailwind icon"
            className="h-10 object-contain md:w-12 md:h-12"
          />
        </div>
        <div>
          <Image
            src="/logos/react-icon.png"
            width={120}
            height={120}
            alt="react icon"
            className="h-10 object-contain md:w-12 md:h-12"
          />
        </div>
        <div>
          <Image
            src="/logos/next-icon.svg"
            width={120}
            height={120}
            alt="next icon"
            className="h-10 object-contain md:w-12 md:h-12"
          />
        </div>
      </div>
    </div>
  );
};

export default Tools;
