import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
//import { clients } from "../data";

export default function Projects({clients}) {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-2xl text-2xl font-medium title-font mb-4 text-white">
            Clients I've Worked With
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {clients.map((client) => (
            <a
              href={client.link}
              key={client.image}
              className="sm:w-full w-100 p-2">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="w-full h-full object-contain object-center"
                  src={client.image}
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
