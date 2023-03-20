import React from 'react';
import familyImg from '../assets/family.jpg';

const Work = () => {
  return (
    <div name="work" className="w-full md:pt-0 sm:h-screen bg-[#fcfcfc]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-screen">
        <div className="pb-8 flex justify-center">
          <p
            id="page-title"
            className="text-4xl font-bold inline border-b-4 px-10 border-[#fdbf44]"
          >
            Work
          </p>
        </div>
        {/* container */}
        <div className="grid sm:grid-cols-1 gap-4">
          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${familyImg})` }}
            className="shadow-2xl group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="">
              <span
                id="page-title"
                className="text-3xl rounded-xl font-bold px-6 bg-black/50 text-white tracking-widest"
              >
                Family Connect
              </span>
              <div className="pt-8 text-center">
                <a href="https://youtu.be/9LZ7fv56Tsg">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#fdbf44]">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/NCain24/Family-Sharing-App">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#fdbf44]">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
