"use client";
import SwipeableTextMobileStepper from "./Project";
import styles from "../styles/Portfolio.module.css";
import { FC } from "react";
import "react-multi-carousel/lib/styles.css";

const Profile: FC = () => {
  return (
    <div id="work" className={styles.container}>
      <div className={styles.info}>
        <h3>MY LATEST WORKS</h3>
        <p>Perfect solution for digital experience</p>
      </div>
      <section>
        <SwipeableTextMobileStepper />
      </section>
    </div>
  );
};

export default Profile;
