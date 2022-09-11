// library
import React from "react";

// styles
import styles from "./Footer.module.scss";

// images
import { ReactComponent as Logo } from "../../assets/logos/Bella_Olonje_logo.svg";

//  components
import SocialIcons from "../features/SocialIcons";

// functions
import getWindowDimensions from "../../functions/getWindowDimensions";

const Footer = () => {
  const { width } = getWindowDimensions();
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footerContainer}>
        <div
          className={styles.footerLogo}
          style={width >= 481 ? { display: "block" } : { display: "none" }}
        >
          <Logo />
        </div>
        <div className={styles.iconPlacer}>
          <SocialIcons />
        </div>
        <p
          className={styles.footerText}
          style={width >= 481 ? { display: "block" } : { display: "none" }}
        >
          Copywright 2020 BellaOnojie.com
        </p>
        <p
          className={styles.footerText}
          style={width <= 481 ? { display: "block" } : { display: "none" }}
        >
          We'd love to hear what's on your mind.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
