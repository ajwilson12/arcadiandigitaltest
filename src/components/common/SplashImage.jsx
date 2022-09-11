// library
import React from "react";

// styles
import styles from "./SplashImage.module.scss";

// components
import ButtonPrimary from "./ButtonPrimary";

// functions
// functions
import getWindowDimensions from "../../functions/getWindowDimensions";

// images
import Image from "../../assets/img/splashImg.png";

const SplashImage = () => {
  const { width } = getWindowDimensions();

  const largeScreenText =
    "Available on your favorite store. Start your premium experience now.";
  const smallScreenText = "Most calendars are designed for teams.";

  return (
    <section className={styles.splashWrapper}>
      <div className={styles.splashBackground}>
        <div className={styles.splashContent}>
          <div className={styles.splashTextFlex}>
            <h2 className={styles.splashSubHeading}>Download the app now.</h2>
            <p className={styles.splashText}>
              {width >= 769 ? `${largeScreenText}` : `${smallScreenText}`}
            </p>
          </div>
          <div className={styles.buttonWrapper}>
            <ButtonPrimary
              text="Playstore"
              color="$brand-color"
              showBorder="false"
              borderRadius="10px"
            />
            <ButtonPrimary
              text="App Store"
              color="transparent"
              showBorder="true"
              borderRadius="10px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplashImage;
