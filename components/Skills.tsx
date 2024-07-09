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
      "A frontend developer specializing in Vue 3, Nuxt 3, Vite, Pinia for state management, Tailwind for sleek designs, and TypeScript for robust code. With a passion for creating dynamic web experiences, I leverage the latest technologies to build responsive and scalable applications. From speeding up development with Vite to crafting stylish interfaces with Tailwind, I bring ideas to life with a collaborative and adaptable approach. Lets work together to elevate your web presence and deliver exceptional user experiences. Why choose me? With a dedication to perfection, I prioritize your satisfaction in every project. Emphasizing communication, I work closely with clients to understand their needs and deliver beyond expectations. Adapting to evolving technologies, I stay at the forefront of industry trends to provide cutting-edge solutions. Ready to embark on a coding journey together? Contact me and lets discuss how we can bring your vision to life.",
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
  },
  {
    category: "Backend Skills",
    description:
      "A frontend developer specializing in Vue 3, Nuxt 3, Vite, Pinia for state management, Tailwind for sleek designs, and TypeScript for robust code. With a passion for creating dynamic web experiences, I leverage the latest technologies to build responsive and scalable applications. From speeding up development with Vite to crafting stylish interfaces with Tailwind, I bring ideas to life with a collaborative and adaptable approach. Lets work together to elevate your web presence and deliver exceptional user experiences. Why choose me? With a dedication to perfection, I prioritize your satisfaction in every project. Emphasizing communication, I work closely with clients to understand their needs and deliver beyond expectations. Adapting to evolving technologies, I stay at the forefront of industry trends to provide cutting-edge solutions. Ready to embark on a coding journey together? Contact me and lets discuss how we can bring your vision to life.",
    skills: [SiExpress, SiPostgresql, DiMongodb, DiNodejs, FaDatabase, SiRedux],
    src: [CiServer],
  },
  {
    category: "Testing Expertise",
    description:
      "Testing Leadership and Innovation: Guiding a dedicated team, I leverage Cypress to conduct thorough end-to-end testing, ensuring your applications perform seamlessly across diverse scenarios. Postman is my go-to for meticulous API testing, guaranteeing that your backend systems are as reliable as your frontend. In the world of unit testing, I utilize the power of IntelliJ to meticulously examine and validate individual components. As a trailblazer in testing, I'm also at the forefront of the evolving landscape with Vitest. Together, let's ensure your applications not only meet but exceed the highest standards of quality. Connect with me to explore how we can elevate your testing processes and deliver flawless user experiences.",
    skills: [SiVitest, SiCypress, SiPostman],
    src: [GrTest],
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
              <div className={styles.buttonIcon}>
                {skillsData[index].src?.map((Item) => (
                  <Item />
                ))}
              </div>
              {tab.category}
            </button>
          ))}
        </div>
        <div className={styles.content}>
          <div className={styles.contentBox}>
            <p>{skillsData[activeTab].description}</p>
            <object className={styles.icons}>
              {skillsData[activeTab].skills?.map((Item, index) => (
                <div className={styles.icon}>
                  <Item key={index} />
                </div>
              ))}
            </object>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsTabs;
