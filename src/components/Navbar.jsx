import React from 'react';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[40px] md:h-[80px] flex justify-between items-center px-4 bg-[#fcfcfc]">
      <div>
        <p id="nav" className="text-[20px] md:text-[30px] lg:text-[40px]">
          Noah Cain
        </p>
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li>
          <Link
            className="hover:text-[#fdbf44] duration-300"
            to="home"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-[#fdbf44] duration-300"
            to="work"
            smooth={true}
            duration={500}
          >
            Work
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-[#fdbf44] duration-300"
            to="skills"
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-[#fdbf44] duration-300"
            to="about"
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-[#fdbf44] duration-300"
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile */ }
      

      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#fcfcfc] flex flex-col justify-center items-center'
        }
      >
        <li className="py-6 text-4xl border-b-2 border-[#fdbf44]">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl border-b-2 border-[#fdbf44]">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl border-b-2 border-[#fdbf44]">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl border-b-2 border-[#fdbf44]">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl border-b-2 border-[#fdbf44]">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
