import React from 'react';

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#fcfcfc] flex justify-center items-center px-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/c593b348-7f19-459e-98fd-795cfa86320f"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-4 flex flex-col justify-center items-center">
          <p
            id="page-title"
            className="text-4xl font-bold inline border-b-4 px-10 border-[#fdbf44]"
          >
            Contact
          </p>
          
        </div>
        <div>
        </div>
        <input
          className="bg-[#dad9d9] p-2 mb-4 rounded"
          type="text"
          placeholder="Name"
          name="name"
        />
        <textarea
          className="bg-[#dad9d9] p-2 rounded resize-none"
          name="message"
          id=""
          rows="6"
          placeholder="Message"
        ></textarea>
        <button className=" border-2 font-bold bg-[#fdbf44] hover:bg-[#fcd382] ease-in duration-300 px-8 py-3 my-4 mx-auto flex items-center rounded-xl">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
