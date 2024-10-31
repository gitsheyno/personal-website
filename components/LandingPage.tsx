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
                  Led migration from Options API to Composition API and
                  TypeScrip, improving performance by 15%.
                </li>
                <li>
                  Migrated all KNIME packages to a monorepo ecosystem in
                  collaboration with frontend developers, resulting in a 25%
                  performance boost.
                </li>
                <li>
                  Introduced and maintained 5 reusable components using VueJS
                  and Typescript deployed across all projects to enhance
                  development.
                </li>
                <li>
                  Implemented rigorous testing protocols using Jest for
                  components, attaining 98% code coverage and ensuring system
                  reliability, which led to a 35% decrease in critical bugs.
                </li>
                <li>
                  Restructured 4 KNIME widgets, adding search functionality,
                  abstraction, TypeScript and built a multi-file upload widget
                  from scratch, shared across open-source and business hub
                  platforms, leading to 10% improved system performance and 20%
                  increased data accuracy.
                </li>
                <li>
                  Established a suite of utility functions to eliminate code
                  duplication and enhance component abstraction, achieving an 8%
                  reduction in redundant code and significantly improving
                  maintainability.
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
                  Development practices, cutting bug reports by 17% and
                  decreasing customer-reported issues by 20% within the first
                  quarter of implementation.
                </li>
                <li>
                  Developed 4 websites using Next.js, leveraging its server-side
                  rendering capabilities.
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
                  Leveraged workflow automation and build processes with Gulp,
                  Webpack, and GitHub Actions to streamline development and
                  enhance efficiency.
                </li>
                <li>
                  Utilized GraphQL to optimize resulted in boosting overall web
                  applications performance by 10%.
                </li>
                <li>
                  Developed RESTful API integration within React.js Library and
                  Typescript and NextJS to facilitate seamless data exchange
                  collaborating with backend Team.
                </li>
                <li>
                  Led successful migration of state management, Transitioned
                  from Redux toolkit to Tanstack Query, resulting in a 12%
                  increase in code maintainability and readability.
                </li>
                <li>
                  Collaborated seamlessly alongside cross-functional teams
                  including back-end engineers and design professionals.
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
