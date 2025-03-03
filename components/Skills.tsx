"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiReactjsLine, RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { FaVuejs, FaDatabase } from "react-icons/fa";
import {
  SiTypescript,
  SiRedux,
  SiReactquery,
  SiExpress,
  SiPostgresql,
  SiVitest,
  SiCypress,
  SiPostman,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { DiMongodb, DiNodejs } from "react-icons/di";
import { CiServer, CiMonitor } from "react-icons/ci";
import { GrTest } from "react-icons/gr";
import Link from "next/link";

const skillsData = [
  {
    category: "Frontend Skills",
    description:
      "As a frontend developer, I specialize in React, NextJS, Vue, NuxtJS, Vite, and Tailwind CSS to create sleek, modern designs, and use TypeScript for robust, maintainable code. With a passion for crafting dynamic web experiences, I utilize the latest technologies to build responsive and scalable applications. From accelerating development with Vite to designing stylish interfaces with Tailwind, I transform ideas into reality with a collaborative and adaptable approach. Let's work together to elevate your web presence and deliver exceptional user experiences.",
    skills: [
      { name: "React", icon: RiReactjsLine, url: "https://react.dev/" },
      { name: "Next.js", icon: RiNextjsFill, url: "https://nextjs.org/" },
      { name: "Vue.js", icon: FaVuejs, url: "https://vuejs.org/" },
      { name: "Nuxt.js", icon: FaVuejs, url: "https://nuxt.com/" },
      { name: "Vite", icon: SiTypescript, url: "https://vitejs.dev/" },
      {
        name: "TypeScript",
        icon: SiTypescript,
        url: "https://www.typescriptlang.org/",
      },
      {
        name: "JavaScript",
        icon: IoLogoJavascript,
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        name: "Tailwind CSS",
        icon: RiTailwindCssFill,
        url: "https://tailwindcss.com/",
      },
      { name: "Redux", icon: SiRedux, url: "https://redux.js.org/" },
      {
        name: "React Query",
        icon: SiReactquery,
        url: "https://tanstack.com/query/latest",
      },
    ],
    src: [CiMonitor],
    color: "from-red-500 to-pink-600",
    iconBg: "bg-red-100 dark:bg-red-900/30",
    iconColor: "text-red-600 dark:text-red-400",
  },
  {
    category: "Backend Skills",
    description:
      "On the backend, I specialize in TypeScript, Express.js, Postgres, and MongoDB. With a deep understanding of server-side architecture, I craft robust APIs and scalable solutions that power dynamic web experiences.",
    skills: [
      { name: "Express.js", icon: SiExpress, url: "https://expressjs.com/" },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        url: "https://www.postgresql.org/",
      },
      { name: "MongoDB", icon: DiMongodb, url: "https://www.mongodb.com/" },
      { name: "Node.js", icon: DiNodejs, url: "https://nodejs.org/" },
      { name: "GraphQL", icon: FaDatabase, url: "https://graphql.org/" },
      { name: "REST API", icon: FaDatabase, url: "https://restfulapi.net/" },
      { name: "Redux", icon: SiRedux, url: "https://redux.js.org/" },
    ],
    src: [CiServer],
    color: "from-green-500 to-emerald-600",
    iconBg: "bg-green-100 dark:bg-green-900/30",
    iconColor: "text-green-600 dark:text-green-400",
  },
  {
    category: "Testing Expertise",
    description:
      "I bring a wealth of expertise in ensuring application reliability and functionality, with a focus on robust unit and integration testing. Leading a team dedicated to quality, I specialize in tools like Vitest and Jest to deliver high-performing, thoroughly tested applications.",
    skills: [
      { name: "Vitest", icon: SiVitest, url: "https://vitest.dev/" },
      { name: "Cypress", icon: SiCypress, url: "https://www.cypress.io/" },
      { name: "Postman", icon: SiPostman, url: "https://www.postman.com/" },
      { name: "Jest", icon: SiPostman, url: "https://jestjs.io/" },
    ],
    src: [GrTest],
    color: "from-orange-500 to-amber-600",
    iconBg: "bg-orange-100 dark:bg-orange-900/30",
    iconColor: "text-orange-600 dark:text-orange-400",
  },
];

const SkillsTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
          What I do?
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mt-4"></div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Tabs on the left for larger screens, top for mobile */}
        <div className="lg:w-1/4">
          <div className="flex flex-row lg:flex-col gap-4 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0">
            {skillsData.map((tab, index) => (
              <button
                key={index}
                className={`flex items-center gap-4 p-4 rounded-xl transition-all w-full whitespace-nowrap
                  ${
                    activeTab === index
                      ? `bg-gradient-to-r ${tab.color} text-white shadow-lg`
                      : "bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                  }`}
                onClick={() => setActiveTab(index)}
              >
                <div
                  className={`flex items-center justify-center w-12 h-12 rounded-full ${
                    activeTab === index ? "bg-white/20" : tab.iconBg
                  } ${activeTab === index ? "text-white" : tab.iconColor}`}
                >
                  {tab.src?.map((Icon, idx) => (
                    <Icon key={idx} className="text-2xl" />
                  ))}
                </div>
                <span className="font-medium">{tab.category}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content on the right with fixed height */}
        <div className="lg:w-3/4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8 h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <div className="prose dark:prose-invert max-w-none mb-8">
                  <div className="max-h-64 overflow-y-auto pr-2 custom-scrollbar">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {skillsData[activeTab].description}
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-4">
                    Key Technologies:
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {skillsData[activeTab].skills.map((skill, index) => (
                      <Link
                        href={skill.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={index}
                        className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-950 transition-colors"
                      >
                        <div
                          className={`flex items-center justify-center w-12 h-12 rounded-full ${skillsData[activeTab].iconBg}`}
                        >
                          <skill.icon
                            className={`text-2xl ${skillsData[activeTab].iconColor}`}
                          />
                        </div>
                        <span className="text-sm text-center text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsTabs;
