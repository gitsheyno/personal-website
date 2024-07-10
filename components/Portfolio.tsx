import styles from "../styles/Portfolio.module.css"
import { FC } from "react";

const Profile: FC = () => {
  return (
    <div id="work" className={styles.container}>
     <section>
<div className={styles.info}>
<h3>MY LATEST WORKS</h3>
      <p>Perfect solution for digital experience</p>
</div>
      <div className={styles.cards}>
        <div className={styles.card}>
        <a href="#">
          KNIME
        </a>
        <div></div>
        </div>
        <div className={styles.card}>
          <a href="#">
            Wagon
          </a>
          <div></div>
        </div>
        <div className={styles.card}>
          <a href="#">Low Calories</a>
          <div></div>
        </div>
      </div>
     </section>
    </div>
  );
};

export default Profile;
