import React from "react";
import styles from "./RatingCard.module.css";

const RatingCard = ({ name, desc, image, prof }) => {
  return (
    <article className={styles.article}>
      <p className={styles.tekst}>{desc}</p>
      <div className={styles.profile}>
      
        <img className={styles.image} alt={name} src={image} />
        <div className={styles.userData}>
        <h3 className={styles.name}>{name}</h3>
        <h4 className={styles.prof}>{prof}</h4>
        </div>
      </div>
    </article>
  );
};

export default RatingCard;
