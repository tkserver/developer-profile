import React from "react";
import "../styles/HomePage.css"; // Ensure any needed global styles are still imported
import profilePhoto from "../assets/profile-photo.jpg";
import TechnologiesModules from "./TechnologiesModules";
import SkillsModules from "./SkillsModules";
import CompaniesModules from "./CompaniesPage";

interface HomePageProps {
  introBackgroundColor?: string; // Assuming these are Tailwind class names
  profileBackgroundColor?: string; // Assuming these are Tailwind class names
}

const HomePage: React.FC<HomePageProps> = ({
  introBackgroundColor = "bg-secondary",
  profileBackgroundColor = "bg-primary",
}) => {
  return (
    <div className="home-page bg-background-color min-h-screen flex flex-col items-center">
      <div className="hero-section flex flex-col md:flex-row md:items-center w-full max-w-8xl p-4">
        <div
          className={`intro-text flex-1 ${introBackgroundColor} p-4 rounded-lg shadow-lg`}
        >
          <h1 className="text-4xl font-bold">Welcome!</h1>
          <p className="mt-2 text-lg">
            I'm Tony Korologos, a senior software engineer / web developer with over 15 years of
            experience. I have a broad range of skills and experience which can be valuable to any project. I love to code and I'm always looking to learn new skills and technologies.
          </p>
        </div>
        <div
          className={`profile-photo flex-1 ${profileBackgroundColor} flex justify-center items-center p-4 rounded-lg shadow-lg m-4`}
        >
          <img
            src={profilePhoto}
            alt="Profile"
            className="max-w-xs rounded-full"
          />
        </div>
      </div>
      <SkillsModules />
      <TechnologiesModules />
      <CompaniesModules />
    </div>
  );
};

export default HomePage;
