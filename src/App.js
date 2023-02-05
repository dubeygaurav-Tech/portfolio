import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Management from "./components/Management";
import Clients from "./components/Clients";
import ImageViewer from "./helpers/ImageViewer";
import { clients } from "./data";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Skills />
      <Management/>
      <Projects />
      {/* <Clients /> */}
      <Contact />
      
    </main>
  );
}
