// eslint-disable-next-line no-unused-vars
import React from "react";
import bookshelf from "../assets/portfolio/Bookshelf.png";
import wo from "../assets/portfolio/WO.png";
import mealFinder from "../assets/portfolio/MealFinder.png";
import restaurant from "../assets/portfolio/restauran-1.png";
import fitlifehub from "../assets/portfolio/fitlifehub-1.png";
import locrent from "../assets/portfolio/locrent.png";
import bookshelfAPI from "../assets/portfolio/Bookshelf API.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: wo,
      repoUrl: "https://github.com/Abidr2002/Wedding_Organizer",
    },
    {
      id: 2,
      src: bookshelf,
      repoUrl: "https://github.com/Abidr2002/BookshelfApps",
    },
    {
      id: 3,
      src: mealFinder,
      repoUrl: "https://github.com/Abidr2002/meal-finder",
    },
    {
      id: 4,
      src: restaurant,
      repoUrl: "https://github.com/Abidr2002/restaurant-PWA-testing",
    },
    {
      id: 5,
      src: fitlifehub,
      repoUrl: "https://github.com/Abidr2002/Fitlife-Hub",
    },
    {
      id: 6,
      src: locrent,
      repoUrl: "https://github.com/Abidr2002/FP_Pemweb",
    },
    {
      id: 7,
      src: bookshelfAPI,
      repoUrl: "https://github.com/Abidr2002/Bookshelf-API",
    },
  ];

  const openRepoLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-blue-950 w-full text-white min-h-screen flex justify-center items-center"
    >
      <div className="max-w-screen-lg p-4">
        <div className="pb-8">
          <p className="text-4xl sm:text-6xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6 text-xl sm:text-2xl">
            Berikut ini adalah beberapa tugas yang pernah saya kerjakan
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0">
          {portfolios.map(({ id, src, repoUrl }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-300 hover:scale-110"
                  onClick={() => openRepoLink(repoUrl)}
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
