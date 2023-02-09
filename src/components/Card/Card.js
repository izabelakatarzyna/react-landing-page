import React from "react";
import styles from "./Card.module.css";

const Card = ({ image, title, desc }) => {
  return (
    <div className={styles.wrapper}>
    <article className={styles.article}>
      <img className={styles.icons} alt={title} src={image} />
      <h3>{title}</h3>
      <p className={styles.tekst}>{desc}</p>
    </article>
    </div>
  );
};

export default Card;
