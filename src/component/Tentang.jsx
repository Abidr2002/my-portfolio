// eslint-disable-next-line no-unused-vars
import React from "react";

const Tentang = () => {
  return (
    <div
      name="tentang"
      className="w-full min-h-screen bg-gradient-to-b from-blue-950 to-black text-white flex justify-center items-center"
    >
      <div className="max-w-screen-lg p-4 mt-20">
        <div className="pb-8">
          <p className="text-4xl sm:text-6xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>
        </div>

        <p className="text-xl sm:text-2xl mt-8 sm:mt-10">
          My name Ahmad Hauzan Abid Romadhon. I have been a student at UPN
          Veteran Jawa Timur since 2021, currently navigating through the
          challenges of the fifth semester in the Computer Science program.
        </p>

        <br />

        <p className="text-xl sm:text-2xl mt-8">
          What fuels my passion is Full Stack Web Development, an area I find
          incredibly fascinating. The prospect of seamlessly working with both
          front-end and back-end technologies to create dynamic and interactive
          web applications drives my enthusiasm. I am eager to explore the
          endless possibilities that the world of programming offers and
          contribute meaningfully to the ever-evolving landscape of technology.
          My proficiency includes working with technologies such as React,
          Tailwind CSS, Node.js, Express, and PHP, enhancing my capabilities in
          delivering comprehensive and efficient web solutions.
        </p>
      </div>
    </div>
  );
};

export default Tentang;
