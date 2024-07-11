'use client'
import React from 'react';
import styles from '../styles/Contact.module.css';
import { sendEmail } from '@/actions/email';
const ContactForm: React.FC = () => {
  return (
    <div id='contacts' className={styles.contactContainer}>
      <div className={styles.contactInfo}>
        <h2>Contact Me</h2>
        <p>Not sure what you need? I will be happy to listen to you and suggest event ideas you hadn't considered</p>
        <div className={styles.contactDetails}>
          <p><span className={styles.icon}>✉️</span> hdrydeveloper@gmail.com</p>
          <p><span className={styles.icon}>📞</span> Support: (+49) 17621701815</p>
        </div>
      </div>
      <div className={styles.contactForm}>
        <h2>I’d love to hear from you! Let’s get in touch</h2>
        <form action={sendEmail}>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="fullName">Full Name</label>
              <input type="text" id="fullName" name="fullName" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="company">Company</label>
              <input type="text" id="company" name="company" />
            </div>
          </div>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="phoneNumber">Phone Number</label>
              <input type="tel" id="phoneNumber" name="phoneNumber" />
            </div>
          </div>
      
          <div className={styles.formGroup}>
            <label htmlFor="message">Your Message</label>
            <textarea className={styles.textarea} id="message" name="message"></textarea>
          </div>
          <button className={styles.button} type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
