// components/SkillsTabs.tsx
"use client";
import { useState } from "react";
import styles from "../styles/Skills.module.css";
import { RiReactjsLine } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { FaVuejs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { SiReactquery } from "react-icons/si";

import { SiExpress } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { DiNodejs } from "react-icons/di";
import { FaDatabase } from "react-icons/fa6";

import { SiVitest } from "react-icons/si";
import { SiCypress } from "react-icons/si";
import { SiPostman } from "react-icons/si";

import { CiServer } from "react-icons/ci";
import { CiMonitor } from "react-icons/ci";
import { GrTest } from "react-icons/gr";

import Image from "next/image";

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
      "I bring a wealth of expertise in ensuring the reliability and functionality of your applications. My proficiency spans a variety of tools, with a particular focus on Cypress, where I lead a team in delivering high-quality end-to-end testing solutions. From robust API testing using Postman to intricate unit testing with IntelliJ, I employ a comprehensive testing strategy to fortify your codebase.Testing Leadership and Innovation: Guiding a dedicated team, I leverage Cypress to conduct thorough end-to-end testing, ensuring your applications perform seamlessly across diverse scenarios. Postman is my go-to for meticulous API testing, guaranteeing that your backend systems are as reliable as your frontend. In the world of unit testing, I utilize the power of IntelliJ to meticulously examine and validate individual components. As a trailblazer in testing, I'm also at the forefront of the evolving landscape with Vitest. Together, let's ensure your applications not only meet but exceed the highest standards of quality. Connect with me to explore how we can elevate your testing processes and deliver flawless user experiences.",
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
                {skillsData[index].src?.map((Item, index) => (
                  <Item key={index} />
                ))}
              </div>
              {tab.category}
            </button>
          ))}
        </div>
        <div className={styles.content}>
          <div className={styles.contentBox}>
            <p>{skillsData[activeTab].description}</p>
            <div className={styles.icons}>
              {skillsData[activeTab].skills?.map((Item, index) => (
                <object key={index} className={styles.icons}>
                  <div className={styles.icon}>
                    <Item key={index} />
                  </div>
                </object>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsTabs;
