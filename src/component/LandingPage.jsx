// eslint-disable-next-line no-unused-vars
import React from "react";
import FotoDiri from "../assets/profil/abid.jpg";
import { TbSquareRoundedArrowRight } from "react-icons/tb";
import { Link } from "react-scroll";

const Beranda = () => {
  return (
    <div
      name="beranda"
      className="min-h-screen w-full bg-gradient-to-b from-black via-black to-blue-950 flex flex-col justify-center md"
    >
      <div className="max-w-screen-lg mx-auto px-4 mt-20 md:mt-0">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex justify-center w-full md:w-1/2 md:order-1">
            <img
              src={FotoDiri}
              alt="my profile"
              className="w-4/5 h-auto object-cover rounded-full m-auto"
            />
          </div>
          <div className="flex flex-col justify-center w-full md:w-1/2 mt-12 md:mt-0 md:order-2">
            <h2 className="text-4xl sm:text-6xl font-bold text-white text-center md:text-left">
              Full-Stack Web Developer
            </h2>
            <p className="text-gray-400 py-4 md:max-w-md text-center md:text-left">
              A fifth-semester Computer Science student with a passion for web
              development, I am actively engaged in the dynamic realm of
              full-stack development. My current focus revolves around mastering
              cutting-edge frameworks such as Tailwind, React, Express, and
              more.
            </p>
            <div className="flex justify-center md:justify-start">
              <Link
                to="portfolio"
                smooth
                duration={500}
                className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-t from-slate-500 to-zinc-500 cursor-pointer"
              >
                Portfolio
                <span className="group-hover:rotate-90 duration-500">
                  <TbSquareRoundedArrowRight size={25} className="ml-1" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beranda;
