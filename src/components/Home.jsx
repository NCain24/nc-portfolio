import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

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
        <div>
            <Link to="work" smooth={true} duration={500}>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#15ffff] hover:text-black hover:border-[#15ffff]">
              View Work
              <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
              
            </Link>
            
        </div>
      </div>
    </div>
  );
};

export default Home;
