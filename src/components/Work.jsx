import React from 'react';
import familyImg from '../assets/family.jpg';
import weatherImg from '../assets/weather.png';
import musicImg from '../assets/musicapp.png';

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
        <div className="grid sm:grid-cols-2 gap-4 pb-4 ">
          <div
            style={{ backgroundImage: `url(${musicImg})` }}
            className="shadow-2xl group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div>
              <span
                id="page-title"
                className="text-3xl rounded-full font-bold px-6 bg-black/70 text-white tracking-wide py-6"
              >
                Music App
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://music-tawny-pi.vercel.app/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <button className="text-center rounded-full border-2 border-black px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#7499f4] transition">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/NCain24/Music"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <button className="text-center rounded-full border-2 border-black px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:text-[#8892b0]">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${familyImg})` }}
            className="shadow-2xl group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="">
              <span
                id="page-title"
                className="text-3xl rounded-full font-bold px-6 bg-black/70 text-white tracking-wide py-6"
              >
                Family Connect
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://youtu.be/9LZ7fv56Tsg"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <button className="text-center rounded-full border-2 border-black px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:text-[#8892b0]">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/NCain24/Family-Sharing-App"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <button className="text-center rounded-full border-2 border-black px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:text-[#8892b0]">
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
