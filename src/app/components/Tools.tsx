import React from "react";
import Image from "next/image";

const Tools = () => {
  return (
    <div className="flex flex-col  mb-10">
      <h2 className="text-white text-xl font-semibold mb-2">
        Languages and tools:{" "}
      </h2>
      <div className="flex gap-3 bg-zinc-300 p-3 md:justify-start md:absolute rounded-xl justify-around items-center">
        <div>
          <Image
            src="/logos/javascript-icon.png"
            width={200}
            height={300}
            alt="javaScript icon"
            className="h-10 object-contain"
          />
        </div>
        <div>
          <Image
            src="/logos/typescript-icon.png"
            width={200}
            height={300}
            alt="typescript icon"
            className="h-10 object-contain"
          />
        </div>
        <div>
          <Image
            src="/logos/node-icon.png"
            width={200}
            height={300}
            alt="node icon"
            className="h-10 object-contain"
          />
        </div>
        <div>
          <Image
            src="/logos/express-icon.png"
            width={200}
            height={300}
            alt="express icon"
            className="h-10 object-contain"
          />
        </div>
        <div>
          <Image
            src="/logos/mongodb-icon.png"
            width={200}
            height={300}
            alt="mongodb icon"
            className="h-10 object-contain"
          />
        </div>
        <div>
          <Image
            src="/logos/tailwind-icon.png"
            width={200}
            height={300}
            alt="tailwind icon"
            className="h-10 object-contain"
          />
        </div>
        <div>
          <Image
            src="/logos/react-icon.png"
            width={200}
            height={300}
            alt="react icon"
            className="h-10 object-contain"
          />
        </div>
        <div>
          <Image
            src="/logos/next-icon.svg"
            width={200}
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
