"use client";
import { FC, useState } from "react";
import { motion } from "framer-motion";

interface Experience {
  id: string;
  company: string;
  location: string;
  position: string;
  period: string;
  color: string;
  achievements: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    id: "knime",
    company: "KNIME",
    location: "BERLIN",
    position: "Frontend Developer",
    period: "JAN 2024 - DEC 2024",
    color: "#f7a440",
    achievements: [
      "Led migration from Options API to Composition API and TypeScript, improving performance by 15%.",
      "Migrated all KNIME packages to a monorepo ecosystem in collaboration with frontend developers, resulting in a 25% performance boost.",
      "Introduced and maintained 5 reusable components using VueJS and Typescript deployed across all projects to enhance development.",
      "Implemented rigorous testing protocols using Jest for components, attaining 98% code coverage and ensuring system reliability, which led to a 35% decrease in critical bugs.",
      "Restructured 4 KNIME widgets, adding search functionality, abstraction, TypeScript and built a multi-file upload widget from scratch, shared across open-source and business hub platforms, leading to 10% improved system performance and 20% increased data accuracy.",
      "Established a suite of utility functions to eliminate code duplication and enhance component abstraction, achieving an 8% reduction in redundant code and significantly improving maintainability.",
    ],
    technologies: [
      "Vue.js",
      "TypeScript",
      "Jest",
      "Monorepo",
      "Component Design",
    ],
  },
  {
    id: "programmers-house",
    company: "Programmers House",
    location: "Tehran",
    position: "Frontend Developer",
    period: "April 2020 - Feb 2022",
    color: "#5ba374",
    achievements: [
      "Applied rigorous Clean Coding standards and Test-Driven Development practices, cutting bug reports by 17% and decreasing customer-reported issues by 20% within the first quarter of implementation.",
      "Developed 4 websites using Next.js, leveraging its server-side rendering capabilities.",
      "Boosted mobile user engagement by 35% by ensuring mobile responsiveness of web applications.",
      "Maintained 100% code integrity across multiple projects by managing source code versioning with Git.",
      "Engineered React Router migration to v6+, Achieved a 15% reduction in bundle size and resolved path-matching issues, improving overall application performance.",
      "Leveraged workflow automation and build processes with Gulp, Webpack, and GitHub Actions to streamline development and enhance efficiency.",
      "Utilized GraphQL to optimize resulted in boosting overall web applications performance by 10%.",
      "Developed RESTful API integration within React.js Library and Typescript and NextJS to facilitate seamless data exchange collaborating with backend Team.",
      "Led successful migration of state management, Transitioned from Redux toolkit to Tanstack Query, resulting in a 12% increase in code maintainability and readability.",
      "Collaborated seamlessly alongside cross-functional teams including back-end engineers and design professionals.",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "GraphQL",
      "TanStack Query",
      "Git",
      "Webpack",
    ],
  },
];

const WorkExperience: FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div
      id="experiences"
      className="w-full py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4">
        {/* Header section */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase mb-2">
            PROFESSIONAL JOURNEY
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            My Work Experience
          </h3>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto"></div>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute top-0 bottom-0 left-6 md:left-1/2 w-1 bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0 ? "md:ml-auto md:pl-12" : "md:mr-auto md:pr-12"
              }`}
              style={{
                maxWidth: "95%",
                [index % 2 === 0 ? "md:marginRight" : "md:marginLeft"]: "50%",
              }}
            >
              {/* Timeline dot */}
              {/* <div
                className="absolute top-0 left-6 md:left-0 w-6 h-6 rounded-full z-10 shadow-md border-4 border-white dark:border-gray-800"
                style={{
                  backgroundColor: exp.color,
                  [index % 2 === 0 ? "md:right" : "md:left"]: "-3px",
                  [index % 2 === 0 ? "md:left" : "md:right"]: "auto",
                  transform: "translateX(-50%)",
                }}
              ></div> */}

              {/* Content card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="ml-12 md:ml-0 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow duration-300"
                onClick={() => toggleExpand(exp.id)}
              >
                {/* Company and period */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      {exp.company}
                      <span className="text-gray-500 dark:text-gray-400 font-normal text-base ml-2">
                        {exp.location}
                      </span>
                    </h4>
                    <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      {exp.position}
                    </p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="inline-block px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium">
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Achievements */}
                <div
                  className={`mt-4 overflow-hidden transition-all duration-500 ${
                    expandedId === exp.id ? "max-h-[2000px]" : "max-h-24"
                  }`}
                >
                  <ul className="list-disc ml-5 space-y-2 text-gray-700 dark:text-gray-300">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-sm">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Show more/less button */}
                <button className="mt-3 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline focus:outline-none flex items-center">
                  {expandedId === exp.id ? "Show less" : "Show more"}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                      expandedId === exp.id ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
