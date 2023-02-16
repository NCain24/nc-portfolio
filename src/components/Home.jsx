import React from 'react';

const Home = () => {
  return (
    <div name="home" className="w-full h-[64vh] bg-[#0a192f]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-screen">
        <h1 className="text-4xl sm:text-7xl font-bold text-[#15ffff]">
          Noah Cain
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          Full Stack Web Developer.
        </h2>
      </div>
    </div>
  );
};

export default Home;
