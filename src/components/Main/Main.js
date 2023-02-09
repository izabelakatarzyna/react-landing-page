import React from "react";
import intro from "../../images/illustration-intro.png";
import styles from "./Main.module.css";
import Button from "../Button/Button";


const Main = () => {
  return (
    <main className={styles.wrapper}>
      <img src={intro} alt="Illustration intro" />
      <h1 className={styles.title}>
        All your files in one secure location,
        <br /> accessible anywhere
      </h1>

      <h3 className={styles.tekst}>
        Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w
        przemyśle poligraficznym. <br /> Został po raz pierwszy użyty w XV w.
        przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć
        wieków później zaczął być używany przemyśle elektronicznym, pozostając
        praktycznie niezmienionym. Spopularyzował się w latach 60.
      </h3>
      <Button />
    </main>
  );
};

export default Main;
