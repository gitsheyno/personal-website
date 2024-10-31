"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../styles/Skills.module.css";
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

const skillsData = [
  {
    category: "Frontend Frameworks",
    description:
      "As a frontend developer, I specialize in React, NextJS, Vue, NuxtJS, Vite, and Tailwind CSS to create sleek, modern designs, and use TypeScript for robust, maintainable code. With a passion for crafting dynamic web experiences, I utilize the latest technologies to build responsive and scalable applications. From accelerating development with Vite to designing stylish interfaces with Tailwind, I transform ideas into reality with a collaborative and adaptable approachLet's work together to elevate your web presence and deliver exceptional user experiences. Why choose me? I am dedicated to perfection, prioritizing your satisfaction in every project. With a strong emphasis on communication, I work closely with clients to understand their needs and exceed their expectations. By staying at the forefront of industry trends, I provide cutting-edge solutions that adapt to evolving technologies ,Ready to embark on a coding journey together? Contact me to discuss how we can bring your vision to life.",
    skills: [
      RiReactjsLine,
      RiNextjsFill,
      FaVuejs,
      SiTypescript,
      IoLogoJavascript,
      RiTailwindCssFill,
      SiRedux,
      SiReactquery,
    ],
    src: [CiMonitor],
    bg: "red",
  },
  {
    category: "Backend Skills",
    description:
      "On the backend, I specialize in TypeScript, Express.js, Postgres, and MongoDB. With a deep understanding of server-side architecture, I craft robust APIs and scalable solutions that power dynamic web experiences.Backend Expertise: Leveraging the power of TypeScript, I ensure the integrity and reliability of your codebase, providing a solid foundation for your applications. Using Express.js, I build efficient and secure APIs that facilitate seamless communication between the frontend and backend. Whether it's harnessing the power of Postgres for relational data or structuring documents with MongoDB, I bring a comprehensive skill set to manage your data effectively. Additionally, I implement both GraphQL and REST API to provide flexible and efficient data retrieval methods.Contact me today to discuss how we can seamlessly integrate your frontend and backend for a cohesive and exceptional user experience.",
    skills: [SiExpress, SiPostgresql, DiMongodb, DiNodejs, FaDatabase, SiRedux],
    src: [CiServer],
    bg: "green",
  },
  {
    category: "Testing Expertise",
    description:
      "I bring a wealth of expertise in ensuring application reliability and functionality, with a focus on robust unit and integration testing. Leading a team dedicated to quality, I specialize in tools like Vitest and Jest to deliver high-performing, thoroughly tested applications. My approach emphasizes Test-Driven Development (TDD), ensuring every component is carefully validated and integrates seamlessly.",
    skills: [SiVitest, SiCypress, SiPostman],
    src: [GrTest],
    bg: "orange",
  },
];

const SkillsTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.skillsContainer}>
      <h2 className={styles.skillsTitle}>What I do?</h2>
      <div className={styles.tabsContainer}>
        <div className={styles.tabs}>
          {skillsData.map((tab, index) => (
            <button
              key={index}
              className={`${styles.tabButton} ${
                activeTab === index ? styles.active : ""
              }`}
              onClick={() => setActiveTab(index)}
            >
              <div
                style={{ backgroundColor: `${tab.bg}` }}
                className={styles.buttonIcon}
              >
                {tab.src?.map((Icon, index) => (
                  <Icon key={index} />
                ))}
              </div>
              {tab.category}
            </button>
          ))}
        </div>

        <div className={styles.content}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className={styles.contentBox}
            >
              <p>{skillsData[activeTab].description}</p>
              <div className={styles.icons}>
                {skillsData[activeTab].skills?.map((Icon, index) => (
                  <div key={index} className={styles.icon}>
                    <Icon />
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default SkillsTabs;
