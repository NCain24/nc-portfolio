import React from 'react';
import familyImg from '../assets/family.jpg';
import musicImg from '../assets/musicapp.png';
import blogImg from '../assets/blog.png';
import lirnImg from '../assets/lirn.png';

const Work = () => {
  return (
    <div name="work" className="w-full md:pt-0 sm:h-screen bg-[#fcfcfc]">
      <div className="max-w-[1000px] mx-auto flex flex-col p-4 justify-center w-full h-screen">
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
            style={{
              backgroundImage: `url(${lirnImg})`,
              backgroundSize: '300px',
            }}
            className="shadow-2xl max-h-[180px] sm:max-h-[100%] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="">
              <span
                id="page-title"
                className="text-xl flex justify-center sm:text-3xl rounded-full font-bold px-6 bg-black/70 text-white tracking-wide py-6"
              >
                Media App
              </span>
              <div className="pt-2 text-center">
                <a href=" " target="_blank" rel="noreferrer noopener">
                  <button
                    onClick={alert('Coming Soon!')}
                    className="text-center rounded-full px-4 py-3 m-2 bg-black/70 text-white font-bold text-3xl hover:text-neutral-900 hover:bg-neutral-300 transition"
                  >
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/NCain24/LIRN"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <button className="text-center rounded-full px-4 py-3 m-2 bg-black/70 text-white font-bold text-3xl hover:text-neutral-900 hover:bg-neutral-300 transition">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${blogImg})` }}
            className="shadow-2xl max-h-[180px] sm:max-h-[100%] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="">
              <span
                id="page-title"
                className="text-xl flex justify-center sm:text-3xl rounded-full font-bold px-6 bg-black/70 text-white tracking-wide py-6"
              >
                Blog Gen
              </span>
              <div className="pt-2 text-center">
                <a
                  href="https://blog-gen-ncain24.vercel.app"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <button className="text-center rounded-full px-4 py-3 m-2 bg-black/70 text-white font-bold text-3xl hover:text-neutral-900 hover:bg-neutral-300 transition">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/NCain24/Blog-Gen"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <button className="text-center rounded-full px-4 py-3 m-2 bg-black/70 text-white font-bold text-3xl hover:text-neutral-900 hover:bg-neutral-300 transition">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${musicImg})` }}
            className="shadow-2xl group container max-h-[180px] sm:max-h-[100%] rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div>
              <span
                id="page-title"
                className="text-xl sm:text-3xl flex justify-center rounded-full font-bold px-6 bg-black/70 text-white tracking-wide py-6"
              >
                Music App
              </span>
              <div className="pt-2 text-center">
                <a
                  href="https://music-tawny-pi.vercel.app/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <button className="text-center rounded-full  px-4 py-3 m-2 bg-black/70 text-white font-bold text-3xl hover:text-neutral-900 hover:bg-neutral-300 transition">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/NCain24/Music"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <button className="text-center rounded-full  px-4 py-3 m-2 bg-black/70 text-white font-bold text-3xl hover:text-neutral-900 hover:bg-neutral-300 transition">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${familyImg})` }}
            className="shadow-2xl max-h-[180px] sm:max-h-[100%] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="">
              <span
                id="page-title"
                className="text-xl flex justify-center sm:text-3xl rounded-full font-bold px-6 bg-black/70 text-white tracking-wide py-6"
              >
                Family Connect
              </span>
              <div className="pt-2 text-center">
                <a
                  href="https://youtu.be/9LZ7fv56Tsg"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <button className="text-center rounded-full px-4 py-3 m-2 bg-black/70 text-white font-bold text-3xl hover:text-neutral-900 hover:bg-neutral-300 transition">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/NCain24/Family-Sharing-App"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <button className="text-center rounded-full px-4 py-3 m-2 bg-black/70 text-white font-bold text-3xl hover:text-neutral-900 hover:bg-neutral-300 transition">
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
