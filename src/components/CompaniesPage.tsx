// create a new file called TechnologiesModules.tsx in the components folder
import React from "react";
import "../styles/TechnologiesModules.css";
import webbank from "../assets/webbank.png";
import progressive from "../assets/progressiveleasing.png";
import riskrecon from "../assets/riskrecon.png";
import stg from "../assets/stg.png";
import zionsbank from "../assets/zionsbank.png";
import forestservice from "../assets/forestservice.png";

// create react function component
const CompaniesModules: React.FC = () => {
  return (
    <div className="mx-auto px-4 hero-section mt-12 max-w-8xl">
      <div className="skills-section my-8 w-full">
        <h2 className="text-2xl font-bold text-center">Experience</h2>
        <div className="flex flex-wrap justify-center items-center mt-4">
          <div className="w-48 h-48 p-4 m-2 shadow-lg rounded-lg hover:scale-110 transition-transform flex flex-col items-center justify-center">
            <img src={webbank} alt="webbank" className="w-28"/>
            <p className="text-center mt-2">WebBank</p>
          </div>
          <div className="w-48 h-48 p-4 m-2 shadow-lg rounded-lg hover:scale-110 transition-transform flex flex-col items-center justify-center">
            <img src={progressive} alt="progressive leasing"/>
            <p className="text-center mt-2">Progressive Leasing</p>{" "}
            {/* Corrected the technology name */}
          </div>
          <div className="w-48 h-48 p-4 m-2 shadow-lg rounded-lg hover:scale-110 transition-transform flex flex-col items-center justify-center">
            <img src={riskrecon} alt="riskrecon"/>
            <p className="text-center mt-2">RiskRecon</p>
          </div>
          <div className="w-48 h-48 p-4 m-2 shadow-lg rounded-lg hover:scale-110 transition-transform flex flex-col items-center justify-center">
            <img src={stg} alt="stg"/>
            <p className="text-center mt-2">Software Technology Group</p>
          </div>
          <div className="w-48 h-48 p-4 m-2 shadow-lg rounded-lg hover:scale-110 transition-transform flex flex-col items-center justify-center">
           <img src={zionsbank} alt="zions bank" className="w-32"/>
            <p className="text-center mt-2">Zions Bank</p>
          </div>
          <div className="w-48 h-48 p-4 m-2 shadow-lg rounded-lg hover:scale-110 transition-transform flex flex-col items-center justify-center">
            <img src={forestservice} alt="forest service" className="size-24" />
            <p className="text-center mt-2">US Forest Service</p>
          </div>
          {/* <div className="w-full flex justify-center mt-4 flex-row">
            <a href="//experience" className="bg-primary text-white px-4 py-2 rounded-lg flex">
              <VscPreview size={20} className="mr-2" />
              View Details
            </a>
          </div> */}
        </div>
      </div>
      {/* Other modules */}
    </div>
  );
};

export default CompaniesModules;