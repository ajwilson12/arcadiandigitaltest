//  library
import React from "react";

// styles
import styles from "./HeroBox.module.scss";

// components
import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondary from "./ButtonSecondary";

const HeroBox = () => {
  let test = false;
  return (
    <header className={styles.heroContainer}>
      <div className={styles.heroBackground}>
        <div className={styles.heroContent}>
          <p className={styles.subHeading}>Food App</p>
          <h1 className={styles.heroHeading}>
            Why stay hungry {test === false ? <br /> : ""} when
            {test ? <br /> : ""} you can order {test === false ? <br /> : ""}{" "}
            from Bella Onojie
          </h1>
          <p className={styles.heroText}>
            Download the bella onoje’s {test === false ? <br /> : ""} food app
            now on
          </p>
          <div className={styles.buttonWrapper}>
            <ButtonPrimary text="Playstore" />
            <ButtonSecondary text="App Store" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroBox;
