import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";
import Clients from "./Clients"

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full h-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            EMPLOYMENT HISTORY
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            In the diverse world of technologies and products, got the opportunity to work with esteemed organizations
            in the Insurance and Banking Domain.
            <br/>
            <br/>
            <i>(Hover on each logo to check the details)</i>
          </p>
        </div>
        <div className="grid grid-cols-2 hover:grid-cols-6 gap-4 -m-2 bg-gray">
          {projects.map((project) => (
              <div className="flex flex-wrap relative w-full" id={project}>
                <img
                  alt="gallery"
                  className="absolute inset-0 object-contain object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
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
        </div>
      </div>
    </section>
  );
}
