import React from 'react';

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/c593b348-7f19-459e-98fd-795cfa86320f"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8 flex flex-col justify-center items-center">
          <p className="text-4xl font-bold inline border-b-4 border-[#fdbf44] text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 pt-4">noahcain.work@gmail.com</p>
          <p className="text-gray-300">(503)863-8278</p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          id=""
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-[#15ffff] hover:border-[#15ffff] hover:text-black px-4 py-3 my-8 mx-auto flex items-center">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
