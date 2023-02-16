import React from 'react';

const About = () => {
  return (
    <div name="about" className="w-full h-screen flex justify-center items-center bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full">
        <div className="max-w-[1000px] w-full flex justify-center">
          <div className="sm:text-right pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-[#fdbf44]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] text-xs md:text-xl w-full h-full grid gap-8 px-4">
          <div>
            <p>
              I am a Full Stack Sofware Engineer with experience using
              technologies such as React.js for front-end user interfaces,
              Node.js for my runtime environment, Express.js for managing my
              servers and routes, and MongoDB or PostgreSQL for my database,
              depending on whether or not the project would benefit more from
              using either a relational or non-relational database.
              <br />
              <br />
              I have
              self-taught for over two years so far, and graduated from
              Devmountain's Web Development Program. I have a passion for
              working in education, finances, time-management, and
              mental/physical health.
              <br />
              <br />
              I enjoy bettering my skills in the
              technologies I use day-to-day, on top of learning new technologies
              that make new projects cleaner and more efficient. I am open to
              taking on any project given to me. I love the challenge of
              building beautiful, high quality products that the user can
              navigate with ease by using a customer-first mentality. In the
              end, the product I build is not for me, it is for the user. The
              user is the top priority.
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
