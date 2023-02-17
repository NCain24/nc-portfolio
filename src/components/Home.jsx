import React from 'react';
import { GoArrowDown } from 'react-icons/go';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div>
      <div name="home" className="w-full h-full sm:h-[64vh] bg-[#0a192f]">
        {/* container */}
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-[90vh] sm:h-[64vh]">
          <h1 className="text-4xl sm:text-7xl font-bold text-[#15ffff]">
            Noah Cain
          </h1>
          <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
            Full Stack Web Developer.
          </h2>
        </div>
      </div>
      <div className="flex justify-around text-[#fdbf44] text-7xl">
        <Link
          className=""
          to="work"
          smooth={true}
          duration={500}
        >
          <GoArrowDown className='animate-bounce'/>
        </Link>
      </div>
    </div>
  );
};

export default Home;
