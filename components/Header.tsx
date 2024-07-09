// components/HomeHeader.tsx

import styles from "../styles/Header.module.css";

const HomeHeader = () => {
  return (
    <div id="nav" className={styles.headerContainer}>
      <header className={styles.header}>
        <h1 className={styles.title}>Hey There I'm Ramzi</h1>
        <p className={styles.subtitle}>Express.Js Lover</p>
        <p className={styles.experience}>6 Years Experience</p>
        <p className={styles.description}>
          A seasoned developer with expertise in both frontend and backend
          technologies.
        </p>
      </header>
    </div>
  );
};

export default HomeHeader;
