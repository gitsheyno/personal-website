import styles from "../styles/Home.module.css";
import SkillsTabs from "./Skills";
import Image from "next/image";
import NavBar from "./Nav";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import image from "../public/shayan1.png";
export default function M() {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.parent}>
        <main id="nav" className={styles.main}>
          <section className={styles.heroSection}>
            <section className={styles.profile}>
              {/* <Image className={styles.img} src={image} alt="profile-pic" width={300} height={100}/> */}
            </section>
            <section>
              <h1 className={styles.title}>
                Hey There
                <br />
                I'm Shayan
              </h1>
              <p className={styles.subtitle}>Express.Js Lover</p>
            </section>
            <section>
              <h1 className={styles.info}>
                A seasoned developer with expertise in both frontend and backend
                technologies
              </h1>
            </section>
            <section>
              <div className={styles.experience}>
                <p>3</p>
                <p>
                  YEARS
                  <br />
                  EXPERIENCE
                </p>
              </div>
            </section>
            <section>
              <div className={styles.social}>
                <div>
                  <FaGithub />
                </div>
                <div>
                  <FaLinkedin />
                </div>
              </div>
            </section>
          </section>

          <section id="skills" className={styles.skillsSection}>
            <SkillsTabs />
          </section>
        </main>
      </div>
    </div>
  );
}
