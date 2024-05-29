import React, { useState } from "react";
import "../styles/LinksPage.css";
import ImageModal from "./common/ImageModal";
import tkserver from "../assets/tkserver.png";
import stackoverflow from "../assets/stackoverflow.webp";
import github from "../assets/github.png";
import codepen from "../assets/codepen.png";
import linkedin from "../assets/linkedin.jpg";
import appleappstore from "../assets/appleappstore.png";
import googleplaystore from "../assets/googleplaystore.png";

interface Links {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

const items: Links[] = [

  {
    id: 1,
    title: "Apple App Store Apps",
    description: "Here you'll find my iOS apps in the Apple App Store. I've built a few apps for learning, fun, and to contribute to communities I enjoy.",
    imageUrl: appleappstore,
    projectUrl: "https://apps.apple.com/us/developer/tony-korologos/id1221789537",
  },
  {
    id: 1,
    title: "Google Play Store Apps",
    description: "Here you'll find my Android apps in the Google Play Store. I've built a few apps for learning, fun, and to contribute to communities I enjoy.",
    imageUrl: googleplaystore,
    projectUrl: "https://play.google.com/store/apps/developer?id=Tony+Korologos",
  },
  {
    id: 3,
    title: "GitHub",
    description: `My GitHub page, for you code peepers. I've been using mostly BitBucket for the last 8 years however. :-)`,
    imageUrl: github,
    projectUrl: "https://github.com/tkserver",
  },
  {
    id: 4,
    title: "Stack Overflow",
    description: "My Stack Overflow page. With the advent of AI, I don't spend as much time on Stack Overflow as I used to!",
    imageUrl: stackoverflow,
    projectUrl: "https://stackoverflow.com/users/5731888/mediaguru",
  },
  {
    id: 5,
    title: "TK Server",
    description: "Ecommerce site I used for distributing my commercial Joomla and WordPress PHP plugins and extensions.",
    imageUrl: tkserver,
    projectUrl: "https://www.tkserver.com",
  },
  {
    id: 6,
    title: "Code Pen",
    description: "My Code Pen page. A few practice challenges and some functions I like to keep handy.",
    imageUrl: codepen,
    projectUrl: "https://codepen.io/mediaguru/pens/public",
  },
  {
    id: 7,
    title: "LinkedIn",
    description: "LinkedIn, where I endorse people I don't know for skills I don't know they have.",
    imageUrl: linkedin,
    projectUrl: "https://www.linkedin.com/in/tonykorologos/",
  }
];

const LinksPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="bg-background-color min-h-screen flex flex-col items-center justify-start mt-8 mx-2">
      <div className="hero-section flex justify-center w-full max-w-8xl p-10 mb-4">
        <div className="w-full">
          <div className="subheader bg-white rounded-lg shadow-lg p-4 text-xl font-bold text-center">
            Links
          </div>
        </div>
      </div>
      <div className="hero-section links-section flex flex-wrap justify-center items-start w-full max-w-8xl p-4">
        {items.map((item) => (
          <a
            key={item.id}
            href={item.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            title={item.title}
            className="card flex flex-row items-center bg-white rounded-lg shadow-lg m-6 p-8 hover:shadow-xl transition-shadow duration-300 ease-in-out w-full sm:w-1/2 lg:w-1/2 cursor-pointer"
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="h-16 w-16 mr-4 object-cover"
            />
            <div className="content flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-2 text-left text-black">{item.title}</h3>
              <p className="text-gray-700 text-justify" dangerouslySetInnerHTML={{ __html: item.description }}></p>
            </div>
          </a>
        ))}
      </div>
      <ImageModal
        imageUrl={selectedImage || ""}
        isOpen={selectedImage !== null}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default LinksPage;
