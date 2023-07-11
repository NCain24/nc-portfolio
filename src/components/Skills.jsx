import React from 'react';

const Skills = () => {
  return (
    <div name="skills" className="bg-[#fcfcfc] w-full h-screen">
      {/* container */}
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center w-full h-screen">
        <div className="flex justify-center">
          <p
            id="page-title"
            className="text-4xl text-[#8892b0] font-bold inline border-b-4 px-10 border-[#fdbf44]"
          >
            Skills
          </p>
        </div>

        <div className="w-full grid grid-cols-4 gap-4 text-center p-8">
          <div className="shadow-lg bg-gray-500 text-black rounded-lg p-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
              alt="React icon"
              className="w-28 mx-auto"
            />
          </div>
          <div className="shadow-lg bg-gray-500 text-black rounded-lg p-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
              alt="Mongo icon"
              className="w-28 mx-auto"
            />
          </div>
          <div className="shadow-lg bg-gray-500 text-black rounded-lg p-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
              alt="Express icon"
              className="w-28 mx-auto"
            />
          </div>
          <div className="shadow-lg bg-gray-500 text-black rounded-lg p-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg"
              alt="Node icon"
              className="w-28 mx-auto"
            />
          </div>
          <div className="shadow-lg bg-gray-500 text-black rounded-lg p-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg"
              alt="tailwind icon"
              className="w-28  mx-auto"
            />
          </div>
          <div className="shadow-lg bg-gray-500 text-black rounded-lg p-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
              alt="JavaScript icon"
              className="w-28  mx-auto"
            />
          </div>
          <div className="shadow-lg bg-gray-500 text-black rounded-lg p-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"
              alt="Postgres icon"
              className="w-28 p- mx-auto"
            />
          </div>
          <div className="shadow-lg bg-gray-500 text-black rounded-lg p-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
              alt="Next icon"
              className="w-28 pt-2 mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
