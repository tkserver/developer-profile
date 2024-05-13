// create a new file called TechnologiesModules.tsx in the components folder
import React from "react";
import "../styles/TechnologiesModules.css";
import {
  FaReact,
  FaPhp,
  FaAws,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaEye,
} from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";

// create react function component
const TechnologiesModules: React.FC = () => {
  return (
    <div className="mx-auto px-4 hero-section mt-12 max-w-8xl">
      <div className="skills-section my-8 w-full">
        <h2 className="text-2xl font-bold text-center">Core Technologies</h2>
        <div className="flex flex-wrap justify-center items-center mt-4">
          <div className="w-48 h-48 p-4 m-2 shadow-lg rounded-lg hover:scale-110 transition-transform flex flex-col items-center justify-center">
            <FaReact size={50} />
            <p className="text-center mt-2">React</p>
          </div>
          <div className="w-48 h-48 p-4 m-2 shadow-lg rounded-lg hover:scale-110 transition-transform flex flex-col items-center justify-center">
            <TbBrandReactNative size={50} />
            <p className="text-center mt-2">React Native</p>{" "}
            {/* Corrected the technology name */}
          </div>
          <div className="w-48 h-48 p-4 m-2 shadow-lg rounded-lg hover:scale-110 transition-transform flex flex-col items-center justify-center">
            <FaAws size={50} />
            <p className="text-center mt-2">AWS</p>
          </div>
          <div className="w-48 h-48 p-4 m-2 shadow-lg rounded-lg hover:scale-110 transition-transform flex flex-col items-center justify-center">
            <FaPhp size={50} />
            <p className="text-center mt-2">PHP</p>
          </div>
          <div className="w-48 h-48 p-4 m-2 shadow-lg rounded-lg hover:scale-110 transition-transform flex flex-col items-center justify-center">
            <FaHtml5 size={50} />
            <p className="text-center mt-2">HTML</p>
          </div>
          <div className="w-48 h-48 p-4 m-2 shadow-lg rounded-lg hover:scale-110 transition-transform flex flex-col items-center justify-center">
            <FaCss3Alt size={50} />
            <p className="text-center mt-2">CSS</p>
          </div>
          <div className="w-48 h-48 p-4 m-2 shadow-lg rounded-lg hover:scale-110 transition-transform flex flex-col items-center justify-center">
            <IoLogoJavascript size={50} />
            <p className="text-center mt-2">Javascript</p>
          </div>
          <div className="w-48 h-48 p-4 m-2 shadow-lg rounded-lg hover:scale-110 transition-transform flex flex-col items-center justify-center">
            <FaNodeJs size={50} />
            <p className="text-center mt-2">Node.js</p>
          </div>
          <div className="w-full flex justify-center mt-4 flex-row">
            <a href="/developer/technologies" className="bg-primary text-white px-4 py-2 rounded-lg flex">
              <FaEye size={20} className="mr-2" />
              View All Technologies I'm Familiar With
            </a>
          </div>
        </div>
      </div>
      {/* Other modules */}
    </div>
  );
};

export default TechnologiesModules;
