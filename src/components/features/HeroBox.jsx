//  library
import React, { useState, useEffect } from "react";

// styles
import styles from "./HeroBox.module.scss";

// components
import ButtonPrimary from "../common/ButtonPrimary";
import ButtonSecondary from "../common/ButtonSecondary";

const HeroBox = (props) => {
  const { clientWidth } = props;
  const [largeScreen, setLargeScreen] = useState(false);

  useEffect(() => {
    if (clientWidth >= 640) {
      setLargeScreen(true);
    } else {
      setLargeScreen(false);
    }
  }, [clientWidth]);

  return (
    <header className={styles.heroContainer}>
      <div className={styles.heroBackground}>
        <div className={styles.heroContent}>
          <p className={styles.subHeading}>Food App</p>
          <h1 className={styles.heroHeading}>
            Why stay hungry {largeScreen === false ? <br /> : ""} when
            {largeScreen ? <br /> : ""} you can order{" "}
            {largeScreen === false ? <br /> : ""} from Bella Onojie
          </h1>
          <p className={styles.heroText}>
            Download the bella onoje’s {largeScreen === false ? <br /> : ""}{" "}
            food app now on
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
