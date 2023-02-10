import React from "react";
import Image3 from "../../images/illustration-stay-productive.png";
import Image2 from "../../images/favicon-32x32.png";
import styles from "./NewComponent.module.css";


const NewComponent = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.image} src={Image3} alt="Stay productive" />
      <div className={styles.content}>
        <h1 className={styles.title}>Stay productive, wherever you are </h1>
        <p className={styles.tekst}>
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit...
        </p>
        <p className={styles.tekst}>
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit...
        </p>
        <div className={styles.show}>
        <p className={styles.tekst}>See how Fylo works</p>
        <img className={styles.icon} src={Image2} alt="See how Fylo works"/>
        </div>
      </div>
    </div>
  );
};

export default NewComponent;
