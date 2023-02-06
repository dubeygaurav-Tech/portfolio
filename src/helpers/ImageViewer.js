import React from "react";
import ReactImageViewer from "./ReactImageViewer";
import StackGrid from "react-stack-grid";
import Clients from "../components/Clients";
import { projects } from "../data";

export default function ImageViewer({photo}) {
    const [isOpen,setIsOpen]=React.useState(false);
    const [currImg,setCurrImg]=React.useState(0);
    const [photos,setPhotos]=React.useState(photo);

  const handleImageClose = () => {
    setIsOpen(false);
  };

  const gotoNextImg = () => {
    setCurrImg(currImg + 1)
  };

  const gotoPrevImg = () => {
    setCurrImg(currImg - 1)
  };

  return (
      <div>
        <StackGrid columnWidth={150}>
        {projects.map((project) => (
              <div className="flex relative ">
                <img
                  alt="gallery"
                  className="absolute inset-0 object-contain object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                  <Clients clients={project.clients}/>
                </div>
              </div>
          ))}
        </StackGrid>
        <ReactImageViewer
          imgs={photos}
          isOpen={isOpen}
          onClose={(e) => handleImageClose()}
          currImg={currImg}
          onClickPrev={gotoPrevImg}
          onClickNext={gotoNextImg}
        />
      </div>
    );
}