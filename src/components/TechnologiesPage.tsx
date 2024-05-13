import React from "react";
import PieChartComponent from "./PieChartComponent";
import "../styles/TechnologiesPage.css";

// Define an interface for the input data structure
interface InputData {
  type: string;
  value: number;
  max: number;
  color: string;
}

// Define an interface for the chart series structure
interface ChartSeries {
  data: Array<{ name: string; value: number }>;
  innerRadius: number;
  outerRadius: number;
  colors: string[];
}

interface ChartData {
  name: string;
  details: string;
  data: InputData[];
}

const inputData: ChartData[] = [
  {
    name: "React.js",
    details: "Foo",
    data: [
      { type: "Years", value: 7, max: 10, color: "#8884d8" },
      { type: "Rating", value: 8, max: 10, color: "#82ca9d" },
    ],
  },
  {
    name: "React Native",
    details: "Bar",
    data: [
      { type: "Years", value: 5, max: 10, color: "#8dd1e1" },
      { type: "Rating", value: 8.25, max: 10, color: "#E8A09A" },
    ],
  },
  {
    name: "Vue.js",
    details: "Foo",
    data: [
      { type: "Years", value: 2, max: 10, color: "#8884d8" },
      { type: "Rating", value: 6.5, max: 10, color: "#82ca9d" },
    ],
  },
  {
    name: "AWS",
    details: "Bar",
    data: [
      { type: "Years", value: 3, max: 10, color: "#8dd1e1" },
      { type: "Rating", value: 6, max: 10, color: "#E8A09A" },
    ],
  },
  {
    name: "Node.js",
    details: "Foo",
    data: [
      { type: "Years", value: 1, max: 10, color: "#8884d8" },
      { type: "Rating", value: 6, max: 10, color: "#82ca9d" },
    ],
  },
  {
    name: "AngularJS",
    details: "Bar",
    data: [
      { type: "Years", value: 4, max: 10, color: "#8dd1e1" },
      { type: "Rating", value: 8, max: 10, color: "#E8A09A" },
    ],
  },
  {
    name: "Angular 2+",
    details: "Foo",
    data: [
      { type: "Years", value: 1, max: 10, color: "#8884d8" },
      { type: "Rating", value: 6.5, max: 10, color: "#82ca9d" },
    ],
  },
  {
    name: "REST API",
    details: "Bar",
    data: [
      { type: "Years", value: 6, max: 10, color: "#8dd1e1" },
      { type: "Rating", value: 8, max: 10, color: "#E8A09A" },
    ],
  },
  {
    name: "Javascript",
    details: "Foo",
    data: [
      { type: "Years", value: 7, max: 10, color: "#8884d8" },
      { type: "Rating", value: 7.75, max: 10, color: "#82ca9d" },
    ],
  },
  {
    name: "PHP",
    details: "Bar",
    data: [
      { type: "Years", value: 10, max: 10, color: "#8dd1e1" },
      { type: "Rating", value: 8, max: 10, color: "#E8A09A" },
    ],
  },
  {
    name: "Laravel",
    details: "Foo",
    data: [
      { type: "Years", value: 5, max: 10, color: "#8884d8" },
      { type: "Rating", value: 6, max: 10, color: "#82ca9d" },
    ],
  },
  {
    name: "HTML",
    details: "Bar",
    data: [
      { type: "Years", value: 10, max: 10, color: "#8dd1e1" },
      { type: "Rating", value: 9, max: 10, color: "#E8A09A" },
    ],
  },
  {
    name: "CSS",
    details: "Foo",
    data: [
      { type: "Years", value: 10, max: 10, color: "#8884d8" },
      { type: "Rating", value: 9, max: 10, color: "#82ca9d" },
    ],
  },
  {
    name: "UI/UX",
    details: "Bar",
    data: [
      { type: "Years", value: 10, max: 10, color: "#8dd1e1" },
      { type: "Rating", value: 9, max: 10, color: "#E8A09A" },
    ],
  },
  {
    name: "CMS - Content Mangement Systems",
    details: "Foo",
    data: [
      { type: "Years", value: 10, max: 10, color: "#8884d8" },
      { type: "Rating", value: 9.25, max: 10, color: "#82ca9d" },
    ],
  },
  {
    name: "Linux/Apache",
    details: "Bar",
    data: [
      { type: "Years", value: 10, max: 10, color: "#8dd1e1" },
      { type: "Rating", value: 6.76, max: 10, color: "#E8A09A" },
    ],
  },
  {
    name: "SaaS",
    details: "Foo",
    data: [
      { type: "Years", value: 6, max: 10, color: "#8884d8" },
      { type: "Rating", value: 8.5, max: 10, color: "#82ca9d" },
    ],
  },
  {
    name: "Startups",
    details: "Bar",
    data: [
      { type: "Years", value: 4, max: 10, color: "#8dd1e1" },
      { type: "Rating", value: 8, max: 10, color: "#E8A09A" },
    ],
  },
  {
    name: "FinTech",
    details: "Foo",
    data: [
      { type: "Years", value: 5.5, max: 10, color: "#8884d8" },
      { type: "Rating", value: 7.75, max: 10, color: "#82ca9d" },
    ],
  },
  {
    name: "Prompt Engineering",
    details: "Bar",
    data: [
      { type: "Years", value: 1, max: 10, color: "#8dd1e1" },
      { type: "Rating", value: 7.5, max: 10, color: "#E8A09A" },
    ],
  },
  {
    name: "Expo",
    details: "Foo",
    data: [
      { type: "Years", value: 2, max: 10, color: "#8884d8" },
      { type: "Rating", value: 7, max: 10, color: "#82ca9d" },
    ],
  },
  {
    name: "XCode",
    details: "Bar",
    data: [
      { type: "Years", value: 5, max: 10, color: "#8dd1e1" },
      { type: "Rating", value: 4, max: 10, color: "#E8A09A" },
    ],
  },
  {
    name: "Android Studio",
    details: "Foo",
    data: [
      { type: "Years", value: 5, max: 10, color: "#8884d8" },
      { type: "Rating", value: 4, max: 10, color: "#82ca9d" },
    ],
  },
  {
    name: "jQuery",
    details: "Bar",
    data: [
      { type: "Years", value: 5, max: 10, color: "#8dd1e1" },
      { type: "Rating", value: 6, max: 10, color: "#E8A09A" },
    ],
  },
  {
    name: "Wordpress",
    details: "Foo",
    data: [
      { type: "Years", value: 10, max: 10, color: "#8884d8" },
      { type: "Rating", value: 8.5, max: 10, color: "#82ca9d" },
    ],
  },
  {
    name: "Joomla",
    details: "Bar",
    data: [
      { type: "Years", value: 6, max: 10, color: "#8dd1e1" },
      { type: "Rating", value: 7, max: 10, color: "#E8A09A" },
    ],
  },
  {
    name: "Jira",
    details: "Foo",
    data: [
      { type: "Years", value: 6, max: 10, color: "#8884d8" },
      { type: "Rating", value: 7, max: 10, color: "#82ca9d" },
    ],
  },
  {
    name: "RayGun",
    details: "Bar",
    data: [
      { type: "Years", value: 3.5, max: 10, color: "#8dd1e1" },
      { type: "Rating", value: 7, max: 10, color: "#E8A09A" },
    ],
  },
  {
    name: "Karma/Phantom",
    details: "Foo",
    data: [
      { type: "Years", value: 3.5, max: 10, color: "#8884d8" },
      { type: "Rating", value: 6, max: 10, color: "#82ca9d" },
    ],
  },
  {
    name: "Jest",
    details: "Bar",
    data: [
      { type: "Years", value: 1, max: 10, color: "#8dd1e1" },
      { type: "Rating", value: 6, max: 10, color: "#E8A09A" },
    ],
  },
  {
    name: "GIT",
    details: "Foo",
    data: [
      { type: "Years", value: 10, max: 10, color: "#8884d8" },
      { type: "Rating", value: 8, max: 10, color: "#82ca9d" },
    ],
  },
  {
    name: "Gulp",
    details: "Bar",
    data: [
      { type: "Years", value: 5, max: 10, color: "#8dd1e1" },
      { type: "Rating", value: 7, max: 10, color: "#E8A09A" },
    ],
  },
  {
    name: "Mysql",
    details: "Foo",
    data: [
      { type: "Years", value: 10, max: 10, color: "#8884d8" },
      { type: "Rating", value: 7.5, max: 10, color: "#82ca9d" },
    ],
  },
  {
    name: "Splunk",
    details: "Bar",
    data: [
      { type: "Years", value: 2, max: 10, color: "#8dd1e1" },
      { type: "Rating", value: 7.6, max: 10, color: "#E8A09A" },
    ],
  },
  {
    name: "WHM/CPanel",
    details: "Foo",
    data: [
      { type: "Years", value: 8, max: 10, color: "#8884d8" },
      { type: "Rating", value: 9, max: 10, color: "#82ca9d" },
    ],
  },
  {
    name: "Snyk",
    details: "Bar",
    data: [
      { type: "Years", value: 2, max: 10, color: "#8dd1e1" },
      { type: "Rating", value: 7.5, max: 10, color: "#E8A09A" },
    ],
  },
  {
    name: "Typescript",
    details: "Foo",
    data: [
      { type: "Years", value: 1, max: 10, color: "#8884d8" },
      { type: "Rating", value: 6, max: 10, color: "#82ca9d" },
    ],
  },
  {
    name: "SonarCloud",
    details: "Bar",
    data: [
      { type: "Years", value: 2, max: 10, color: "#8dd1e1" },
      { type: "Rating", value: 6.6, max: 10, color: "#E8A09A" },
    ],
  },
  {
    name: "Jenkins",
    details: "Foo",
    data: [
      { type: "Years", value: 2, max: 10, color: "#8884d8" },
      { type: "Rating", value: 6, max: 10, color: "#82ca9d" },
    ],
  },
  {
    name: "Postman",
    details: "Bar",
    data: [
      { type: "Years", value: 5, max: 10, color: "#8dd1e1" },
      { type: "Rating", value: 7.75, max: 10, color: "#E8A09A" },
    ],
  },
  {
    name: "VS Code",
    details: "Foo",
    data: [
      { type: "Years", value: 5, max: 10, color: "#8884d8" },
      { type: "Rating", value: 7.8, max: 10, color: "#82ca9d" },
    ],
  },
  {
    name: "Tailwind CSS",
    details: "Foo",
    data: [
      { type: "Years", value: 1, max: 10, color: "#8884d8" },
      { type: "Rating", value: 6, max: 10, color: "#82ca9d" },
    ],
  },
];

const generateChartData = (data: InputData[]): ChartSeries[] => {
  return data.map((item, index) => ({
    data: [
      { name: item.type, value: item.value },
      { name: "Remaining", value: item.max - item.value },
    ],
    innerRadius: index === 0 ? 20 : 70,
    outerRadius: index === 0 ? 50 : 100,
    colors: [item.color, "#ddd"],
  }));
};

const TechnologiesPage: React.FC = () => {
  const chartSeries = inputData.map((item) => ({
    ...item,
    data: generateChartData(item.data),
  }));

  return (
    <div className="technologies-page">
      <div className="hero-section flex justify-center w-full max-w-8xl p-10 mb-4">
        <div className="w-full">
          <div className="subheader bg-white rounded-lg shadow-lg p-4 text-xl font-bold text-center">
            Technologies
          </div>
        </div>
      </div>
      {chartSeries.map((item, index) => (
        <div key={index} className="technologies-module">
          <h2>{item.name}</h2>
          {/* <p>{item.details}</p> */}
          <PieChartComponent series={item.data} />
        </div>
      ))}
    </div>
  );
};

export default TechnologiesPage;
