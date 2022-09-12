// library
import React from "react";

// styles
import styles from "./SplashImage.module.scss";

// components
import ButtonAlt from "./ButtonAlt";

const SplashImage = (props) => {
  const largeScreenText =
    "Available on your favorite store. Start your premium experience now.";
  const smallScreenText = "Most calendars are designed for teams.";
  const largeScreenButton1Text = "Playstore";
  const smallScreenButton1Text = "Buy Now";
  const largeScreenButton2Text = "App Store";
  const smallScreenButton2Text = "Try for free";

  return (
    <section className={styles.splashWrapper}>
      <div className={styles.splashBackground}>
        <div className={styles.splashContent}>
          <div className={styles.splashTextFlex}>
            <h2 className={styles.splashSubHeading}>Download the app now.</h2>
            <p className={styles.splashText}>
              {props.clientWidth >= 769
                ? `${largeScreenText}`
                : `${smallScreenText}`}
            </p>
          </div>
          <div className={styles.buttonWrapper}>
            <ButtonAlt
              text={
                props.clientWidth >= 769
                  ? `${largeScreenButton1Text}`
                  : `${smallScreenButton1Text}`
              }
              fill="true"
            />
            <ButtonAlt
              text={
                props.clientWidth >= 769
                  ? `${largeScreenButton2Text}`
                  : `${smallScreenButton2Text}`
              }
              fill="false"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplashImage;
