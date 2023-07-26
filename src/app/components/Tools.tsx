import React from "react";

const Tools = () => {
  return (
    <div className="flex flex-col">
      <h2 className="text-white text-xl font-semibold mb-2">
        Languages and tools:{" "}
      </h2>
      <div className="flex gap-3 bg-zinc-300 p-3 rounded-xl justify-around items-center">
        <div>
          <img
            src="/logos/javascript-icon.png"
            alt="javaScript icon"
            className="h-10"
          />
        </div>
        <div>
          <img
            src="/logos/typescript-icon.png"
            alt="typescript icon"
            className="h-10"
          />
        </div>
        <div>
          <img src="/logos/node-icon.png" alt="node icon" className="h-10" />
        </div>
        <div>
          <img
            src="/logos/express-icon.png"
            alt="express icon"
            className="h-10"
          />
        </div>
        <div>
          <img
            src="/logos/mongodb-icon.png"
            alt="mongodb icon"
            className="h-10"
          />
        </div>
        <div>
          <img
            src="/logos/tailwind-icon.png"
            alt="tailwind icon"
            className="h-10"
          />
        </div>
        <div>
          <img src="/logos/react-icon.png" alt="react icon" className="h-10" />
        </div>
        <div>
          <img src="/logos/next-icon.svg" alt="next icon" className="h-10" />
        </div>
      </div>
    </div>
  );
};

export default Tools;
