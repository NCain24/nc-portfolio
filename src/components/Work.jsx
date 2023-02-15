import React from 'react';
import Family from '../assets/family.jpg';
import Todo from '../assets/todo.jpg'

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-screen">
        <div className="pb-8 flex justify-center">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#fdbf44]">
            Work
          </p>
        </div>
        {/* container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${Family})` }}
            className="shadow-2xl shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="">
              <span className="text-3xl font-black text-black tracking-wider">
                Family Sharing App
              </span>
              <div className="pt-8 text-center">
                <a href="https://www.youtube.com/watch?v=9LZ7fv56Tsg&t=6s">
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
          <div
            style={{ backgroundImage: `url(${Todo})` }}
            className="shadow-2xl shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="">
              <span className="text-3xl border-b-4 border-[#fdbf44] font-black text-black tracking-wider">
                Tack Tracker
              </span>
              <div className="pt-8 text-center">
                <a href="https://www.youtube.com/watch?v=9LZ7fv56Tsg&t=6s">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#fdbf44]">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/NCain24/Task-Tracker-App">
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
