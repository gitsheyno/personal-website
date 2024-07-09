import styles from "../styles/Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h2>Contact Me</h2>
      <p>Email: hdrydeveloper@gmail.com</p>
      <p>Phone: +49 17621701815</p>
      <p>Location: Berlin, Germany</p>
      <p>
        <a
          href="https://www.linkedin.com/in/shayan-heidary/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>{" "}
        |
        <a
          href="https://github.com/gitsheyno"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </p>
    </div>
  );
};

export default Contact;
