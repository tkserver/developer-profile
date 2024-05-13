// create a new file called TechnologiesModules.tsx in the components folder
import React from "react";
import "../styles/TechnologiesModules.css";
import {
  FaSearch,
  FaCode,
  FaMobileAlt,
  FaBug,
  FaJira
} from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";
import { GoStack } from "react-icons/go";
import { FaRegSmile } from "react-icons/fa";
import { SiAmazonapigateway } from "react-icons/si";

// create react function component
const TechnologiesModules: React.FC = () => {
  return (
    <div className="mx-auto px-4 hero-section mt-12 max-w-8xl">
      <div className="skills-section my-8 w-full">
        <h2 className="text-2xl font-bold text-center">Core Skills</h2>
        <div className="flex flex-wrap justify-center items-center mt-4">
          <div className="w-48 h-48 p-4 m-2 shadow-lg rounded-lg hover:scale-110 transition-transform flex flex-col items-center justify-center">
            <SiFrontendmentor size={50} />
            <p className="text-center mt-2">Front End Development</p>
          </div>
          <div className="w-48 h-48 p-4 m-2 shadow-lg rounded-lg hover:scale-110 transition-transform flex flex-col items-center justify-center">
            <GoStack size={50} />
            <p className="text-center mt-2">Full Stack Development</p>{" "}
            {/* Corrected the technology name */}
          </div>
          <div className="w-48 h-48 p-4 m-2 shadow-lg rounded-lg hover:scale-110 transition-transform flex flex-col items-center justify-center">
            <FaRegSmile size={50} />
            <p className="text-center mt-2">User Experience / User Interface</p>
          </div>
          <div className="w-48 h-48 p-4 m-2 shadow-lg rounded-lg hover:scale-110 transition-transform flex flex-col items-center justify-center">
            <SiAmazonapigateway size={50} />
            <p className="text-center mt-2">REST API</p>
          </div>
          <div className="w-48 h-48 p-4 m-2 shadow-lg rounded-lg hover:scale-110 transition-transform flex flex-col items-center justify-center">
            <FaCode size={50} />
            <p className="text-center mt-2">Love to Code!</p>
          </div>
          <div className="w-48 h-48 p-4 m-2 shadow-lg rounded-lg hover:scale-110 transition-transform flex flex-col items-center justify-center">
            <FaMobileAlt size={50} />
            <p className="text-center mt-2">Mobile Applications</p>
          </div>
          <div className="w-48 h-48 p-4 m-2 shadow-lg rounded-lg hover:scale-110 transition-transform flex flex-col items-center justify-center">
            <FaBug size={50} />
            <p className="text-center mt-2">Problem Solving / Bug Squashing</p>
          </div>
          <div className="w-48 h-48 p-4 m-2 shadow-lg rounded-lg hover:scale-110 transition-transform flex flex-col items-center justify-center">
            <FaJira size={50} />
            <p className="text-center mt-2">Agile</p>
          </div>
          <div className="w-full flex justify-center mt-4 flex-row">
            <a href="/developer/skills" className="bg-primary text-white px-4 py-2 rounded-lg flex">
              <FaSearch size={20} className="mr-2" />
              View Complete Skills List
            </a>
          </div>
        </div>
      </div>
      {/* Other modules */}
    </div>
  );
};

export default TechnologiesModules;
