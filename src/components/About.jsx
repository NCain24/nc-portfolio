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
        </div>
        <div className="max-w-[1000px] max-h-[300px] sm:h-screen border shadow-lg border-[#fdbf44] rounded-xl text-md sm:text-lg w-full grid gap-8 px-4 text-center overflow-scroll no-scrollbar">
          <div>
            <p>
              Hello there! I'm thrilled to share my unique journey into the
              world of web development with you. Before I discovered my true
              passion for building websites and applications, I was a proud
              member of the International Brotherhood of Electrical Workers
              Union. However, life had something else in store for me, and my
              interest in technology and coding began to take center stage. It
              didn't take long for me to realize that web development was where
              I wanted to make my mark. Fueled by determination and a thirst for
              knowledge, I embarked on a self-learning journey, diving headfirst
              into the realms of JavaScript, HTML, and CSS.
            </p>
            <br />
            <p>
              Over the course of a year and a half, I honed my skills and
              developed a deep understanding of web development principles. My
              insatiable curiosity and passion led me to take the next big step
              in my journey. I enrolled in a four-month intensive Web
              Development program at Devmountain, eager to expand my knowledge
              and learn from seasoned professionals in the industry. In February
              of 2023, I proudly graduated from Devmountain, armed with the
              expertise in React.js, Node.js, Express.js, and PostgreSQL,
              enabling me to create full-stack web applications and sites that I
              had only dreamt of before. It was truly an incredible experience
              to see my visions turn into reality through code. My quest for
              growth doesn't end there.
            </p>
            <br />
            <p>
              I believe that the world of web development is an ever-evolving
              landscape, and I'm determined to stay ahead of the curve.
              Currently, I'm diving into the depths of Next.js and Typescript,
              further enhancing my skillset to create even more innovative and
              dynamic applications. For me, web development is not just a
              career; it's a creative outlet that allows me to weave my
              imagination into the fabric of the digital world. I'm now on the
              lookout for the perfect opportunity to channel my passion, skills,
              and dedication into a dynamic and forward-thinking team.
            </p>
            <br />
            <p>
              If you're seeking a web developer who combines a strong foundation
              in coding with an unyielding drive to excel, then I would love to
              connect with you. Together, we can build something extraordinary
              and make a lasting impact in the digital realm. Let's bring ideas
              to life and revolutionize the web, one line of code at a time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
