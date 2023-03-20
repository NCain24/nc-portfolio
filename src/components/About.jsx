import React from 'react';

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen flex justify-center items-center bg-[#fcfcfc]"
    >
      <div className="flex flex-col justify-center items-center w-full">
        <div className="max-w-[1000px] w-full flex justify-center">
          <div className="sm:text-right pb-8">
            <p
              id="page-title"
              className="text-4xl font-bold inline border-b-4 px-10 border-[#fdbf44]"
            >
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] text-sm md:text-xl w-full h-full grid gap-8 px-4">
          <div>
            <p>
              Before I made the leap in to Web Development, I was a member of
              the International Brotherhood of Electrical Workers Union.
            </p>
            <br />
            <p>
              Once I realized my passion was building websites and applications,
              I began learning JavaScript, HTML and CSS. After a year and a half
              of self-learning, I began a four-month Web Development program at
              DevMountain. I graduated in February of 2023, and am now looking
              for the right opportunity to let my creative passion shine.
            </p>
            <br />
            <p>
              During my studies at DevMountain, I learned how to proficiently
              use React.js, Node.js, Express.js, and PostgreSQL to create full
              Stack web applications and sites. With my new skillset, I was able
              to create applications that I only dreamed of making.
            </p>
            <br />
            <p>
              I am now learning Next.js and Typescript while I continue to
              relentlessly pursue my career in Web Development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
