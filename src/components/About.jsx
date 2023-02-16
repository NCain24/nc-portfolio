import React from 'react';

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-[80%]">
        <div className="max-w-[1000px] w-full flex justify-center">
          <div className="sm:text-right pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-[#fdbf44]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-[80vw] grid gap-8 px-4">
          <div>
            <p>
              I am a Full Stack Sofware Engineer that has self-taught for over two
              years and graduated from Devmountain's Web Development Program. I have a passion for working in education,
              finances, and mental/physical health.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
