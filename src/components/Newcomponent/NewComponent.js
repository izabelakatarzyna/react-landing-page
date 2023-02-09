import React from "react";
import Image3 from "../../images/illustration-stay-productive.png";
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
      </div>
    </div>
  );
};

export default NewComponent;
