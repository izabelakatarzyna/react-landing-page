import React from "react";
import styles from "./Footer.module.css";
import logo from "../../images/logo.svg";
import emailIcon from "../../images/icon-email.svg";
import phoneIcon from "../../images/icon-phone.svg";

const Footer = () => {
  return (
    <div>
      <img className={styles.logo} src={logo} alt="Company logo" />
      <article className={styles.container}>
        <div className={styles.tekst}>
          <p>
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit... Neque porro quisquam est qui dolorem
            ipsum quia dolor sit amet, consectetur, adipisci velit...
          </p>
        </div>
        <div className={styles.contact}>
          <div className={styles.contactLine}>
            <img src={emailIcon} alt="Email" />
            <p className={styles.tekst}>example@fylo.com</p>
          </div>
          <div className={styles.contactLine}>
            <img src={phoneIcon} alt="Phone" />
            <p className={styles.tekst}>+1-543-123-4567</p>
          </div>
        </div>

        <div className={styles.links}>
          <div>
            <p>About Us</p>
            <p>Jobs</p>
            <p>Press</p>
          </div>
          <div>
            <p>Contact Us</p>
            <p>Terms</p>
            <p>Pivacy</p>
          </div>
        </div>

        <div>icons</div>
      </article>
    </div>
  );
};

export default Footer;
