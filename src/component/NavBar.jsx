// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const closeNav = () => {
    setNav(false);
  };

  const navItems = [
    { label: "Home", to: "beranda" },
    { label: "About", to: "tentang" },
    { label: "Portfolio", to: "portfolio" },
    { label: "Skill", to: "skill" },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 text-white bg-black px-4 fixed">
      <h1 className="text-5xl font-signature ml-2">Abid Romadhon</h1>

      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <li
            key={item.label}
            className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-110 duration-200"
          >
            <Link to={item.to} smooth duration={500} onClick={closeNav}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-400 md:hidden"
      >
        {nav && <FaTimes size={35} />}
        {!nav && <FaBars size={35} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-blue-950">
          {navItems.map((item) => (
            <li
              key={item.label}
              className="px-4 py-7 cursor-pointer capitalize text-2xl font-medium text-gray-400 hover:scale-110 duration-200"
            >
              <Link to={item.to} smooth duration={500} onClick={closeNav}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
