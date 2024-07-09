"use client";
import { useState } from "react";
import styles from "../styles/Experience.module.css";

const experiences = [
  {
    year: "2024",
    title: "Software Engineer (Frontend Focus)",
    company: "KNIME GmbH, Berlin Germany",
    details: [
      "Led migration from Options API to Composition API and TypeScript, improving performance by 15%.",
      "Migrated all KNIME packages to a monorepo ecosystem in collaboration with frontend developers, resulting in a 25% performance boost.",
      "Established utility functions and minimized code duplications by 8%, significantly improving code maintainability and efficiency; resulted in a 20% reduction in user complaints and enhanced overall user satisfaction.",
      "Introduced 3 searchable widgets, improving user experience by 20% and boosting client satisfaction by 100%.",
      "Implemented rigorous testing protocols using Jest for components, attaining 98% code coverage and ensuring system reliability, which led to a 35% decrease in critical bugs.",
      "Engineered a widget refresh button with monitoring and logging features in open source KNIME software, enhanced timestamp management and provided detailed analytics, leading to 10% improved system performance and 20% increased data accuracy.",
    ],
  },
  {
    year: "2020-2022",
    title: "Frontend Developer",
    company: "Programmers House, Tehran Iran",
    details: [
      "Applied rigorous Clean Coding standards and Test-Driven Development practices, cutting bug reports by 17% and decreasing customer-reported issues by 20% within the first quarter of implementation.",
      "Reduced load times by 10% through designing and developing React.js and components for seamless data integration.",
      "Boosted mobile user engagement by 35% by ensuring mobile responsiveness of web applications.",
      "Maintained 100% code integrity across multiple projects by managing source code versioning with Git.",
      "Engineered React Router migration to v6+, achieving a 15% reduction in bundle size and resolved path-matching issues, improving overall application performance.",
      "Experienced in workflow automation and build processes using Gulp and Webpack to streamline development and improve efficiency.",
      "Optimized data visualizations using D3.js, enhancing the charts' performance by 10%.",
      "Developed RESTful API integration within React.js Library and NextJS to facilitate seamless data exchange collaborating with backend team.",
      "Led successful migration of state management, transitioned from Redux Toolkit to React Query, resulting in a 12% increase in code maintainability and readability.",
      "Utilized Error Boundaries to catch JavaScript errors, preventing the entire app from crashing.",
    ],
  },
];

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className={styles.experience}>
      <h2>Experience</h2>
      <div className={styles.accordion}>
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`${styles["accordion-item"]} ${
              index === activeIndex ? styles.active : ""
            }`}
          >
            <div
              className={styles["accordion-item-header"]}
              onClick={() => handleToggle(index)}
            >
              {exp.year} - {exp.title} @ {exp.company}
            </div>
            <div className={styles["accordion-item-body"]}>
              <ul>
                {exp.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
