import React from 'react';

const Skills = () => {
  return (
    <div name="skills" className="bg-[#0a192f] text-gray-300 w-full h-screen">
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-screen">
        <div className='mt-20 flex justify-center'>
          <p className="text-4xl font-bold inline border-b-4 border-[#fdbf44]">
            Skills
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center p-8">
          <div className="shadow-md shadow-[#040c16] bg-gray-400 text-black rounded-lg p-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
              alt="React icon"
              className="w-28 mx-auto"
            />
          </div>
          <div className="shadow-md shadow-[#040c16] bg-gray-400 text-black rounded-lg p-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
              alt="Mongo icon"
              className="w-28 mx-auto"
            />
          </div>
          <div className="shadow-md shadow-[#040c16] bg-gray-400 text-black rounded-lg p-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
              alt="Express icon"
              className="w-28 mx-auto"
            />
          </div>
          <div className="shadow-md shadow-[#040c16] bg-gray-400 text-black rounded-lg p-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg"
              alt="Node icon"
              className="w-28 mx-auto"
            />
          </div>
          <div className="shadow-md shadow-[#040c16] bg-gray-400 text-black rounded-lg p-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg"
              alt="tailwind icon"
              className="w-28  mx-auto"
            />
          </div>
          <div className="shadow-md shadow-[#040c16] bg-gray-400 text-black rounded-lg p-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
              alt="JavaScript icon"
              className="w-28  mx-auto"
            />
          </div>
          <div className="shadow-md shadow-[#040c16] bg-gray-400 text-black rounded-lg p-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"
              alt="Postgres icon"
              className="w-28 p- mx-auto"
            />
          </div>
          <div className="shadow-md shadow-[#040c16] bg-gray-400 text-black rounded-lg p-2">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
              alt="HTML5 icon"
              className="w-28 pt-2 mx-auto"
            />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
