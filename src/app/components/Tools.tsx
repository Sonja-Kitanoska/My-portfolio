import React from "react";
import Image from "next/image";

const Tools = () => {
  return (
    <div className="flex flex-col">
      <h2 className="text-xl font-semibold mb-5">
        Languages and tools:{" "}
      </h2>
      <div className="flex items-start md:-ml-4 lg:-ml-7">
        <div>
          <Image
            src="/logos/javascript-icon.png"
            width={60}
            height={80}
            alt="javaScript icon"
            className="object-contain md:w-[100px] md-h[300px]"
          />
        </div>
        <div>
          <Image
            src="/logos/typescript-icon.png"
            width={100}
            height={300}
            alt="typeScript icon"
            className=" object-contain"
          />
        </div>
        <div>
          <Image
            src="/logos/node-icon.png"
            width={100}
            height={300}
            alt="node icon"
            className="h-10 object-contain"
          />
        </div>
        <div>
          <Image
            src="/logos/express-icon.png"
            width={100}
            height={300}
            alt="express icon"
            className="h-10 object-contain"
          />
        </div>
        <div>
          <Image
            src="/logos/mongodb-icon.png"
            width={100}
            height={300}
            alt="mongodb icon"
            className="h-10 object-contain"
          />
        </div>
        <div>
          <Image
            src="/logos/tailwind-icon.png"
            width={100}
            height={300}
            alt="tailwind icon"
            className="h-10 object-contain"
          />
        </div>
        <div>
          <Image
            src="/logos/react-icon.png"
            width={100}
            height={300}
            alt="react icon"
            className="h-10 object-contain"
          />
        </div>
        <div>
          <Image
            src="/logos/next-icon.svg"
            width={100}
            height={300}
            alt="next icon"
            className="h-10 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Tools;
