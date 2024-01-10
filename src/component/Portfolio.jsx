// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";
import portfolios from "../data/portfolioData";
import { Modal } from "flowbite-react";

const Portfolio = () => {
  const openLink = (url) => {
    window.open(url, "_blank");
  };

  const [selectedProject, setSelectedProject] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const openProjectDetails = (project) => {
    setSelectedProject(project);
    setOpenModal(true);
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
            These are some projects that I have worked on
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0">
          {portfolios.map(({ id, img, title, desc, repoUrl, website }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <div className="flex items-center justify-center">
                <img src={img} alt="" className="rounded-md" />
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-300 hover:scale-110"
                  onClick={() =>
                    openProjectDetails({
                      id,
                      img,
                      title,
                      desc,
                      repoUrl,
                      website,
                    })
                  }
                >
                  Detail
                </button>
              </div>
            </div>
          ))}
        </div>
        <Modal
          show={openModal}
          size={"6xl"}
          onClose={() => setOpenModal(false)}
        >
          <Modal.Header className="flex text-center">
            {selectedProject?.title}
          </Modal.Header>
          <Modal.Body className="text-justify">
            <div className="space-y-6 flex flex-col">
              <div className="flex justify-center">
                <img
                  src={selectedProject?.img}
                  alt=""
                  className="rounded-md w-4/5"
                />
              </div>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                {selectedProject?.desc}
              </p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button
              className="w-1/2 px-6 duration-300 hover:scale-110"
              onClick={() => openLink(selectedProject?.repoUrl)}
            >
              Code
            </button>
            <button
              className="w-1/2 px-6 duration-300 hover:scale-110"
              onClick={() => openLink(selectedProject?.website)}
            >
              Website
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Portfolio;
