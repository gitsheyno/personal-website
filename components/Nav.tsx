import HamburgerMenu from "./HamburgerMenu";
import { IoCall } from "react-icons/io5";

import styles from "../styles/Nav.module.css";

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.nav}>
        <div className={styles.logo}>
          <a
            href="#nav"
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
            <a href="#contacts">Contact</a>
          </li>
        </ul>
        <div className={styles.rightIcon}>
        <div className={styles.call}>
          <a href="facetime:14085551234">+4017621701815</a> |
          <div>
            <IoCall />
          </div>
      </div>
      <HamburgerMenu/>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
