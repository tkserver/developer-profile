import React, { useState } from "react";
import "../styles/ProjectsPage.css";
import utehub from "../assets/UteHub.jpg";
import hogiphone from "../assets/HOG.jpg";
import utahgolfcourses from "../assets/UtahGolfCourses.jpg";
import ImageModal from "./common/ImageModal";

interface Projects {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

const items: Projects[] = [
  {
    id: 1,
    title: "Ute Hub",
    description: `Perhaps my biggest personal project is <a class="link" href="https://www.utehub.com/" target="_blank" alt="Utah Utes fan community" title="UteFans">Ute Hub</a>, a sports fan community for the University of Utah. I built the site from scratch using a heavily customized WordPress, PHP, MySQL, and a custom theme. I've also built a mobile app for Ute Hub using React Native. The app consumes some of the standard WP REST API, but also consumes many REST API endpoints I custom built. The app is available in the <a class="link" href="https://apps.apple.com/us/app/ute-hub/id1252441645" target="_blank" alt="Utah Utes fan community" title="Ute Hub Mobile App">iOS App Store</a> and <a class="link" href="https://play.google.com/store/apps/details?id=com.tmkpro.utehub" target="_blank" alt="Utah Utes fan community" title="Ute Hub Mobile App">Google Play Store</a> . STACK: React Native, WordPress, PHP, MySQL, REST API, Linux, Apache, iOS, Android.`,
    imageUrl: utehub,
    projectUrl: "https://www.utehub.com/",
  },
  {
    id: 2,
    title: "Hooked on Golf Blog",
    description: "One of the world's biggest and longest running golf blogs, established in 2004. The site contains thousands of golf articles, reviews, photos, opinions, and various other content for golfers. The app was originally built in 2017 in Angular/Ionic but has been recently rebuilt in React Native and Expo. The mobile app consumes standard WP REST API data. STACK: React Native, WordPress, PHP, MySQL, REST API, Linux, Apache, iOS, Android.",
    imageUrl: hogiphone,
    projectUrl: "https://www.hookedongolfblog.com/",
  },
  {
    id: 3,
    title: "Utah Golf Courses",
    description: "My contribution to the local golf community in Utah is the free Utah Golf Courses app. The app is a directory of all golf courses in Utah. Users can view course details, photos, read playing advice, see a map of the course, and map directions to the course. Utah Golf Courses was built about 2017, utilizing AngularJS and Ionic with a Laravel REST API backend. The app was rebuilt in 2024 in React Native with a Node.js REST API backend. STACK: React Native, Node.js, MySQL, REST API, Linux, Apache, iOS, Android.",
    imageUrl: utahgolfcourses,
    projectUrl: "https://www.utahgolfcourses.com/",
  },
];

const ProjectsPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="bg-background-color min-h-screen flex flex-col items-center justify-start mt-8 mx-2">
      <div className="hero-section flex justify-center w-full max-w-8xl p-10 mb-4">
        <div className="w-full">
          <div className="subheader bg-white rounded-lg shadow-lg p-4 text-xl font-bold text-center">
            Projects
          </div>
        </div>
      </div>
      <div className="hero-section projects-section flex flex-wrap justify-center items-start w-full max-w-8xl p-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="card flex flex-row items-center bg-white rounded-lg shadow-lg m-6 p-8 hover:shadow-xl transition-shadow duration-300 ease-in-out w-full sm:w-1/2 lg:w-1/2"
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="h-32 w-32 mr-4 object-cover cursor-pointer"
              onClick={() => handleImageClick(item.imageUrl)}
            />
            <div className="content flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-2 text-left text-black">{item.title}</h3>
              <p className="text-gray-700 text-justify" dangerouslySetInnerHTML={{ __html: item.description }}></p>
            </div>
          </div>
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

export default ProjectsPage;
