// src/components/Portfolio.tsx
import React from "react";
import "../styles/SkillsPage.css";
import { SiFrontendmentor } from "react-icons/si";
import { LuFileStack } from "react-icons/lu";
import { FaUserCheck, FaReact, FaAws, FaWordpress, FaPhp, FaLinux } from "react-icons/fa";
import { LuMonitor } from "react-icons/lu";
import { SiAmazonapigateway } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { RiTailwindCssFill } from "react-icons/ri";

interface Skills {
  id: number;
  title: string;
  description: string;
  icon: string | JSX.Element;
  projectUrl: string;
}

const skills: Skills[] = [
  {
    id: 1,
    title: "Front End Development",
    description:
      "I've been working as a front end developer for over 10 years. I have experience with HTML, CSS, JavaScript. I've worked on many projects and have experience with many different frameworks and libraries. I'm always looking to learn new things and improve my skills. I love to code and I'm always looking to learn new skills and technologies.",
    icon: <LuMonitor size='75' className="m-8" />,
    projectUrl: "https://www.frontendmentor.io/",
  },
  {
    id: 2,
    title: "Full Stack Development",
    description:
      "I've been doing full stack development for over 10 years using PHP and MYSQL backends to create REST API endpoints for dozens of projects. Recently I've been working Node.js for API development and I really enjoy it. I've done node as part of a cloud infrastructure project with AWS, as well as implementing Node back ends on Linux servers. ",
      icon: <LuFileStack size='75' className="m-8" />,
      projectUrl: "https://www.fullstackopen.com/en/",
  },
  {
    id: 3,
    title: "User Experience / User Interface",
    description:
      "I started out my professional development career doing UI/UX. One highlight project was designing the Interactive Visitor Map for the United States Forest Service and the US Department of Agriculture. I've always been interested in the user experience and how to make things easier for the user. I've done a lot of reading and research on the topic and I'm always looking to learn more.",
      icon: <FaUserCheck size='75' className="m-8" />,
    projectUrl:
      "https://www.interaction-design.org/literature/topics/ux-design",
  },
  {
    id: 4,
    title: "REST API",
    description:
      "I've created dozens of REST API endpoints for various projects. I've used PHP, Laravel, as well as Node.js to create APIs. I've also worked with API Gateway and Lambda functions on AWS. In a previous role, I worked along side a DevOps engineer to increase API endpoint performance by over 60%. I've also worked with API tools like Swagger and Postman.",
      icon: <SiAmazonapigateway size='75' className="m-8" />,
    projectUrl: "https://restfulapi.net/",
  },
  {
    id: 5,
    title: "Love to Code!",
    description:
      "I love coding and building applicaitons. I've been coding since I was a kid and I've been doing it professionally for over 10 years. I've worked on many different projects in different roles, and I've used multiple languages and frameworks. I'm always looking to learn new things and improve my skills.",
      icon: <FaLaptopCode size='75' className="m-8" />,
    projectUrl: "https://www.codecademy.com/",
  },
  {
    id: 6,
    title: "Mobile Applications",
    description:
      "I've built four mobile applications for Android and iOS with React Native in both Expo and 'ejected' projects. I've also used React Native to build cross platform applications. I've built apps from scratch and have experience in every aspect of the development process, from design to developement to deployment in the iOS and Android app stores.",
      icon: <MdPhoneIphone size='75' className="m-8" />,
    projectUrl: "https://developer.android.com/",
  },
  {
    id: 7,
    title: "Front End Libraries",
    description:
      "While my recent focus has been React and React Native, I've also developed in AngularJS, Angular 10, and Vue.js 3. In a recent role I quickly learned Vue to build new components and maintain existing legacy Vue applications, and later worked on migrating those applications to React.",
      icon: <FaReact size='75' className="m-8" />,
    projectUrl: "https://developer.android.com/",
  },
  {
    id: 8,
    title: "AWS - Amazon Web Services",
    description:
      "In two of my previous roles I've worked with AWS. I've used S3, EC2, RDS, Lambda, API Gateway, Amplify, Cognito, and CloudFront. I've worked on a cloud infrastructure project where I used AWS to create a scalable and secure cloud infrastructure. In 2023 I earned the AWS Certified Cloud Practitioner certification.",
      icon: <FaAws size='75' className="m-8" />,
    projectUrl: "https://developer.android.com/",
  },
  {
    id: 9,
    title: "CMS - Content Management Systems",
    description:
      "I've worked with WordPress, Joomla, Oktober and numerous other content management systems for 10+ years. I've built custom themes, open source and commercial extensions and plugins for WordPress, WooCommerce and Joomla. I have deep experience in managing, hosting and maintaining CMS sites.",
      icon: <FaWordpress size='75' className="m-8" />,
    projectUrl: "https://developer.android.com/",
  },
  {
    id: 10,
    title: "UI & React Frameworks",
    description:
      "I've worked with Bootstrap, Tailwind CSS, Materialize, Foundation, Bulma other CSS frameworks. Using these frameworks I've built responsive, mobile first websites and applications. I've also woked with numerous frameworks like Prime React, Material UI, React Bootstrap, and RSuite to build custom components and themes.",
      icon: <RiTailwindCssFill size='75' className="m-8" />,
    projectUrl: "https://developer.android.com/",
  },
  {
    id: 11,
    title: "PHP & MySQL",
    description:
      "I've been working with PHP and MySQL for over 10 years. I've built custom CMS systems, e-commerce sites, and web applications with PHP. I've built sites and API endpoints in pure PHP, as well as with the Laravel PHP framework. I've also worked with MySQL to create and manage databases.",
      icon: <FaPhp size='75' className="m-8" />,
    projectUrl: "https://developer.android.com/",
  },
  {
    id: 12,
    title: "Linux & Apache Web Server/Hosting",
    description:
      "For personal and side projects I've used Linux and Apache to host websites and applications on a Centos dedicated server. I've also used Apache to create virtual hosts and manage SSL certificates. I've also used Apache to create and manage .htaccess files for URL rewriting and security. I have experince with the whole hosting stack, from DNS to server configuration to application deployment.",
      icon: <FaLinux size='75' className="m-8" />,
    projectUrl: "https://developer.android.com/",
  },
];

const SkillsPage: React.FC = () => {
  return (

<div className="bg-background-color min-h-screen flex flex-col items-center justify-start mt-8 mx-2">
    <div className="hero-section flex justify-center w-full max-w-8xl p-10 mb-4">
        <div className="w-full">
            <div className="subheader bg-white rounded-lg shadow-lg p-4 text-xl font-bold text-center">
                Skills
            </div>
        </div>
    </div>
    <div className="hero-section flex flex-wrap justify-center items-start w-full max-w-8xl p-4">
        {skills.map((skill) => (
            <div
                key={skill.id}
                className="card flex flex-row items-center bg-white rounded-lg shadow-lg m-6 p-8 hover:shadow-xl transition-shadow duration-300 ease-in-out w-full md:w-1/2 lg:w-1/4"
            >

            <div className="h-32 w-32 mr-4 object-cover cursor-pointer">
                {skill.icon}
            </div>
                <div className="content flex flex-col justify-center">
                    <h3 className="text-xl font-semibold">{skill.title}</h3>
                    <p className="text-gray-700 text-justify">{skill.description}</p>
                </div>
            </div>
        ))}
    </div>
</div>


  );
};

export default SkillsPage;
