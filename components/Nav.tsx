// components/NavBar.tsx
import { IoCall } from "react-icons/io5";

import styles from "../styles/Nav.module.css";

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.nav}>
        <div className={styles.logo}>
          <a
            href="#nav"
            style={{
              fontFamily: "fantasy",
              fontSize: "2rem",
              fontStyle: "italic",
            }}
          >
            Shayan
          </a>
        </div>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a href="#skills">Services</a>
          </li>
          <li className={styles.navItem}>
            <a href="#experiences">Experiences</a>
          </li>
          <li className={styles.navItem}>
            <a href="#work">Works</a>
          </li>
          <li className={styles.navItem}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className={styles.call}>
          <a href="#">+4017621701815</a> |
          <div>
            <IoCall />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
