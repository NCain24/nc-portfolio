import { FaGithub } from 'react-icons/fa';
import { RiLinkedinFill } from 'react-icons/ri';
import { HiChevronDoubleDown } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Home = () => {
  return (
    <div>
      <div name="home" className="w-full h-full bg-[#fcfcfc]">
        {/* container */}
        <div className="max-w-[1000px] mx-auto flex flex-col justify-center h-screen">
          <h1 className="text-4xl pb-6 sm:text-7xl font-bold text-center text-[#fdbf44]">
            Noah Cain
          </h1>
          <h2 className="text-4xl sm:text-7xl pb-10 font-bold text-center text-[#8892b0]">
            Full Stack Web Developer.
          </h2>
          <div className="flex justify-center">
            <ul className="flex pt-6 gap-1 sm:gap-10">
              <li className="rounded-full shadow-lg p-6 shadow-gray-700 cursor-pointer hover:scale-110 ease-in duration-300">
                <a
                  href="https://www.linkedin.com/in/noahcaindev/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <RiLinkedinFill size={40} />
                </a>
              </li>
              <li className="rounded-full shadow-lg p-6 shadow-gray-700 cursor-pointer hover:scale-110 ease-in duration-300">
                <a
                  href="https://github.com/NCain24"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FaGithub size={40} />
                </a>
              </li>
              <li className="rounded-full shadow-lg p-6 shadow-gray-700 cursor-pointer hover:scale-110 ease-in duration-300">
                <a
                  href="https://docs.google.com/document/d/1wpVjl0Q_PBBcrzKu40kNonTLlkXQ7_EFVEAaY8c4H9M/edit?usp=sharing"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <BsFillPersonLinesFill size={40} />
                </a>
              </li>
            </ul>
          </div>
          <div className="flex justify-center text-[#fdbf44] text-7xl mt-10">
            <Link to="work" smooth={true} duration={500}>
              <HiChevronDoubleDown className="cursor-pointer hover:animate-bounce" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
