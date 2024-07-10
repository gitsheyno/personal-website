import styles from "../styles/LandingPage.module.css";

const WorkExperience = () => {
  return (
    <div id="experiences" className={styles.container}>
      <section>
      <h1 className={styles.title}>My Work Experience</h1>
      <div className={styles.timeline}>
        <div className={styles.entry}>
          <div
            className={styles.circle}
            style={{ backgroundColor: "#f7a440" }}
          ></div>
          <div className={styles.content}>
            <h2>KNIME, BERLIN</h2>
            <p>JAN 2024 - Present</p>
            <ul>
              <li>
                Led migration from Options API to Composition API and TypeScrip,
                improving performance by 15%.
              </li>
              <li>
                Established utility functions and minimized code duplications by
                8%, significantly improving code maintainability and efficiency;
                resulted in a 20% reduction in user complaints and enhanced
                overall user satisfaction.
              </li>
              <li>
                Introduced 3 searchable widgets, improving user experience by
                20% and boosting client satisfaction by 100%.
              </li>
              <li>
                Implemented rigorous testing protocols using Jest for
                components, attaining 98% code coverage and ensuring system
                reliability, which led to a 35% decrease in critical bugs.
              </li>
              <li>
                Engineered a widget refresh button with monitoring and logging
                features in open source KNIME software, enhanced timestamp
                management and provided detailed analytics, leading to 10%
                improved system performance and 20% increased data accuracy.
              </li>
              <li>
                Migrated all KNIME packages to a monorepo ecosystem in
                collaboration with frontend developers, resulting in a 25%
                performance boost.
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.entry}>
          <div
            className={styles.circle}
            style={{ backgroundColor: "#5ba374" }}
          ></div>
          <div className={styles.content}>
            <h2>Programmers House, Tehran</h2>
            <p>April 2020 - Feb 2022</p>
            <ul>
              <li>
                Applied rigorous Clean Coding standards and Test-Driven
                Development practices, cutting bug reports by 17% and decreasing
                customer-reported issues by 20% within the first quarter of
                implementation.
              </li>
              <li>
                Reduced load times by 10% through designing and developing
                React.js and components for seamless data integration.
              </li>
              <li>
                boosted mobile user engagement by 35% by ensuring mobile
                responsiveness of web applications.
              </li>
              <li>
                Maintained 100% code integrity across multiple projects by
                managing source code versioning with Git.
              </li>
              <li>
                Engineered React Router migration to v6+, Achieved a 15%
                reduction in bundle size and resolved path-matching issues,
                improving overall application performance.
              </li>
              <li>
                Experienced in workflow automation and build processes using
                Gulp,and Webpack to streamline development and improve
                efficiency.
              </li>
              <li>
                Optimized data visualizations using D3.js, enhancing the charts'
                performance by 10%.
              </li>
              <li>
                Developed RESTful API integration within React.js Library and
                NextJS to facilitate seamless data exchange collaborating with
                backend Team.
              </li>
              <li>
                Led successful migration of state managemen, Transitioned from
                Redux Toolkit to React Query, resulting in a 12% increase in
                code maintainability and readability.
              </li>
              <li>
                Utilized Error Boundaries to catch JavaScript errors, preventing
                the entire app from crashing.
              </li>
            </ul>
          </div>
        </div>
      </div>
      </section>
    </div>
  );
};

export default WorkExperience;
