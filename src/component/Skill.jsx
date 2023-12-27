// eslint-disable-next-line no-unused-vars
import React from "react";
import html from "../assets/skill/html.png";
import css from "../assets/skill/css.png";
import javascript from "../assets/skill/javascript.png";
import reactImage from "../assets/skill/react.png";
import github from "../assets/skill/github.png";
import tailwind from "../assets/skill/tailwind.png";
import php from "../assets/skill/php2.png";
import cpp from "../assets/skill/cpp.png";
import bootstrap from "../assets/skill/Bootstrap.png";
import node from "../assets/skill/node.png";
import express from "../assets/skill/express.png";

const Skill = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: php,
      title: "PHP",
      style: "shadow-white",
    },
    {
      id: 7,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 8,
      src: cpp,
      title: "C++",
      style: "shadow-blue-500",
    },
    {
      id: 9,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-violet-700",
    },
    {
      id: 10,
      src: node,
      title: "Node.Js",
      style: "shadow-lime-500",
    },
    {
      id: 11,
      src: express,
      title: "ExpressJS",
      style: "shadow-gray-500",
    },
  ];

  return (
    <div
      name="skill"
      className="bg-gradient-to-b from-blue-950 to-black w-full min-h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="mt-20">
          <p className="text-4xl sm:text-6xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skill
          </p>
          <p className="py-6 text-xl sm:text-2xl">
            Here are some programming languages and tools I have used:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-4 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
