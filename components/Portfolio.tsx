import Image from "next/image";
import { FC } from "react";

const Profile: FC = () => {
  return (
    <div className="container">
      <header className="header">
        <h1 className="logo">Ramzi</h1>
        <nav>
          <ul className="nav-links">
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#works">Works</a>
            </li>
            <li>
              <a href="#talks">Talks</a>
            </li>
          </ul>
        </nav>
        <div className="contact-info">
          <a href="tel:+420732727074">+420 732 727 074</a>
          <a href="#" className="language">
            EN
          </a>
        </div>
      </header>
      <main className="main-content">
        <div className="intro">
          <h2>Hey There</h2>
          <h3>I'm Ramzi</h3>
          <p className="role">Full-Stack Developer</p>
          <p className="experience">6 YEARS EXPERIENCE</p>
        </div>
        <div className="profile-picture">
          <Image src="/profile-pic.png" alt="Ramzi" width={400} height={400} />
        </div>
        <div className="social-links">
          <a href="#" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="#" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </main>
    </div>
  );
};

export default Profile;
