import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center p-8">
      <label
        for="email-address-icon"
        className="flex justify-center mb-2 text-md font-medium text-gray-900 dark:text-white md:text-2xl"
      >
        Your Email
      </label>
      <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
          </svg>
        </div>
        <input
          type="text"
          id="email-address-icon"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@flowbite.com"
        />
      </div>
      <label
        for="message"
        className="flex mt-4  justify-center mb-2 text-md font-medium text-gray-900 dark:text-white md:text-2xl"
      >
        Your message
      </label>
      <textarea
        id="message"
        rows="4"
        className=" mt-4 flex  p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Leave a comment..."
      ></textarea>
      <button className=" mt-5 bg-gradient-to-b from-cyan-500 to-blue-500 p-2 cursor-pointer rounded-md hover:scale-110 duration-200"><a href="#">Submit</a></button>
    </div>
  );
};

export default Contact;
